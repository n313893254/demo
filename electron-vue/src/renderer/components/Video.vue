<template lang="html">
  <div class="">
    <p>播放视频 {{ this.$route.path }}</p>
    <div class="box">
      <p>播放中</p>
      <button type="button" name="button" @click="pageBack()">X</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Video',
  methods: {
    pageBack () {
      this.$router.back()
    }
  }
}
</script>

<style lang="css">

</style>
