<template lang="html">
  <div class="">
    <div class="box">
      <p>这是画作详情页</p>
      <router-link class="button" to="/Painting/ArticleDetail">这是一篇文章</router-link>
      <button type="button" name="button" @click="pageBack()">X</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaintingDetail',
  methods: {
    pageBack () {
      this.$router.back()
    }
  }
}
</script>

<style lang="css">
</style>
