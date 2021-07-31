import { MenuOption, NIcon } from 'naive-ui'
import { RouteRecordRaw, RouterLink } from 'vue-router'

export function renderIcon(Icon: any) {
  return () => <NIcon>{{ default: () => <Icon /> }}</NIcon>
}

export function useRoutesToMenus(routes: RouteRecordRaw[], basePath = '') {
  let menu: MenuOption
  return routes
    .filter(item => !item.meta?.hidden)
    .map(route => {
      const fullPath = `${basePath}/${route.path}`.replace(/^\/+/, '/')
      menu = {
        // label: () =>
        //   isExternal(fullPath) ? (
        //     <a href={fullPath}>{route.meta?.title}</a>
        //   ) : (
        //     <RouterLink to={fullPath}>{route.meta?.title}</RouterLink>
        //   ),
        label: route.meta?.title,
        key: fullPath,
        icon: renderIcon(route.meta?.icon),
        // icon: renderIcon(route.meta!.icon as Component),
      }
      if (route.children) {
        // if (route.children.length === 1) {
        //   route = route.children[0]
        // } else {
        menu.children = useRoutesToMenus(route.children, menu.key as string)
        // }
      }
      return menu
    })
    .map(item => {
      if (item.children?.length === 1) {
        item = item.children[0]
      }
      return item
    })
}
