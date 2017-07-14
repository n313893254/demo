<template lang="html">
  <div class="">
    <MenuBar/>
    <p>个人著作列表</p>
    <div class="box">
      <p>这是一篇著作</p>
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
