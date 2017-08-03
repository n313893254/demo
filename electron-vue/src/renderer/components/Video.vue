<template lang="html">
  <div class="page">
     <video
        id="my-player"
        class="video-js vjs-matrix"
        controls
        preload="auto"
        autoplay="auto">
       <source  src="/static/video/video-1.mp4" type="video/mp4"></source>
     </video>
     <div class="button" @click="pageBack()">返回</div>
     <MenuBar/>
  </div>
</template>

<script>
import MenuBar from './MenuBar'
import videojs from 'video.js'
// import $ from 'jquery'

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
    console.log(videojs)
  }
}
</script>

<style lang="css" scoped>
.page {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.page .video-js {
  background-color: #000;
  height: 80vh;
  width: 80vw;
}

</style>
