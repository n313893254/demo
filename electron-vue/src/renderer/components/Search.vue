<template lang="html">
  <div class="page">
    <MenuBar/>
    <div class="searchBar">
      <label for="">
      	<div class="search_list">A&nbsp;B&nbsp;C&nbsp;D&nbsp;E&nbsp;F&nbsp;G&nbsp;
      		H&nbsp;I&nbsp;J&nbsp;K&nbsp;L&nbsp;M&nbsp;N&nbsp;O&nbsp;P&nbsp;
      		Q&nbsp;R&nbsp;S&nbsp;T&nbsp;U&nbsp;V&nbsp;W&nbsp;X&nbsp;Y&nbsp;Z&nbsp;</div>
      </label>
      <label for="">年份</label>
      <select class="" name="">
        <option value="1993">1990</option>
        <option value="1993">1980</option>
        <option value="1993">1970</option>
        <option value="1993">1960</option>
        <option value="1993">1950</option>
        <option value="1993">1940</option>
      </select>
      <label for="">月份</label>
      <select class="" name="">
        <option value="1">1月</option>
        <option value="1">2月</option>
        <option value="1">3月</option>
        <option value="1">4月</option>
        <option value="1">5月</option>
        <option value="1">6月</option>
        <option value="1">7月</option>
        <option value="1">8月</option>
        <option value="1">9月</option>
        <option value="1">10月</option>
        <option value="1">11月</option>
        <option value="1">12月</option>
      </select>
    </div>
    <div class="tab">
      <div @click="set('画作')">画作</div>
      <div @click="set('史料')">史料</div>
      <div @click="set('研究')">研究</div>
    </div>
    <div class="panel">
      <div class="content" v-if="title === '画作'">
        <div class="img-list">
          <div class="img" v-for="painting in paintings">
            <router-link :to="{ path: '/Painting/Display', query: { src: painting.imgSrc }}"><img :src="painting.imgSrc" alt=""></router-link>
            <p>{{ painting.title }}</p>
            <p>{{ painting.year }}</p>
          </div>
        </div>
      </div>
      <div class="content" v-else-if="title === '史料'">
           <div class="zuzuo">
           	<div class="poetry_title">著作</div>
           	<table>
           		<ul>
           		<li>劳动人民的画家——怀念赵望云</li>
           		<li>劳动人民的画家——怀念赵望云</li>
           		<li>劳动人民的画家——怀念赵望云</li>
           		<li>劳动人民的画家——怀念赵望云</li>
           		
           		</ul> 
           	</table>
           </div>
           <div class="poetry">
           	<div class="poetry_title">诗歌</div>
           	<table>
           		<ul>
           		<li>劳动人民的画家——怀念赵望云</li>
           		<li>劳动人民的画家——怀念赵望云</li>
           		<li>劳动人民的画家——怀念赵望云</li>
           		<li>劳动人民的画家——怀念赵望云</li>
           		
           		</ul> 
           	</table>
           </div>
           <div class="photo">
           	<div class="poetry_title">照片</div>
           	<table>
           		<ul>
           		<li>
           			<img src="../assets/src/photo.jpg">
           			<p>关山月与朋友的合照</p>
           		</li>
           		<li>
           			<img src="../assets/src/photo.jpg">
           			<p>关山月与朋友的合照</p>
           		</li>
           		<li>
           		<img src="../assets/src/photo.jpg">
           		<p>关山月与朋友的合照</p>
           		</li>
           		<li>
           			<img src="../assets/src/photo.jpg">
           			<p>关山月与朋友的合照</p>
           		</li>
           		
           		</ul> 
           	</table>
           </div>
           <div class="video">
           <div class="poetry_title">视频</div>
           <table>
           		<ul>
           		<li>
           			<img src="../assets/src/video.jpg">
           			<p>关山月的创作历程</p>
           		</li>
           		<li>
           			<img src="../assets/src/video.jpg">
           			<p>关山月的创作历程</p>
           		</li>
           		<li>
           		<img src="../assets/src/video.jpg">
           		<p>关山月的创作历程</p>
           		</li>
           		<li>
           			<img src="../assets/src/video.jpg">
           			<p>关山月的创作历程</p>
           		</li>
           		
           		</ul> 
           	</table>
           </div>
      </div>
      <div class="content" v-else>
        <div class="zuzuo">
           	<table>
           		<ul>
           		<li>劳动人民的画家——怀念赵望云</li>
           		<li>劳动人民的画家——怀念赵望云</li>
           		<li>劳动人民的画家——怀念赵望云</li>
           		<li>劳动人民的画家——怀念赵望云</li>
           		</ul> 
           	</table>
           	<table>
           		<ul>
           		<li>劳动人民的画家——怀念赵望云</li>
           		<li>劳动人民的画家——怀念赵望云</li>
           		<li>劳动人民的画家——怀念赵望云</li>
           		<li>劳动人民的画家——怀念赵望云</li>
           		</ul> 
           	</table>
           	<table>
           		<ul>
           		<li>劳动人民的画家——怀念赵望云</li>
           		<li>劳动人民的画家——怀念赵望云</li>
           		<li>劳动人民的画家——怀念赵望云</li>
           		<li>劳动人民的画家——怀念赵望云</li>
           		</ul> 
           	</table>
           	<table>
           		<ul>
           		<li>劳动人民的画家——怀念赵望云</li>
           		<li>劳动人民的画家——怀念赵望云</li>
           		<li>劳动人民的画家——怀念赵望云</li>
           		<li>劳动人民的画家——怀念赵望云</li>
           		</ul> 
           	</table>
           	<table>
           		<ul>
           		<li>劳动人民的画家——怀念赵望云</li>
           		<li>劳动人民的画家——怀念赵望云</li>
           		<li>劳动人民的画家——怀念赵望云</li>
           		<li>劳动人民的画家——怀念赵望云</li>
           		</ul> 
           	</table>
           	<table>
           		<ul>
           		<li>劳动人民的画家——怀念赵望云</li>
           		<li>劳动人民的画家——怀念赵望云</li>
           		<li>劳动人民的画家——怀念赵望云</li>
           		<li>劳动人民的画家——怀念赵望云</li>
           		</ul> 
           	</table>
           	<table>
           		<ul>
           		<li>劳动人民的画家——怀念赵望云</li>
           		<li>劳动人民的画家——怀念赵望云</li>
           		<li>劳动人民的画家——怀念赵望云</li>
           		<li>劳动人民的画家——怀念赵望云</li>
           		</ul> 
           	</table>
           </div>
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
  margin: 5vh 5vw 5vh 1vw;
  border-radius: 2%;
}
.search_list{
	background-color: #FFFFFF;
	width: 32vw;
	height: 2vh;            
}
.tab div {
  border: 1px solid #000;
  cursor: pointer;
  display: inline-block;
  margin: 0 3vw;
}
.panel {
  border: 1px solid #000;
  height: 79vh;
  margin: 0 1.4vw;
}
.img {
  height: 15vh;
  width: 9vw;
  margin: 5vh 2vw;
}

.img  img {
  height: 100%;
  width: 100%;
  border: 1px solid #000;
}

.img p {
  text-align: center;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}

.title {
  height: 10vh;
  text-align: center;
  margin: 5vh auto;      
  line-height: 10vh;
  font-size: 5vh;
}

.img-list {
  display: flex;
  justify-content: space-between;
  width: 70vw;
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
