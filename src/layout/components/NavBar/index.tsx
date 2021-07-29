import { defineComponent, computed } from 'vue'
import { NLayoutHeader } from 'naive-ui'
import './index.scss'
import SideBar from '../SideBar'
import Breadcrumb from '@/components/Breadcrumb'
import { useSettings } from '@/hooks/use-settings'
import { useStore } from '@/store'

export default defineComponent({
  name: 'NavBar',
  props: {
    inverted: {
      type: Boolean,
    },
  },
  setup(props) {
    const store = useStore()

    const { navMode } = useSettings()
    const collapsed = computed(() => !store.state.app.sidebar.opened)

    return () => {
      return (
        <NLayoutHeader inverted={props.inverted} bordered>
          {navMode.value === 'horizontal' ? (
            <SideBar mode="horizontal" v-model={[collapsed.value, 'collapsed']} />
          ) : (
            <div></div>
          )}
          {/* 面包屑 */}
          <Breadcrumb />
        </NLayoutHeader>
      )
    }
  },
})
