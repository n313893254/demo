<template lang="html">
  <div class="display-page">
    <div class="img-wrapper" :class="{[isHeight ? 'height' : 'width']: true, 'small': detailShow }">
      <div class="">
        <img :class="{[isHeight ? 'height' : 'width']: true, 'small': detailShow }"
          src="../assets/src/painting_img2.jpg" alt="">
      </div>
    </div>
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
          <p>堵海工地速写之一</p>
          <br><br>
          <p>尺寸：31.5cm x 43cm</p><br>
          <p>质材：纸本设色</p><br>
          <p>收藏：岭南画派纪念馆藏</p><br>
          <p>款帐：</p><br>
          <p>印章：关山月（朱文）</p><br>
        </div>
        <div class="wenzhang">
          <router-link class="wen_neirong" to="/Painting/ArticleDetail">》工地艰苦生活有感</router-link><br>
          <router-link class="wen_neirong" to="/Painting/ArticleDetail">》研究速写之画作速写</router-link><br>
          <router-link class="wen_neirong" to="/Painting/ArticleDetail">》关山月相关研究文章</router-link>
        </div>
      </div>
      <div class="detail_zhou"><img src="../assets/src/zhou_31.png"></div>
    </div>
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
  computed: {
    isHeight () {
      return this.$store.state.isHeight
    },
    detailShow () {
      return this.$store.state.detailShow
    }
  },
  created: function () {
    // let img = new Image()
    // img.src = this.$route.query.src
    // if (img.height > img.width) {
    //   this.$store.commit('setHeight')
    // } else {
    //   this.$store.commit('setWidth')
    // }
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
    }
  }
}
</script>

<style lang="less" scoped>

.page .img-wrapper.height {
  display: flex;
  width: 100vw;
  justify-content: center;
}
.page .img-wrapper.height {
  height: 100vh;
}
.page img.height {
  height: 100%;
}
.page img.width {
  width: 100%;
}
.page .img-wrapper.small.width {
  width: 80vw;
}
.page img.small.width {
  width: 100%;
}
.detail {
  width: 20vw;
  background-color: #FFFFFF;
  height: 100vh;
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
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
}
</style>
