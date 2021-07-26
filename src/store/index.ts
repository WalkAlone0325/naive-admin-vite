import { InjectionKey } from 'vue'
import { createStore, useStore as useBaseStore } from 'vuex'
import type { Store } from 'vuex'
import type { RootState } from './interface'

// 定义注入类型
export const key: InjectionKey<Store<RootState>> = Symbol()

const store = createStore({})

export function useStore() {
  return useBaseStore(key)
}

export default store
