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
    searchTitle: '画作',
    paintingList: [
      {field: '书法'}
    ],
    leftMenuSeen: false,
    rightMenuSeen: false,

    // 用于PaintingDisplay的宽高自适应
    isHeight: true,

    paintings: [
      {
        title: '10个字的长度山水图胡卡是复活节萨复活阿瑟费好',
        year: '1941年',
        imgSrc: 'http://omph2coqc.bkt.clouddn.com/00357D.png'
      },
      {
        title: '山水图',
        year: '1941年',
        imgSrc: 'http://omph2coqc.bkt.clouddn.com/thumb-1920-736033.jpg'
      },
      {
        title: '山水图',
        year: '1941年',
        imgSrc: 'http://omph2coqc.bkt.clouddn.com/61990654_p0%20%281%29.jpg'
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
    setPhotoList (state, title) {
      state.photoTitle = title
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
    },
    // 用于PaintingDisplay的宽高自适应
    setHeight (state) {
      state.isHeight = true
    },
    setWidth (state) {
      state.isHeight = false
    },
    setSearchList (state, title) {
      state.searchTitle = title
    }
  }
})
