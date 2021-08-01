import { defineComponent } from 'vue'
import { NInput } from 'naive-ui'

export default defineComponent({
  name: 'Dashboard',
  setup() {
    return () => {
      return (
        <div>
          Dashboard
          <NInput type="textarea" />
          <NInput type="input" />
        </div>
      )
    }
  },
})
