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

    // 禁用选中
    document.onselectstart = function () {
      return false
    }
    document.oncontextmenu = function () {
      return false
    }
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
	font-family: "仿宋";
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
  height: 3.5vh;
  position: fixed;/*固定作用*/
  top: 0px;
  background-color: #a3a36f;
  background-color: rgba(163, 163, 111, 0.5);
  _top: expression(documentElement.scrollTop + "px"); /* 把导航栏位置放在浏览器垂直滚动条的顶端  关键 */
  z-index: 9999; /* 让导航栏浮在网页的高层位置，遇到flash和图片时候也能始终保持最外层 */
}
.small_logo img{
	margin-left: 2vw;
	margin-top: 0.6vh;
	float: left;
	width: 6vw;
	height: 1.8vh;
}
.yemei_title{
	margin-left: 0.5vw;
	margin-top: 0.6vh;
	float: left;
	font-size: 1vw;
	color: #714A3B;
}
.yemei_year{
	margin-left: 25vw;
	float: left;
	width: 8vw;
	height: 2vh;
	margin-top: 0.8vh;
}
.yemei_year img{
	width:9vw;
	height: 2.2vh;
}
.gongsi{
	float: right;
	width: 12vw;
	margin-top: 0.6vh;
	font-size: 1vw;
	margin-right: 0.5vw;
}
.gongsi img{
	margin-right: 0.5vw;
    margin-top: 0.3vh;
	float: left;
	width: 1vw;
	height:1.8vh;
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
.left_box{
  width: 33vw;
  height: 90vh;
  float: left;
  color: #000000;
  font-size: 1.1vw;
  margin-left: 1vw;
  margin-top: 2vh;
  overflow: hidden;
}
  .left_title{
	width: 33vw;
	height: 90vh;
	float: left;
	color: #000000;
	font-size: 1.1vw;
	margin-left: 2vw;
	margin-top: 1vh;
    overflow-y: scroll;
}
.left_title ul{
  margin: 0;
  line-height: 30px;
}
.left_title li{
  list-style-type: none;
}
.left_title li:hover{
  color:#714A3B;
;
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
.right_wenzhang{
	width:47vw;
	height: 54vh;
	margin-top: 14.5vh;
	margin-left: 35vw;
	position: fixed;
	margin-right: 3.5vw;
	background-image: url(assets/src/history_banner.png);
	background-size: contain;
	background-repeat: no-repeat;
}
.article_words{
	width: 32vw;
	height: 39vh;
  margin-left: 7.5vw;
  margin-top: 6vh;
  overflow: hidden;
  line-height: 1vh;
  font-size: 1vw;
  overflow: hidden;

}
.article_words p{
	text-indent: 2em;
	color: #B65D03;
	line-height: 2.5vh;
}
.article_words h2{
	text-align: center;
	color: #F6C374;
    padding:1vw;
   line-height:2.7vh;
   margin-top: 2vh;
}
.article_conent{
  padding: 2vw;
}
.author{
	width: 32vw;
	color: #F6C374;
  margin-top: 1vh;
    padding-bottom: 0.5vh;
}
.writer{
	width: 16vw;
	float: left;
    color:#F6C374;
    font-size:0.8vw;
}
.data{
	width: 3vw;
	float: right;
    font-size:0.8vw;
}
.data p{
	float: right;
	color:#F6C374;
}
</style>
