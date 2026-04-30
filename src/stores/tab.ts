import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { RouteLocationNormalizedLoaded } from 'vue-router'

export interface TabItem {
  path: string
  title: string
  name: string
  icon?: string
}

const STORAGE_KEY = 'admin-tabs'
const MAX_TABS = 15 // 最大标签数量

export const useTabStore = defineStore('tab', () => {
  const cachedTabs = localStorage.getItem(STORAGE_KEY)
  const tabs = ref<TabItem[]>(cachedTabs ? JSON.parse(cachedTabs) : [])
  const activeTab = ref('')

  function saveTabs() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tabs.value))
  }

  function addTab(route: RouteLocationNormalizedLoaded) {
    const { name, path, meta } = route
    if (!name || !meta?.menu) return

    const tab: TabItem = {
      path,
      title: (meta.title as string) || name,
      name: name as string,
      icon: (meta.icon as string) || '',
    }

    const existIndex = tabs.value.findIndex(v => v.path === path)
    if (existIndex === -1) {
      // 如果标签数量超过限制，移除最早的标签
      if (tabs.value.length >= MAX_TABS) {
        tabs.value.shift()
      }
      tabs.value.push(tab)
      saveTabs()
    }

    activeTab.value = path
  }

  function setActiveTab(path: string) {
    activeTab.value = path
  }

  function removeTab(path: string) {
    const index = tabs.value.findIndex(v => v.path === path)
    tabs.value.splice(index, 1)
    saveTabs()

    if (activeTab.value === path && tabs.value.length > 0) {
      const nextTab = tabs.value[Math.max(0, index - 1)]
      activeTab.value = nextTab.path
    }
  }

  function removeAll() {
    tabs.value = []
    activeTab.value = ''
    saveTabs()
  }

  function removeOther(path: string) {
    tabs.value = tabs.value.filter(tab => tab.path === path)
    activeTab.value = path
    saveTabs()
  }

  function removeLeft(path: string) {
    const index = tabs.value.findIndex(tab => tab.path === path)
    tabs.value = tabs.value.slice(index)
    if (!tabs.value.find(tab => tab.path === activeTab.value)) {
      activeTab.value = path
    }
    saveTabs()
  }

  function removeRight(path: string) {
    const index = tabs.value.findIndex(tab => tab.path === path)
    tabs.value = tabs.value.slice(0, index + 1)
    if (!tabs.value.find(tab => tab.path === activeTab.value)) {
      activeTab.value = path
    }
    saveTabs()
  }

  function reloadTab(path: string, keepAlive?: boolean) {
    // 这里可以实现页面重新加载的逻辑
    // 如果需要 keep-alive，需要先移除缓存再重新添加
    if (keepAlive) {
      // TODO: 实现 keep-alive 缓存清理
    }
    // 触发路由刷新
    window.location.reload()
  }

  return {
    tabs,
    activeTab,
    addTab,
    setActiveTab,
    removeTab,
    removeAll,
    removeOther,
    removeLeft,
    removeRight,
    reloadTab,
  }
})
