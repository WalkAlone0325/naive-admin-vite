import Cookies from 'js-cookie'
import { Module } from 'vuex'
import { IRootState, IAppState } from '../interface'

/**
 * 侧边栏相关 sidebar
 */
const AppModule: Module<IAppState, IRootState> = {
  namespaced: true,
  state: {
    sidebar: {
      opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus')! : true,
      withoutAnimation: false,
    },
    device: 'desktop',
    size: (Cookies.get('size') as IAppState['size']) || 'medium',
  },
  mutations: {
    // 切换 sidebar
    TOGGLE_SIDEBAR: state => {
      state.sidebar.opened = !state.sidebar.opened
      state.sidebar.withoutAnimation = false
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', '1')
      } else {
        Cookies.set('sidebarStatus', '0')
      }
    },

    // 关闭 sidebar
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      Cookies.set('sidebarStatus', '0')
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = withoutAnimation
    },

    // 切换 device
    TOGGLE_DEVICE: (state, device) => {
      state.device = device
    },

    // 设置 size
    SET_SIZE: (state, size) => {
      state.size = size
      Cookies.set('size', size)
    },
  },
  actions: {
    toggleSideBar({ commit }) {
      commit('TOGGLE_SIDEBAR')
    },
    closeSideBar({ commit }, { withoutAnimation }) {
      commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    toggleDevice({ commit }, device) {
      commit('TOGGLE_DEVICE', device)
    },
    setSize({ commit }, size) {
      commit('SET_SIZE', size)
    },
  },
}

export default AppModule
