import { defineComponent } from 'vue'
import { NTooltip, NIcon } from 'naive-ui'
import { SettingOutlined } from '@vicons/antd'
import { useStore } from '@/store'

export default defineComponent({
  name: 'Settings',
  setup() {
    const store = useStore()

    return () => (
      <div style={{ cursor: 'pointer' }}>
        <NTooltip placement="bottom-start" trigger="hover">
          {{
            default: () => <span>全局配置</span>,
            trigger: () => (
              <div onClick={() => store.dispatch('settings/openConfigSettings')}>
                <NIcon size={26}>
                  <SettingOutlined />
                </NIcon>
              </div>
            ),
          }}
        </NTooltip>
      </div>
    )
  },
})
