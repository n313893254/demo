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

    isDisplay: false,

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
        name: '塞上冰河',
        time: '纸本设色',
        size: '20世纪40年代',
        qualitaive: '98.5cm x45.6cm',
        collection: '广州艺术博物院藏',
        inscription: '塞上冰河。四十年代旧作，一九九八年春补题于珠江南岸，漠阳关山月。',
        seal: '关山月（朱文） 漠阳（白文）',
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
        imgSrc: 'imgs/painting_img4.jpg'
      },
      {
        title: '山水图',
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
        imgSrc: 'imgs/painting_img4.jpg'
      },
      {
        title: '山水图',
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
        imgSrc: 'imgs/painting_img4.jpg'
      },
      {
        title: '山水图',
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
        imgSrc: 'imgs/painting_img4.jpg'
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
    },

    setDisplay (state, payload) {
      let i = payload.number
      let display = payload.display
      if (display === 'height') {
        state.paintings[i].display = 'height: 100%'
      } else {
        state.paintings[i].display = 'width: 100%'
      }
    },

    setPlayer (state, value) {
      state.isDisplay = value
    }
  }
})
