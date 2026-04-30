<template>
  <div class="user-avatar-wrapper">
    <n-dropdown trigger="hover" :options="dropdownOptions" placement="bottom-end" @select="handleSelect">
      <div class="user-avatar-trigger">
        <n-avatar round :size="32" :style="{ backgroundColor: 'var(--primary-color)' }">
          {{ userInitial }}
        </n-avatar>
        <span class="user-name">{{ userInfo.name || 'Admin' }}</span>
        <Icon icon="mdi:chevron-down" :width="16" :height="16" class="dropdown-icon" />
      </div>
    </n-dropdown>
  </div>
</template>

<script setup lang="ts">
import { computed, h } from 'vue'
import { useDialog } from 'naive-ui'
import { Icon } from '@iconify/vue'

const dialog = useDialog()

// 用户信息（可以从 store 或 API 获取）
const userInfo = {
  name: 'Admin',
  avatar: '',
  role: '管理员',
  email: 'admin@example.com',
}

// 用户名首字母
const userInitial = computed(() => {
  return userInfo.name?.charAt(0)?.toUpperCase() || 'A'
})

// 下拉菜单选项
const dropdownOptions = computed(() => [
  {
    label: '个人中心',
    key: 'profile',
    icon: () => h(Icon, { icon: 'mdi:account', width: 16, height: 16 }),
  },
  {
    label: '修改密码',
    key: 'password',
    icon: () => h(Icon, { icon: 'mdi:lock-reset', width: 16, height: 16 }),
  },
  {
    label: '系统设置',
    key: 'settings',
    icon: () => h(Icon, { icon: 'mdi:cog', width: 16, height: 16 }),
  },
  {
    type: 'divider',
    key: 'divider',
  },
  {
    label: '退出登录',
    key: 'logout',
    icon: () => h(Icon, { icon: 'mdi:logout', width: 16, height: 16 }),
    props: {
      style: { color: 'var(--error-color)' },
    },
  },
])

// 处理菜单选择
function handleSelect(key: string) {
  switch (key) {
    case 'profile':
      dialog.info({
        title: '个人中心',
        content: () =>
          h('div', { style: 'padding: 8px 0;' }, [
            h('p', { style: 'margin: 8px 0;' }, `用户名：${userInfo.name}`),
            h('p', { style: 'margin: 8px 0;' }, `角色：${userInfo.role}`),
            h('p', { style: 'margin: 8px 0;' }, `邮箱：${userInfo.email}`),
          ]),
        positiveText: '确定',
      })
      break
    case 'password':
      dialog.info({
        title: '修改密码',
        content: '修改密码功能开发中...',
        positiveText: '确定',
      })
      break
    case 'settings':
      dialog.info({
        title: '系统设置',
        content: '系统设置功能开发中...',
        positiveText: '确定',
      })
      break
    case 'logout':
      dialog.warning({
        title: '确认退出',
        content: '确定要退出登录吗？',
        positiveText: '确定退出',
        negativeText: '取消',
        onPositiveClick: () => {
          // 清除登录信息
          localStorage.removeItem('admin-token')
          localStorage.removeItem('admin-user')
          // 跳转到登录页
          window.location.href = '/login'
        },
      })
      break
  }
}
</script>

<style scoped>
.user-avatar-wrapper {
  display: flex;
  align-items: center;
  height: 100%;
}

.user-avatar-trigger {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 12px;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--primary-color-light);
  }
}

.user-name {
  font-size: 14px;
  color: var(--text-color);
  font-weight: 500;
}

.dropdown-icon {
  transition: transform 0.3s ease;
  color: var(--text-color-secondary);
}

.user-avatar-trigger:hover .dropdown-icon {
  transform: rotate(180deg);
}
</style>
