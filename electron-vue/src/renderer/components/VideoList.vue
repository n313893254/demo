<template lang="html">
  <div class="">
    <div class="menu-wrapper-left">
      <div class="menu" v-if="leftMenuSeen">
        <div  @click="set('视频')">
        	<router-link class="button" to="/VideoList"><img src="../assets/src/history_08.png"></router-link>
        </div>
        <div  @click="set('照片')">
        	<router-link class="button" to="/Photo"><img src="../assets/src/history_06.png"></router-link>
        </div>
        <div  @click="set('诗篇')">
        	<router-link class="button" to="/PoeryList"><img src="../assets/src/history_10.png"></router-link>
        </div>
        <div  @click="set('个人著作')">
        	<router-link class="button" to="/WritingList"><img src="../assets/src/history_03.png"></router-link>
        </div>
        <div class="button" @click="closeLeftMenu()"><img src="../assets/src/book_35.png"></div>
      </div>
      <div class="menu" v-else>
        <div class="button" @click="openLeftMenu()"><img src="../assets/src/book_35.png"></div>
      </div>
    </div>·
    <p>视频列表</p>
      <div class="mid">
      	<div class="photomodel">
       <div class="photo" to="/Video"><img src="../assets/src/video1.png"></div>
       <div class="biaoti" to="/Video"><p>创作过程</p></div>
      </div>
      <div class="photomodel">
       <div class="photo" to="/Video"><img src="../assets/src/video2.png"></div>
       <div class="biaoti" to="/Video"><p>创作《巨榕》<br>1994年</p></div>
      </div>
      <div class="photomodel">
       <div class="photo" to="/Video"><img src="../assets/src/video3.png"></div>
       <div class="biaoti" to="/Video"><p>创作《黄陵古柏》<br>1994年</p></div>
      </div>
      <div class="photomodel">
       <div class="photo" to="/Video"><img src="../assets/src/video4.png"></div>
       <div class="biaoti" to="/Video"><p>创作《漂流伴水声》<br>1993年</p></div>
      </div>
      <div class="photomodel">
       <div class="photo" to="/Video"><img src="../assets/src/video5.png"></div>
       <div class="biaoti" to="/Video"><p>关山月专题片</p></div>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Photo',
  computed: {
    title () {
      return this.$store.state.photoTitle
    },
    leftMenuSeen () {
      return this.$store.state.leftMenuSeen
    },
    photos () {
      return this.$store.state.photos.slice(0, 6)
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
    }
  },
  created: function () {
    this.$store.commit('setMenuBarSeen', true)
  }
}
</script>


<style lang="css" scoped>
.mid{
	width: 80vw;
	height: 80vh;
	margin-left: 2vw;
	margin-top: 8vh;
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
p{
	color: #000000;
	text-align: center;
	font-size: 1vw;
	line-height: 2vh;
}
</style>
