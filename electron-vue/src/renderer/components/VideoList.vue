<template lang="html">
  <div class="">
    <MenuBar/>
    <p>视频列表</p>
    <div class="video">
      <router-link class="button" to="/Video">这是一个视频</router-link>
    </div>
  </div>
</template>

<script>
import MenuBar from './MenuBar'

export default {
  name: 'VideoList',
  components: { MenuBar }
}
</script>

<style lang="css">
.video {
  border: 1px solid #000;
}
</style>
