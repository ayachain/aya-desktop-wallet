import axios from 'axios'
import ArgumentsEscape from './common'

class KeyStoreAPI {
  constructor (provide, chainId) {
    this.provide = provide
    this.chainId = chainId
  }

  delete (address, passphrase) {
    let params = ArgumentsEscape({
      arg: [address, passphrase]
    })
    return axios.post(`${this.provide}/keystore/delete?${params}`)
  }

  export (address, passphrase, kspassphrase) {
    let params = ArgumentsEscape({
      arg: [address, passphrase, kspassphrase]
    })
    return axios.post(`${this.provide}/keystore/export?${params}`)
  }

  import (keystore, passphrase) {
    let params = ArgumentsEscape({
      arg: [keystore, passphrase]
    })
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

export default KeyStoreAPI
