<template lang="html">
  <div class="Box">
  	<div class="nav">
  	  <div class="small_logo"><img src="../assets/src/logoe4_06.png"></div>
  	  <div class="yemei_title">知识库》史料》个人著作</div>
  	  <div class="gongsi">伊世易技术支持</div>
  	</div>
    <p>史料 {{ this.$route.path }}</p>
    <div class="menu-wrapper-left">
    <div class="menu">
      <router-link class="button" to="/WritingList"><img src="../assets/src/history_03.png"></router-link>
      <router-link class="button" to="/PoetryList"><img src="../assets/src/history_10.png"></router-link>
      <router-link class="button" to="/VideoList"><img src="../assets/src/history_08.png"></router-link>
      <router-link class="button" to="/Photo"><img src="../assets/src/history_06.png"></router-link>
      <router-link class="button" to="/ResearchList"><img src="../assets/src/book_35.png"></router-link>
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
  		<img src="../assets/src/book_03.png">
  	</div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'History',
  computed: {
    message () {
      return this.$store.state.message
    }
  },
  created: function () {
    this.$store.commit('setMenuBarSeen', true)
  }
}
</script>

<style lang="css">
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
.menu img{
	width: 100%;
	height: 100%;
}
</style>
