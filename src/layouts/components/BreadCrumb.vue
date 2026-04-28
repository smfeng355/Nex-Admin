<template>
  <n-breadcrumb>
    <n-breadcrumb-item v-if="!breadItems?.length" :clickable="false">
      {{ route.meta.title }}
    </n-breadcrumb-item>
    <n-breadcrumb-item
      v-for="(item, index) of breadItems"
      v-else
      :key="item.name"
      :clickable="!!item.path"
      @click="handleItemClick(item)"
    >
      <n-dropdown
        :options="index < breadItems.length - 1 ? getDropOptions(item.children) : []"
        @select="handleDropSelect"
      >
        <div class="flex items-center">
          <span v-if="item.icon" :class="item.icon" class="mr-8" />
          {{ item.title }}
        </div>
      </n-dropdown>
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { MenuOption } from 'naive-ui'
import { h } from 'vue'

const router = useRouter()
const route = useRoute()

interface BreadItem {
  name: string
  title: string
  path?: string
  icon?: string
  children?: BreadItem[]
}

const breadItems = ref<BreadItem[]>([])

// 监听路由变化，生成面包屑
watch(
  () => route.name,
  () => {
    const result = findBreadCrumbs(router.getRoutes(), route.name as string)
    breadItems.value = result || []
  },
  { immediate: true }
)

// 查找面包屑路径
function findBreadCrumbs(routes: any[], targetName: string, parents: BreadItem[] = []): BreadItem[] | null {
  for (const route of routes) {
    if (route.name === targetName) {
      return [
        ...parents,
        {
          name: route.name as string,
          title: (route.meta?.title as string) || '',
          path: route.path,
          icon: route.meta?.icon as string,
        },
      ]
    }
    if (route.children?.length) {
      const found = findBreadCrumbs(route.children, targetName, [
        ...parents,
        {
          name: route.name as string,
          title: (route.meta?.title as string) || '',
          path: route.path !== '/' ? route.path : undefined,
          icon: route.meta?.icon as string,
          children: route.children,
        },
      ])
      if (found) return found
    }
  }
  return null
}

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
      icon: child.icon ? () => h('span', { class: child.icon }) : undefined,
    }))
}

// 下拉选择
function handleDropSelect(key: string) {
  if (key && key !== route.name) {
    router.push({ name: key })
  }
}
</script>
