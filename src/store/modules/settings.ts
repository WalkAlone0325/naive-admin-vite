import { ISettings } from '@/settings'
import { Module } from 'vuex'
import { IRootState } from '../interface'
import defaultSettings from '@/settings'

const {
  navMode,
  navTheme,
  headerSetting,
  showFooter,
  menuSetting,
  multiTabsSetting,
  crumbsSetting,
  permissionMode,
} = defaultSettings

const settingsModule: Module<ISettings, IRootState> = {
  namespaced: true,
  state: {
    navMode, // 导航模式
    navTheme, //导航风格
    headerSetting, //顶部设置
    showFooter, //页脚
    menuSetting, //菜单设置
    multiTabsSetting, //多标签
    crumbsSetting, //面包屑
    permissionMode, //权限模式

    // 配置栏
    active: false,
  },
  mutations: {
    SET_NAV_THEME: (state, value) => {
      state.navTheme = value
    },

    // 打开配置栏
    OPEN_CONFIG_SETTINGS: state => {
      state.active = true
    },
    // 关闭配置栏
    CLOSE_CONFIG_SETTINGS: state => {
      state.active = false
    },
  },
  actions: {
    setNavTheme({ commit }, value) {
      commit('SET_NAV_THEME', value)
    },

    // 打开配置栏
    openConfigSettings({ commit }) {
      commit('OPEN_CONFIG_SETTINGS')
    },
    // 关闭配置栏
    closeConfigSettings({ commit }) {
      commit('CLOSE_CONFIG_SETTINGS')
    },
  },
}

export default settingsModule
