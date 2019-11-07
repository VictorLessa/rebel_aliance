import * as type from './mutations-types'

export default {
  [type.SAVE_GIPHY](state, { data, pagination }) {
    state.giphy = []
    state.giphy = data
    state.pagination = pagination
  },
  [type.TEXT_INPUT](state, string) {
    state.textInput = string
  },
  [type.ADD_GIPHY](state, { data, pagination }) {
    for (let statement of data) {
      state.giphy.push(statement)
    }
    state.pagination = pagination
  },
}
