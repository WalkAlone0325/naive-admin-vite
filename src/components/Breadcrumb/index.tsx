import { renderIcon } from '@/layout/components/SideBar/use-menus'
import { MenuOption, NBreadcrumb, NBreadcrumbItem, NDropdown } from 'naive-ui'
import { pageItems } from 'naive-ui/lib/pagination/src/utils'
import { computed, defineComponent, Fragment, Component, resolveComponent } from 'vue'
import { RouteRecordRaw, useRoute } from 'vue-router'

export default defineComponent({
  name: 'Breadcrumb',
  setup() {
    const route = useRoute()

    const generator = (routerMap: RouteRecordRaw[]) => {
      return routerMap.map(route => {
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
    const retComp = Icon => <Icon />

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
                      {/* <component is={item.icon} /> */}
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
                    {/* <component is={item.icon} /> */}
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
{
  /* {breadcrumbList.value.map(item => (
          <div></div>
        )} */
}
{
  /* <NBreadcrumbItem key={item.key}>
            {item.children?.length ?
            <NDropdown options={item.children} onSelect={dropdownSelect}>
              <span>
                {item.icon ?
                  <component is={item.icon} />{item.label}
                  :<Fragment></Fragment>
                }
            </span>
            </NDropdown>}
          </NBreadcrumbItem> */
}
