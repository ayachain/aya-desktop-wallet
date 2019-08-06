import KeyStoreApi from './keystore'

class LocalShell {
  constructor (provide, chainId) {
    this.keystore = new KeyStoreApi(provide, chainId)
  }
}

export default LocalShell
