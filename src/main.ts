import { createApp } from 'vue'
import App from './App'

// router
import router from '@/router'

// 通用字体
import 'vfonts/Lato.css'

const app = createApp(App)

app.use(router)
app.mount('#app')
