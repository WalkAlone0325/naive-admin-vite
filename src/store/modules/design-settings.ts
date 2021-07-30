import { Module } from 'vuex'
import { IDesignSettings, IRootState } from '../interface'
import designSettings from '@/settings/designSettings'

const { isDarkTheme, appThemeList, appTheme } = designSettings

const designSettingsModule: Module<IDesignSettings, IRootState> = {
  namespaced: true,
  state: {
    // 是否是深色主题 默认为 false
    isDarkTheme,
    // 系统风格
    appTheme,
    // 系统内置风格
    appThemeList,
  },
  mutations: {
    TOGGLE_THEME: state => {
      state.isDarkTheme = !state.isDarkTheme
    },
  },
  actions: {
    // 切换主题
    toggleTheme({ commit }) {
      commit('TOGGLE_THEME')
    },
  },
}

export default designSettingsModule
