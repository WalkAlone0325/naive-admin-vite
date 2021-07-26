import { Module } from 'vuex'
import { RootState, AppState } from '../interface'

/**
 * 侧边栏相关 sidebar
 */
const AppModule: Module<AppState, RootState> = {
  namespaced: true,
  state: {
    sidebar: {
      opened: true,
      withoutAnimation: false,
    },
  },
  mutations: {},
  actions: {},
}

export default AppModule
