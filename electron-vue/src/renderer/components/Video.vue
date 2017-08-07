<template lang="html">

    <div class="video-wrapper">
      <div class="mask"></div>
       <video
          id="my-player"
          class="video-js vjs-matrix"
          controls
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
  components: { videojs },
  methods: {
    // { true: 弹出播放器, false: 关闭播放器 }
    showVideo (value) {
      return this.$store.commit('setPlayer', value)
    }
  }
}
</script>

<style lang="less" scoped>
@import "../assets/animate.less";

.video-wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.7);
}
.video-js {
  background-color: #000;
  height: 50vh;
  width: 50vw;
}
</style>
