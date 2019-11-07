require('dotenv').config()

import axios from 'axios'

const Axios = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
})

export const search = async ({ q, limit, offset }) => {
  let config = {
    method: 'get',
    url: '/search',
    params: {
      api_key: `${process.env.VUE_APP_API_KEY}`,
      q,
      limit,
      offset,
    },
  }
  return await Axios.request(config)
}
