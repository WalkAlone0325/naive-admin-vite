import { defineComponent } from 'vue'
import { NLayoutSider } from 'naive-ui'

export default defineComponent({
  name: 'SideBar',
  setup() {
    return () => {
      return (
        <NLayoutSider bordered contentStyle={{ padding: '24px' }}>
          sidebar
        </NLayoutSider>
      )
    }
  },
})
