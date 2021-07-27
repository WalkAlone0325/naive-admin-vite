// {
//         label: '且听风吟',
//         key: 'hear-the-wind-sing',
//         icon: renderIcon(BookIcon),
//       },
//       {
//         label: '1973年的弹珠玩具',
//         key: 'pinball-1973',
//         icon: renderIcon(BookIcon),
//         children: [
//           {
//             label: '鼠',
//             key: 'rat',
//           },
//         ],
//       },

import { Component, h } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import { NIcon, MenuOption } from 'naive-ui'
import router from '@/router'

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

export function useMenu(routes: RouteRecordRaw[]) {
  console.log(routes)
  let menu: MenuOption[] = []

  routes.map(route => {
    if (!route.meta?.hidden) {
      if (route.children) {
        route.children.map(item => {
          menu.push({
            label: item.meta?.title,
            key: item.path,
            icon: renderIcon(item.meta?.icon),
          })
        })
      }
    }
  })
  return menu
}
