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
  [type.SAVE](state, data) {
    let aux = false
    for (let giphy of state.saves) {
      if (giphy.id === data.id) {
        aux = true
      }
    }
    for (let giphy in state.giphy) {
      if (state.giphy[giphy].id === data.id) {
        state.giphy[giphy].successSave = true
        data.successSave = true
      }
    }
    if (!aux) state.saves.push(data)
  },
  [type.DELETE_GIPHY](state, data) {
    for (let giphy in state.saves) {
      if (state.saves[giphy].id === data.id) {
        state.saves.splice(giphy, 1)
      }
    }
    for (let giphy in state.giphy) {
      if (state.giphy[giphy].id === data.id) {
        state.giphy.splice(giphy, 1)
      }
    }
  },
  [type.SAVE_EDIT](state, data) {
    for (let giphy in state.saves) {
      if (state.saves[giphy].id === data.id) {
        state.saves[giphy] = data
      }
    }
  },
}
