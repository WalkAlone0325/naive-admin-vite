import { defineComponent, computed, unref, onMounted, watch, CSSProperties } from 'vue'
import { NLayout, NLayoutSider, NLayoutFooter, NLayoutHeader, NLayoutContent } from 'naive-ui'
import classes from './index.module.scss'
import SideBar from './components/SideBar'
import NavBar from './components/NavBar'
import AppMain from './components/AppMain'
import Logo from './components/SideBar/Logo'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import { useSettings } from '@/hooks/use-settings'
import TagsView from './components/TagsView'

export default defineComponent({
  name: 'Layout',
  setup() {
    const route = useRoute()
    const store = useStore()

    // 全局设置
    const { showFooter, headerSetting, navMode, navTheme, menuSetting, multiTabsSetting } =
      useSettings()

    // 侧边栏
    const collapsed = computed(() => !store.state.app.sidebar.opened)
    // 反转
    const inverted = computed(() => ['dark', 'header-dark'].includes(navTheme.value!))
    // 侧边栏样式 宽度 菜单宽度
    const leftMenuWidth = computed(() => {
      const { minMenuWidth, menuWidth } = unref(menuSetting)!
      return collapsed.value ? minMenuWidth : menuWidth
    })
    // 头部 菜单栏
    const fixedHeader = computed(() => {
      const fixed = unref(headerSetting.value?.fixed)
      return fixed ? 'absolute' : 'static'
    })

    // methods
    const watchWidth = () => {
      const width = document.body.clientWidth
      if (width <= 950) {
        store.dispatch('app/closeSideBar', { withoutAnimation: false })
      } else {
        store.dispatch('app/openSideBar', { withoutAnimation: false })
      }
    }

    // life
    onMounted(() => {
      window.addEventListener('resize', watchWidth)
    })

    // watch
    let marginStyle: CSSProperties = {
      border: '1px solid #000',
    }
    watch(
      () => fixedHeader.value,
      () => {
        if (fixedHeader.value === 'absolute') {
          marginStyle = {
            marginTop: '64px',
          }
        } else {
          marginStyle = {
            marginTop: 0,
          }
        }
      },
    )
    // const marginStyle: CSSProperties: {
    //   fixedHeader.value === 'absolute' ? 'margin-top: "64px"' : 'margin-top: 0'
    // }

    return () => {
      return (
        <NLayout class={classes.layoutContainer} position={fixedHeader.value} hasSider>
          {navMode.value === 'vertical' ? (
            <NLayoutSider
              bordered
              collapseMode="width"
              class={classes.layoutSider}
              nativeScrollbar={false}
              collapsedWidth={64}
              width={leftMenuWidth.value}
              inverted={inverted.value}
              collapsed={collapsed.value}
              showTrigger={menuSetting.value!.isShowTrigger}
              onCollapse={() => store.dispatch('app/toggleSideBar')}
              onExpand={() => store.dispatch('app/toggleSideBar')}>
              <Logo collapsed={collapsed.value} />
              <SideBar v-model={[collapsed.value, 'collapsed']} inverted={inverted.value} />
            </NLayoutSider>
          ) : (
            <div></div>
          )}
          <NLayout class={classes.rightContainer} nativeScrollbar={false}>
            <div>
              {/* 头部内容 */}
              <NLayoutHeader inverted={inverted.value} position={fixedHeader.value} bordered>
                <NavBar />
              </NLayoutHeader>

              <TagsView />
            </div>

            {/* 主体内容 */}
            <NLayoutContent
              class={classes.contentMain}
              style={marginStyle}
              contentStyle={{ padding: '24px' }}>
              <AppMain />
            </NLayoutContent>

            {/* 底部内容 */}
            <NLayoutFooter class={classes.footerContainer} bordered>
              底部
            </NLayoutFooter>
          </NLayout>
        </NLayout>
      )
    }
  },
})
