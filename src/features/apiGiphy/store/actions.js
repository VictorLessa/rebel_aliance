import { search } from './webApi'

const searchGiphhy = async ({ commit }, obj) => {
  let {
    data: { data },
  } = await search(obj)
  await commit('SAVE_GIPHY', data)
}

export default {
  searchGiphhy,
}
