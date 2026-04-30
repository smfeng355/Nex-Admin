<template>
  <footer class="footer">
    Copyright © {{ currentYear }}
    <a href="https://github.com/zclzone" target="_blank" class="ml-10"> Ronnie Zhang(大脸怪) </a>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  font-size: 14px;
  color: var(--text-color-secondary);
  border-top: 1px solid var(--border-color);
  background-color: var(--bg-color);
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}
</style>
