import { Component, h } from 'vue'
import { RouteRecordRaw, RouterLink } from 'vue-router'
import { NIcon, MenuOption } from 'naive-ui'
import { resolvePath } from '@/utils'
import { isExternal } from '@/utils/validate'

function renderIcon(icon: Component) {
  if (typeof icon === 'string') {
    icon = icon
  }
  return () => h(NIcon, null, { default: () => h(icon) })
}

export function useRoutesToMenu(routes: RouteRecordRaw[], basePath = '') {
  console.log(routes)
  return routes
    .filter(item => !item.meta?.hidden)
    .map(item => {
      if (item.children?.length === 1) {
        return (item = item.children[0])
      } else {
        return item
      }
    })
    .map(route => {
      const menu: MenuOption = {
        label: route.meta?.title,
        icon: renderIcon(route.meta?.icon),
        key: route.path,
      }
      console.log(menu.key)
      if (route.children && route.children.length > 0) {
        menu.children = useRoutesToMenu(route.children, menu.key as string)
      }
      return menu
    })
}
