import { createApp } from 'vue'
import App from './App'

// router
import router from '@/router'

// 权限控制路由
import './permission'

// store
import store, { key } from '@/store'

// 通用字体
import 'vfonts/Lato.css'

const app = createApp(App)

app.use(router)
app.use(store, key)

router.isReady().then(() => {
  app.mount('#app')
})
