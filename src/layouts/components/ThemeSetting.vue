<template>
  <div class="theme-setting-wrapper">
    <n-tooltip trigger="hover" placement="bottom">
      <template #trigger>
        <div class="theme-color-picker">
          <n-color-picker
            :value="appStore.primaryColor"
            :swatches="primaryColors"
            :on-update:value="(v: string) => appStore.setPrimaryColor(v)"
            :render-label="() => ''"
          />
        </div>
      </template>
      设置主题色
    </n-tooltip>
  </div>
</template>

<script setup lang="ts">
import { getPresetColors } from '@arco-design/color'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()

const primaryColors = Object.entries(getPresetColors()).map(([, value]) => value.primary)
</script>

<style scoped>
.theme-setting-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 8px;
}

.theme-color-picker {
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
