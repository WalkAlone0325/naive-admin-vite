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
import { computed, defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import './App.scss'
import { useStore } from '@/store'

export default defineComponent({
  name: 'App',
  setup() {
    // 挂载全局组件
    // window.$dialog = useDialog()
    // window.$message = useMessage()
    // theme = { darkTheme }
    const store = useStore()
    const hasDarkTheme = computed(() =>
      store.state.designSettings.isDarkTheme ? darkTheme : undefined,
    )

    return () => (
      <NConfigProvider theme={hasDarkTheme.value} locale={zhCN} dateLocale={dateZhCN}>
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
