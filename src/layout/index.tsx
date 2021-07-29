import { defineComponent, computed } from 'vue'
import { NLayout, NLayoutSider, NLayoutFooter } from 'naive-ui'
import './index.scss'
import SideBar from './components/SideBar'
import NavBar from './components/NavBar'
import AppMain from './components/AppMain'
import Logo from './components/SideBar/Logo'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'Layout',
  setup() {
    const route = useRoute()
    const store = useStore()

    const collapsed = computed(() => !store.state.app.sidebar.opened)
    const inverted = computed(() => !store.state.app.sidebar.opened)

    return () => {
      return (
        <NLayout hasSider>
          <NLayoutSider
            bordered
            collapseMode="width"
            nativeScrollbar={false}
            collapsedWidth={64}
            width={240}
            inverted={inverted.value}
            collapsed={collapsed.value}
            showTrigger
            onCollapse={() => store.dispatch('app/toggleSideBar')}
            onExpand={() => store.dispatch('app/toggleSideBar')}>
            <Logo collapsed={collapsed.value} />
            <SideBar v-model={[collapsed.value, 'collapsed']} />
          </NLayoutSider>
          <NLayout class="content-container">
            <NavBar />
            <AppMain />
            <NLayoutFooter bordered>底部</NLayoutFooter>
          </NLayout>
        </NLayout>
      )
    }
  },
})
