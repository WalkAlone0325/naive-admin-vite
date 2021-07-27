import { Module } from 'vuex'
import { ITagsViewState, IRootState } from '../interface'

const tagsViewModule: Module<ITagsViewState, IRootState> = {
  namespaced: true,
  state: {
    cachedViews: [],
  },
  mutations: {},
  actions: {},
}

export default tagsViewModule
