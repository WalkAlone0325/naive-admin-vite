import { createApp } from 'vue'
import App from './App'

// router
import router from '@/router'

// 权限控制路由
import '@/permission'

// store
import store, { key } from '@/store'

// 通用字体
import 'vfonts/Lato.css'

const app = createApp(App)

app.use(store, key)
app.use(router)

app.mount('#app')

//! 千万不要等路由渲染完成后挂载dom，会导致最外层拿不到挂载到window的组件
router.isReady().then(() => {
  console.log('路由挂载完成')
})
