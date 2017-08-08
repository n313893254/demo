<template lang="html">
  <div class="page">
    <MenuBar/>
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
  	<div class="search_banner"><img src="../assets/src/sslogo_17.png"></div>
  	<div class="tab_label">
  		<a href="#">画作</a>
  		<a href="#">史料</a>
  		<a href="#">研究</a>
  	</div>
    <div class="searchBar">
     <input type="search" class="kuang" placeholder="请输入拼音字母搜索" /></input>
     <div class="sousu"><router-link to="/Searchlist"><img src="../assets/src/ss1_34.png"></router-link></div>
        </div>
        <div class="method">
           <p class="first">
           	<a href="#">Q</a>&nbsp;
           	<a href="#">W</a>&nbsp;
           	<a href="#">E</a>&nbsp;
           	<a href="#">R</a>&nbsp;
           	<a href="#">T</a>&nbsp;
           	<a href="#">Y</a>&nbsp;
           	<a href="#">U</a>&nbsp;
           	<a href="#">I</a>&nbsp;
           	<a href="#">O</a>&nbsp;
           	<a href="#">P</a></p><br>
           <p><a href="#">A</a>&nbsp;
           	<a href="#">S</a>&nbsp;
           	<a href="#">D</a>&nbsp;
           	<a href="#">F</a>&nbsp;
           	<a href="#">G</a>&nbsp;
           	<a href="#">H</a>&nbsp;
           	<a href="#">J</a>&nbsp;
           	<a href="#">K</a>&nbsp;
           	<a href="#">L</a></p><br>
           <p><a href="#">Z</a>&nbsp;
           	<a href="#">X</a>&nbsp;
           	<a href="#">C</a>&nbsp;
           	<a href="#">V</a>&nbsp;
           	<a href="#">B</a>&nbsp;
           	<a href="#">N</a>&nbsp;
           	<a href="#">M</a></p>
           <div class="method_img">
           <img src="../assets/src/dele2dowm_40.png">
           <img src="../assets/src/deledown_42.png">
           </div>
        </div>
  </div>
</template>

<script>
import MenuBar from './MenuBar'

export default {
  name: 'Search',
  components: { MenuBar },
  computed: {
    title () {
      return this.$store.state.searchTitle
    },
    paintings () {
      return this.$store.state.paintings.slice(0, 6)
    }
  },
  methods: {
    set (value) {
      return this.$store.commit('setSearchList', value)
    }
  }
}
</script>

<style lang="css" scoped>

.page {
  width: 100%;
}
.searchBar  {
	width: 100vw;
	height: 6vh;
	float: left;
}
.kuang{
	width:45vw;
	height: 5vh;
	outline-style: none;
	border-radius: 20px;
	margin-left: 23vw;
	float: left;
	margin-top: 0.5vh;
}
.kuang{
	background-image: url(../assets/src/sousuo_03.png);
	background-repeat: no-repeat; 
	background-size: contain;
  background-position: 0px 0px;
  padding-left: 3vw; 
}
.sousu{
	width: 5vw;
	height: 5vh;
	float: left;
	margin-top: 0.5vh;
	margin-left: 5vh;
	outline-style: none;
	border-radius:20px;
	margin-left: 2vw;
	background-color: #FFFFFF;
}
.sousu img{
	width: 5vw;
	height: 5vh;
}
.search_banner{
	float: left;
	margin-top:10vh;
	margin-left: 25vw;
}
.method{
	background-color: #FFFFFF;
	width: 38vw;
	height: 30vh;
	float: left;
	margin-left: 27vw;
}
.method p{
	text-align: center;
	font-size: 2vw;
}
.first{
	padding-top: 4vh;
}
.method_img{
	width: 35vw;
	height: 6vh;
}
.method_img img{
	width: 4vw;
	height: 5.5vh;
	float: right;
	margin-right: 1vw;
}
.tab_label{
	margin-top: 45vh;
	width: 20vw;
	height: 5vh;
	margin-left: 25vw;
	font-size: 0.8vw;
}
a{
	color: #000000;
	text-decoration: none;
}
a:hover{
	color: #fdd69c;
	text-decoration: none;
}
</style>
