<template lang="html">
  <div class="page">
    <div class="img">
      <img :class="[isHeight ? 'height' : 'width']" :src="this.$route.query.src" alt="">
    </div>
    <div class="box">
      <p>这是画作详情页</p>
      <router-link class="button" to="/Painting/ArticleDetail">这是一篇文章</router-link>
      <button type="button" name="button" @click="pageBack()">X</button>
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
.page img.height {
  height: 100vh;
}
.page img.width {
  width: 80vw;
}
</style>
