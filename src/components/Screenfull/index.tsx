import { NIcon, NTooltip } from 'naive-ui'
import { defineComponent } from 'vue'
import { useFullscreen } from '@vueuse/core'
import { FullscreenOutlined, FullscreenExitOutlined } from '@vicons/antd'

export default defineComponent({
  name: 'Screenfull',
  setup() {
    const { toggle, isFullscreen } = useFullscreen()

    return () => (
      <div>
        <NTooltip placement="bottom" trigger="hover">
          {{
            default: () => <span>全屏</span>,
            trigger: () => (
              <div onClick={toggle} style={{ cursor: 'pointer' }}>
                <NIcon size={26}>
                  {!isFullscreen ? <FullscreenOutlined /> : <FullscreenExitOutlined />}
                </NIcon>
              </div>
            ),
          }}
        </NTooltip>
      </div>
    )
  },
})
