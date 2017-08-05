import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: require('../views/index'),
      children: [
        {
          path: 'rage',
          component: require('../views/rage')
        }
      ]
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})
