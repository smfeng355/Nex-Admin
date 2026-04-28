<!-- src/views/login/index.vue -->
<template>
  <div class="h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
    <n-card title="欢迎使用 Nex-Admin" :bordered="false" class="w-400" size="huge">
      <template #header-extra>
        <n-switch v-model:value="isDark" />
      </template>

      <n-form
        ref="formRef"
        :model="formData"
        :rules="rules"
        label-placement="left"
        size="large"
        @keyup.enter="handleLogin"
      >
        <n-form-item path="username" label="用户名">
          <n-input v-model:value="formData.username" placeholder="请输入用户名" clearable>
            <template #prefix>
              <n-icon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                  />
                </svg>
              </n-icon>
            </template>
          </n-input>
        </n-form-item>

        <n-form-item path="password" label="密码">
          <n-input v-model:value="formData.password" type="password" placeholder="请输入密码" show-password-on="click">
            <template #prefix>
              <n-icon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
                  />
                </svg>
              </n-icon>
            </template>
          </n-input>
        </n-form-item>

        <n-form-item>
          <n-checkbox v-model:checked="rememberMe">记住我</n-checkbox>
        </n-form-item>

        <n-form-item>
          <n-button type="primary" block size="large" :loading="loading" @click="handleLogin"> 登录 </n-button>
        </n-form-item>
      </n-form>

      <n-divider>演示账号</n-divider>
      <n-space justify="center">
        <n-button text type="primary" @click="fillDemo('admin', '123456')"> 管理员: admin/123456 </n-button>
      </n-space>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useMessage } from 'naive-ui'
import type { FormInst, FormRules } from 'naive-ui'

const router = useRouter()
const message = useMessage()
const formRef = ref<FormInst | null>(null)
const loading = ref(false)
const isDark = ref(false)
const rememberMe = ref(false)

const formData = ref({
  username: '',
  password: '',
})

const rules: FormRules = {
  username: {
    required: true,
    message: '请输入用户名',
    trigger: 'blur',
  },
  password: {
    required: true,
    message: '请输入密码',
    trigger: 'blur',
  },
}

function fillDemo(username: string, password: string) {
  formData.value.username = username
  formData.value.password = password
}

async function handleLogin() {
  try {
    await formRef.value?.validate()
    loading.value = true

    // 模拟登录请求
    await new Promise(resolve => setTimeout(resolve, 1000))

    message.success('登录成功')
    router.push('/')
  } catch (error) {
    message.error('用户名或密码错误')
  } finally {
    loading.value = false
  }
}
</script>
