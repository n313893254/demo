<template lang="html">
  <div class="display-page">
    <div class="mask" v-if="ready"></div>
    <div class="img-wrapper" :class="{[isHeight ? 'height' : 'width']: true, 'small': detailShow }">
      <div class="poi">
        <img :class="{[isHeight ? 'height' : 'width']: true, 'small': detailShow }"
          :src="'./static/pics/works/' + this.$store.state.bigImgUrl" alt="">
      </div>
    </div>
    <transition name="slide-fade">
      <div class="detail" v-if="detailShow">
        <div>
        	<img class="left"  src="../assets/src/xiangq_03.png">
        	<img class="right" src="../assets/src/xiangq_03.png">
        </div>
        <div class="article-list">
          <div class="logo1">
            <img class="logo_img" src="../assets/src/logoxiangq_07.png">
          </div>
          <div class="neirong">
            <p>{{ this.row.name }}</p>
            <br><br>
            <p>尺寸：{{ this.row.size }}</p><br>
            <p>质材：{{ this.row.material }}</p><br>
            <p>收藏：{{ this.row.storage }}</p><br>
            <p>款帐：{{ this.row.style }}</p><br>
            <p>印章：{{ this.row.seal }}</p><br>
          </div>
          <div class="wenzhang" v-for="article in articles">
            <router-link class="wen_neirong" to="/Painting/ArticleDetail">》{{ article.name }}</router-link><br>
          </div>
        </div>
        <div class="detail_zhou"><img src="../assets/src/zhou_31.png"></div>
      </div>
    </transition>
    <div class="menu-wrapper-right">
      <div class="menu" v-if="detailShow">
        <div class="button" @click="detail(false)"><img src="../assets/src/x_36.png"></div>
        <div class="button" @click="closeDisplay()"><img src="../assets/menu/back_19.png"></div>
      </div>
      <div class="menu" v-else>
        <div class="button" @click="detail(true)"><img src="../assets/menu/detail.png"></div>
        <div class="button" @click="closeDisplay()"><img src="../assets/menu/back_19.png"></div>
      </div>
    </div>
  </div>
</template>

<script>
import db from '../ignore_lib/GsyDb.js'
export default {
  name: 'PaintingDisplay',
  components: { db },
  props: ['row'],
  data () {
    return {
      articles: []
    }
  },
  computed: {
    isHeight () {
      return this.$store.state.isHeight
    },
    detailShow () {
      return this.$store.state.detailShow
    },
    ready () {
      return this.$store.state.maskReady
    }
  },
  created: function () {
    this.$store.commit('handleMask', false)
    let img = new Image()
    img.src = './static/pics/works/' + this.$store.state.bigImgUrl
    if (img.height > img.width) {
      this.$store.commit('setHeight')
    } else {
      this.$store.commit('setWidth')
    }
    this.$store.commit('setMenuBarSeen', false)
    db.getWorkArtical(this.row.id, (article) => {
      this.articles = article
    })
    setTimeout(() => {
      this.$store.commit('handleMask', true)
    }, 800)
  },
  methods: {
    pageBack () {
      this.$router.back()
    },
    detail (value) {
      this.$store.commit('detailShow', value)
    },
    closeDisplay () {
      this.$store.commit('handleMask', false)
      setTimeout(() => {
        this.$store.commit('handlePaintingShow', false)
        this.$store.commit('setMenuBarSeen', true)
        this.$store.commit('detailShow', false)
      }, 500)
    }
  }
}
</script>

<style lang="less" scoped>
@import "../assets/animate.less";
.poi {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.display-page .img-wrapper.height {
  display: flex;
  width: 100vw;
  justify-content: center;
}
.display-page .img-wrapper.height {
  height: 100vh;
}
.display-page .img-wrapper.width {
  height: 100vh;
}
.display-page img.height {
  height: 100%;
}
.display-page img.width {
  width: 100%;
}
.display-page .img-wrapper.small.width {
  width: 80vw;
}
.display-page .img-wrapper.small.height {
  width: 80vw;
}
.display-page img.small.width {
  width: 100%;
}
.display-page img.small.height {
  height: 100%;
}

.article-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.left{
	float: left;
	margin: 0.5vw;
}
.right{
	float: right;
	margin: 0.5vw;
}
.logo_img{
	float: left;
	margin-top: 10vh;
  margin-left:1.8vw;
}
.neirong{
  color: #714A3B;
  font-size: 1.0vw;
  margin-top: 2vh;
}
.wenzhang{
  margin-top: 2vh;
}
.detail_zhou{
	width: 13vw;
	height: 8vh;
	margin-left: 3vw;
	margin-top: 3vh;
}
.detail_zhou img{
	width: 13vw;
	height: 8vh;
}
.wen_neirong{
  color: #714A3B;
  font-size: 1.0vw;
  text-decoration: none;
}
.display-page {
  // background-color: rgba(0, 0, 0, 0.8);
  // height: 100vh;
  // width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .mask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #000;
		opacity: 0.4;
		z-index: 99;
	}
  .img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    z-index: 100;
  }
  .detail {
    width: 20vw;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
  }
  .menu-wrapper-right {
    z-index: 200;
  }
}
</style>
