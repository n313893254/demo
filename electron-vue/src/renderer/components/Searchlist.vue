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
         <div class="method" id="mehtod">
           <p class="first">
           	<a >Q</a>&nbsp;
           	<a >W</a>&nbsp;
           	<a >E</a>&nbsp;
           	<a >R</a>&nbsp;
           	<a >T</a>&nbsp;
           	<a >Y</a>&nbsp;
           	<a >U</a>&nbsp;
           	<a >I</a>&nbsp;
           	<a >O</a>&nbsp;
           	<a >P</a></p><br>
           <p><a >A</a>&nbsp;
           	<a >S</a>&nbsp;
           	<a >D</a>&nbsp;
           	<a >F</a>&nbsp;
           	<a >G</a>&nbsp;
           	<a >H</a>&nbsp;
           	<a >J</a>&nbsp;
           	<a >K</a>&nbsp;
           	<a >L</a></p><br>
           <p><a >Z</a>&nbsp;
           	<a >X</a>&nbsp;
           	<a >C</a>&nbsp;
           	<a >V</a>&nbsp;
           	<a >B</a>&nbsp;
           	<a >N</a>&nbsp;
           	<a >M</a></p>
           <div class="method_img">
           <img src="../assets/src/dele2dowm_40.png">
           <img src="../assets/src/deledown_42.png">
           </div>
        </div>
        </div>
        <div class="search-flower">
    <div class="tab">
      <div @click="set('画作')"><img src="../assets/src/sshuanormal_07.png"></div>
      <div @click="set('史料')"><img src="../assets/src/ssshiliao_09.png"></div>
      <div @click="set('研究')"><img src="../assets/src/ssyanjiu_11.png"></div>
    </div>
    <div class="search-hang"></div>
    </div>
    <div class="ssearch">
    <div class="search-zong">
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
         	<tr>
         		<td class="search_name"><p>》三访南丫岛即兴（九首）</p></td>
         		<td class="search_author"><p>关山月</p></td>
         		<td class="search_year"><p>1984年1月</p>
         		</td>
         	</tr>
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
   </div>
   </div>
</template>

<script>
import $ from 'jquery'
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
  },
  mounted: function () {
    $('.method').hide()
    $('.search_kuang').hover(function () {
      $('.method').show()
    }, function () {
      $('.method').hide()
    })
    $('.method').hover(function () {
      $('.method').show()
    }, function () {
      $('.method').hide()
    })
  }
}
</script>

<style lang="css" scoped>

.page {
  width: 100%;
}
.searchBar  {
	width: 100vw;
	height: 6.5vh;
	margin-top: 3.6vh;
  background-color:#F7EEE5;
}
.search_kuang{
    width:45vw;
    height: 3.8vh;
    border-radius: 20px;
    float: left;
    margin-top: 1.3vh;
    margin-left: 23vw;
    background-color: #ffffff;
    -webkit-box-shadow: #000000;
    -moz-box-shadow: #000000;
    box-shadow: #000000 ;
}
.search_img{
    width:2vw;
    height: 2.2vh;
    float: left;
    margin-top: 1.0vh;
    margin-left: 0.5vw;
    background-image: url(../assets/src/sousuo_03.png);
    background-size: contain;
    background-repeat: no-repeat;
}
.search{
    width:41vw;
    height:3.8vh;
    float: left;
    opacity: 0.8;
    border: dashed 1px #ffffff;
    background-color: transparent;
    outline-style: none;
}
.sousu{
    width: 5vw;
    height: 3.8vh;
    float: left;
    margin-top: 1.3vh;
    border-radius:20px;
    margin-left: 2vw;
    background-color: #FFFFFF;
}
.sousu img{
    width: 5vw;
    height: 3.8vh;
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
.method{
    width: 30vw;
    height: 25vh;
    float: left;
    position: absolute;
    z-index: 99999;
    margin-top: 4vh;
    background-image: url(../assets/src/search_02.png);
    background-size: contain;
    background-repeat: no-repeat;
    margin-left: 25vw;
}
.method p{
    text-align: center;
    font-size: 1.5vw;
    color: #000;
}
a{
    color: #000000;
    text-decoration: none;
}
a:hover{
    color: #fdd69c;
    text-decoration: none;
}
.first{
    padding-top: 2.1vh;
}
.method_img{
    width: 30vw;
    height: 3vh;
    float: left;
    margin-left: 21.5vw;

}
.method_img img{
    width: 2.5vw;
    height: 3vh;
    float: left;
    margin-right: 1vw;
}
.search-flower{
    width: 90vw;
    height:8vh;
    margin-top: 2vh;
}
.tab {
    margin-left: 4vw;
    float: left;
}
.search-hang{
    width:60vw;
    height: 6vh;
    float: left;
    margin-top: 2vh;
    margin-left: 1vw;
    background-image: url("../assets/src/search_hang.png");
    background-size: contain;
    background-repeat: no-repeat;
}
.tab div {
	float: left;
  width: 8vw;
  height: 8vh;
}
.tab div img{
	width: 8vw;
	height: 8vh;
}
.ssearch{
  width: 90vw;
    height:100vh;
    float: left;
}

.search-zong{
    width: 4vw;
    height:100vh;
    float: left;
    background-image: url("../assets/src/search_zong.png");
    background-repeat: no-repeat;
    background-size: contain;
}
.panel {
  width: 85vw;
  float: left;
  margin-left: 4vw;
  background-color: #F3EEE8;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-top-right-radius:25px ;
  height: 100vh;
  overflow-y: scroll;
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
    margin-top: 2vh;
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
