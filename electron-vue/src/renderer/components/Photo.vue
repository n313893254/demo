<template lang="html">
  <div class="">
    <div class="menu-wrapper-left">
      <div class="menu" v-if="leftMenuSeen">
        <div  @click="set('视频')">
        	<router-link class="button" to="/VideoList">视频</router-link>
        </div>
        <div  @click="set('照片')">
        	<router-link class="button" to="/Photo">照片</router-link>
        </div>
        <div  @click="set('诗词')">
        	<router-link class="button" to="/PoetryList">诗词</router-link>
        </div>
        <div  @click="set('个人著作')">
        	<router-link class="button" to="/WritingList">个人著作</router-link>
        </div>
        <div class="button" @click="closeLeftMenu()">返回</div>
      </div>
      <div class="menu" v-else>
        <div class="button" @click="openLeftMenu()">分类菜单</div>
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
	width: 90vw;
	height: 90vh;
}
.menu-wrapper-left {
  position: fixed;
  left: 1vh;
  bottom: 1vw;
}
.photomodel{
	width: 18vw;
	height: 28vh;
	margin-top: 6vh;
	float: left;
}
.photo{
	width: 16vw;
	height: 16vh;
	margin: 1vw;
	border-radius: 15px;
	background-color: #ffffff;
}
img{
	width: 15vw;
	height: 15vh;
	margin-left: 0.5vw ;
	margin-top: 0.5vh;
}
.biaoti{
	width: 15vw;
	height:8.5vh;
	margin: 1.5vw;
	background-color: #5B493F;
	background-size: contain;
	background-image: url(../assets/src/biaoti.jpg);
	background-repeat: no-repeat;
	background-position: 100% ,100%;
}
p{
	color: #FBFC7D;
	text-align: center;
	font-size: 1vw;
	padding-top: 1.5vh;
}
</style>
