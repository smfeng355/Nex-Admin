<template>
  <header class="h-60 flex-shrink-0 flex items-center px-12 border-b">
    <div class="flex items-center gap-16">
      <MenuCollapse />
      <BreadCrumb />
    </div>
  </header>
</template>

<script setup lang="ts">
import MenuCollapse from './MenuCollapse.vue'
import BreadCrumb from './BreadCrumb.vue'
</script>
