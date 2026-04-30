/*
 * @Author: ayunu ayunu@qq.com
 * @Date: 2026-04-28 22:31:39
 * @LastEditors: ayunu ayunu@qq.com
 * @LastEditTime: 2026-04-30 01:09:40
 * @FilePath: \admin\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHashHistory } from 'vue-router'
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
        path: 'system',
        name: 'System',
        redirect: '/system/user',
        meta: {
          title: '基础功能',
          icon: 'feather:grid',
          menu: true,
        },
        children: [
          {
            path: 'user',
            name: 'UserManage',
            component: () => import('@/views/system/UserManage.vue'),
            meta: {
              title: '图标 Icon',
              icon: 'feather:feather',
              menu: true,
              parentKey: 'System',
            },
          },
          {
            path: 'role',
            name: 'RoleManage',
            component: () => import('@/views/system/RoleManage.vue'),
            meta: {
              title: '基础组件',
              icon: 'material-symbols:auto-awesome-outline',
              menu: true,
              parentKey: 'System',
            },
          },
          {
            path: 'role3',
            name: 'RoleManage3',
            component: () => import('@/views/system/RoleManage.vue'),
            meta: {
              title: 'Unocss',
              icon: 'material-symbols:auto-awesome-outline',
              menu: true,
              parentKey: 'System',
            },
          },
          {
            path: 'role2',
            name: 'RoleManage2',
            component: () => import('@/views/system/RoleManage.vue'),
            meta: {
              title: 'KeepAlive',
              icon: 'material-symbols:auto-awesome-outline',
              menu: true,
              parentKey: 'System',
            },
          },
          {
            path: 'role1',
            name: 'RoleManage1',
            component: () => import('@/views/system/RoleManage.vue'),
            meta: {
              title: 'MeModal',
              icon: 'feather:grid',
              menu: true,
              parentKey: 'System',
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
          icon: 'carbon:code',
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
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
