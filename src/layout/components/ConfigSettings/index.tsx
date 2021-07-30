import { NBadge, NDivider, NDrawer, NDrawerContent, NSpace, NSwitch, NTooltip } from 'naive-ui'
import { computed, CSSProperties, defineComponent, watch } from 'vue'
import { useStore } from '@/store'
import { useSettings } from '@/hooks/use-settings'
import { useDesignSettings } from '@/hooks/use-design-settings'
import navLeft from '@/assets/images/nav-theme-dark.svg'
import navTop from '@/assets/images/nav-horizontal.svg'
import navThemeDark from '@/assets/images/nav-theme-dark.svg'
import navThemeLight from '@/assets/images/nav-theme-light.svg'
import headerThemeDark from '@/assets/images/header-theme-dark.svg'

export default defineComponent({
  name: 'ConfigSettings',
  setup() {
    const store = useStore()

    // style
    const svgCon: CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }
    const badgeStyle: CSSProperties = {
      marginTop: '5px',
    }

    const active = computed(() => store.state.settings.active)

    const { isDarkTheme, appTheme, appThemeList } = useDesignSettings()
    const { navMode, navTheme } = useSettings()

    const toggleNavTheme = (theme: string) => {
      store.dispatch('settings/toggleNavTheme', theme)
    }

    watch(
      () => isDarkTheme.value,
      to => {
        to ? toggleNavTheme('header-dark') : toggleNavTheme('dark')
      },
    )

    // methods

    return () => (
      <NDrawer
        width={290}
        placement="right"
        // v-model={[active.value, 'show']}
        show={active.value}
        onUpdateShow={() => store.dispatch('settings/closeConfigSettings')}
        nativeScrollbar={false}>
        <NDrawerContent title="标题">
          <div>
            {/* 主题 */}
            <NDivider titlePlacement="center">主题</NDivider>
            <div>
              <NTooltip placement="bottom">
                {{
                  default: () =>
                    isDarkTheme.value ? <span>浅色主题</span> : <span>深色主题</span>,
                  trigger: () => (
                    <div>
                      <span style={{ marginRight: '20px' }}>主题色切换：</span>
                      <NSwitch
                        value={isDarkTheme.value}
                        onUpdateValue={() =>
                          store.dispatch('designSettings/toggleTheme')
                        }></NSwitch>
                    </div>
                  ),
                }}
              </NTooltip>
            </div>
            <NDivider titlePlacement="center">系统主题</NDivider>
            <div>
              <span></span>
            </div>
            {/* 导航栏模式 */}
            <NDivider titlePlacement="center">导航栏模式</NDivider>
            <div style={{ display: 'flex' }}>
              <NSpace size="large">
                <div style={svgCon}>
                  <NTooltip placement="top">
                    {{
                      default: () => <span>左侧菜单模式</span>,
                      trigger: () => (
                        <img
                          src={navLeft}
                          onClick={() => store.dispatch('settings/toggleNavMode', 'vertical')}
                        />
                      ),
                    }}
                  </NTooltip>
                  {navMode.value === 'vertical' ? (
                    <NBadge style={badgeStyle} dot color="#19be6b" />
                  ) : (
                    <div></div>
                  )}
                </div>
                <div style={svgCon}>
                  <NTooltip placement="top">
                    {{
                      default: () => <span>顶部菜单模式</span>,
                      trigger: () => (
                        <img
                          src={navTop}
                          onClick={() => store.dispatch('settings/toggleNavMode', 'horizontal')}
                        />
                      ),
                    }}
                  </NTooltip>
                  {navMode.value === 'horizontal' ? (
                    <NBadge style={badgeStyle} dot color="#19be6b" />
                  ) : (
                    <div></div>
                  )}
                </div>
              </NSpace>
            </div>

            {/* 导航栏风格 */}
            <NDivider titlePlacement="center">导航栏风格</NDivider>
            <div style={{ display: 'flex' }}>
              <NSpace size="large">
                <div style={svgCon}>
                  <NTooltip placement="top">
                    {{
                      default: () => <span>暗色侧边栏</span>,
                      trigger: () => (
                        <img
                          src={navThemeDark}
                          onClick={() => store.dispatch('settings/toggleNavTheme', 'dark')}
                        />
                      ),
                    }}
                  </NTooltip>
                  {navTheme.value === 'dark' ? (
                    <NBadge style={badgeStyle} dot color="#19be6b" />
                  ) : (
                    <div></div>
                  )}
                </div>
                <div style={svgCon}>
                  <NTooltip placement="top">
                    {{
                      default: () => <span>白色侧边栏</span>,
                      trigger: () => (
                        <img
                          src={navThemeLight}
                          onClick={() => store.dispatch('settings/toggleNavTheme', 'light')}
                        />
                      ),
                    }}
                  </NTooltip>
                  {navTheme.value === 'light' ? (
                    <NBadge style={badgeStyle} dot color="#19be6b" />
                  ) : (
                    <div></div>
                  )}
                </div>
                <div style={svgCon}>
                  <NTooltip placement="top">
                    {{
                      default: () => <span>暗色顶栏</span>,
                      trigger: () => (
                        <img
                          src={headerThemeDark}
                          onClick={() => store.dispatch('settings/toggleNavTheme', 'header-dark')}
                        />
                      ),
                    }}
                  </NTooltip>
                  {navTheme.value === 'header-dark' ? (
                    <NBadge style={badgeStyle} dot color="#19be6b" />
                  ) : (
                    <div></div>
                  )}
                </div>
              </NSpace>
            </div>

            {/* 界面功能 */}
            <NDivider titlePlacement="center">界面功能</NDivider>

            {/* 界面显示 */}
            <NDivider titlePlacement="center">界面显示</NDivider>
          </div>
        </NDrawerContent>
      </NDrawer>
    )
  },
})
