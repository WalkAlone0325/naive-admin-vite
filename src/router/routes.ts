import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout'
import { AlbumsSharp, AtCircleSharp, BackspaceSharp, BarChart } from '@vicons/ionicons5'

/**
 * 参数解析：
 *
 * / 当设置为 noRedirect 的时候该路由在面包屑导航中不可被点击
 * * redirect: 'noRedirect'
 *
 * / 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
 * * name: 'router-name'
 *
 * * meta: {
 * / 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
 * / 只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
 * / 若你想不管路由下面的 children 声明的个数都显示你的根路由
 * / 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
 * * alwaysShow: true,
 *
 * / 设置该路由进入的权限，支持多个权限叠加
 * * roles: ['admin', 'editor'],
 *
 * / 设置该路由在侧边栏和面包屑中展示的名字
 * * title: 'title',
 *
 * / 设置该路由的图标
 * * icon: 'svg-icon',
 *
 * / 如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
 * * noCache: true,
 *
 * / 如果设置为false，则不会在breadcrumb面包屑中显示(默认 true)
 * * breadcrumb: false,
 *
 * / 如果设置为true，它则会固定在tags-view中(默认 false)
 * * affix: true,
 *
 * / 当路由设置了该属性，则会高亮相对应的侧边栏
 * / 这在某些场景非常有用，比如：一个文章的列表页路由为：/article/list
 * / 点击文章进入文章详情页，这时候路由为/article/1，但你想在侧边栏高亮文章列表的路由，就可以进行如下设置
 * * activeMenu: '/article/list'
 * }
 */
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/redirect',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    meta: { hidden: true },
    component: () => import('@/views/login'),
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard'),
        meta: {
          title: 'Dashboard',
          icon: AlbumsSharp,
          affix: true,
        },
      },
    ],
  },
  {
    path: '/documentation',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/documentation'),
        name: 'Documentation',
        meta: {
          title: '文档',
          icon: AtCircleSharp,
          affix: true,
        },
      },
    ],
  },
]

export const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    name: 'Permission',
    meta: {
      alwaysShow: true,
      title: '权限页面',
      icon: BackspaceSharp,
      roles: ['admin', 'editor'],
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page'),
        name: 'PagePermission',
        meta: {
          title: '权限Page',
          roles: ['admin'], // or you can only set roles in sub nav
        },
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        name: 'DirectivePermission',
        meta: {
          title: '权限Directive',
          // if do not set roles, means: this page does not require permission
        },
      },
      {
        path: 'role',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: '权限Role',
          roles: ['admin'],
        },
      },
    ],
  },
  {
    path: '/icon',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/icons'),
        name: 'Icons',
        meta: {
          title: '图标',
          icon: BarChart,
          noCache: true,
        },
      },
    ],
  },
]
