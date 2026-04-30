<!--
 * @Author: ayunu ayunu@qq.com
 * @Date: 2026-04-28 20:14:52
 * @LastEditors: ayunu ayunu@qq.com
 * @LastEditTime: 2026-04-29 22:17:08
 * @FilePath: \admin\src\layouts\components\SideLogo.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <router-link
    class="h-60 flex-shrink-0 flex items-center justify-center"
    :style="{ borderBottom: `1px solid var(--border-color)` }"
    to="/"
  >
    <Logo />
    <h2
      v-show="!collapsed"
      class="max-w-140 flex-shrink-0 text-16 color-primary font-bold"
      style="color: var(--primary-color)"
    >
      {{ title }}
    </h2>
    <!-- 如果不用图标请放开短标题，同时注释掉或者删除<Logo /> -->
    <!-- <h2 v-show="collapsed" class="flex-shrink-0 text-16 color-primary font-bold" style="color: var(--primary-color)">
      {{ shortTitle }}
    </h2> -->
  </router-link>
</template>

<script setup lang="ts">
import Logo from './Logo.vue'

defineProps<{
  collapsed: boolean
}>()

const title = import.meta.env.VITE_APP_TITLE || 'Nex-Admin'
const shortTitle = title.substring(0, 3) || 'Nex'
</script>
