import { GetterTree } from 'vuex'
import { IRootState } from './interface'

const getters: GetterTree<IRootState, IRootState> = {
  // app
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,

  // permission
  routesData: state => state.permission.routes,
}

export default getters
