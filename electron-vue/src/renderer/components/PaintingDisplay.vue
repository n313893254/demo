<!-- 获取img的url进行展示 -->
<template lang="html">
  <div class="page">
    <div class="img" :class="[isHeight ? 'height' : 'width']">
      <img :class="{[isHeight ? 'height' : 'width']: true, 'small': detailShow }"
        :src="this.$route.query.src" alt="">
    </div>
    <div class="detail" v-if="detailShow">
      <div>画作标题简介</div>
      <span>播放介绍音频</span>
      <div class="article-list">
        <p>画作相关文章: </p>
        <div class="logo1">
          <img class="logo_img" src="../assets/src/logo.jpg">
        </div>
        <div class="neirong">
          <h2>堵海工地速写之一</h2>
          <br>
          <p>尺寸：31.5cm x 43cm</p><br>
          <p>质材：纸本设色</p><br>
          <p>收藏：岭南画派纪念馆藏</p><br>
          <p>款帐：</p><br>
          <p>印章：关山月（朱文）</p><br>
        </div>
        <div class="wenzhang">
          <router-link class="wen_neirong" to="/Painting/ArticleDetail">》工地艰苦生活有感</router-link><br>
          <router-link class="wen_neirong"  to="/Painting/ArticleDetail">》研究速写之画作速写</router-link><br>
          <router-link class="wen_neirong"  to="/Painting/ArticleDetail">》关山月相关研究文章</router-link>
        </div>
      </div>
    </div>
    <div class="menu-wrapper-right">
      <div class="menu" v-if="detailShow">
        <div class="button" @click="detail(false)"><img src="../assets/src/Details_11.png"></div>
        <div class="button" @click="pageBack()"><img src="../assets/src/Details_14.png"></div>
      </div>
      <div class="menu" v-else>
        <div class="button" @click="detail(true)">更多详情</div>
        <div class="button" @click="pageBack()"><img src="../assets/src/Details_11.png"></div>
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
    let img = new Image()
    img.src = this.$route.query.src
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
    }
  }
}
</script>

<style lang="css" scoped>
.page {
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: space-between;
  align-items: center;
}
.page .img.height {
  display: flex;
  width: 100vw;
  justify-content: center;
}
.page img.height {
  height: 100vh;
}
.page img.width {
  width: 100vw;
}
.page img.small.width {
  width: 80vw;
}
.detail {
  border: 3px solid #000;
  width: 20vw;
  background-color: #000000;
  height: 100vh;
}
.article-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.logo_img{
  margin-left: 5vw;
}
.neirong{
  color: #FBFC7D;
  font-size: 1.0vw;
  margin-left: 3vw;
}
.wenzhang{
  margin-top: 5vh;
  margin-left: 5vw;
}
.wen_neirong{
  color: #FBFC7D;
  font-size: 1.0vw;
  text-decoration: none;
}
</style>
