import { createApp } from 'vue'
import App from './App'

// router
import router from '@/router'

// store
import store, { key } from '@/store'

// 通用字体
import 'vfonts/Lato.css'

const app = createApp(App)

app.use(router)
app.use(store, key)
app.mount('#app')
