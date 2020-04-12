import axios from 'axios'
import ArgumentsEscape from './common'

class TransactionAPI {
  constructor (provide, chainId) {
    this.provide = provide
    this.chainId = chainId
  }

  connect (data) {

  }

  disconnect (data) {
    let params = ArgumentsEscape(data)
    return axios.post(`${this.provide}/chain/disconnect?${params}`)
  }

}
