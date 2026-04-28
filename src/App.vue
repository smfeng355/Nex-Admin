<!-- src/App.vue -->
<template>
  <div class="app-root">
    <AppProvider>
      <router-view />
    </AppProvider>
  </div>
</template>

<script setup lang="ts">
import AppProvider from '@/components/AppProvider.vue'
</script>

<style>
.app-root {
  width: 100%;
  height: 100%;
}

/* 让 Naive UI 的 config provider 也占满全屏 */
.n-config-provider {
  width: 100%;
  height: 100%;
}
</style>
