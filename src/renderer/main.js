import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/icon/iconfont.css'
Vue.use(ElementUI)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.prototype.$ = (arg) => {
  return new GetDom(arg)
}

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')

function GetDom () {
  this.domList = document.querySelectorAll(arguments[0])

  this.css = (styles) => {
    this.domList.forEach(dom => {
      for (const key in styles) {
        dom.style[key] = styles[key]
      }
    })
    return this
  }

  this.attr = (attrs) => {
    this.domList.forEach(dom => {
      for (const key in attrs) {
        dom.setAttribute(key, attrs[key])
      }
    })
    return this
  }

  this.appendClass = (cls) => {
    this.domList.forEach(dom => {
      dom.className += ' ' + cls
    })
    return this
  }

  this.fadeToggle = (time, state) => {
    let dom = this.domList[0]
    let offset = 1 / time
    if (state === 'show') {
      let count = 0
      let timer = setInterval(() => {
        dom.style.opacity = count
        if (count >= 1) {
          clearInterval(timer)
          dom.style.display = 'block'
        }
        count += offset
      })
    } else {
      let count = 1
      let timer = setInterval(() => {
        dom.style.opacity = count
        if (count <= 0) {
          clearInterval(timer)
          dom.style.display = 'none'
        }
        count -= offset
      })
    }
  }
}

Vue.prototype.localShell = (provide, chainId) => {
  this.$http({
    method: 'post',
    url: `http://192.168.0.134:5001/api/v0/aya/keystore/new?arg=${this.password}`
  }).then(result => {
    console.log(result)
  }).catch(err => {
    console.error(err)
  })
}
