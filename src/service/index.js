let Axios = require('axios')

Axios = Axios.create({
  baseUrl: 'https://api.fake',
})

class Service {
  async save(data) {
    let config = {
      method: 'post',
      url: '/save',
      data,
    }
    await Axios.request(config)
  }
  async edit({ data, id }) {
    const config = {
      method: 'patch',
      url: `/edit/${id}`,
      data,
    }
    await Axios.request(config)
  }
  async delete(id) {
    const config = {
      method: 'delete',
      url: `/delete/${id}`,
    }
    await Axios.request(config)
  }
}

module.exports = new Service()
