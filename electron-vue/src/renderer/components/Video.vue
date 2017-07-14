<template lang="html">
  <div class="">
    <p>播放视频 {{ this.$route.path }}</p>
    <div class="box">
      <p>播放中</p>
      <router-link class="button" to="/VideoList">关闭</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Video'
}
</script>

<style lang="css">

</style>
