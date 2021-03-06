import Vue from 'vue'
import Router from 'vue-router'

import Electron from 'electron'

import Poetry from '../components/PoetryList'
import Video from '../components/Video'
import Writings from '../components/WritingList'
import Photo from '../components/Photo'
import VideoList from '../views/VideoList'
import ArticleDetail from '../components/ArticleDetail'
import PaintingDisplay from '../components/PaintingDisplay'
import ResearchList from '../components/ResearchList'
import Searchlist from '../components/Searchlist'

Vue.use(Router)

// 设置路由
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: require('../views/Start')
    },
    {
      path: '/Chronological',
      name: 'Chronological',
      component: require('../views/Chronological')
    },
    {
      path: '/Painting',
      name: 'Painting',
      component: require('../views/Painting')
    },
    {
      path: '/History',
      name: 'History',
      component: require('../views/History')
    },
    {
      path: '/Research',
      name: 'Research',
      component: require('../views/Research')
    },
    {
      path: '/Search',
      name: 'Search',
      component: require('../views/Search')
    },
    {
      path: '/Searchlist',
      name: 'Searchlist',
      component: Searchlist
    },
    {
      path: '/ResearchList',
      name: 'ResearchList',
      component: ResearchList
    },
    {
      path: '/PoetryList',
      name: 'PoetryList',
      component: Poetry
    },
    {
      path: '/:List/Video',
      name: 'Video',
      component: Video
    },
    {
      path: '/VideoList',
      name: 'VideoList',
      component: VideoList
    },
    {
      path: '/WritingList',
      name: 'WritingList',
      component: Writings
    },
    {
      path: '/Photo',
      name: 'Photo',
      component: Photo
    },
    {
      path: '/:List/ArticleDetail',
      name: 'ArticleDetail',
      component: ArticleDetail
    },
    {
      path: '/Painting/Display',
      name: 'PaintingDisplay',
      component: PaintingDisplay
    }
  ]
})

// 路由跳转前,清除定时器
router.beforeEach((to, from, next) => {
  clearInterval(router.timer)
  // console.log(router.timer)
  next()
})

// 鼠标不操作时跳转到年表
// 路由跳转后，开始监听鼠标
router.afterEach(route => {
  router._cursorPoint = {
    x: 1,
    y: 1
  }
  router.timer = setInterval(function () {
    // console.log(router._cursorPoint)
    router.cursorPoint = Electron.screen.getCursorScreenPoint()
    // console.log(router.cursorPoint)
    if (router.cursorPoint.x === router._cursorPoint.x &&
          router.cursorPoint.y === router._cursorPoint.y) {
      router.push({
        name: 'Chronological'
      })
    }
    router._cursorPoint.x = router.cursorPoint.x
    router._cursorPoint.y = router.cursorPoint.y
  }, 1000000)
  // console.log('start a ' + router.timer)
})

export default router
