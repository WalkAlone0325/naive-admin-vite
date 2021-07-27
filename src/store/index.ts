import { InjectionKey } from 'vue'
import { createStore, useStore as useBaseStore } from 'vuex'
import type { Store } from 'vuex'
import type { IRootState } from './interface'
import app from './modules/app'
import permission from './modules/permission'
import tagsView from './modules/tags-view'

// 定义注入类型
export const key: InjectionKey<Store<IRootState>> = Symbol()

const store = createStore({
  modules: {
    app,
    permission,
    tagsView,
  },
})

export function useStore() {
  return useBaseStore(key)
}

export default store
