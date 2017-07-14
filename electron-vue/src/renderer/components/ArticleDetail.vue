<template lang="html">
  <div class="">
    <div class="box">
      <p>这是一篇文章 {{ this.$route.path }}</p>
      <router-link class="button" to="/WritingList">关闭</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleDetail'
}
</script>

<style lang="css">
</style>
