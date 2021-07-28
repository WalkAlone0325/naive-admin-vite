import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'
import store from './store'
import { RouteRecordRaw } from 'vue-router'

NProgress.configure({ showSpinner: false })

// 白名单
const whiteList = ['login', '/auth-redirect']

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const accessRoutes: RouteRecordRaw[] = await store.dispatch('permission/generateRoutes', [
    'admin',
  ])
  // console.log(accessRoutes)
  accessRoutes.map(route => {
    router.addRoute(route)
  })
  // router.addRoute(accessRoutes)
  next()
})

// router.beforeEach(async (to, from, next) => {
//   NProgress.start()

//   const hasToken = getToken()

//   if (hasToken) {
//     if (to.path === '/login') {
//       next({ path: '/' })
//       NProgress.done()
//     } else {
//       const hasRoles = store.getters.roles && store.getters.roles.length > 0
//       if (hasRoles) {
//         // 有权限
//         next()
//       } else {
//         try {
//           // 获取个人信息，拿到权限表
//           const { roles } = await store.dispatch('user/getInfo')

//           // 生成 路由表
//           const accessRoutes = await store.dispatch('permission/generateRoutes', roles)

//           router.addRoute(accessRoutes)

//           next({ ...to, replace: true })
//         } catch (error) {
//           // 发生错误，移除 token，去登录页重新登录
//           await store.dispatch('/user/resetToken')

//           window.$message.error(error || '发生了错误！')
//           next(`/login?redirect=${to.path}`)

//           NProgress.done()
//         }
//       }
//     }
//   } else {
//     // 没有 token
//     if (whiteList.indexOf(to.path) !== -1) {
//       next()
//     } else {
//       next(`/login?redirect=${to.path}`)
//       NProgress.done()
//     }
//   }
// })

router.afterEach(() => {
  NProgress.done()
})
