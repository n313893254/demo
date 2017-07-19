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
    leftMenuSeen: false,
    rightMenuSeen: false,
    paintings: [
      {
        title: '10个字的长度山水图胡卡是复活节萨复活阿瑟费好',
        year: '1941年',
        imgSrc: 'http://omph2coqc.bkt.clouddn.com/00357D.png'
      },
      {
        title: '山水图',
        year: '1941年',
        imgSrc: 'http://omph2coqc.bkt.clouddn.com/00357D.png'
      },
      {
        title: '山水图',
        year: '1941年',
        imgSrc: 'http://omph2coqc.bkt.clouddn.com/00357D.png'
      },
      {
        title: '山水图',
        year: '1941年',
        imgSrc: 'http://omph2coqc.bkt.clouddn.com/00357D.png'
      },
      {
        title: '山水图',
        year: '1941年',
        imgSrc: 'http://omph2coqc.bkt.clouddn.com/00357D.png'
      },
      {
        title: '山水图',
        year: '1941年',
        imgSrc: 'http://omph2coqc.bkt.clouddn.com/00357D.png'
      },
      {
        title: '山水图',
        year: '1941年',
        imgSrc: 'http://omph2coqc.bkt.clouddn.com/00357D.png'
      }
    ]
  },
  mutations: {
    setPaintingList (state, title) {
      state.paintingTitle = title
    },
    openLeftMenu (state) {
      state.leftMenuSeen = true
    },
    closeLeftMenu (state) {
      state.leftMenuSeen = false
    },
    openRightMenu (state) {
      state.rightMenuSeen = true
    },
    closeRightMenu (state) {
      state.rightMenuSeen = false
    }
  }
})
