<template lang="html">
  <div class="video-page">
  	<div class="nav">
  		<div class="small_logo">
  			<img src="../assets/src/piclist_06.png">
  		</div>
  	  <div class="yemei_title">
  	  	<p>知识库》画作》山水</p>
  	  </div>
  	  <div class="yemei_year">
  	  	<img src="../assets/src/piclist_03.png">
  	  </div>
  	  <div class="gongsi"><img src="../assets/src/logoe4.png">
  	  	<p>伊世易技术支持</p></div>
  	</div>
    <div class="menu-wrapper-left">
      <div class="menu" v-if="leftMenuSeen">
        <div  @click="set('视频')">
        	<router-link class="button" to="/VideoList"><img src="../assets/src/history_04.png"></router-link>
        </div>
        <div  @click="set('照片')">
        	<router-link class="button" to="/Photo"><img src="../assets/src/history_05.png"></router-link>
        </div>
        <div  @click="set('诗篇')">
        	<router-link class="button" to="/PoeryList"><img src="../assets/src/history_07.png"></router-link>
        </div>
        <div  @click="set('个人著作')">
        	<router-link class="button" to="/WritingList"><img src="../assets/src/history_14.png"></router-link>
        </div>
        <div class="button" @click="closeLeftMenu()"><img src="../assets/src/fenlei_29.png"></div>
      </div>
      <div class="menu" v-else>
        <div class="button" @click="openLeftMenu()"><img src="../assets/src/fenlei_29.png"></div>
      </div>
    </div>·
    <div class="mid">
    	<div class="photomodel">
        <div class="photo" @click="showVideo(true)"><img src="../assets/src/video1.png"></div>
        <div class="biaoti"><p>创作过程</p></div>
      </div>
      <div class="photomodel">
        <div class="photo" @click="showVideo(true)"><img src="../assets/src/video2.png"></div>
        <div class="biaoti"><p>创作《巨榕》<br>1994年</p></div>
      </div>
      <div class="photomodel">
        <div class="photo" ><img src="../assets/src/video3.png"></div>
        <div class="biaoti"><p>创作《黄陵古柏》<br>1994年</p></div>
      </div>
      <div class="photomodel">
        <div class="photo"><img src="../assets/src/video4.png"></div>
        <div class="biaoti"><p>创作《漂流伴水声》<br>1993年</p></div>
      </div>
      <div class="photomodel">
        <div class="photo"><img src="../assets/src/video5.png"></div>
        <div class="biaoti"><p>关山月专题片</p></div>
      </div>
    </div>
    <transition name="bounce">
      <div class="videoPlayer" v-if="videoPlay">
        <elVideo/>
      </div>
    </transition>
  </div>
</template>

<script>
import elVideo from '../components/Video'

export default {
  name: 'Photo',
  data () {
    return {
      show: false
    }
  },
  components: { elVideo },
  computed: {
    title () {
      return this.$store.state.photoTitle
    },
    leftMenuSeen () {
      return this.$store.state.leftMenuSeen
    },
    photos () {
      return this.$store.state.photos.slice(0, 6)
    },
    videoPlay () {
      return this.$store.state.isDisplay
    }
  },
  methods: {
    set (value) {
      return this.$store.commit('setPhotoList', value)
    },
    openLeftMenu () {
      return this.$store.commit('openLeftMenu')
    },
    closeLeftMenu () {
      return this.$store.commit('closeLeftMenu')
    },
    // { true: 弹出播放器, false: 关闭播放器 }
    showVideo (value) {
      return this.$store.commit('setPlayer', value)
    }
  },
  created: function () {
    this.$store.commit('setMenuBarSeen', true)
  }
}
</script>


<style lang="less" scoped>
@import "../assets/animate.less";
.test {
  z-index: 100;
}
.video-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  .mid{
  	width: 80vw;
  	height: 80vh;
    margin-top: 10vh;
  }
}
.menu-wrapper-left {
  position: fixed;
  left: 1vh;
  bottom: 1vw;
}
.photomodel{
	width: 16vw;
	height: 28vh;
	margin-top: 6vh;
	margin-left: 4vw;
	float: left;
}
.photo{
	width: 14vw;
	height: 16vh;
  cursor: pointer;
}
.photo img{
	width: 14vw;
	height: 16vh;

}
.biaoti{
	width: 14vw;
	height:8.5vh;
	text-align: center;
	margin-top: 1.5vh;
	padding-top: 2.2vh;
	background-size: contain;
	background-image: url(../assets/src/video_bg.png);
	background-repeat: no-repeat;
	background-position: 100% ,100%;
}
.biaoti p{
	color: #000000;
	text-align: center;
	font-size: 1vw;
	line-height: 2vh;
}
.videoPlayer {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}

</style>
