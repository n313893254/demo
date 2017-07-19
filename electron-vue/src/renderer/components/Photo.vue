<template lang="html">
  <div class="">
    <MenuBar/>
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
      <div class="photo">
        <img src="../assets/src/photo.jpg">
        <p>关山月与朋友合照</p>
      </div>
      <div class="photo">
        <img src="../assets/src/photo.jpg">
        <p>关山月与朋友合照</p>
      </div>
      <div class="photo">
        <img src="../assets/src/photo.jpg">
        <p>关山月与朋友合照</p>
      </div>
      <div class="photo">
        <img src="../assets/src/photo.jpg">
        <p>关山月与朋友合照</p>
      </div>
      <div class="photo">
        <img src="../assets/src/photo.jpg">
        <p>关山月与朋友合照</p>
      </div>
      <div class="photo">
        <img src="../assets/src/photo.jpg">
        <p>关山月与朋友合照</p>
      </div>
      <div class="photo">
        <img src="../assets/src/photo.jpg">
        <p>关山月与朋友合照</p>
      </div>
      <div class="photo">
        <img src="../assets/src/photo.jpg">
        <p>关山月与朋友合照</p>
      </div>
      <div class="photo">
        <img src="../assets/src/photo.jpg">
        <p>关山月与朋友合照</p>
      </div>
      <div class="photo">
        <img src="../assets/src/photo.jpg">
        <p>关山月与朋友合照</p>
      </div>
      <div class="photo">
        <img src="../assets/src/photo.jpg">
        <p>关山月与朋友合照</p>
      </div>
      <div class="photo">
        <img src="../assets/src/photo.jpg">
        <p>关山月与朋友合照</p>
      </div>
    </div>
  </div>
</template>

<script>
import MenuBar from './MenuBar'

export default {
  name: 'Photo',
  components: { MenuBar },
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
