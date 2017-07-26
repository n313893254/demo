<template lang="html">
  <div class="Box">
  	<div class="nav">
  		<div class="small_logo"><img src="../assets/src/logoe4_06.png"></div>
  	  <div class="yemei_title">知识库》史料》研究</div>
  	  <div class="gongsi">伊世易技术支持</div>

  	</div>
  	<p>研究 {{ this.$route.path }}</p>
  	<div class="menu-wrapper-left" >
    <div class="menu">
    <router-link class="button" to="/ResearchList"><img src="../assets/src/book_31.png"></router-link>
    <router-link class="button" to="/ResearchList"><img src="../assets/src/book_27.png"></router-link>
    <router-link class="button" to="/ResearchList"><img src="../assets/src/book_22.png"></router-link>
    <router-link class="button" to="/ResearchList"><img src="../assets/src/book_17.png"></router-link>
    <router-link class="button" ><img src="../assets/src/book_35.png"></router-link>
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
  name: 'Research',
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
.mid{
	width: 85vw;
	height: 90vh;
}
.menu-wrapper-left {
  position: fixed;
  left: 1vh;
  bottom: 1vw;
}
.menu img{
	width: 100%;
	height: 100%;
}
.top{
	width: 85vw;
	height: 60vh;
	border: dashed 1px #FFFF00;
	float: left;
}
.article{
	width: 25vw;
	height: 20vh;
	margin-left: 35vw;
	margin-top: 20vh;
	color: forestgreen;
	font-size: 1.2vw;
	background-color:darksalmon;
}
.article_title{
	width: 85vw;
	height: 40vh;
	float: left;
}
.time-horizontal {
  list-style-type: none;
  border-top: 1px solid #707070;
  max-width: 85vw;
  padding: 0px;
  margin: 0px;
}
    
.time-horizontal li {
  float: left;
  position: relative;
  text-align: center;
  width: 12.5%;
  padding-top: 10px;
}
    
.time-horizontal li b:before {
  content: '';
  position: absolute;
  top: -10px;
  left: 47%;
  width: 12px;
  height: 12px;
  border: 2px solid #4c4c4c;
  border-radius: 8px;
  background: #4c4c4c;
  }
</style>
