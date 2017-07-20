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
    <p>视频列表</p>
      <div class="mid">
      	<router-link to="/VideoList/Video">
      		<div class="photo">
        	<img src="../assets/src/video.jpg">
        	<p>创作过程</p>
      		</div>
      	</router-link>
      	<router-link to="/VideoList/Video">
      		<div class="photo">
        	<img src="../assets/src/video.jpg">
        	<p>创作过程</p>
      		</div>
      	</router-link>
      	<router-link to="/VideoList/Video">
      		<div class="photo">
        	<img src="../assets/src/video.jpg">
        	<p>创作过程</p>
      		</div>
      	</router-link>
      	<router-link to="/VideoList/Video">
      		<div class="photo">
        	<img src="../assets/src/video.jpg">
        	<p>创作过程</p>
      		</div>
      	</router-link>
      	<router-link to="/VideoList/Video">
      		<div class="photo">
        	<img src="../assets/src/video.jpg">
        	<p>创作过程</p>
      		</div>
      	</router-link>
      	<router-link to="/VideoList/Video">
      		<div class="photo">
        	<img src="../assets/src/video.jpg">
        	<p>创作过程</p>
      		</div>
      	</router-link>
      	<router-link to="/VideoList/Video">
      		<div class="photo">
        	<img src="../assets/src/video.jpg">
        	<p>创作过程</p>
      		</div>
      	</router-link>
      	<router-link to="/VideoList/Video">
      		<div class="photo">
        	<img src="../assets/src/video.jpg">
        	<p>创作过程</p>
      		</div>
      	</router-link>
      	<router-link to="/VideoList/Video">
      		<div class="photo">
        	<img src="../assets/src/video.jpg">
        	<p>创作过程</p>
      		</div>
      	</router-link>
      	<router-link to="/VideoList/Video">
      		<div class="photo">
        	<img src="../assets/src/video.jpg">
        	<p>创作过程</p>
      		</div>
      	</router-link>
      	<router-link to="/VideoList/Video">
      		<div class="photo">
        	<img src="../assets/src/video.jpg">
        	<p>创作过程</p>
      		</div>
      	</router-link>
      	<router-link to="/VideoList/Video">
      		<div class="photo">
        	<img src="../assets/src/video.jpg">
        	<p>创作过程</p>
      		</div>
      	</router-link>
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
	width: 83vw;
	height: 90vh;
}
.menu-wrapper-left {
  position: fixed;
  left: 1vh;
  bottom: 1vw;
}
.photo{
	width: 15vw;
	height: 35vh;
	float: left;
	margin: 3%;
	margin-top: 2.5%;
}
img{
	width: 15vw;
	height: 25vh;
}
</style>
