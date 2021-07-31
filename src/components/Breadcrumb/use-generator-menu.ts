import { renderIcon } from '@/layout/components/SideBar/use-menus'
import { MenuOption } from 'naive-ui'
import { RouteRecordRaw } from 'vue-router'

/**
 * 生成下拉面包屑菜单
 * @param routerMap 路由matched
 * @param basePath 基础路径
 * @returns MenuOption[]
 */
export function useGeneratorMenu(routerMap: RouteRecordRaw[], basePath = '') {
  let currentMenu: MenuOption
  return routerMap
    .filter(item => item.name)
    .filter(item => !item.meta?.hidden)
    .map(route => {
      const fullPath = `${basePath}/${route.path}`.replace(/^\/+/, '/')
      currentMenu = {
        label: route.meta?.title,
        key: fullPath,
        disabled: route.path === '/',
        icon: renderIcon(route.meta?.icon),
      }
      // 是否有子菜单，并递归处理
      if (route.children && route.children.length > 0) {
        // Recursion
        currentMenu.children = useGeneratorMenu(route.children, currentMenu.key as string)
      }
      return currentMenu
    })
}
