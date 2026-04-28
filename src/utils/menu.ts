// src/utils/menu.ts
import type { RouteRecordRaw } from 'vue-router'
import type { MenuOption } from 'naive-ui'
import { h } from 'vue'
import { NIcon } from 'naive-ui'

/**
 * 根据路由生成菜单选项
 */
export function generateMenuOptions(routes: RouteRecordRaw[]): MenuOption[] {
  const menuOptions: MenuOption[] = []

  routes.forEach(route => {
    // 跳过不需要显示在菜单中的路由
    if (route.meta?.hidden) return

    const menuItem: MenuOption = {
      label: (route.meta?.title as string) || route.name,
      key: route.name as string,
      icon: route.meta?.icon ? renderIcon(route.meta.icon) : undefined,
    }

    // 处理子路由
    if (route.children && route.children.length > 0) {
      menuItem.children = generateMenuOptions(route.children)
    }

    menuOptions.push(menuItem)
  })

  return menuOptions
}

/**
 * 渲染图标
 */
function renderIcon(icon: any) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

/**
 * 生成面包屑
 */
export function generateBreadcrumbs(matched: RouteRecordRaw[]) {
  return matched.filter(route => route.meta?.title)
}
