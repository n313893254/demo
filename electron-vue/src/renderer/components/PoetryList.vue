<template lang="html">
  <div class="">
    <MenuBar/>
    <p>诗词列表</p>
    <div class="box">
      <p>这是一篇诗词</p>
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
