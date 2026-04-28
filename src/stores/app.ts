// src/stores/app.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  // 侧边栏状态
  const collapsed = ref(false)

  // 主题模式
  const theme = ref<'light' | 'dark'>('light')

  // 标签页列表
  const tabs = ref<
    Array<{
      path: string
      title: string
    }>
  >([])

  // 切换侧边栏
  function toggleCollapsed() {
    collapsed.value = !collapsed.value
  }

  // 设置主题
  function setTheme(newTheme: 'light' | 'dark') {
    theme.value = newTheme
  }

  return {
    collapsed,
    theme,
    tabs,
    toggleCollapsed,
    setTheme,
  }
})
