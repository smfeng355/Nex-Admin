<!-- src/views/system/UserManage.vue -->
<template>
  <div class="p-4">
    <n-h2>用户管理</n-h2>
    <n-card>
      <n-data-table :columns="columns" :data="data" :pagination="pagination" />
    </n-card>
  </div>
</template>

<script setup lang="ts">
import type { DataTableColumns } from 'naive-ui'

interface User {
  id: number
  name: string
  email: string
  role: string
  status: string
}

const data: User[] = [
  { id: 1, name: '张三', email: 'zhangsan@example.com', role: '管理员', status: '启用' },
  { id: 2, name: '李四', email: 'lisi@example.com', role: '用户', status: '启用' },
]

const columns: DataTableColumns<User> = [
  { title: 'ID', key: 'id' },
  { title: '姓名', key: 'name' },
  { title: '邮箱', key: 'email' },
  { title: '角色', key: 'role' },
  { title: '状态', key: 'status' },
]

const pagination = {
  pageSize: 10,
}
</script>
