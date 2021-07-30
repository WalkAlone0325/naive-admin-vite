import { ISettings } from '@/settings'
import { RouteRecordRaw } from 'vue-router'

export interface IRootState {
  app: IAppState
  tagsView: ITagsViewState
  permission: IPermissState
  settings: ISettings
  designSettings: IDesignSettings
}

export interface IAppState {
  sidebar: {
    opened: boolean
    withoutAnimation: boolean
  }
  size: 'tiny' | 'small' | 'medium' | 'large'
  device: 'desktop' | 'mobile'
}

export interface IPermissState {
  routes: RouteRecordRaw[]
  addRoutes: RouteRecordRaw[]
}

export interface IDesignSettings {
  isDarkTheme: boolean
  appTheme: string
  appThemeList: string[]
}

export interface ITagsViewState {
  cachedViews: string[]
}
