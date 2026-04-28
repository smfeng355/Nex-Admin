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
import { computed } from 'vue'
import { zhCN, dateZhCN, darkTheme } from 'naive-ui'
import { useAppStore } from '@/stores/app'
import { themeOverrides as baseThemeOverrides, darkThemeOverrides } from '@/config/theme'

const appStore = useAppStore()

const theme = computed(() => (appStore.theme === 'dark' ? darkTheme : null))

const themeOverrides = computed(() => ({
  ...baseThemeOverrides,
  ...(appStore.theme === 'dark' ? darkThemeOverrides : {}),
}))
</script>
