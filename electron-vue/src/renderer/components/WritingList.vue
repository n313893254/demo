<template lang="html">
  <div class="">
    <MenuBar/>
    <p>个人著作列表</p>
    <div class="box">
      <router-link class="button" to="/WritingList/ArticleDetail">这是一个著作</router-link>
    </div>
  </div>
</template>

<script>
import MenuBar from './MenuBar'

export default {
  name: 'WritingList',
  components: { MenuBar }
}
</script>

<style lang="css">
</style>
