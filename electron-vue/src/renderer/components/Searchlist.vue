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
    <div class="search_kuang">
     <div class="search_img"></div>
     <div class="search"><input type="search" class="search" placeholder="请输入拼音首字母"></div>
     </div>
     <div class="sousu"><router-link to="/Searchlist"><img src="../assets/src/ss1_34.png"></router-link></div>
        </div>
    <div class="tab">
      <div @click="set('画作')"><img src="../assets/src/sshuanormal_07.png"></div>
      <div @click="set('史料')"><img src="../assets/src/ssshiliao_09.png"></div>
      <div @click="set('研究')"><img src="../assets/src/ssyanjiu_11.png"></div>
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
        <div class="search_writing">
         <div class="search_writing_img"></div>
         <div class="search_article">
         <table>
         	<tr>
         		<td class="search_name"><p>》我所走过的艺术道路--在一场讲座上的谈话</p></td>
         		<td class="search_author"><p>关山月</p></td>
         		<td class="search_year"><p>1991年</p>
         		</td>
         	</tr>
         	 <tr>
         		<td class="search_name"><p>》我所走过的艺术道路--在一场讲座上的谈话</p></td>
         		<td class="search_author"><p>关山月</p></td>
         		<td class="search_year"><p>1991年</p>
         		</td>
         	</tr>
         	<tr>
         		<td class="search_name"><p>》我所走过的艺术道路--在一场讲座上的谈话</p></td>
         		<td class="search_author"><p>关山月</p></td>
         		<td class="search_year"><p>1991年</p>
         		</td>
         	</tr>
         	<tr>
         		<td class="search_name"><p>》我所走过的艺术道路--在一场讲座上的谈话</p></td>
         		<td class="search_author"><p>关山月</p></td>
         		<td class="search_year"><p>1991年</p>
         		</td>
         	</tr>
         	<tr>
         		<td class="search_name"><p>》我所走过的艺术道路--在一场讲座上的谈话</p></td>
         		<td class="search_author"><p>关山月</p></td>
         		<td class="search_year"><p>1991年</p>
         		</td>
         	</tr>
         	<tr>
         		<td class="search_name"><p>》我所走过的艺术道路--在一场讲座上的谈话</p></td>
         		<td class="search_author"><p>关山月</p></td>
         		<td class="search_year"><p>1991年</p>
         		</td>
         	</tr>
         	<tr>
         		<td class="search_name"><p>》我所走过的艺术道路--在一场讲座上的谈话</p></td>
         		<td class="search_author"><p>关山月</p></td>
         		<td class="search_year"><p>1991年</p>
         		</td>
         	</tr>
         	<tr>
         		<td class="search_name"><p>》我所走过的艺术道路--在一场讲座上的谈话</p></td>
         		<td class="search_author"><p>关山月</p></td>
         		<td class="search_year"><p>1991年</p>
         		</td>
         	</tr>
         </table>
         </div>
        </div>
        <div class="search_poetry">
        	<div class="search_poetry_img"></div>
        	<div class="search_article">
        		<table>
         	<tr>
         		<td class="search_name"><p>》三访南丫岛即兴（九首）</p></td>
         		<td class="search_author"><p>关山月</p></td>
         		<td class="search_year"><p>1984年1月</p>
         		</td>
         	</tr>
         	</table>
        	</div>
        </div>
        <div class="search_photo">
        	<div class="search_photo_img"></div>
        	  	<div class="search_article">
        		<table>
         	<tr>
         		<td class="search_name"><p>》关山月坐船去南洋写生</p></td>
         		<td class="search_author"><p>关山月</p></td>
         		<td class="search_year"><p>1983年10月</p>
         		</td>
         	</tr>  	
         	</table>
        	</div>
        </div>
        <div class="search_video">
        	<div class="search_video_img"></div>
        	  	<div class="search_article">
        		<table>
         	<tr>
         		<td class="search_name"><p>》创作《榕树》</p></td>
         		<td class="search_author"><p>关山月</p></td>
         		<td class="search_year"><p>1993年11月</p>
         		</td>
         	</tr>
         	</table>
        	</div>
        </div>
      </div>
      <div class="content" v-else>
      <div class="search_research">
      <div class="search_article">
         <table>
         	<tr>
         		<td class="search_name"><p>》我所走过的艺术道路--在一场讲座上的谈话</p></td>
         		<td class="search_author"><p>关山月</p></td>
         		<td class="search_year"><p>1991年</p>
         		</td>
         	</tr>
         	 <tr>
         		<td class="search_name"><p>》我所走过的艺术道路--在一场讲座上的谈话</p></td>
         		<td class="search_author"><p>关山月</p></td>
         		<td class="search_year"><p>1991年</p>
         		</td>
         	</tr>
         	<tr>
         		<td class="search_name"><p>》我所走过的艺术道路--在一场讲座上的谈话</p></td>
         		<td class="search_author"><p>关山月</p></td>
         		<td class="search_year"><p>1991年</p>
         		</td>
         	</tr>
         	<tr>
         		<td class="search_name"><p>》我所走过的艺术道路--在一场讲座上的谈话</p></td>
         		<td class="search_author"><p>关山月</p></td>
         		<td class="search_year"><p>1991年</p>
         		</td>
         	</tr>
         	<tr>
         		<td class="search_name"><p>》我所走过的艺术道路--在一场讲座上的谈话</p></td>
         		<td class="search_author"><p>关山月</p></td>
         		<td class="search_year"><p>1991年</p>
         		</td>
         	</tr>
         	<tr>
         		<td class="search_name"><p>》我所走过的艺术道路--在一场讲座上的谈话</p></td>
         		<td class="search_author"><p>关山月</p></td>
         		<td class="search_year"><p>1991年</p>
         		</td>
         	</tr>
         	<tr>
         		<td class="search_name"><p>》我所走过的艺术道路--在一场讲座上的谈话</p></td>
         		<td class="search_author"><p>关山月</p></td>
         		<td class="search_year"><p>1991年</p>
         		</td>
         	</tr>
         	<tr>
         		<td class="search_name"><p>》我所走过的艺术道路--在一场讲座上的谈话</p></td>
         		<td class="search_author"><p>关山月</p></td>
         		<td class="search_year"><p>1991年</p>
         		</td>
         	</tr>
         	<tr>
         		<td class="search_name"><p>》我所走过的艺术道路--在一场讲座上的谈话</p></td>
         		<td class="search_author"><p>关山月</p></td>
         		<td class="search_year"><p>1991年</p>
         		</td>
         	</tr>
         	<tr>
         		<td class="search_name"><p>》我所走过的艺术道路--在一场讲座上的谈话</p></td>
         		<td class="search_author"><p>关山月</p></td>
         		<td class="search_year"><p>1991年</p>
         		</td>
         	</tr>
         	<tr>
         		<td class="search_name"><p>》我所走过的艺术道路--在一场讲座上的谈话</p></td>
         		<td class="search_author"><p>关山月</p></td>
         		<td class="search_year"><p>1991年</p>
         		</td>
         	</tr>
         	<tr>
         		<td class="search_name"><p>》我所走过的艺术道路--在一场讲座上的谈话</p></td>
         		<td class="search_author"><p>关山月</p></td>
         		<td class="search_year"><p>1991年</p>
         		</td>
         	</tr>
         </table>
         </div>
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
      return this.$store.state.paintings.slice(0, 8)
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
	height: 5.5vh;
	margin-top: 3.6vh;
  background-color:#F7EEE5;
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
.search_list{
	background-color: #FFFFFF;
	width: 32vw;
	height: 2vh;            
}
.tab{
	margin-left: 4vw;
}
.tab div {
	float: left;
  width: 8vw;
  height: 8vh;
  margin-top: 4vh;
}
.tab div img{
	width: 8vw;
	height: 8vh;
}
.panel {
  width: 79vh;
  background-color: #F3EEE8;
  margin-left: 4vw;
  margin-top: 11.5vh;
  width: 85vw;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-top-right-radius:25px ;
  height: 100vh;
}
.img {
  height: 30vh;
  width: 16vw;
  border-radius: 50%;
  margin: 8vh 2vw;
}

.img  img {
  height: 100%;
  width: 100%;
  border-radius: 50%;

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
.search_writing{
	width:79vw ;
	height: 35vh;
	float: left;
	overflow: hidden;
}
.search_writing_img{
	width: 79vw;
	height: 2.5vw;
	margin-left: 2vw;
	margin-top: 1vh;
	background-image: url(../assets/src/sousuo_23.png);
	background-repeat: no-repeat;
	background-size: contain;
}
.search_poetry{
	width:79vw ;
	height: 25vh;
	float: left;
	overflow: hidden;
}
.search_poetry_img{
	width: 79vw;
	height: 2.5vw;
	margin-left: 2vw;
	margin-top: 1vh;
	background-image: url(../assets/src/sousuo_26.png);
	background-repeat: no-repeat;
	background-size: contain;
}
.search_photo{
	width:79vw ;
	height: 20vh;	
	float: left;
	overflow: hidden;
}
.search_photo_img{
	width: 79vw;
	height: 2.5vw;
	margin-left: 2vw;
	margin-top: 1vh;
	background-image: url(../assets/src/sousuo_29.png);
	background-repeat: no-repeat;
	background-size: contain;
}
.search_video{
	width:79vw ;
	height: 15vh;
	float: left;
	overflow: hidden;
}
.search_video_img{
	width: 79vw;
	height: 2.5vw;
	margin-left: 2vw;
	margin-top: 1vh;
	background-image: url(../assets/src/sousuo_31.png);
	background-repeat: no-repeat;
	background-size: contain;
}
.search_article{
	margin-left: 6vw;
	overflow: hidden;
}
.search_article tr{
	height: 3.5vh;
	font-size: 1.2vw;
}
 .search_name{
 	width: 45vw;
 }
 .search_author{
	width: 30vw;
	float: right;
 }
 .search_author p{
 	text-align: center;
 }
 .search_year{
 	width: 30vw;
 }
 .search_research{
 	width:79vw ;
	height: 90vh;
	float: left;
	margin-left: 2.5vw;
	margin-top: 3vh;
	overflow: hidden;
 }
</style>
