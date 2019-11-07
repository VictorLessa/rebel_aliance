import * as type from './mutations-types'

export default {
  [type.SAVE_GIPHY](state, obj) {
    state.giphy = obj
  },
}
