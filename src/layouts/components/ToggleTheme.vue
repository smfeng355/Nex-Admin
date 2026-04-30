<!--
 * @Author: ayunu ayunu@qq.com
 * @Date: 2026-04-29 16:02:50
 * @LastEditors: ayunu ayunu@qq.com
 * @LastEditTime: 2026-04-30 17:04:00
 * @FilePath: \admin\src\layouts\components\ToggleTheme.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="toggleTheme" class="mr-12 cursor-pointer" @click="toggleDark">
    <Icon v-if="isDark" icon="mdi:weather-night" :width="20" :height="20" />
    <Icon v-else icon="mdi:weather-sunny" :width="20" :height="20" />
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { useAppStore } from '@/stores/app'
import { Icon } from '@iconify/vue'

const appStore = useAppStore()
const isDark = useDark()

function toggleDark() {
  function handler() {
    const newTheme = isDark.value ? 'light' : 'dark'
    appStore.setTheme(newTheme)
    useToggle(isDark)()
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  if (!document.startViewTransition) {
    return handler()
  }

  // 白到黑：从左下到右上
  const lightToDark = [
    `circle(0px at 0px ${window.innerHeight}px)`,
    `circle(${Math.hypot(window.innerWidth, window.innerHeight)}px at 0px ${window.innerHeight}px)`,
  ]

  // 黑到白：从右上到左下
  const darkToLight = [
    `circle(0px at ${window.innerWidth}px 0px)`,
    `circle(${Math.hypot(window.innerWidth, window.innerHeight)}px at ${window.innerWidth}px 0px)`,
  ]

  document.startViewTransition(handler).ready.then(() => {
    const clipPath = isDark.value ? lightToDark : darkToLight

    document.documentElement.animate(
      { clipPath: clipPath },
      {
        duration: 500,
        easing: 'ease-in-out',
        pseudoElement: `::view-transition-new(root)`,
      }
    )
  })
}
</script>
