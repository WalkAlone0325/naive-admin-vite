import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Logo',
  props: {
    collapsed: {
      type: Boolean,
    },
  },
  setup(props) {
    const title = ref('后台管理系统')

    return () => {
      return <div v-show={!props.collapsed}>{title.value}</div>
    }
  },
})
