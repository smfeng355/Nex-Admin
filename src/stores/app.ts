/*
 * @Author: ayunu ayunu@qq.com
 * @Date: 2026-04-28 18:14:15
 * @LastEditors: ayunu ayunu@qq.com
 * @LastEditTime: 2026-04-30 01:15:51
 * @FilePath: \admin\src\stores\app.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia'
import { ref } from 'vue'

const STORAGE_KEY_COLLAPSED = 'admin-collapsed'
const STORAGE_KEY_PRIMARY_COLOR = 'admin-primary-color'
const STORAGE_KEY_THEME = 'admin-theme'
const STORAGE_KEY_GRAYSCALE = 'admin-grayscale'

export const useAppStore = defineStore('app', () => {
  // 侧边栏折叠状态
  const cachedCollapsed = localStorage.getItem(STORAGE_KEY_COLLAPSED)
  const collapsed = ref(cachedCollapsed === 'true')

  // 主题模式（黑白切换）
  const cachedTheme = localStorage.getItem(STORAGE_KEY_THEME) as 'light' | 'dark' | null
  const theme = ref<'light' | 'dark'>(cachedTheme || 'light')

  // 主题色
  const cachedPrimaryColor = localStorage.getItem(STORAGE_KEY_PRIMARY_COLOR)
  const primaryColor = ref(cachedPrimaryColor || '#316c72')

  // 置灰模式
  const cachedGrayscale = localStorage.getItem(STORAGE_KEY_GRAYSCALE) === 'true'
  const grayscale = ref(cachedGrayscale)

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
    localStorage.setItem(STORAGE_KEY_COLLAPSED, String(collapsed.value))
  }

  // 设置主题（黑白切换）
  function setTheme(newTheme: 'light' | 'dark') {
    theme.value = newTheme
    localStorage.setItem(STORAGE_KEY_THEME, newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  // 设置主题色
  function setPrimaryColor(color: string) {
    primaryColor.value = color
    localStorage.setItem(STORAGE_KEY_PRIMARY_COLOR, color)
    document.documentElement.style.setProperty('--primary-base-color', color)
  }

  // 设置置灰模式
  function setGrayscale(value: boolean) {
    grayscale.value = value
    localStorage.setItem(STORAGE_KEY_GRAYSCALE, String(value))
    document.documentElement.classList.toggle('grayscale-mode', value)
  }

  // 初始化主题
  function initTheme() {
    if (cachedTheme) {
      document.documentElement.setAttribute('data-theme', cachedTheme)
    }
    if (cachedPrimaryColor) {
      document.documentElement.style.setProperty('--primary-base-color', cachedPrimaryColor)
    }
    if (cachedGrayscale) {
      document.documentElement.classList.add('grayscale-mode')
    }
  }

  // 初始化时执行
  initTheme()

  return {
    collapsed,
    theme,
    primaryColor,
    grayscale,
    tabs,
    toggleCollapsed,
    setTheme,
    setPrimaryColor,
    setGrayscale,
  }
})
