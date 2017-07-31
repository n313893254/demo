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
  .test {
    position: fixed;
    top: 5vh;
    right: 5vw;
    border: 1px solid #000;
  }
  /* CSS */
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body{
  	background-image:url(assets/src/bg.jpg);
  	background-repeat: no-repeat;
  	background-position: right bottom ;
  	background-attachment:fixed;
  	background-size: cover;  
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
	 width:100vw;
  height: 5vh;
  position:fixed;/*固定作用*/
  top:0px;
  background-color:#707070;
  opacity: 0.5;
  _position:absolute;/* 把导航栏位置定义为绝对位置  关键*/
  _top:expression(documentElement.scrollTop + "px"); /* 把导航栏位置放在浏览器垂直滚动条的顶端  关键 */
  z-index:9999; /* 让导航栏浮在网页的高层位置，遇到flash和图片时候也能始终保持最外层 */
}
.small_logo img{
	margin-left: 2vw;
	margin-top: 1vh;
	float: left;
}
.yemei_title{
	margin-left: 43vw;
	margin-top: 1vh;
	float: left;
	font-size: 1.1vw;
	color: #FBFC7D;
}
.gongsi{
	margin-top: 1vh;
	float: right;
	width: 12vw;
	font-size: 1.1vw;
	margin-right: 3vw;
	color: #FBFC7D;
}
.gongsi img{
	margin-right: 1vw;
	float: left;
	
}
/*图标的大小*/
 .button {
    width: 8vw;
    height: 8vh;
    display: inline-block;
    text-decoration: none;
    position: relative;
    margin: 10px 10px;
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
  .left_title{
	width: 27vw;
	height: 90vh;
	float: left;
	color: #F1FA85;
	font-size: 1.1vw;
	margin-left: 1vw;
}
.img_tubiao{
	float:left;
	width: 3vw;
	height: 3vh;
}
.img_tubiao img{
	padding-top: 30vh;
	width: 100%;
}
.right_wenzhang{
	width:43vw;
	height: 70vh;
	margin-left: 35vw;
	position: fixed;
	margin-right: 3vw;
	background-image: url(assets/src/book_03.png);
	background-size: contain;
	background-repeat: no-repeat;
}
.right_wenzhang img{
	width: 43vw;
	height: 70vh;
		float: right;
}
</style>
