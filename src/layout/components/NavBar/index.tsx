import { defineComponent, computed, CSSProperties } from 'vue'
import SideBar from '../SideBar'
import Breadcrumb from '@/components/Breadcrumb'
import { useSettings } from '@/hooks/use-settings'
import { useStore } from '@/store'
import GitAddress from '@/components/GitAddress'
import Screenfull from '@/components/Screenfull'
import { NSpace } from 'naive-ui'
import DropProfile from '@/components/DropProfile'
import Settings from '@/components/Settings'
import ConfigSettings from '../ConfigSettings'
import classes from './index.module.scss'
import ReloadPage from '@/components/ReloadPage'
import Hamburger from '@/components/Hamburger'

export default defineComponent({
  name: 'NavBar',
  setup() {
    const store = useStore()

    const { navMode, navTheme, headerSetting } = useSettings()
    const collapsed = computed(() => !store.state.app.sidebar.opened)

    // methods
    const toggleCollapsed = () => {
      store.dispatch('app/toggleSideBar')
    }

    // css
    const navBarConStyle: CSSProperties = {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0 20px',
      height: '64px',
      lineHeight: '64px',
    }
    const leftStyle: CSSProperties = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
    const rightMenuConStyle: CSSProperties = {
      display: 'flex',
    }

    return () => {
      return (
        <div
          style={navBarConStyle}
          class={navTheme.value === 'header-dark' ? '' : classes.layoutHeaderLight}>
          {navMode.value === 'horizontal' ? (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <SideBar mode="horizontal" v-model={[collapsed.value, 'collapsed']} />
            </div>
          ) : (
            <div style={leftStyle}>
              <NSpace size="large">
                {/* 这里，呸，有好办法再说吧 https://juejin.cn/post/6966856931839311886#heading-1 */}
                <Hamburger
                  collapsed={collapsed.value}
                  // @ts-ignore
                  onClick={toggleCollapsed}
                />
                {/* 面包屑 */}
                <Breadcrumb />
              </NSpace>
            </div>
          )}

          {/* 右侧菜单 */}
          <div style={rightMenuConStyle}>
            <NSpace size="large">
              <GitAddress />
              <ReloadPage v-show={headerSetting.value?.isReload} />
              <Screenfull />
              <DropProfile />
              <Settings />
            </NSpace>
          </div>
          {/* 全局配置抽屉 */}
          <ConfigSettings />
        </div>
      )
    }
  },
})
