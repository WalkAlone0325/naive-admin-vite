import { defineComponent } from 'vue'
import { NLayoutHeader } from 'naive-ui'
import './index.scss'

export default defineComponent({
  name: 'NavBar',
  setup() {
    return () => {
      return <NLayoutHeader bordered>头部</NLayoutHeader>
    }
  },
})
