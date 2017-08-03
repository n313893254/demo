<template lang="html">
  <div class="video-wrapper">
     <video
        id="my-player"
        class="video-js vjs-matrix"
        controls
        preload="auto"
        autoplay="auto">
       <source  src="/static/video/video-1.mp4" type="video/mp4"></source>
     </video>
    <div class="button" @click="showVideo(false)">X</div>
  </div>
</template>

<script>
import videojs from 'video.js'

export default {
  name: 'elVideo',
  created: function () {
    this.$store.commit('setMenuBarSeen', false)
    console.log(videojs)
  },
  methods: {
    // { true: 弹出播放器, false: 关闭播放器 }
    showVideo (value) {
      return this.$store.commit('setPlayer', value)
    }
  }
}
</script>

<style lang="css" scoped>
.video-wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.video-js {
  background-color: #000;
  height: 50vh;
  width: 50vw;
}

</style>
