<template lang="html">
  <div class="page">
    <p>播放视频 {{ this.$route.path }}</p>
     <video autoplay="autoplay" loop="loop" width="100%" height="100%">
       <source  src="/static/video/video-1.mp4" type="video/mp4"></source>
     </video>
     <div class="button" @click="pageBack()">返回</div>
     <MenuBar/>
  </div>
</template>

<script>
import MenuBar from './MenuBar'
export default {
  name: 'Video',
  components: { MenuBar },
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

<style lang="css" scoped>
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
