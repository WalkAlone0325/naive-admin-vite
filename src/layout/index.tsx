import { defineComponent, computed, unref, onMounted } from 'vue'
import { NLayout, NLayoutSider, NLayoutFooter } from 'naive-ui'
import './index.scss'
import SideBar from './components/SideBar'
import NavBar from './components/NavBar'
import AppMain from './components/AppMain'
import Logo from './components/SideBar/Logo'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import { useSettings } from '@/hooks/use-settings'

export default defineComponent({
  name: 'Layout',
  setup() {
    const route = useRoute()
    const store = useStore()

    // 全局设置
    const { showFooter, navMode, navTheme, menuSetting, multiTabsSetting } = useSettings()

    // 侧边栏
    const collapsed = computed(() => !store.state.app.sidebar.opened)
    // 反转
    const inverted = computed(() => ['dark', 'header-dark'].includes(navTheme.value!))
    // 侧边栏样式 宽度 菜单宽度
    const leftMenuWidth = computed(() => {
      const { minMenuWidth, menuWidth } = unref(menuSetting)!
      return collapsed.value ? minMenuWidth : menuWidth
    })

    // methods
    const watchWidth = () => {
      const width = document.body.clientWidth
      if (width <= 950) {
        store.dispatch('app/openSideBar', { withoutAnimation: false })
      } else {
        store.dispatch('app/closeSideBar', { withoutAnimation: false })
      }
    }

    // life
    onMounted(() => {
      window.addEventListener('resize', watchWidth)
    })

    return () => {
      return (
        <NLayout class="layout-container" hasSider>
          {navMode.value === 'vertical' ? (
            <NLayoutSider
              bordered
              collapseMode="width"
              nativeScrollbar={false}
              collapsedWidth={64}
              width={leftMenuWidth.value}
              inverted={inverted.value}
              collapsed={collapsed.value}
              showTrigger
              onCollapse={() => store.dispatch('app/toggleSideBar')}
              onExpand={() => store.dispatch('app/toggleSideBar')}>
              <Logo collapsed={collapsed.value} />
              <SideBar v-model={[collapsed.value, 'collapsed']} inverted={inverted.value} />
            </NLayoutSider>
          ) : (
            <div></div>
          )}
          <NLayout class="content-container" nativeScrollbar={false}>
            <NavBar inverted={inverted.value} />
            <AppMain />
            <NLayoutFooter bordered>底部</NLayoutFooter>
          </NLayout>
        </NLayout>
      )
    }
  },
})
