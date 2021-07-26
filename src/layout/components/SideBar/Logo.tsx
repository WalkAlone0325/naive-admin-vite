import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Logo',
  setup() {
    const title = ref('后台管理系统')

    return () => {
      return <div>{title.value}</div>
    }
  },
})
