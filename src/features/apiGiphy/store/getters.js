const FilterGiphy = state => {
  return state.giphy.map(el => {
    return {
      url: el.images.preview_webp.url + '?' + Math.random(),
      import_datetime: el.import_datetime,
      id: el.id,
      title: el.title,
      height: el.images.preview_webp.height,
      width: el.images.preview_webp.width,
      source_post_url: el.source_post_url,
      type: el.type,
      original_image: el.images.original.url,
      successSave: el.successSave ? true : false,
      user: el.user
        ? el.user
        : { username: 'Indefinido', display_name: 'Indefinido' },
    }
  })
}

const Pagination = state => {
  return state.pagination
}

const lengthGiphySave = state => {
  console.log(state.saves.length)
  return state.saves.length
}
export default {
  FilterGiphy,
  Pagination,
  lengthGiphySave,
}
