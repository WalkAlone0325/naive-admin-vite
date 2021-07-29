import { InjectionKey } from 'vue'
import { createStore, useStore as useBaseStore } from 'vuex'
import type { Store } from 'vuex'
import type { IRootState } from './interface'
import getters from './getters'
import app from './modules/app'
import permission from './modules/permission'
import tagsView from './modules/tags-view'
import settings from './modules/settings'

// 定义注入类型
export const key: InjectionKey<Store<IRootState>> = Symbol()

const store = createStore({
  getters,
  modules: {
    app,
    permission,
    tagsView,
    settings,
  },
})

export function useStore() {
  return useBaseStore(key)
}

export default store
