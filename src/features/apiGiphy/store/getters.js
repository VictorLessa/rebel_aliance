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
      user: el.user,
    }
  })
}

const Pagination = state => {
  return state.pagination
}
export default {
  FilterGiphy,
  Pagination,
}
