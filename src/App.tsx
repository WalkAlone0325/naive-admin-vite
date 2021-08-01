import { darkTheme, dateZhCN, NConfigProvider, zhCN, useLoadingBar } from 'naive-ui'
import { computed, defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import '@/styles/index.scss'
import { useStore } from '@/store'
import ProvideGlobal from './components/ProvideGlobal'
import InjectGlobal from './components/ProvideGlobal/InjectGlobal'

export default defineComponent({
  name: 'App',
  setup() {
    // theme = 1{ darkTheme }
    const store = useStore()

    // computed
    const hasDarkTheme = computed(() =>
      store.state.designSettings.isDarkTheme ? darkTheme : undefined,
    )

    return () => (
      <NConfigProvider theme={hasDarkTheme.value} locale={zhCN} dateLocale={dateZhCN}>
        <ProvideGlobal>
          <InjectGlobal>
            <RouterView />
          </InjectGlobal>
        </ProvideGlobal>
      </NConfigProvider>
    )
  },
})
