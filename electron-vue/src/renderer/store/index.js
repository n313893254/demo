import Vue from 'vue'
import Vuex from 'vuex'

// import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  // modules,
  // strict: process.env.NODE_ENV !== 'production'
  state: {
    message: '共享数据',
    paintingTitle: '画作',
    paintingList: [
      {field: '书法'}
    ],
    menuSeen: false,
    paintings: [
      {
        title: '创作《南国水乡》',
        year: '1941年辛已29岁',
        img: ''
      }
    ]
  },
  mutations: {
    setPaintingList (state, title) {
      state.paintingTitle = title
    },
    openMenu (state) {
      state.menuSeen = true
    },
    closeMenu (state) {
      state.menuSeen = false
    }
  }
})
