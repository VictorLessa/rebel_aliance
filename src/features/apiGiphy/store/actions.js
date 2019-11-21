import { search } from './webApi'

const searchGiphhy = async ({ commit }, obj) => {
  let {
    data: { data, pagination },
  } = await search(obj)
  await commit('TEXT_INPUT', obj.q)
  await commit('SAVE_GIPHY', { data, pagination })
}

const loadingGiphy = async ({ commit }, obj) => {
  let {
    data: { data, pagination },
  } = await search(obj)
  await commit('ADD_GIPHY', { data, pagination })
}

const saveGiphyAction = async ({ commit }, data) => {
  await commit('SAVE', data)
}

const deleteGiphyAction = async ({ commit }, data) => {
  await commit('DELETE_GIPHY', data)
  // await remove(data)
}

const deleteGiphySaveAction = async ({ commit }, data) => {
  await commit('DELETE_GIPHY_SAVE', data)
  // await remove(data)
}

const saveEditAction = async ({ commit }, obj) => {
  await commit('SAVE_EDIT', obj)
}

export default {
  searchGiphhy,
  loadingGiphy,
  saveGiphyAction,
  deleteGiphyAction,
  saveEditAction,
  deleteGiphySaveAction,
}
