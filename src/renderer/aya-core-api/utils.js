export let BN = require('bn.js')

export const stringToHex = (str) => {
  var bs = []
  for (var i = 0; i < str.length; i++) {
    bs.push(str.charCodeAt(i))
  }

  return bytesToHex(new Uint8Array(bs))
}

export const bytesToHex = (bytes) => {
  let hex = []

  for (let i = 0; i < bytes.length; i++) {
    hex.push((bytes[i] >>> 4).toString(16))
    hex.push((bytes[i] & 0xf).toString(16))
  }

  return `0x${hex.join('').replace(/^0+/, '')}`
}
