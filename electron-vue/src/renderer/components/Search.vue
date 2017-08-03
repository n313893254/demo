<template lang="html">
  <div class="page">
    <MenuBar/>
    <div class="nav">
  		<div class="small_logo"><img src="../assets/src/logogsy_03.png"></div>
  	  <div class="yemei_title">知识库》史料》画作</div>
  	  <div class="gongsi"><img src="../assets/src/logoe4_06.png">
  	  	<p>伊世易技术支持</p></div>
  	</div>
    <div class="searchBar">
      <p>A&nbsp;&nbsp;B&nbsp;&nbsp;C&nbsp;&nbsp;D&nbsp;&nbsp;E&nbsp;&nbsp;
      	F&nbsp;&nbsp;G&nbsp;&nbsp;H&nbsp;&nbsp;I&nbsp;&nbsp;K&nbsp;&nbsp;L
        &nbsp;&nbsp;M&nbsp;&nbsp;N&nbsp;&nbsp;O&nbsp;&nbsp;P&nbsp;&nbsp;
        Q&nbsp;&nbsp;R&nbsp;&nbsp;S&nbsp;&nbsp;T&nbsp;&nbsp;U&nbsp;&nbsp;
        V&nbsp;&nbsp;W&nbsp;&nbsp;X&nbsp;&nbsp;Y&nbsp;&nbsp;Z</p>
        <div class="year">
           <label for="">
           	<select>
           		 <option>1940年</option>
           		 <option>1941年</option>
           		 <option>1942年</option>
           		 <option>1943年</option>
           		 <option>1944年</option>
           		 <option>1945年</option>
           		 <option>1946年</option>
           		 <option>1947年</option>
           		 <option>1948年</option>
           		 <option>1950年</option>
           		 <option>1951年</option>
           		 <option>1952年</option>
           		 <option>1953年</option>
           		 <option>1954年</option>
           		 <option>1955年</option>
           		 <option>1956年</option>
           		 <option>1957年</option>
           		 <option>1958年</option>
           		 <option>1959年</option>
           		 <option>1960年</option>
           		 <option>1961年</option>
           		 <option>1962年</option>
           		 <option>1963年</option>
           		 <option>1964年</option>
           		 <option>1965年</option>
           		 <option>1966年</option>
           		 <option>1967年</option>
           		 <option>1968年</option>
           		 <option>1969年</option>
           		 <option>1970年</option>
           		 <option>1971年</option>
           		 <option>1972年</option>
           		 <option>1973年</option>
           		 <option>1974年</option>
           		 <option>1975年</option>
           		 <option>1976年</option>
           		 <option>1977年</option>
           		 <option>1978年</option>
           		 <option>1979年</option>
           		 <option>1980年</option>
           		 <option>1981年</option>
           		 <option>1982年</option>
           		 <option>1983年</option>
           		 <option>1984年</option>
           		 <option>1985年</option>
           		 <option>1986年</option>
           		 <option>1987年</option>
           		 <option>1988年</option>
           		 <option>1989年</option>
           		 <option>1990年</option>
           		 <option>1991年</option>
           		 <option>1992年</option>
           		 <option>1993年</option>
           		 <option>1994年</option>
           		 <option>1995年</option>
           		 <option>1996年</option>
           		 <option>1997年</option>
           		 <option>1998年</option>
           		 <option>1999年</option>
           		 <option>2000年</option>
           	</select>
           </label>
         </div>
         <div class="month">
         	<label for="">
         		<select>
         			<option>1月</option>
         			<option>2月</option>
         			<option>3月</option>
         			<option>4月</option>
         			<option>5月</option>
         			<option>6月</option>
         			<option>7月</option>
         			<option>8月</option>
         			<option>9月</option>
         			<option>10月</option>
         			<option>11月</option>
         			<option>12月</option>
         		</select>
         		
         	</label>
         </div>
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
            <div class="biaoti">
            <p>{{ painting.title }}</p>
            <p>{{ painting.year }}</p>
            </div>
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
	width: 100vw;
	height: 4.5vh;
	margin-top: 5.1vh;
	background-color: rgba(163,163,111,0.4);
  background-color:#a3a36f;
}
.searchBar p{
	color: #FBFC7D;
	margin-left: 3vw;
	font-size: 1.4vw;
	padding-top: 1vh;
	float: left;
}
.year{
	float: left;
	margin-left: 27vw;
	padding-top: 0.5vw;
}
.month{
	float: right;
	margin-right: 16vw;
	padding-top: 0.5vw;
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
  margin: 0 4vw;
  height: 8vh;
}
.panel {
  border: 1px solid #000;
  height: 79vh;
  margin: 2vw 4vw;
  width: 85vw;
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
	height:8.5vh;
	margin: 1.4vw;
	padding-top: 0.8vh;
	background-size: contain;
	background-image: url(../assets/src/lable_11.png);
	background-repeat: no-repeat;
	background-position: 100% ,100%;
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
