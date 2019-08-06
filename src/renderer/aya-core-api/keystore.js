import axios from 'axios'
import ArgumentsEscape from './common'

class KeyStoreApi {
  constructor (provide, chainId) {
    this.provide = provide
    this.chainId = chainId
  }

  delete (data) {
    let params = ArgumentsEscape(data)
    return axios.post(`${this.provide}/keystore/delete?${params}`)
  }

  export (data) {
    let params = ArgumentsEscape(data)
    return axios.post(`${this.provide}/keystore/export?${params}`)
  }

  import (data) {
    let params = ArgumentsEscape(data)
    return axios.post(`${this.provide}/keystore/import?${params}`)
  }

  list () {
    return axios.get(`${this.provide}/keystore/list`)
  }

  lock (address) {
    return axios.post(`${this.provide}/keystore/lock?address=${address}`)
  }

  new (address) {
    return axios.post(`${this.provide}/keystore/new?arg=${address}`)
  }

  sign (data) {
    let params = ArgumentsEscape(data)
    return axios.post(`${this.provide}/keystore/sign?${params}`)
  }

  unlock (data) {
    let params = ArgumentsEscape(data)
    return axios.post(`${this.provide}/keystore/unlock?${params}`)
  }

  update (data) {
    let params = ArgumentsEscape(data)
    return axios.post(`${this.provide}/keystore/update?${params}`)
  }
}

export default KeyStoreApi
