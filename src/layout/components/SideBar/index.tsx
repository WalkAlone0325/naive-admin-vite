import { defineComponent, ref, computed, PropType, toRaw, watch } from 'vue'
import { NMenu } from 'naive-ui'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import { useRoutesToMenus } from './use-menus'

export default defineComponent({
  name: 'SideBar',
  props: {
    collapsed: {
      type: Boolean,
    },
    mode: {
      type: String as PropType<'vertical' | 'horizontal' | undefined>,
      default: 'vertical',
    },
    inverted: {
      type: Boolean,
    },
  },
  setup(props) {
    const route = useRoute()
    const store = useStore()

    const activeKey = ref(route.path)
    console.log(activeKey.value)

    // computed
    // const routes = computed(() => store.getters.routesData)
    const routes = computed(() => store.state.permission.routes)

    // watch
    watch(
      () => route.fullPath,
      () => {
        // const matched = route.matched
        // const getOpenKeys = matched && matched.length ? [matched[0]?.name] : []
        activeKey.value = route.path
      },
    )

    // 获取菜单表
    const menu = useRoutesToMenus(toRaw(routes.value))

    // methods

    return () => {
      return (
        <NMenu
          inverted={props.inverted}
          mode={props.mode}
          collapsed={props.collapsed}
          collapsedWidth={64}
          collapsedIconSize={22}
          options={menu}
          v-model={[activeKey.value, 'value']}
        />
      )
    }
  },
})
