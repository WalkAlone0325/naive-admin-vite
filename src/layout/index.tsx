import { defineComponent } from 'vue'
import { darkTheme, dateZhCN, NConfigProvider, NLayout, NLayoutFooter, zhCN } from 'naive-ui'
import './index.scss'
import SideBar from './components/SideBar'
import NavBar from './components/NavBar'
import AppMain from './components/AppMain'

export default defineComponent({
  name: 'Layout',
  setup() {
    return () => {
      return (
        <NConfigProvider theme={darkTheme} locale={zhCN} dateLocale={dateZhCN}>
          <NLayout hasSider>
            <SideBar />
            <NLayout class="content-container">
              <NavBar />
              <AppMain />
              <NLayoutFooter bordered>底部</NLayoutFooter>
            </NLayout>
          </NLayout>
        </NConfigProvider>
      )
    }
  },
})
