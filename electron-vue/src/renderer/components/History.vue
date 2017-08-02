<template lang="html">
  <div class="Box">
  	<div class="nav">
  	  <div class="small_logo"><img src="../assets/src/logogsy_03.png"></div>
  	  <div class="yemei_title">知识库》史料》个人著作</div>
  	  <div class="gongsi"><img src="../assets/src/logoe4_06.png">
  	  	<p>伊世易技术支持</p></div>
  	</div>
    <p>史料 {{ this.$route.path }}</p>
    <div class="menu-wrapper-left">
      <div class="menu" v-if="leftMenuSeen">
        <div  @click="set('视频')">
        	<router-link class="button" to="/VideoList"><img src="../assets/src/history_08.png"></router-link>
        </div>
        <div  @click="set('照片')">
        	<router-link class="button" to="/Photo"><img src="../assets/src/history_06.png"></router-link>
        </div>
        <div  @click="set('诗篇')">
        	<router-link class="button" to="/PoetryList"><img src="../assets/src/history_10.png"></router-link>
        </div>
        <div  @click="set('个人著作')">
        	<router-link class="button" to="/WritingList"><img src="../assets/src/history_03.png"></router-link>
        </div>
        <div class="button" @click="closeLeftMenu()"><img src="../assets/src/book_35.png"></div>
      </div>
      <div class="menu" v-else>
        <div class="button" @click="openLeftMenu()"><img src="../assets/src/book_35.png"></div>
      </div>
    </div>

  <div class="mid">
  	<div class="img_tubiao">
  			<img src="../assets/src/book_10.png">
  		</div>
  	<div class="left_title">
  	   <p>>>香港回归敢赋一篇</p><br>
  	   <p>>>在深圳美术节上的发言</p><br>
  	   <p>>>艺术的堕落--游欧杂记</p><br>
  	   <p>>>香港回归敢赋一篇</p><br>
  	   <p>>>在深圳美术节上的发言</p><br>
  	   <p>>>艺术的堕落--游欧杂记</p><br>
  	   <p>>>香港回归敢赋一篇</p><br>
  	   <p>>>在深圳美术节上的发言</p><br>
  	   <p>>>艺术的堕落--游欧杂记</p><br>
  	   <p>>>香港回归敢赋一篇</p><br>
  	   <p>>>香港回归敢赋一篇</p><br>
  	   <p>>>在深圳美术节上的发言</p><br>
  	   <p>>>艺术的堕落--游欧杂记</p><br>
  	   <p>>>香港回归敢赋一篇</p><br>
  	   <p>>>追流溯源的艺术--为《平山郁夫丝绸之路素描集》出版而作</p><br>
  	   <p>>>在深圳美术节上的发言</p><br>
  	   <p>>>艺术的堕落--游欧杂记</p><br>
  	   <p>>>香港回归敢赋一篇</p><br>
  	   <p>>>香港回归敢赋一篇</p><br>
  	   <p>>>在深圳美术节上的发言</p><br>
  	   <p>>>艺术的堕落--游欧杂记</p><br>
  	   <p>>>香港回归敢赋一篇</p><br>
  	   <p>>>追流溯源的艺术--为《平山郁夫丝绸之路素描集》出版而作</p><br>
  	</div>
  	<div class="right_wenzhang">
      <p>sfdaf</p>
  	</div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'History',
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
.menu-wrapper-left {
  position: fixed;
  left: 1vh;
  bottom: 1vw;
}
.mid{
	width: 85vw;
	height: 90vh;
	margin: auto;
	margin-top: 4vh;
}
</style>
