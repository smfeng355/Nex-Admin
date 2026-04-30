<!--
 * @Author: ayunu ayunu@qq.com
 * @Date: 2026-04-28 19:56:15
 * @LastEditors: ayunu ayunu@qq.com
 * @LastEditTime: 2026-04-30 01:43:45
 * @FilePath: \admin\src\views\system\UserManage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!-- src/views/system/UserManage.vue -->
<template>
  <div class="p-4">
    <n-h2>用户管理</n-h2>
    <n-button>Default</n-button>
    <n-button type="tertiary"> Tertiary </n-button>
    <n-button type="primary"> Primary </n-button>
    <n-button type="info"> Info </n-button>
    <n-button type="success"> Success </n-button>
    <n-button type="warning"> Warning </n-button>
    <n-button type="error"> Error </n-button>
    <n-card>
      <n-data-table :columns="columns" :data="data" :pagination="pagination" />
      <n-data-table :columns="columns" :data="data" :pagination="pagination" />
      <n-data-table :columns="columns" :data="data" :pagination="pagination" />
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
