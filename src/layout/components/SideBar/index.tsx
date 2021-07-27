import { defineComponent, ref, Component, h, Ref, computed } from 'vue'
import { NIcon, NLayoutSider, NMenu, MenuOption } from 'naive-ui'
import Logo from './Logo'
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
} from '@vicons/ionicons5'
import { useStore } from '@/store'
import { useMenu } from './use-menu'

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

export default defineComponent({
  name: 'SideBar',
  setup() {
    const store = useStore()

    const activeKey = ref(null)
    const menuOptions: Ref<Array<MenuOption>> = ref([
      {
        label: '且听风吟',
        key: 'hear-the-wind-sing',
        icon: renderIcon(BookIcon),
      },
      {
        label: '1973年的弹珠玩具',
        key: 'pinball-1973',
        icon: renderIcon(BookIcon),
        children: [
          {
            label: '鼠',
            key: 'rat',
          },
        ],
      },
      {
        label: '寻羊冒险记',
        key: 'a-wild-sheep-chase',
        icon: renderIcon(BookIcon),
      },
      {
        label: '舞，舞，舞',
        key: 'dance-dance-dance',
        icon: renderIcon(BookIcon),
        children: [
          {
            type: 'group',
            label: '人物',
            key: 'people',
            children: [
              {
                label: '叙事者',
                key: 'narrator',
                icon: renderIcon(PersonIcon),
              },
              {
                label: '羊男',
                key: 'sheep-man',
                icon: renderIcon(PersonIcon),
              },
            ],
          },
          {
            label: '饮品',
            key: 'beverage',
            icon: renderIcon(WineIcon),
            children: [
              {
                label: '威士忌',
                key: 'whisky',
              },
            ],
          },
          {
            label: '食物',
            key: 'food',
            children: [
              {
                label: '三明治',
                key: 'sandwich',
              },
            ],
          },
          {
            label: '过去增多，未来减少',
            key: 'the-past-increases-the-future-recedes',
          },
        ],
      },
    ])

    // computed
    const collapsed = computed(() => !store.state.app.sidebar.opened)
    // const routes = computed(() => store.getters.routesData)
    const routes = computed(() => store.getters.routesData)
    console.log(routes.value)
    const menu = useMenu(routes.value)
    console.log(menu)

    // methods
    const handleClickMenuItem = () => {}

    return () => {
      return (
        <NLayoutSider
          bordered
          collapseMode="width"
          collapsedWidth={64}
          width={240}
          collapsed={collapsed.value}
          showTrigger
          onCollapse={() => store.dispatch('app/toggleSideBar')}
          onExpand={() => store.dispatch('app/toggleSideBar')}>
          <Logo collapsed={collapsed.value} />
          <NMenu
            collapsed={collapsed.value}
            collapsedWidth={64}
            collapsedIconSize={22}
            options={menu}
            onUpdateValue={handleClickMenuItem}
            v-model={activeKey}
          />
        </NLayoutSider>
      )
    }
  },
})
