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
        <router-link class="button" to="/Painting/ArticleDetail">文章1</router-link>
        <router-link class="button" to="/Painting/ArticleDetail">文章2</router-link>
        <router-link class="button" to="/Painting/ArticleDetail">文章3</router-link>
      </div>
    </div>
    <div class="menu-wrapper-right">
      <div class="menu" v-if="detailShow">
        <div class="button" @click="detail(false)">关闭</div>
        <div class="button" @click="pageBack()">返回</div>
      </div>
      <div class="menu" v-else>
        <div class="button" @click="detail(true)">更多详情</div>
        <div class="button" @click="pageBack()">返回</div>
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
    this.$store.commit('detailShow', false)
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
  height: 100vh;
}
.article-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
