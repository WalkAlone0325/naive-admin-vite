import { defineComponent } from 'vue'
import { NLayoutContent } from 'naive-ui'
import { RouterView } from 'vue-router'

export default defineComponent({
  name: 'AppMain',
  setup() {
    return () => {
      return (
        <NLayoutContent contentStyle={{ padding: '24px' }}>
          <RouterView />
        </NLayoutContent>
      )
    }
  },
})
