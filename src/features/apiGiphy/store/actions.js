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

export default {
  searchGiphhy,
  loadingGiphy,
}
