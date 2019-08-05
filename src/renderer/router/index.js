import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: require('@/pages/login').default
    },
    {
      path: '/home',
      component: require('@/pages/home').default,
      children: [
        {
          path: '',
          component: require('@/components/view/wallet').default,
          meta: { keepAlive: true }
        },
        {
          path: 'key',
          component: require('@/components/view/key').default
        },
        {
          path: 'phone',
          component: require('@/components/view/phone').default
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
