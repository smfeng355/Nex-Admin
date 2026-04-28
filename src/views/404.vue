<!-- src/views/error/404.vue -->
<template>
  <div class="h-screen flex items-center justify-center">
    <n-result status="404" title="404 找不到页面" description="你访问的页面不存在或已被移除">
      <template #footer>
        <n-button type="primary" @click="router.push('/')"> 返回首页 </n-button>
        <n-button ml-2 @click="router.back()"> 返回上页 </n-button>
      </template>
    </n-result>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
