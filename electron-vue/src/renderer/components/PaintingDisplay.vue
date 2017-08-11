<template lang="html">
  <div class="display-page">
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
        <div class="wenzhang">
          <router-link class="wen_neirong" to="/Painting/ArticleDetail">》工地艰苦生活有感</router-link><br>
          <router-link class="wen_neirong" to="/Painting/ArticleDetail">》研究速写之画作速写</router-link><br>
          <router-link class="wen_neirong" to="/Painting/ArticleDetail">》关山月相关研究文章</router-link>
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
export default {
  name: 'PaintingDisplay',
  props: ['row'],
  computed: {
    isHeight () {
      return this.$store.state.isHeight
    },
    detailShow () {
      return this.$store.state.detailShow
    }
  },
  created: function () {
    let img = new Image()
    img.src = './static/pics/works/' + this.$store.state.bigImgUrl
    if (img.height > img.width) {
      this.$store.commit('setHeight')
    } else {
      this.$store.commit('setWidth')
    }
    this.$store.commit('setMenuBarSeen', false)
  },
  methods: {
    pageBack () {
      this.$router.back()
    },
    detail (value) {
      this.$store.commit('detailShow', value)
    },
    closeDisplay () {
      this.$store.commit('handlePaintingShow', false)
      this.$store.commit('setMenuBarSeen', true)
      this.$store.commit('detailShow', false)
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
  background-color: rgba(0, 0, 0, 0.8);
  // height: 100vh;
  // width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
  .detail {
    width: 20vw;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
  }
}
</style>
