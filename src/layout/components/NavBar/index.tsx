import { defineComponent, computed, ref, onMounted, nextTick } from 'vue'
import './index.scss'
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

export default defineComponent({
  name: 'NavBar',
  props: {
    inverted: {
      type: Boolean,
    },
  },
  setup(props) {
    const store = useStore()

    const { navMode } = useSettings()
    const collapsed = computed(() => !store.state.app.sidebar.opened)

    return () => {
      return (
        <div class="navbar-container">
          {navMode.value === 'horizontal' ? (
            <SideBar mode="horizontal" v-model={[collapsed.value, 'collapsed']} />
          ) : (
            // 面包屑
            // <Breadcrumb />
            <div></div>
          )}

          {/* 右侧菜单 */}
          <div class="right-menu-container">
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
