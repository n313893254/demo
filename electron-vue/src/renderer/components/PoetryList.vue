<template lang="html">
  <div class="">
    <MenuBar/>
    <p>诗词列表</p>
    <div class="box">
      <router-link class="button" to="/PoetryList/ArticleDetail">这是一个著作</router-link>
    </div>
  </div>
</template>

<script>
import MenuBar from './MenuBar'

export default {
  name: 'PoetryList',
  components: { MenuBar }
}
</script>

<style lang="css">
</style>
