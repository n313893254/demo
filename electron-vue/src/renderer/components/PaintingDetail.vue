<template lang="html">
  <div class="page">
    <div class="img">
      <img :class="[isHeight ? 'height' : 'width']" :src="this.$route.query.src" alt="">
    </div>
    <div class="detail">
      <div>画作标题简介</div>
      <span>播放介绍音频</span>
      <div class="article-list">
        <p>画作相关文章: </p>
        <router-link class="button" to="/Painting/ArticleDetail">文章1</router-link>
        <router-link class="button" to="/Painting/ArticleDetail">文章2</router-link>
        <router-link class="button" to="/Painting/ArticleDetail">文章3</router-link>
      </div>
    </div>
    <div class="menu-wrapper-right">
      <div class="menu">
        <div class="button" @click="pageBack()">关闭</div>
        <div class="button" @click="pageBack2()">返回</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaintingDetail',
  computed: {
    isHeight () {
      return this.$store.state.isHeight
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

    this.$store.commit('setMenuBarSeen', true)
  },
  methods: {
    pageBack () {
      this.$router.back()
    },
    pageBack2 () {
      this.$router.go(-2)
    }
  }
}
</script>

<style lang="css" scoped>
.page {
  display: flex;
}
.page img.height {
  height: 100vh;
}
.page img.width {
  width: 80vw;
}
.detail {
  border: 3px solid #000;
  width: 20vw;
  height: 100vh;
}
.article-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
