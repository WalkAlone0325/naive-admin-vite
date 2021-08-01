import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { NEmpty } from 'naive-ui'

export default defineComponent({
  name: 'Redirect',
  setup() {
    const { params, query } = useRoute()
    const router = useRouter()

    router.replace({ path: '/' + params.path, query })

    return () => <NEmpty />
  },
})
