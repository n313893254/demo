<template lang="html">
  <div class="Box">
    <!-- <TransisionLayer/> -->
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
    <div class="menu-wrapper-left">
      <div class="menu" v-if="leftMenuSeen">
        <div  @click="set('视频')">
        	<router-link class="button" to="/VideoList"><img src="../assets/src/history_04.png"></router-link>
        </div>
        <div  @click="set('照片')">
        	<router-link class="button" to="/Photo"><img src="../assets/src/history_05.png"></router-link>
        </div>
        <div  @click="set('诗篇')">
        	<router-link class="button" to="/PoetryList"><img src="../assets/src/history_07.png"></router-link>
        </div>
        <div  @click="set('个人著作')">
        	<router-link class="button" to="/History"><img src="../assets/src/history_14.png"></router-link>
        </div>
        <div class="button" @click="closeLeftMenu()"><img src="../assets/src/fenlei_29.png"></div>
      </div>
      <div class="menu" v-else>
        <div class="button" @click="openLeftMenu()"><img src="../assets/src/fenlei_29.png"></div>
      </div>
    </div>

  <div class="mid">
    <div class="left_box">
  	<div class="left_title">
  	   <ul>
  	   <li><a>香港回归敢赋一篇</a></li>
  	   <li>艺术的堕落--游欧杂记</li>
  	   <li>香港回归敢赋一篇</li>
  	   <li>在深圳美术节上的发言</li>
  	   <li>香港回归敢赋一篇</li>
  	   <li>艺术的堕落--游欧杂记</li>
  	   <li>香港回归敢赋一篇</li>
  	   <li>在深圳美术节上的发言</li>
  	   <li>香港回归敢赋一篇</li>
  	   <li>艺术的堕落--游欧杂记</li>
  	   <li>香港回归敢赋一篇</li>
  	   <li>香港回归敢赋一篇</li>
  	   <li>艺术的堕落--游欧杂记</li>
  	   <li>香港回归敢赋一篇</li>
  	   <li>追流溯源的艺术--为《平山郁夫丝绸之路素描集》出版而作</li>
  	   <li>香港回归敢赋一篇</li>
  	   <li>艺术的堕落--游欧杂记</li>
  	   <li>香港回归敢赋一篇</li>
  	   <li>追流溯源的艺术--为《平山郁夫丝绸之路素描集》出版而作</li>
  	   <li>香港回归敢赋一篇</li>
  	   <li>艺术的堕落--游欧杂记</li>
  	   <li>香港回归敢赋一篇</li>
  	   <li>追流溯源的艺术--为《平山郁夫丝绸之路素描集》出版而作</li>
  	   <li>香港回归敢赋一篇</li>
  	   <li>艺术的堕落--游欧杂记</li>
  	   <li>香港回归敢赋一篇</li>
  	   <li>追流溯源的艺术--为《平山郁夫丝绸之路素描集》出版而作</li>
  	   <li>艺术的堕落--游欧杂记</li>
  	   <li>香港回归敢赋一篇</li>
  	   <li>追流溯源的艺术--为《平山郁夫丝绸之路素描集》出版而作</li>
  	   <li>香港回归敢赋一篇</li>
  	   <li>艺术的堕落--游欧杂记</li>
  	   <li>香港回归敢赋一篇</li>
  	   <li>在深圳美术节上的发言</li>
  	   <li>香港回归敢赋一篇</li>
  	   <li>艺术的堕落--游欧杂记</li>
  	   <li>香港回归敢赋一篇</li>
  	   <li>在深圳美术节上的发言</li>
  	   <li>香港回归敢赋一篇</li>
  	   <li>艺术的堕落--游欧杂记</li>
  	   <li>香港回归敢赋一篇</li>
  	   <li>香港回归敢赋一篇</li>
    </ul>
  	</div>
  	</div>
  	<div class="right_wenzhang">
  	<div class="article_words">
  	  <div class="author">
  	    <div class="writer">作者：关山月</div>
  	    <div class="data"> 1988年</div>
  	  </div>
  	  <h2 class="article">《关于画梅》</h2>
  	  <div class="article_conent">
  	  <p>树有根、水有源。我喜爱画梅。说起来，也是有其根源的，根源早就萌植于童年生活之中，
  	       包括传统观念的支配、客观环境的影响，还有就是纯朴的童稚之心在模仿行动的潜移默化中产生的兴趣在起作用。</p>
          <p>我出生在一个没落的书香之家，父亲是一个赶不上科举考试的农村知识分子——小学教师。
                他不但喜爱种梅，还经常咏梅、画梅。童年时代，我家小花园里就有几棵老白梅，
                由于是好品种，因而乡间亲友们都要托我父亲为他们接枝育苗。
                我父亲曾当过渡头关村小学的校长，狮子岭山麓的校园里就曾种有二三十棵白梅，
                也都是他亲手接枝培植的。我出自好奇心，往往自觉或不自觉地经常当了父亲的助手，
                久而久之，我也从中学会了接枝育苗的一些常识。每当看见自己手植的梅初次发花时，
                就有说不出的高兴，因为这是我劳动的成果。我曾为之培土浇水，
                入冬老是观察着有否长出花蕾，当一旦花开，内心的喜悦是不难理解的。
                后来随父亲到织贡镇小学读书，学校附近有座小庙叫做普济堂，院前就有一林老梅。
                这数十棵老梅虽然没有我家后园的古梅长得高，但“老”得很神奇，每到花开的时候，
                我就跟着父亲和老师们去赏梅。他们边观赏梅花，边吟唱咏梅的诗句，
                我也从此引起了画梅的兴趣，或临摹、或写生，就只恨自己没有本事把梅花的清香画出来。</p>
  	 </div>
  	</div>
  </div>
  </div>
  </div>
</template>

<script>
import $ from 'jquery'
import TransisionLayer from '../components/TransisionLayer'
export default {
  name: 'History',
  components: { TransisionLayer },
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
  },
  created: function () {
    this.$store.commit('setMenuBarSeen', true)
    this.$store.commit('closeRightMenu')
  },
  mounted: function () {
    $('li').click(function () {
      $('.article').html($(this).html())
    })
  }
}
</script>

<style lang="css" scoped>
.menu-wrapper-left {
  position: fixed;
  left: 1vh;
  bottom: 1vw;
}
.mid{
	width: 85vw;
	height: 90vh;
	margin: auto;
	margin-top: 4vh;
}
</style>
