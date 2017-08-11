<template lang="html">
  <div class="page">
    <MenuBar/>
    <!-- <TransisionLayer/> -->
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
    <div class="search_kuang">
     <div class="search_img"></div>
     <div class="search"><input type="search" class="search" placeholder="请输入拼音首字母"></div>
     </div>
     <div class="sousu"><router-link to="/Searchlist"><img src="../assets/src/ss1_34.png"></router-link></div>
        </div>
        <div class="method" id="mehtod">
           <p class="first">
           	<a >Q</a>&nbsp;
           	<a >W</a>&nbsp;
           	<a >E</a>&nbsp;
           	<a >R</a>&nbsp;
           	<a >T</a>&nbsp;
           	<a >Y</a>&nbsp;
           	<a >U</a>&nbsp;
           	<a >I</a>&nbsp;
           	<a >O</a>&nbsp;
           	<a >P</a></p><br>
           <p><a >A</a>&nbsp;
           	<a >S</a>&nbsp;
           	<a >D</a>&nbsp;
           	<a >F</a>&nbsp;
           	<a >G</a>&nbsp;
           	<a >H</a>&nbsp;
           	<a >J</a>&nbsp;
           	<a >K</a>&nbsp;
           	<a >L</a></p><br>
           <p><a >Z</a>&nbsp;
           	<a >X</a>&nbsp;
           	<a >C</a>&nbsp;
           	<a >V</a>&nbsp;
           	<a >B</a>&nbsp;
           	<a >N</a>&nbsp;
           	<a >M</a></p>
           <div class="method_img">
           <img src="../assets/src/dele2dowm_40.png">
           <img src="../assets/src/deledown_42.png">
           </div>
        </div>
  </div>
</template>

<script>
import $ from 'jquery'
import MenuBar from '../components/MenuBar'
import TransisionLayer from '../components/TransisionLayer'

export default {
  name: 'Search',
  components: { MenuBar, $, TransisionLayer },
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
  },
  created: function () {
    this.$store.commit('closeRightMenu')
  },
  mounted: function () {
    $('.method').hide()
    $('.search_kuang').hover(function () {
      $('.method').show()
    }, function () {
      $('.method').hide()
    })
    $('.method').hover(function () {
      $('.method').show()
    }, function () {
      $('.method').hide()
    })
  }
}
</script>

<style lang="less" scoped>

.page {
  width: 100%;
}
.searchBar  {
	width: 100vw;
	height: 5.5vh;
	float: left;
}
.search_kuang{
    width:45vw;
    height: 5vh;
    border-radius: 20px;
    float: left;
    margin-left: 23vw;
    background-color: #ffffff;
    -webkit-box-shadow: #000000;
    -moz-box-shadow: #000000;
    box-shadow: #000000 ;
}
.search_img{
    width:2vw;
    height: 3vh;
    float: left;
    margin-top: 1vh;
    margin-left: 0.5vw;
    background-image: url(../assets/src/sousuo_03.png);
    background-size: contain;
    background-repeat: no-repeat;
}
.search{
    width:41vw;
    height:5vh;
    float: left;
    opacity: 0.8;
    border: dashed 1px #ffffff;
    background-color: transparent;
    outline-style: none;
}
.sousu{
	width: 5vw;
	height: 5vh;
	float: left;
	margin-top: 0.5vh;
	margin-left: 5vh;
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
	width: 30vw;
	height: 25vh;
	float: left;
    background-image: url(../assets/src/search_02.png);
    background-size: contain;
    background-repeat: no-repeat;
	margin-left: 25vw;
}
.method p{
	text-align: center;
	font-size: 1.5vw;
}
.first{
	padding-top: 2.1vh;
}
.method_img{
	width: 30vw;
	height: 3vh;
    float: left;
    margin-left: 21.5vw;

}
.method_img img{
	width: 2.5vw;
	height: 3vh;
    float: left;
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
