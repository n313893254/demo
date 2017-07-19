<template lang="html">
  <div class="">
    <MenuBar/>
    <div class="menu-wrapper-left">
      <div class="menu" v-if="leftMenuSeen">
        <div  @click="set('视频')">
        	<router-link class="button" to="/VideoList">视频</router-link>
        </div>
        <div  @click="set('照片')">
        	<router-link class="button" to="/Photo">照片</router-link>
        </div>
        <div  @click="set('诗词')">
        	<router-link class="button" to="/PoetryList">诗词</router-link>
        </div>
        <div  @click="set('个人著作')">
        	<router-link class="button" to="/WritingList">个人著作</router-link>
        </div>
        <div class="button" @click="closeLeftMenu()">返回</div>
      </div>
      <div class="menu" v-else>
        <div class="button" @click="openLeftMenu()">分类菜单</div>
      </div>
    </div>
    <p>个人著作列表</p>
    <div class="mid">
    	<div class="top">
    	  <div class="article">
    	  	《关山月临摹敦煌壁画》自序<br>
           作者：XXX<br>
           时间：1988年12月<br>
           <p>翰墨轩主人许礼平先生要编辑出版我早年所临的敦煌壁画，
           意在为研究书史者提供资料。这批临画，经历了几许沧桑，
           今能编印问世，值得高兴。</p>
    	  </div>
    	</div>
      <div class="article_title">
      <div class="container">
        <ul class="time-horizontal">
            <li><b></b>著作1</li>
            <li><b></b>著作2</li>
            <li><b></b>著作3</li>
            <li><b></b><router-link  to="/WritingList/ArticleDetail">著作4</router-link></li>
            <li><b></b>著作5</li>
            <li><b></b>著作6</li>
            <li><b></b>著作7</li>
            <li><b></b>著作8</li>
        </ul>
    </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuBar from './MenuBar'

export default {
  name: 'Photo',
  components: { MenuBar },
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
  border: 2px solid #E9967A;
  border-radius: 8px;
  background:#E9967A;
  }
 
</style>
