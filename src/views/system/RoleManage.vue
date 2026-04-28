<!-- src/views/system/RoleManage.vue -->
<template>
  <div class="p-4">
    <n-h2>角色管理</n-h2>
    <n-card>
      <n-data-table :columns="columns" :data="data" :pagination="pagination" />
    </n-card>
  </div>
</template>

<script setup lang="ts">
import type { DataTableColumns } from 'naive-ui'

interface Role {
  id: number
  name: string
  code: string
  description: string
}

const data: Role[] = [
  { id: 1, name: '超级管理员', code: 'SUPER_ADMIN', description: '拥有所有权限' },
  { id: 2, name: '普通用户', code: 'USER', description: '基础访问权限' },
]

const columns: DataTableColumns<Role> = [
  { title: 'ID', key: 'id' },
  { title: '角色名称', key: 'name' },
  { title: '角色编码', key: 'code' },
  { title: '描述', key: 'description' },
]

const pagination = { pageSize: 10 }
</script>
