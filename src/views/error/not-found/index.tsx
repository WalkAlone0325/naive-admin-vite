import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NotFound',
  setup() {
    return () => <h1>404</h1>
  },
})
