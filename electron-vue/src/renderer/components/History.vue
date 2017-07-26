<template lang="html">
  <div class="">
    <p>史料 {{ this.$route.path }}</p>
    <div class="menu-wrapper-left">
    <div class="menu">
    <router-link class="button" to="/WritingList">个人著作列表</router-link>
    <router-link class="button" to="/PoetryList">诗词列表</router-link>
    <router-link class="button" to="/VideoList">视频列表</router-link>
    <router-link class="button" to="/Photo">照片列表</router-link>
    </div>
  </div>
  <div class="mid">
  	<div class="img_tubiao">
  			<img src="../assets/src/tubiao.jpg">
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
  		<img src="../assets/src/wenzhang_photo.jpg">
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
}
.left_title{
	width: 27vw;
	height: 90vh;
	float: left;
	color: #F1FA85;
	font-size: 1vw;
	margin-left: 1vw;
}
.img_tubiao{
	float:left;
}
.img_tubiao img{
	padding-top: 30vh;
}
.right_wenzhang{
	width:45vw;
	height: 90vh;
	float: right;
}
.right_wenzhang img{
	width: 45vw;
	height: 90vh;
}
</style>
