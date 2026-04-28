<template>
  <div class="p-4">
    <n-h2>仪表盘</n-h2>
    <n-grid :cols="4" :x-gap="16" :y-gap="16">
      <n-grid-item v-for="item in stats" :key="item.title">
        <n-card :title="item.title" size="small">
          <n-statistic :value="item.value" />
        </n-card>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script setup lang="ts">
const stats = [
  { title: '用户总数', value: 12345 },
  { title: '订单数量', value: 8654 },
  { title: '销售额', value: 98765 },
  { title: '访问量', value: 123456 },
]
</script>
