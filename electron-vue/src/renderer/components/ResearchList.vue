
<template lang="html">
  <div class="">
    <MenuBar/>
    <div class="menu-wrapper-left">
      <div class="menu" v-if="leftMenuSeen">
        <div  @click="set('30-40s 30年-40年')">
        	<router-link class="button" to="/ResearchList">30-40s 30年-40年</router-link>
        </div>
        <div  @click="set('50-70s 50年-70年')">
        	<router-link class="button" to="/ResearchList">50-70s 50年-70年</router-link>
        </div>
        <div  @click="set('80-90s 80年-90年')">
        	<router-link class="button" to="/ResearchList">80-90s 80年-90年</router-link>
        </div>
        <div  @click="set('20th 2000年以后')">
        	<router-link class="button" to="/ResearchList">20th 2000年以后</router-link>
        </div>
        <div class="button" @click="closeLeftMenu()">返回</div>
      </div>
      <div class="menu" v-else>
        <div class="button" @click="openLeftMenu()">分类菜单</div>
      </div>
    </div>
    <p>诗词列表</p>
      <div class="mid">
    	<div class="top">
    	  <div class="article">
    	  	<p>0世纪的中国，走过了一个由战乱到和平、由殖民到独立、由衰落到强盛、
    	  		 由屈辱到尊严的历程，在这个跌宕起伏的背景中，
    	  		 中国古老的文化又是怎样地延 续和书写着民族不屈的历史!
    	  		 恰如那古丝绸之路上的敦煌寂然地执著、无声地见 证那些来了又退去
    	  		 、那些失了又复得的故事，见证《开国大典》的庄严和东西方 
    	  		 文化论争中传统文化的博大与力量。</p>
    	  </div>
    	</div>
      <div class="article_title">
      <div class="container">
        <ul class="time-horizontal">
            <li><b></b>无声的庄严</li>
            <li><b></b>艺术的力量</li>
            <li><b></b>返本求真</li>
            <li><b></b><router-link  to="/WritingList/ArticleDetail">无声的庄严</router-link></li>
            <li><b></b>艺术的力量</li>
            <li><b></b>返本求真</li>
            <li><b></b>艺术的力量</li>
            <li><b></b>返本求真</li>
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
  border: 2px solid #4c4c4c;
  border-radius: 8px;
  background: #4c4c4c;
  }
</style>
