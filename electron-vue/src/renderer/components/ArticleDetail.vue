<template lang="html">
  <div class="">
    <div class="box">
      <p>这是一篇文章 {{ this.$route.path }}</p>
      <button type="button" name="button" @click="back()">X</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleDetail',
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>

<style lang="css">
</style>
