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
    // SET_NAV_THEME: (state, value) => {
    //   state.navTheme = value
    // },

    // 打开配置栏
    OPEN_CONFIG_SETTINGS: state => {
      state.active = true
    },
    // 关闭配置栏
    CLOSE_CONFIG_SETTINGS: state => {
      state.active = false
    },

    TOGGLE_NAV_MODE: (state, mode: ISettings['navMode']) => {
      state.navMode = mode
    },

    TOGGLE_NAV_THEME: (state, theme: ISettings['navTheme']) => {
      state.navTheme = theme
    },

    TOGGLE_HEADER_FIXED: state => {
      state.headerSetting!.fixed = !state.headerSetting!.fixed
    },

    TOGGLE_TABS_FIXED: state => {
      state.multiTabsSetting!.fixed = !state.multiTabsSetting!.fixed
    },

    TOGGLE_SHOW_TRIGGER: state => {
      state.menuSetting!.isShowTrigger = !state.menuSetting!.isShowTrigger
    },

    TOGGLE_SHOW_RELOAD: state => {
      state.headerSetting!.isReload = !state.headerSetting!.isReload
    },

    TOGGLE_SHOW_CRUMB: state => {
      state.crumbsSetting!.show = !state.crumbsSetting!.show
    },

    TOGGLE_SHOW_CRUMB_ICON: state => {
      state.crumbsSetting!.showIcon = !state.crumbsSetting!.showIcon
    },

    TOGGLE_SHOW_TABS: state => {
      state.multiTabsSetting!.show = !state.multiTabsSetting!.show
    },
  },
  actions: {
    // setNavTheme({ commit }, value) {
    //   commit('SET_NAV_THEME', value)
    // },

    // 打开配置栏
    openConfigSettings({ commit }) {
      commit('OPEN_CONFIG_SETTINGS')
    },
    // 关闭配置栏
    closeConfigSettings({ commit }) {
      commit('CLOSE_CONFIG_SETTINGS')
    },

    /** 导航栏模式 */
    // 切换导航模式
    toggleNavMode({ commit }, mode: ISettings['navMode']) {
      commit('TOGGLE_NAV_MODE', mode)
    },

    /** 导航栏风格*/
    // 切换导航主题色
    toggleNavTheme({ commit }, theme: ISettings['navTheme']) {
      commit('TOGGLE_NAV_THEME', theme)
    },

    /** 界面功能 */
    // 切换是否固定头部
    toggleHeaderFixed({ commit }) {
      commit('TOGGLE_HEADER_FIXED')
    },

    // 切换是否固定多标签
    toggleTabsFixed({ commit }) {
      commit('TOGGLE_TABS_FIXED')
    },

    /** 界面显示 */
    // 是否显示侧边栏折叠样式
    toggleShowTrigger({ commit }) {
      commit('TOGGLE_SHOW_TRIGGER')
    },
    // 切换是否显示重载按钮
    toggleShowReload({ commit }) {
      commit('TOGGLE_SHOW_RELOAD')
    },

    // 切换显示面包屑
    toggleShowCrumb({ commit }) {
      commit('TOGGLE_SHOW_CRUMB')
    },

    // 切换显示面包屑图标
    toggleShowCrumbIcon({ commit }) {
      commit('TOGGLE_SHOW_CRUMB_ICON')
    },

    // 切换显示多标签
    toggleShowTabs({ commit }) {
      commit('TOGGLE_SHOW_TABS')
    },
  },
}

export default settingsModule
