<!--
 * @Author: ayunu ayunu@qq.com
 * @Date: 2026-04-28 19:48:55
 * @LastEditors: ayunu ayunu@qq.com
 * @LastEditTime: 2026-04-30 17:01:31
 * @FilePath: \admin\src\components\AppProvider.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
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
import type { GlobalThemeOverrides } from 'naive-ui'
import { useAppStore } from '@/stores/app'
import { darkThemeOverrides } from '@/config/theme'

const appStore = useAppStore()

const theme = computed(() => (appStore.theme === 'dark' ? darkTheme : null))

// 主题覆盖配置（响应式）
const themeOverrides = ref<GlobalThemeOverrides>({
  common: {
    primaryColor: appStore.primaryColor,
    primaryColorHover: appStore.primaryColor,
    primaryColorPressed: appStore.primaryColor,
    primaryColorSuppl: appStore.primaryColor,
  },
})

// 监听主题色变化
watch(
  () => appStore.primaryColor,
  newColor => {
    themeOverrides.value = {
      common: {
        primaryColor: newColor || '#316c72',
        primaryColorHover: newColor || '#316c72',
        primaryColorPressed: newColor || '#316c72',
        primaryColorSuppl: newColor || '#316c72',
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
        primaryColorHover: appStore.primaryColor,
        primaryColorPressed: appStore.primaryColor,
        primaryColorSuppl: appStore.primaryColor,
      },
      ...(appStore.theme === 'dark' ? darkThemeOverrides : {}),
    }
  }
)
</script>
