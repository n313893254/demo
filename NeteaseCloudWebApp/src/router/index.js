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
        },
        {
          path: 'songList',
          component: require('../views/songList')
        },
        {
          path: 'leaderBoard',
          component: require('../views/leaderBoard')
        },
        {
          path: 'hotSinger',
          component: require('../views/hotSinger')
        }
      ]
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})
