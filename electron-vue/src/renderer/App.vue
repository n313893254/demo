<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <MenuBar v-if="menuBarSeen"/>
  </div>
</template>

<script>
import MenuBar from './components/MenuBar'

export default {
  name: 'electron-vue',
  components: { MenuBar },
  computed: {
    menuBarSeen () {
      return this.$store.state.menuBarSeen
    }
  },
  created: function () {
    this.$store.commit('setMenuBarSeen', true)
  }
}
</script>

<style>
/* CSS */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
	background-image:url(assets/src/bg.jpg);
	background-repeat: no-repeat;
	background-position: right bottom ;
	background-attachment:fixed;
	background-size: cover;
	font-family: "宋体";
}
body::-webkit-scrollbar {
  display: none;
}
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.Box{
	width: 100vw;
}
.box {
  border: 1px solid #000;
}
/* 固定导航条*/
.nav{
  width: 100vw;
  height: 5vh;
  position: fixed;/*固定作用*/
  top: 0px;
  background-color: #a3a36f;
  background-color: rgba(163, 163, 111, 0.5);
  _top: expression(documentElement.scrollTop + "px"); /* 把导航栏位置放在浏览器垂直滚动条的顶端  关键 */
  z-index: 9999; /* 让导航栏浮在网页的高层位置，遇到flash和图片时候也能始终保持最外层 */
}
.small_logo img{
	margin-left: 2vw;
	margin-top: 1vh;
	float: left;
}
.yemei_title{
	margin-left: 0.5vw;
	margin-top: 1.2vh;
	float: left;
	font-size: 1vw;
	color: #714A3B;
}
.yemei_year{
	margin-left: 22vw;
	float: left;
	width: 8vw;
	height: 5vh;
	margin-top: 0.2vh;
}
.gongsi{
	margin-top: 1.4vh;
	float: right;
	width: 12vw;
	margin-top: 2vh;
	font-size: 1vw;
	margin-right: 3vw;
}
.gongsi img{
	margin-right: 1vw;
	float: left;

}
/*图标的大小*/
 .button {
    width: 10vw;
    height: 10vh;
    display: inline-block;
    text-decoration: none;
    position: relative;
    margin-top: 1vh;
    cursor: pointer;
  }
  .menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .menu img{
  	max-width: 100%;
  	max-height: 100%;
  	position: absolute;
  	top: 0;
  	bottom: 0;
  	left: 0;
  	right: 0;
  	margin: auto;

  }
  .fade-enter-active {
    transition: all .3s ease;
  }
  .fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .menu-wrapper-right {
    position: fixed;
    right: 1vh;
    bottom: 1vw;
  }
  /* 史料和研究的内容*/
  .left_title{
	width: 30vw;
	height: 90vh;
	float: left;
	color: #000000;
	font-size: 1.1vw;
	margin-left: 5vw;
	margin-top: 5vh;
}
.left_title ul{
	margin: 0; 
	line-height: 30px;
}
.left_title a{
	color: #000000;
	text-decoration: none;
}
.left_title a:hover{
	text-decoration: underline;
}
.str_wrap {
	overflow:hidden;
	//zoom:1;
	width:100%;
	position:relative;
	-moz-user-select: none;
	-khtml-user-select: none;
	user-select: none;  
}
.str_move { 
	white-space:nowrap;
	position:absolute; 
	top:0; 
	left:0;
	cursor:move;
}
.str_move_clone {
	display:inline-block;
	//display:inline;
	//zoom:1;
	vertical-align:top;
	position:absolute; 
	left:100%;
	top:0;
}
.str_vertical .str_move_clone {
	left:0;
	top:100%;
}
.str_down .str_move_clone {
	left:0;
	bottom:100%;
}
.str_vertical .str_move,
.str_down .str_move {
	white-space:normal;
	width:100%;
}
.str_static .str_move,
.no_drag .str_move,
.noStop .str_move{
	cursor:inherit;
}
.str_wrap img {
	max-width:none !important;	
}
.img_tubiao{
	float:left;
	width: 3vw;
	height: 3vh;
	position: fixed;
}
.img_tubiao img{
	padding-top: 30vh;
	width: 100%;
}
.right_wenzhang{
	width:43vw;
	height: 50vh;
	margin-top: 15vh;
	margin-left: 38vw;
	position: fixed;
	margin-right: 3vw;
	background-image: url(assets/src/book_03.png);
	background-size: contain;
	background-repeat: no-repeat;
}
.article_words{
	width: 32vw;
	height: 41vh;
	min-height: 41vh;
	border: 1px dashed #E9967A;
  margin-left: 5.5vw;
  margin-top: 4vh;
  overflow: hidden;
  line-height: 2em;
  font-size: 0.9vw;
  line-height: 25px;
  clear: both;
  word-break: break-word;

}
.article_words p{
	text-indent: 2em;
}
.article_words h2{
	text-align: center;
}
.author{
	width: 32vw;
}
.writer{
	width: 16vw;
	float: left;
}
.data{
	width: 16vw;
	float: right;
}
.data p{
	float: right;
}
</style>
