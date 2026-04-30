<template>
  <div class="grayscale-toggle" @click="toggleGrayscale">
    <n-tooltip trigger="hover" placement="bottom">
      <template #trigger>
        <Icon :icon="appStore.grayscale ? 'mdi:eye-off' : 'mdi:eye'" :width="20" :height="20" />
      </template>
      {{ appStore.grayscale ? '关闭置灰模式' : '开启置灰模式' }}
    </n-tooltip>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useAppStore } from '@/stores/app'

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
