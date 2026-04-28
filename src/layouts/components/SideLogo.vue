<template>
  <router-link class="h-60 flex-center border-b" to="/">
    <Logo />
    <h2
      v-show="!collapsed"
      class="ml-10 max-w-140 flex-shrink-0 text-16 color-primary font-bold"
      style="color: var(--primary-color)"
    >
      {{ title }}
    </h2>
  </router-link>
</template>

<script setup lang="ts">
import Logo from './Logo.vue'

defineProps<{
  collapsed: boolean
}>()

const title = import.meta.env.VITE_APP_TITLE || 'Nex-Admin'
</script>
