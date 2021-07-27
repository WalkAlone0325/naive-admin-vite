import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Logo',
  props: {
    collapsed: {
      type: Boolean,
    },
  },
  setup() {
    const title = ref('后台管理系统')

    return () => {
      return <div>{title.value}</div>
    }
  },
})
