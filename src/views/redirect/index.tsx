import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'Redirect',
  setup() {
    const {
      params: { path },
      query,
    } = useRoute()
    const router = useRouter()

    router.replace({ path: '/' + path, query })

    return () => {
      return <div></div>
    }
  },
})
