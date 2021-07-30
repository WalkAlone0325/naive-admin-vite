import { renderIcon } from '@/layout/components/SideBar/use-menus'
import { MenuOption, NBreadcrumb, NBreadcrumbItem, NDropdown, NIcon, NSpace } from 'naive-ui'
import { computed, defineComponent, Fragment } from 'vue'
import { RouteRecordRaw, useRoute } from 'vue-router'

export default defineComponent({
  name: 'Breadcrumb',
  setup() {
    const route = useRoute()

    const generator = (routerMap: RouteRecordRaw[]) => {
      return routerMap
        .filter(item => item.name)
        .map(route => {
          const currentMenu: MenuOption = {
            label: route.meta?.title,
            key: route.name as string,
            disabled: route.path === '/',
            icon: renderIcon(route.meta?.icon),
          }
          // 是否有子菜单，并递归处理
          if (route.children && route.children.length > 0) {
            // Recursion
            currentMenu.children = generator(route.children)
          }
          return currentMenu
        })
    }
    console.log(route.matched)

    const breadcrumbList = computed(() => generator(route.matched))
    console.log(breadcrumbList.value)

    // methods
    // 返回组件
    const retComp = (Icon: any) => <Icon style={{ marginRight: '8px' }} />

    const dropdownSelect = () => {}

    return () => (
      <NBreadcrumb>
        {breadcrumbList.value.map(item => (
          <NBreadcrumbItem key={item.key}>
            {item.children?.length ? (
              <NDropdown options={item.children} onSelect={dropdownSelect}>
                {/* {item.label} */}

                {item.icon ? (
                  <span>
                    <Fragment>
                      {retComp(item.icon)}
                      {item.label}
                    </Fragment>
                  </span>
                ) : (
                  <Fragment></Fragment>
                )}
              </NDropdown>
            ) : (
              <span>
                {item.icon ? (
                  <Fragment>
                    {retComp(item.icon)}
                    {item.label}
                  </Fragment>
                ) : (
                  <Fragment></Fragment>
                )}
              </span>
            )}
          </NBreadcrumbItem>
        ))}
      </NBreadcrumb>
    )
  },
})
