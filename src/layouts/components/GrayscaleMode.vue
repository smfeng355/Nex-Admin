<!--
 * @Author: ayunu ayunu@qq.com
 * @Date: 2026-04-30 00:59:18
 * @LastEditors: ayunu ayunu@qq.com
 * @LastEditTime: 2026-04-30 17:21:26
 * @FilePath: \admin\src\layouts\components\GrayscaleMode.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="grayscale-toggle" @click="toggleGrayscale">
    <n-tooltip trigger="hover" placement="bottom">
      <template #trigger>
        <IconComponent :icon="appStore.grayscale ? 'mdi:eye-off' : 'mdi:eye'" :size="20" />
      </template>
      {{ appStore.grayscale ? '关闭置灰模式' : '开启置灰模式' }}
    </n-tooltip>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import IconComponent from '@/components/Icon.vue'

const appStore = useAppStore()

function toggleGrayscale() {
  appStore.setGrayscale(!appStore.grayscale)
}
</script>

<style scoped>
.grayscale-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 4px;
  margin-right: 8px;
  border-radius: 4px;
  transition: all 0.3s ease;
  color: var(--text-color-regular);
}

.grayscale-toggle:hover {
  background-color: var(--primary-color-light);
}
</style>
