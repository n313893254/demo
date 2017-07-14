import Vue from 'vue'
import Router from 'vue-router'

import Start from '../components/Start'
import Exhibit from '../components/Exhibit'
import Chronological from '../components/Chronological'
import Painting from '../components/Painting'
import History from '../components/History'
import Research from '../components/Research'
import Search from '../components/Search'
import Poetry from '../components/PoetryList'
import Video from '../components/Video'
import Writings from '../components/WritingList'
import Photo from '../components/Photo'
import VideoList from '../components/VideoList'

Vue.use(Router)

export default new Router({
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
      path: '/PoetryList',
      name: 'PoetryList',
      component: Poetry
    },
    {
      path: '/VideoList/Video',
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
    }
  ]
})
