<template lang="html">
  <div class="Box">
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
        	<router-link class="button" to="/PoetryList"><img src="../assets/src/history_07.png"></router-link>
        </div>
        <div  @click="set('个人著作')">
        	<router-link class="button" to="/History"><img src="../assets/src/history_14.png"></router-link>
        </div>
        <div class="button" @click="closeLeftMenu()"><img src="../assets/src/fenlei_29.png"></div>
      </div>
      <div class="menu" v-else>
        <div class="button" @click="openLeftMenu()"><img src="../assets/src/fenlei_29.png"></div>
      </div>
    </div>
    <p>照片列表</p>
    <div class="mid">
      <div class="photomodel">
       <div class="photo"><img src="../assets/src/photo.jpg"></div>
       <div class="biaoti"><p>40年代，关山月夫妇（左二，左三）、七...</p></div>
      </div>
      <div class="photomodel">
       <div class="photo"><img src="../assets/src/photo.jpg"></div>
       <div class="biaoti"><p>40年代，关山月夫妇（左二，左三）、七...</p></div>
      </div>
      <div class="photomodel">
       <div class="photo"><img src="../assets/src/photo.jpg"></div>
       <div class="biaoti"><p>40年代，关山月夫妇（左二，左三）、七...</p></div>
      </div>
      <div class="photomodel">
       <div class="photo"><img src="../assets/src/photo.jpg"></div>
       <div class="biaoti"><p>40年代，关山月夫妇（左二，左三）、七...</p></div>
      </div>
      <div class="photomodel">
       <div class="photo"><img src="../assets/src/photo.jpg"></div>
       <div class="biaoti"><p>40年代，关山月夫妇（左二，左三）、七...</p></div>
      </div>
      <div class="photomodel">
       <div class="photo"><img src="../assets/src/photo.jpg"></div>
       <div class="biaoti"><p>40年代，关山月夫妇（左二，左三）、七...</p></div>
      </div>
      <div class="photomodel">
       <div class="photo"><img src="../assets/src/photo.jpg"></div>
       <div class="biaoti"><p>40年代，关山月夫妇（左二，左三）、七...</p></div>
      </div>
      <div class="photomodel">
       <div class="photo"><img src="../assets/src/photo.jpg"></div>
       <div class="biaoti"><p>40年代，关山月夫妇（左二，左三）、七...</p></div>
      </div>
      <div class="photomodel">
       <div class="photo"><img src="../assets/src/photo.jpg"></div>
       <div class="biaoti"><p>40年代，关山月夫妇（左二，左三）、七...</p></div>
      </div>
      <div class="photomodel">
       <div class="photo"><img src="../assets/src/photo.jpg"></div>
       <div class="biaoti"><p>40年代，关山月夫妇（左二，左三）、七...</p></div>
      </div>
      <div class="photomodel">
       <div class="photo"><img src="../assets/src/photo.jpg"></div>
       <div class="biaoti"><p>40年代，关山月夫妇（左二，左三）、七...</p></div>
      </div>
      <div class="photomodel">
       <div class="photo"><img src="../assets/src/photo.jpg"></div>
       <div class="biaoti"><p>40年代，关山月夫妇（左二，左三）、七...</p></div>
      </div>
      <div class="photomodel">
       <div class="photo"><img src="../assets/src/photo.jpg"></div>
       <div class="biaoti"><p>40年代，关山月夫妇（左二，左三）、七...</p></div>
      </div>
      <div class="photomodel">
       <div class="photo"><img src="../assets/src/photo.jpg"></div>
       <div class="biaoti"><p>40年代，关山月夫妇（左二，左三）、七...</p></div>
      </div>
      <div class="photomodel">
       <div class="photo"><img src="../assets/src/photo.jpg"></div>
       <div class="biaoti"><p>40年代，关山月夫妇（左二，左三）、七...</p></div>
      </div>
    </div>
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
  width: 84vw;
  height: 90vh;
  margin-left: 9vw;
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
  float: left;
}
.photo{
	width: 15vw;
	height: 15vh;
	background-color: #fffff;
}
.photo img{
	width: 14vw;
	height: 14vh;
	margin: auto;

}
.biaoti{
	width: 13.5vw;
	height:8.5vh;
	margin-top: 1.5vw;
	background-size: contain;
	background-image: url(../assets/src/photo_12.png);
	background-repeat: no-repeat;
	background-position: 100% ,100%;
}
.biaoti p{
	color: #00000;
	text-align: center;
	font-size: 1vw;
	text-indent: 1em;
	padding-top: 1.5vh;
}
</style>
