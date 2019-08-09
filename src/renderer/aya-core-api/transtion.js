import axios from 'axios'
import * as utils from './utils'
import ArgumentsEscape from './common'
import KeyStoreAPI from './keystore'

class TranstionAPI {
  constructor (provide, chainId) {
    this.provide = provide
    this.chainId = chainId

    Transtion.provide = provide
    Transtion.chainId = chainId
  }

  count (address) {
    let params = ArgumentsEscape({
      arg: [this.chainId, address]
    })
    return axios.post(`${this.provide}/tx/count?${params}`)
  }

  get (txhash) {
    let params = ArgumentsEscape({
      arg: [this.chainId, txhash]
    })
    return axios.post(`${this.provide}/tx/get?${params}`)
  }

  list (address) {
    let params = ArgumentsEscape({
      arg: [this.chainId, address]
    })
    return axios.post(`${this.provide}/tx/list?${params}`)
  }

  pool () {
    return axios.get(`${this.provide}/tx/pool`)
  }

  publish (signedrawtx) {
    let params = ArgumentsEscape({
      arg: [this.chainId, signedrawtx]
    })
    return axios.post(`${this.provide}/tx/publish?${params}`)
  }

  receipt (txhash) {
    let params = ArgumentsEscape({
      arg: [this.chainId, txhash]
    })
    return axios.post(`${this.provide}/tx/receipt?${params}`)
  }
}

class Transtion {
  static provide
  static chainId

  static NewTransfer (From, To, Value, password) {
    let tx = new Transtion()
    tx.Index = 0
    tx.From = From
    tx.To = To
    tx.Value = Value
    tx.Type = 0
    tx.password = password
    return tx
  }

  Serialize () {
    return JSON.stringify({
      From: this.From,
      To: this.To,
      Index: this.Index,
      Value: this.Value,
      Type: this.Type,
      Tid: this.Tid,
      Sig: this.Sig
    })
  }

  HasSignture () {
    return !(this.Sig === undefined)
  }

  toHexString (hasPrefix) {
    if (hasPrefix === undefined) {
      return utils.stringToHex(this.Serialize()).slice(2)
    } else if (hasPrefix === true) {
      return utils.stringToHex(this.Serialize())
    } else if (hasPrefix === false) {
      return utils.stringToHex(this.Serialize()).slice(2)
    }
    return utils.stringToHex(this.Serialize()).slice(2)
  }

  async Sign () {
    if (!this.From) {
      throw new Error('missing param "From"')
    }
    if (!this.To) {
      throw new Error('missing param "To"')
    }
    if (!this.Value || this.Value < 0) {
      throw new Error('"Value" must be positive integer')
    }
    if (this.Type === 0 && this.Value === 0) {
      throw new Error('missing param "Type"')
    }
    if (!this.Tid) {
      let txAPI = new TranstionAPI(Transtion.provide, Transtion.chainId)
      let response = (await txAPI.count(this.From)).data
      if (response.Code !== 0) {
        throw new Error(response.Body)
      }
      this.Tid = response.Body
    }
    const valBuff = new utils.BN(this.Value, 10)
    const tidBuff = new utils.BN(this.Tid, 10)
    const typeBuff = new utils.BN(this.Type, 10)
    let prefixBuf = Buffer.from('AyaTransactionPrefix')
    let indexBuf = Buffer.alloc(8)
    let fromBuf = Buffer.from(this.From.slice(2), 'hex')
    let toBuf = Buffer.from(this.To.slice(2), 'hex')
    let valueBuf = Buffer.from(valBuff.toArray('be', 8))
    // let dataBuf = Buffer.alloc(1)
    let tidBuf = Buffer.from(tidBuff.toArray('be', 8))
    let typeBuf = Buffer.from(typeBuff.toArray('be', 2))
    let raw = Buffer.concat([prefixBuf, indexBuf, fromBuf, toBuf, valueBuf, tidBuf, typeBuf], 86)
    let rawHash = require('keccak256')(raw).toString('hex')
    let ksAPI = new KeyStoreAPI(Transtion.provide, Transtion.chainId)
    this.Sig = (await ksAPI.sign({
      arg: [this.From, rawHash, this.password],
      opt: {
        k: true
      }
    })).data.Body
    return true
  }
}

export {
  TranstionAPI,
  Transtion
}
