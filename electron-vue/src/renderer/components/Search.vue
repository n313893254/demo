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
    <div class="searchBar">
     <input type="search" placeholder="请输入拼音字母搜索" />
        </div>
    <div class="tab">
      <div @click="set('画作')"><img src="../assets/src/suoh_07.png"></div>
      <div @click="set('史料')"><img src="../assets/src/sousuo_09.png"></div>
      <div @click="set('研究')"><img src="../assets/src/sous_09.png"></div>
    </div>
    <div class="panel">
      <div class="content" v-if="title === '画作'">
        <div class="img-list">
          <div class="img" v-for="painting in paintings">
            <router-link :to="{ path: '/Painting/Display', query: { src: painting.imgSrc }}"><img :src="painting.imgSrc" alt=""></router-link>
            <div class="biaoti">
            <p>{{ painting.title }}</p>
            <p>{{ painting.year }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="content" v-else-if="title === '史料'">
      
      </div>
      <div class="content" v-else>
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
	margin-top: 6vh;
  background-color:#F7EEE5;
}
.searchBar input{
	width:50vw;
	height: 5vh;
	outline-style: none;
	border-radius: 20px;
	margin-left: 20vw;
	margin-top: 0.5vh;
}
.search_list{
	background-color: #FFFFFF;
	width: 32vw;
	height: 2vh;            
}
.tab div {
	float: left;
  margin-left: 4vw;
  margin-bottom: 2vh;
}
.panel {
  width: 79vh;
  background-color: #F3EEE8;
  margin-left: 4vw;
  margin-top: 18vh;
  width: 85vw;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-top-right-radius:25px ;
  height: 100vh;
}
.img {
  height: 30vh;
  width: 16vw;
  margin: 8vh 2vw;
}

.img  img {
  height: 100%;
  width: 100%;
  border: 1px solid #000;
}
.img p {
  color: #000000;
	text-align: center;
	font-size: 1vw;
	line-height: 2.5vh;
}
.biaoti{
	width: 15vw;
	height:9vh;
	margin: 1.4vw;
	padding-top: 0.8vh;
	background-size: contain;
	background-image: url(../assets/src/piclist_24.png);
	background-repeat: no-repeat;
	background-position: 100% ,100%;
}
.biaoti p{
	text-align: center;
	padding-top: 0.5vh;
}
.title {
  height: 10vh;
  text-align: center;
  margin: 5vh auto;      
  line-height: 10vh;
  font-size: 5vh;
  padding-top: 0.5vh;
}

.img-list {
  display: flex;
  justify-content: space-between;
  width: 85vw;
  flex-wrap: wrap;
}
.zuzuo{
	width: 100vw;
	height: 8vh;
	float: left;
}
.poetry_title{
	width:3.5vw;
	height: 3.5vh;
	margin-top: 2vh;
	border-radius: 12px;
	background-color: #E9967A;
	color: #FBFC7D;
	font-size: 16px;
	text-align: center;
	vertical-align: auto;
}
.zuzuo ul li{
  margin-left:4vw ;
  color: #FBFC7D;
  font-size: 16px; 
  line-height:5vh;
	display: inline-block; 
}
.poetry{
	width: 100vw;
	height: 8vh;
	float: left;
}
.poetry ul li{
  margin-left:4vw ;
  color: #FBFC7D;
  font-size: 16px; 
	display: inline-block; 
}
.photo{
	width: 100vw;
	height: 30vh;
	float: left;
}
.photo ul li{
  margin-left:4vw ;
  color: #FBFC7D;
  font-size: 16px; 
	display: inline-block; 
}
.photo img{
	width: 18vw;
	height: 20vh;
}
.photo p{
	padding-left: 3vw;
}
.video{
	width: 100vw;
	height: 30vh;
	float: left;
}
.video ul li{
  margin-left:4vw ;
  color: #FBFC7D;
  font-size: 16px; 
	display: inline-block; 
}
.video p{
	padding-left: 3vw;
}
.video img{
	width: 18vw;
	height: 20vh;
}
</style>
