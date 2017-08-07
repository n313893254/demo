import Vue from 'vue'
import Router from 'vue-router'

import Electron from 'electron'

import Start from '../components/Start'
import Exhibit from '../components/Exhibit'
import Chronological from '../components/Chronological'
import Painting from '../views/Painting'
import History from '../components/History'
import Research from '../components/Research'
import Search from '../components/Search'
import Poetry from '../components/PoetryList'
import Video from '../components/Video'
import Writings from '../components/WritingList'
import Photo from '../components/Photo'
import VideoList from '../components/VideoList'
import ArticleDetail from '../components/ArticleDetail'
import PaintingDisplay from '../components/PaintingDisplay'
import PaintingDetail from '../components/PaintingDetail'
import ResearchList from '../components/ResearchList'

Vue.use(Router)

// 设置路由
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/Exhibit',
      name: 'Exhibit',
      component: Exhibit
    },
    {
      path: '/Chronological',
      name: 'Chronological',
      component: Chronological
    },
    {
      path: '/Painting',
      name: 'Painting',
      component: Painting
    },
    {
      path: '/History',
      name: 'History',
      component: History
    },
    {
      path: '/Research',
      name: 'Research',
      component: Research
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
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
    },
    {
      path: '/Painting/Display/Detail',
      name: 'PaintingDetail',
      component: PaintingDetail
    }
  ]
})

// 路由跳转前,清除定时器
router.beforeEach((to, from, next) => {
  clearInterval(router.timer)
  // console.log(router.timer)
  next()
})

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
