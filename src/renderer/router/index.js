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
      redirect: '/home/wallet',
      children: [
        {
          path: 'wallet',
          component: require('@/components/view/wallet/wallet').default,
          children: [
            {
              path: '',
              component: require('@/components/view/wallet/children/index').default,
              meta: { keepAlive: true }
            },
            {
              path: 'detail',
              component: require('@/components/view/wallet/children/detail').default
            }
          ]
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
