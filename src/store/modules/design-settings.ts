import { Module } from 'vuex'
import { IDesignSettings, IRootState } from '../interface'
import designSettings from '@/settings/designSettings'

const { darkTheme, appThemeList, appTheme } = designSettings

const designSettingsModule: Module<IDesignSettings, IRootState> = {
  namespaced: true,
  state: {
    // 深色主题
    darkTheme,
    // 系统风格
    appTheme,
    // 系统内置风格
    appThemeList,
  },
  mutations: {},
  actions: {},
}

export default designSettingsModule
