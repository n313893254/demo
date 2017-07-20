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
