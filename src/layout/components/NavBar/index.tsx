import { defineComponent, computed, ref, onMounted, nextTick, CSSProperties } from 'vue'
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

export default defineComponent({
  name: 'NavBar',
  setup() {
    const store = useStore()

    const { navMode, navTheme } = useSettings()
    const collapsed = computed(() => !store.state.app.sidebar.opened)

    // css
    const navBarConStyle: CSSProperties = {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0 20px',
      height: '64px',
      lineHeight: '64px',
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
            // 面包屑
            // <Breadcrumb />
            <div></div>
          )}

          {/* 右侧菜单 */}
          <div style={rightMenuConStyle}>
            <NSpace size="large">
              <GitAddress />
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
