<template lang="html">
  <div class="">
    <Menu/>
    <p>视频列表</p>
    <div class="video">
      <router-link class="button" to="/Video">这是一个视频</router-link>
    </div>
  </div>
</template>

<script>
import Menu from './Menu'

export default {
  name: 'VideoList',
  components: { Menu }
}
</script>

<style lang="css">
.video {
  border: 1px solid #000;
}
</style>
