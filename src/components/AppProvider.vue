<!-- src/components/AppProvider.vue -->
<template>
  <n-config-provider :theme="theme" :theme-overrides="themeOverrides" :locale="zhCN" :date-locale="dateZhCN">
    <n-message-provider :max="3" placement="top">
      <n-notification-provider :max="3" placement="top-right">
        <n-dialog-provider>
          <n-loading-bar-provider>
            <slot />
          </n-loading-bar-provider>
        </n-dialog-provider>
      </n-notification-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { zhCN, dateZhCN, darkTheme } from 'naive-ui'
import { useAppStore } from '@/stores/app'
import { darkThemeOverrides } from '@/config/theme'

const appStore = useAppStore()

const theme = computed(() => (appStore.theme === 'dark' ? darkTheme : null))

// 主题覆盖配置（响应式）
const themeOverrides = ref({
  common: {
    primaryColor: appStore.primaryColor,
    primaryColorHover: appStore.primaryColor + 'DD',
    primaryColorPressed: appStore.primaryColor + 'FF',
    primaryColorSuppl: appStore.primaryColor,
  },
})

// 监听主题色变化
watch(
  () => appStore.primaryColor,
  newColor => {
    themeOverrides.value = {
      common: {
        primaryColor: newColor,
        primaryColorHover: newColor + 'DD',
        primaryColorPressed: newColor + 'FF',
        primaryColorSuppl: newColor,
      },
    }
  },
  { immediate: true }
)

// 监听主题模式变化（亮色/暗色）
watch(
  () => appStore.theme,
  () => {
    themeOverrides.value = {
      common: {
        primaryColor: appStore.primaryColor,
        primaryColorHover: appStore.primaryColor + 'DD',
        primaryColorPressed: appStore.primaryColor + 'FF',
        primaryColorSuppl: appStore.primaryColor,
      },
      ...(appStore.theme === 'dark' ? darkThemeOverrides : {}),
    }
  }
)
</script>
