<!--
 * @Author: ayunu ayunu@qq.com
 * @Date: 2026-04-28 20:15:04
 * @LastEditors: ayunu ayunu@qq.com
 * @LastEditTime: 2026-04-30 17:19:37
 * @FilePath: \admin\src\layouts\components\SideMenu.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <n-menu
    ref="menuRef"
    class="side-menu"
    accordion
    :indent="18"
    :collapsed-icon-size="20"
    :collapsed-width="64"
    :collapsed="appStore.collapsed"
    :options="menuOptions"
    :value="activeKey"
    @update:value="handleMenuSelect"
  />
</template>

<script setup lang="ts">
import { computed, ref, watch, h, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { MenuOption } from 'naive-ui'
import { useAppStore } from '@/stores/app'
import { Icon as IconifyIcon } from '@iconify/vue'

const route = useRoute()
const router = useRouter()
const appStore = useAppStore()

const menuRef = ref()

// 当前激活的菜单 key
const activeKey = computed(() => route.name as string)

// 路由变化时自动展开父菜单
watch(
  () => route.path,
  async () => {
    await nextTick()
    menuRef.value?.showOption()
  }
)

// 渲染图标 - 使用 @iconify/vue
function renderIcon(icon?: string) {
  if (!icon) return undefined
  return () => {
    // 去掉 i- 前缀，转换为 Iconify 格式
    const iconName = icon.replace(/^i-/, '')
    return h(IconifyIcon, {
      icon: iconName,
      width: 18,
      height: 18,
      'aria-hidden': 'true',
    })
  }
}

// 生成菜单选项
const menuOptions = computed<MenuOption[]>(() => {
  const routes = router.getRoutes()
  const menuMap = new Map<string, MenuOption>()
  const childrenMap = new Map<string, MenuOption[]>()

  routes.forEach(route => {
    if (route.meta?.menu !== false && route.name && route.path !== '*' && route.path !== '/') {
      const parentKey = route.meta?.parentKey as string | undefined
      const icon = route.meta?.icon as string | undefined
      const title = (route.meta?.title as string) || String(route.name)

      const menuItem: MenuOption = {
        key: route.name as string,
        label: title,
        icon: renderIcon(icon),
      }

      if (parentKey) {
        if (!childrenMap.has(parentKey)) {
          childrenMap.set(parentKey, [])
        }
        childrenMap.get(parentKey)!.push(menuItem)
      } else {
        menuMap.set(route.name as string, menuItem)
      }
    }
  })

  menuMap.forEach((menu, key) => {
    const children = childrenMap.get(key)
    if (children && children.length > 0) {
      menu.children = children
    }
  })

  return Array.from(menuMap.values())
})

// 菜单点击事件 - 直接通过 key 跳转
function handleMenuSelect(key: string) {
  router.push({ name: key })
}
</script>

<style lang="scss">
// 侧边栏菜单样式已抽离到 @/styles/layouts/sidebar.scss
</style>
