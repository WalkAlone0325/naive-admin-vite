import { NDivider, NDrawer, NDrawerContent, NSwitch, NTooltip } from 'naive-ui'
import { computed, defineComponent, ref } from 'vue'
import { useStore } from '@/store'
import { useDesignSettings } from '@/hooks/use-design-settings'

export default defineComponent({
  name: 'ConfigSettings',
  setup() {
    const store = useStore()

    const active = computed(() => store.state.settings.active)

    const { darkTheme, appTheme, appThemeList } = useDesignSettings()

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
            <NDivider titlePlacement="center">主题</NDivider>

            <div>
              <NTooltip placement="bottom">
                {{
                  default: () => <span>深色主题</span>,
                  trigger: () => <NSwitch v-model={[darkTheme.value, 'value']}></NSwitch>,
                }}
              </NTooltip>
            </div>

            <NDivider titlePlacement="center">系统主题</NDivider>

            <div>
              <span></span>
            </div>

            <NDivider titlePlacement="center">导航栏模式</NDivider>
            <NDivider titlePlacement="center">导航栏风格</NDivider>
            <NDivider titlePlacement="center">界面功能</NDivider>
            <NDivider titlePlacement="center">界面显示</NDivider>
          </div>
        </NDrawerContent>
      </NDrawer>
    )
  },
})
