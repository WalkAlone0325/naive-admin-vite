import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout'

export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: {
          title: '首页',
          icon: 'dashboard',
          noCache: true,
          affix: true,
        },
        component: () => import('@/views/home'),
      },
    ],
  },
]
