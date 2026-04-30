<!--
 * @Author: ayunu ayunu@qq.com
 * @Date: 2026-04-29 02:16:37
 * @LastEditors: ayunu ayunu@qq.com
 * @LastEditTime: 2026-04-29 21:10:56
 * @FilePath: \admin\src\layouts\components\BreadCrumb.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <n-breadcrumb>
    <n-breadcrumb-item
      v-for="(item, index) of breadItems"
      :key="item.name"
      :clickable="!!item.path"
      @click="handleItemClick(item)"
    >
      <n-dropdown
        :options="index < breadItems.length - 1 ? getDropOptions(item.children) : []"
        @select="handleDropSelect"
      >
        <div class="flex items-center">
          <Icon v-if="item.icon" :icon="getIconName(item.icon)" class="mr-8" :width="16" :height="16" />
          {{ item.title }}
        </div>
      </n-dropdown>
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>

<script setup lang="ts">
import { computed, h } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { MenuOption } from 'naive-ui'
import { Icon } from '@iconify/vue'

const router = useRouter()
const route = useRoute()

interface BreadItem {
  name: string
  title: string
  path?: string
  icon?: string
  children?: BreadItem[]
}

// 获取图标名称（去掉 i- 前缀）
function getIconName(icon: string): string {
  return icon.replace(/^i-/, '')
}

// 使用 route.matched 构建面包屑
const breadItems = computed<BreadItem[]>(() => {
  return route.matched
    .filter(item => item.meta?.menu !== false && item.meta?.title)
    .map(item => ({
      name: item.name as string,
      title: (item.meta?.title as string) || '',
      path: item.path,
      icon: item.meta?.icon as string,
      children: item.children?.map(child => ({
        name: child.name as string,
        title: (child.meta?.title as string) || '',
        path: child.path,
        icon: child.meta?.icon as string,
      })),
    }))
})

// 点击面包屑项
function handleItemClick(item: BreadItem) {
  if (item.path && item.name !== route.name) {
    router.push({ name: item.name })
  }
}

// 获取下拉选项
function getDropOptions(children: BreadItem[] = []): MenuOption[] {
  return children
    .filter(item => item.path)
    .map(child => ({
      label: child.title,
      key: child.name,
      icon: child.icon
        ? () =>
            h(Icon, {
              icon: getIconName(child.icon!),
              width: 16,
              height: 16,
            })
        : undefined,
    }))
}

// 下拉选择
function handleDropSelect(key: string) {
  if (key && key !== route.name) {
    router.push({ name: key })
  }
}
</script>
