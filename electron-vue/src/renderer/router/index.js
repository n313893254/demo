import Vue from 'vue'
import Router from 'vue-router'
import Start from '../components/Start'
import Exhibit from '../components/Exhibit'
import Chronological from '../components/Chronological'
import Painting from '../components/Painting'
import History from '../components/History'
import Research from '../components/Research'
import Search from '../components/Search'
import Poetry from '../components/Poetry'
import Video from '../components/Video'
import Writings from '../components/Writings'
import Photo from '../components/Photo'

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
      path: '/Poetry',
      name: 'Poetry',
      component: Poetry
    },
    {
      path: '/Video',
      name: 'Video',
      component: Video
    },
    {
      path: '/Writings',
      name: 'Writings',
      component: Writings
    },
    {
      path: '/Photo',
      name: 'Photo',
      component: Photo
    }
  ]
})
