<template lang="html">
  <div class="">
    <p>播放视频 {{ this.$route.path }}</p>
     <video autoplay="autoplay" loop="loop">
     <source  src="../movie/Movie.mp4" type="video/mp4" ></source>
     </video>
  </div>
</template>

<script>
export default {
  name: 'Video',
  methods: {
    pageBack () {
      this.$router.back()
    }
  },
  created: function () {
    this.$store.commit('setMenuBarSeen', false)
  }
}
</script>

<style lang="css">
video{
            position: fixed;
            right: 0px;
            bottom: 0px;
            min-width: 100%;
            min-height: 100%;
            height: auto;
            width: auto;
            /*加滤镜*/
            /*-webkit-filter: grayscale(100%);*/
            /*filter:grayscale(100%);*/
        }
source{
         min-width: 100%;
         min-height: 100%;
         height: auto;
         width: auto;
        }
</style>
