<template lang="html">
  <div class="Box">
  	<div class="nav">
  		<div class="small_logo"></div>
  	  <div class="yemei_title">知识库》史料》研究</div>
  	  <div class="gongsi"><img src="../assets/src/logoe4_06.png">
  	  	<p>伊世易技术支持</p>
  	  </div>
  	</div>
  	<p>研究 {{ this.$route.path }}</p>
  	<div class="menu-wrapper-left">
      <div class="menu" v-if="leftMenuSeen">
        <div  @click="set('30-40s 30年-40年')">
        	<router-link class="button" to="/ResearchList"><img src="../assets/src/book_31.png"></router-link>
        </div>
        <div  @click="set('50-70s 50年-70年')">
        	<router-link class="button" to="/ResearchList"><img src="../assets/src/book_27.png"></router-link>
        </div>
        <div  @click="set('80-90s 80年-90年')">
        	<router-link class="button" to="/ResearchList"><img src="../assets/src/book_22.png"></router-link>
        </div>
        <div  @click="set('20th 2000年以后')">
        	<router-link class="button" to="/ResearchList"><img src="../assets/src/book_17.png"></router-link>
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
  		<img src="../assets/src/book_03.png">
  	</div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Research',
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

<style lang="css">
.mid{
	width: 80vw;
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
