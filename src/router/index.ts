/*
 * @Author: ayunu ayunu@qq.com
 * @Date: 2026-04-28 22:31:39
 * @LastEditors: ayunu ayunu@qq.com
 * @LastEditTime: 2026-04-29 02:21:47
 * @FilePath: \admin\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
      menu: false,
    },
  },
  {
    path: '/',
    component: () => import('@/layouts/layout.vue'),
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue'),
        meta: {
          title: '仪表盘',
          icon: 'i-carbon:dashboard',
          menu: true,
        },
      },
      {
        path: 'system',
        name: 'System',
        meta: {
          title: '系统管理',
          icon: 'i-carbon:settings',
          menu: true,
        },
        children: [
          {
            path: 'user',
            name: 'UserManage',
            component: () => import('@/views/system/UserManage.vue'),
            meta: {
              title: '用户管理',
              icon: 'i-carbon:user-role',
              parentKey: 'System',
              menu: true,
            },
          },
          {
            path: 'role',
            name: 'RoleManage',
            component: () => import('@/views/system/RoleManage.vue'),
            meta: {
              title: '角色管理',
              icon: 'i-carbon:security',
              parentKey: 'System',
              menu: true,
            },
          },
        ],
      },
      {
        path: 'system1',
        name: 'System1',
        meta: {
          title: '系统管理1',
          icon: 'i-carbon:settings',
          menu: true,
        },
        children: [
          {
            path: 'user1',
            name: 'UserManage1',
            component: () => import('@/views/system/UserManage.vue'),
            meta: {
              title: '用户管理11',
              icon: 'i-carbon:user-role',
              parentKey: 'System1',
              menu: true,
            },
          },
          {
            path: 'role1',
            name: 'RoleManage1',
            component: () => import('@/views/system/RoleManage.vue'),
            meta: {
              title: '角色管理1',
              icon: 'i-carbon:security',
              parentKey: 'System1',
              menu: true,
            },
          },
        ],
      },
      {
        path: 'test',
        name: 'TestLayout',
        component: () => import('@/views/TestLayout.vue'),
        meta: {
          title: '测试页面',
          icon: 'i-carbon:code',
          menu: true,
        },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/404.vue'),
    meta: {
      title: '页面不存在',
      menu: false,
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
