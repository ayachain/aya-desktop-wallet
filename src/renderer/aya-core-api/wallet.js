import axios from 'axios'
import ArgumentsEscape from './common'

class WalletAPI {
  constructor (provide, chainId) {
    this.provide = provide
    this.chainId = chainId
  }

  balanceOf (data) {
    let params = ArgumentsEscape(data)
    return axios.post(`${this.provide}/wallet/balanceOf?${params}`)
  }

  coinbase () {
    return axios.get(`${this.provide}/wallet/coinbase`)
  }

  lock () {
    return axios.get(`${this.provide}/wallet/lock`)
  }

  transfer (data) {
    let params = ArgumentsEscape(data)
    return axios.post(`${this.provide}/wallet/transfer?${params}`)
  }

  unlock (address) {
    return axios.post(`${this.provide}/wallet/unlock?${address}`)
  }
}

export default WalletAPI
