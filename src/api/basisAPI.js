import mpx from '@mpxjs/core'

class API {
  constructor() {
    this.baseUrl = 'http://localhost:3000'
  }

  request(params) {
    return mpx.request({
      ...params,
      url: this.baseUrl + params.url
    })
    .then(res => res.data)
    .catch(res => {console.log(res)})
  }
}

export default new API()
