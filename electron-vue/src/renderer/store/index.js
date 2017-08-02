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
    menuBarSeen: false,

    // 用于PaintingDisplay的宽高自适应
    isHeight: true,

    detailShow: false,

    paintings: [
      {
        title: '山水画',
        year: '1941年',
        imgSrc: 'imgs/painting_img2.jpg'
      },
      {
        title: '山水图',
        year: '1941年',
        imgSrc: 'imgs/painting_img3.jpg'
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
    },

    setMenuBarSeen (state, value) {
      state.menuBarSeen = value
    },

    detailShow (state, value) {
      state.detailShow = value
    }
  }
})
