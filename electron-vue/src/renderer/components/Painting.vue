<template lang="html">
  <div class="body">
  	<div class="nav">
  		<div class="small_logo"><img src="../assets/src/logogsy_03.png"></div>
  	  <div class="yemei_title">知识库》史料》画作</div>
  	  <div class="gongsi"><img src="../assets/src/logoe4_06.png">
  	  	<p>伊世易技术支持</p></div>
  	</div>
    <div class="menu-wrapper-left">
      <div class="menu" v-if="leftMenuSeen">
        <div class="button" @click="set('书法')"><img src="../assets/src/pic_03.png"></div>
        <div class="button" @click="set('连环画')"><img src="../assets/src/pic_06.png"></div>
        <div class="button" @click="set('速写')"><img src="../assets/src/pic_08.png"></div>
        <div class="button" @click="set('人物')"><img src="../assets/src/pic_10.png"></div>
        <div class="button" @click="set('临摹')"><img src="../assets/src/pic_12.png"></div>
        <div class="button" @click="set('山水')"><img src="../assets/src/pic_14.png"></div>
        <div class="button" @click="set('花鸟')"><img src="../assets/src/pic_16.png"></div>
        <div class="button" @click="closeLeftMenu()"><img src="../assets/src/book_35.png"></div>
      </div>
      <div class="menu" v-else>
        <div class="button" @click="openLeftMenu()"><img src="../assets/src/book_35.png"></div>
      </div>
    </div>
    <div class="title">
      <span> {{ title }} </span>
    </div>
    <div class="img-list">
      <div class="img" v-for="painting in paintings">
        <router-link class="huazuo"
          :to="{ path: '/Painting/Display', query: { src: painting.imgSrc }}">
          <img :src="painting.imgSrc" alt="">
        </router-link>
        <div class="biaoti">
          <p>{{ painting.title }}</p>
          <p>{{ painting.year }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Painting',
  computed: {
    title () {
      return this.$store.state.paintingTitle
    },
    leftMenuSeen () {
      return this.$store.state.leftMenuSeen
    },
    paintings () {
      return this.$store.state.paintings.slice(0, 12)
    }
  },
  methods: {
    set (value) {
      return this.$store.commit('setPaintingList', value)
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
.body {
  overflow: hidden;
}
.menu-wrapper-left {
  position: fixed;
  left: 1vh;
  bottom: 1vw;
}
.title{
	background-image:url(../assets/src/flower_11.png);
	background-repeat: no-repeat;
	background-size: contain;
  background-position: center;
	width: 100vw;
	color:#F1FA85;
  margin-bottom: 0;
}
.title span{
	font-size: 2.5vw;
	text-align: center;
}
.img {
  height: 30vh;
  width: 16vw;
  margin-bottom: 16vh;
}

.img  img {
  height: 100%;
  width: 100%;
  border: 1px solid #000;
}
.img p {
  color: #FBFC7D;
  font-size: 2vh;
}
.biaoti{
	width: 15vw;
	height:8.5vh;
	margin-top: 1vh;
	background-size: contain;
	background-image: url(../assets/src/lable_11.png);
	background-repeat: no-repeat;
	background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.title {
  height: 10vh;
  text-align: center;
  margin: 5vh auto;
  line-height: 10vh;
  font-size: 5vh;
}

.img-list {
  display: flex;
  justify-content: space-between;
  width: 70vw;
  margin-left: 12vw;
  margin-right: 0;
  flex-wrap: wrap;
}
</style>
