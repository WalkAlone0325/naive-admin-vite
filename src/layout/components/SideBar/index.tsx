import { defineComponent, ref, computed, toRaw } from 'vue'
import { NLayoutSider, NMenu } from 'naive-ui'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import { useRoutesToMenus } from './use-menus'

export default defineComponent({
  name: 'SideBar',
  props: {
    collapsed: {
      type: Boolean,
    },
  },
  setup(props) {
    const route = useRoute()
    const store = useStore()

    const activeKey = computed(() => route.path)

    // computed

    // const routes = computed(() => store.getters.routesData)
    const routes = computed(() => store.state.permission.routes)

    // 获取菜单表
    const menu = useRoutesToMenus(toRaw(routes.value))

    // methods

    return () => {
      return (
        <NMenu
          collapsed={props.collapsed}
          collapsedWidth={64}
          collapsedIconSize={22}
          options={menu}
          v-model={activeKey}
        />
      )
    }
  },
})
