import { NMessageProvider, useMessage } from 'naive-ui'
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import './App.scss'

export default defineComponent({
  name: 'App',
  setup() {
    // 挂载全局组件
    // window.$message = useMessage()

    return () => (
      <NMessageProvider>
        <RouterView />
      </NMessageProvider>
    )
  },
})
