<template>
  <div id="fullscreen" class="mr-16 cursor-pointer" @click="toggle">
    <Icon v-if="isFullscreen" icon="mdi:fullscreen-exit" :width="20" :height="20" />
    <Icon v-else icon="mdi:fullscreen" :width="20" :height="20" />
  </div>
</template>

<script setup lang="ts">
import { useFullscreen } from '@vueuse/core'
import { Icon } from '@iconify/vue'

const { isFullscreen, toggle } = useFullscreen()
</script>
