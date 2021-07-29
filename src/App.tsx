import {
  NMessageProvider,
  darkTheme,
  dateZhCN,
  NConfigProvider,
  zhCN,
  NDialogProvider,
  NNotificationProvider,
  useMessage,
  useDialog,
} from 'naive-ui'
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import './App.scss'

export default defineComponent({
  name: 'App',
  setup() {
    // 挂载全局组件
    // window.$dialog = useDialog()
    // window.$message = useMessage()

    return () => (
      <NConfigProvider theme={darkTheme} locale={zhCN} dateLocale={dateZhCN}>
        <NDialogProvider>
          <NNotificationProvider>
            <NMessageProvider>
              <RouterView />
            </NMessageProvider>
          </NNotificationProvider>
        </NDialogProvider>
      </NConfigProvider>
    )
  },
})
