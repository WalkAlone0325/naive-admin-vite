import { ReloadOutlined } from '@vicons/antd'
import { NIcon, NTooltip } from 'naive-ui'
import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'ReloadPage',
  setup() {
    const route = useRoute()
    const router = useRouter()
    /** methods */
    // 刷新页面
    const handleReloadPage = () => {
      router.push({
        path: '/redirect' + route.fullPath,
      })
    }
    return () => (
      <div style={{ cursor: 'pointer' }}>
        <NTooltip placement="bottom" trigger="hover">
          {{
            default: () => <span>重新加载</span>,
            trigger: () => (
              <div onClick={handleReloadPage}>
                <NIcon size={24}>
                  <ReloadOutlined />
                </NIcon>
              </div>
            ),
          }}
        </NTooltip>
      </div>
    )
  },
})
