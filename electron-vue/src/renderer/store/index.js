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
    ]
  },
  mutations: {
    setPaintingList (state, title) {
      state.paintingTitle = title
    },
    increment (state) {
      state.count++
    }
  }
})
