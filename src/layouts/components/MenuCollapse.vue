<!--
 * @Author: ayunu ayunu@qq.com
 * @Date: 2026-04-29 02:14:53
 * @LastEditors: ayunu ayunu@qq.com
 * @LastEditTime: 2026-04-29 02:52:05
 * @FilePath: \admin\src\layouts\components\MenuCollapse.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div
    id="menu-collapse"
    class="menu-collapse-btn"
    @click="appStore.toggleCollapsed"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <span v-if="appStore.collapsed" class="i-carbon:menu w-20px h-20px" />
    <span v-else class="i-carbon:side-panel-close w-20px h-20px" />
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()

function handleMouseEnter(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  if (target) {
    target.style.backgroundColor = 'var(--primary-color-light)'
  }
}

function handleMouseLeave(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  if (target) {
    target.style.backgroundColor = 'transparent'
  }
}
</script>

<style lang="scss">
.menu-collapse-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 4px;
  cursor: pointer;
  border-radius: 4px;
  transition: all 300ms;
  color: var(--text-color-regular);
}
</style>
