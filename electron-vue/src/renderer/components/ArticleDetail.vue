<template lang="html">
  <div class="artcle-detail-page">
    <div class="flipbook-viewport">
      <div class="container">
        <div class="flipbook" ref="flipbook">
          <div class="page my-cover">
            <h1>{{ row.name }}</h1>
            <h1>{{ row.author }}</h1>
            <h1>{{ row.create_time }}</h1>
          </div>
          <div class="page odd">
            <div class="author">作者：{{ row.author }}</div>
            <h1>{{ row.name }}</h1>
            <p v-html="page[0]"></p>
            <!-- <p v-html="content[0]"></p>
            <p v-html="content[1]"></p> -->
          </div>
          <div class="page even">
            <div class="time">{{ row.create_time }}</div>
            <p v-html="page[1]"></p>
            <!-- <p v-html="content[2]"></p> -->
          </div>
          <div class="page odd">
            <div class="author">作者：关山月</div>
            <p v-html="page[3]"></p>
            <!-- <p v-html="content[3]"></p> -->
          </div>
          <div class="page even">
            <div class="time">1988年12月</div>
            <!-- <p v-html="content[4]"></p> -->
            <p v-html="page[4]"></p>
          </div>
          <div class="page odd">
            <div class="author">作者：关山月</div>
            <p v-html="page[5]"></p>
            <!-- <p v-html="content[5]"></p> -->
          </div>
          <div class="page even">
            <div class="time">1988年12月</div>
            <p v-html="page[6]"></p>
            <!-- <p v-html="content[6]"></p>
            <p v-html="content[7]"></p>
            <p v-html="content[8]"></p>
            <p v-html="content[9]"></p>
            <p v-html="content[10]"></p> -->
          </div>
          <div class="page odd">
            <div class="author">作者：关山月</div>
            <!-- <p v-html="content[11]"></p> -->
            <p v-html="page[7]"></p>
          </div>
          <div class="page even">
            <div class="time">1988年12月</div>
            <p v-html="page[8]"></p>
            <!-- <p v-html="content[12]"></p> -->
          </div>
          <div class="page odd">
            <div class="author">作者：关山月</div>
            <p v-html="content[13]"></p>
            <p v-html="content[14]"></p>
          </div>
          <div class="page even">
            <div class="time">1988年12月</div>
          </div>
          <div class="page" v-if="page[10] != undefined">

          </div>
          <!-- <div class="page even">
            <div class="time">1988年12月</div>
            <p>父亲虽然没有赶上考科举，但却是一位有文学修养的小学教师。他曾写过不少诗，也会画几笔梅、兰、菊、竹四君子为题材的文人画。
              在我八九岁的时候，才跟随着父亲念书，他在哪里应聘，我就在哪里就读，最远的两处地方我记得是小渔港溪头镇和奋兴小学所在的织贡圩。
              在奋兴小学念书的时候我已十一二岁了。当时随父亲住在小房间里，见他画画时我也偷偷地临仿，可是他一见我画画</p>
              <div class="center">
                <img src="http://121.40.46.137/guanshanyue/assets/img/beditor_upload/20160805/1470375818127692.png" alt="">
              </div>
          </div>
          <div class="page">
            <p>TrySail是日本的声优组合，由Music Ray’n事务所所属的三名女声优麻仓桃、雨宫天、夏川椎菜组成。
              TrySail将出席在今年的「Animelo Summer Live 2017 -THE CARD-」演唱会，登场时间为8月27日。
            </p>
          </div>
          <div class="page">
            <p>月番『咕噜咕噜魔法阵』是由卫藤ヒロユキ原著的漫画改编，
              动画由Production I.G负责制作。本作的ED是由TECHNOBOYS PULCRAFT GREEN-FUNDfeat.Bonjour铃木组合演唱，歌名叫做
              单曲CD的发售日期为今年8月9日，
              近日官方公布了单曲CD的封面以及艺术照。单曲封面是动画『咕噜咕噜魔法阵』插图，
              而艺术照则是演唱组合的照片。</p>
          </div>
          <div class="page">
            <p>『咕噜咕噜魔法阵』简介：被勇者迷父母养育成长的少年·尼克，某天，
              父母得知了哥达国国王为了讨伐魔王而募集勇者一事，于是尼克被勇者迷父母说着“到出发旅行的日子了！
              ”而强行展开了旅程。尼克按照村子的惯例，在旅行前前往村子边缘的怪人魔法婆婆家里，</p>
          </div>
          <div class="page">
            <p>并在那里遇见了使用名为“咕噜咕噜”的不可思议魔法的少女·柯柯丽……。略显轻率的尼克和不谙世事天真烂漫的柯柯丽，
              以及在这样的两人的旅途中加以点缀的独特而具魅力的同伴们。
              尽情欢笑，偶尔哭泣。令人心动不已，满溢勇气与感动的王道冒险幻想剧，现在开幕。</p>
          </div> -->
        </div>
      </div>
    </div>
    <!-- <div class="cd-transition-layer">
      <div class="bg-layer"></div>
    </div> -->
    <div class="menu-wrapper-right">
      <div class="menu">
        <div class="button" @click="pageBack()"><img src="../assets/menu/back_19.png"></div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import turn from '../ignore_lib/turn.min'
import db from '../ignore_lib/GsyDB'

export default {
  name: 'ArticleDetail',
  components: { $, turn, db },
  data () {
    return {
      content: [],
      page: [],
      message: '',
      newPage: '<div class="page"><p>就是我的画具。见鸡画鸡，见狗画狗，我曾在晒谷场上画过牛耕田，画过牵长线放纸鹞。</p></div>',
      row: ''
    }
  },
  methods: {
    pageBack () {
      this.$router.back()
    }
  },
  created: function () {
    this.$store.commit('setMenuBarSeen', false)
    db.getHistoricalDetail(283, (row) => {
      this.row = row
      let str = this.row.content2.match(/<p(.*?)<\/p>/ig)
      this.content = this.row.content2.match(/<p(.*?)<\/p>/ig)
      console.log(str)
      this.page = this.row.content2.match(/<p(.*?)<\/p>/ig)
      // let _this = this
      // for (let i in str) {
      //   if (this.page[i].length < 100) {
      //     this.page[i] = str[i] + str[parseInt(i) + 1]
      //     delete str[parseInt(i) + 1]
      //   }
      // }
      // for (let i = 0; i < str.length; i++) {
      //   if (this.page[i].length < 100) {
      //     this.page[i] = str[i] + str[i + 1]
      //     i += 1
      //   }
      //   console.log(i)
      //   // console.log(_this)
      // }
      let i = 0
      let j = 0
      while (i < str.length) {
        console.log('i:' + i)
        console.log('j:' + j)
        if (str[i].length < 80) {
          this.page[j] = str[i] + str[i + 1] + str[i + 2] + str[i + 3]
          i += 3
          this.page.length -= 3
        } else if (str[i].length < 100) {
          this.page[j] = str[i] + str[i + 1]
          i += 1
          this.page.length--
        } else {
          this.page[j] = str[i]
        }
        i++
        j++
      }
      console.log(this.page)
    })
  },
  mounted: function () {
    // 翻书效果
    $('.flipbook').turn({
      width: 88 + 'vw',
      height: 80 + 'vh',
      elevation: 10,
      gradients: true,
      autoCenter: false,
      acceleration: true,
      page: 2,
      turnCorners: 'all'
    })
    // console.log(this.page[10])
    // let element = $('<div />').html('Loading...')
    // $('.flipbook').turn('addPage', element, 3)
    // this.message = 1

    // db.getHistoricalList(7, (row) => {
    //   console.log(row)
    // })
    // db.getHistoricalDetail(237, (row) => {
    //   this.row = row
    //   console.log(this.row)
    // })
  }
}
</script>

<style lang="less" scoped>
.artcle-detail-page {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  .page.my-cover {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
.flipbook-viewport {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.flipbook-viewport .container {
  background-image: url('../assets/bg/article-bg.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
.flipbook-viewport .page {
  background: #FFF;
  font-family: 'STFangsong', 'FangSong';
}
.flipbook-viewport .page h1 {
  padding: 2vh 2vw;
  text-align: center;
  color: #F2AA00;
}
.flipbook-viewport .page p {
  text-indent: 2em;
  line-height: 200%;
  font-size: 2vh;
  margin: 4vh 4vw;
  color: #B97325;
}
.flipbook-viewport .page .author {
  color: #FFD6A1;
  margin: 3vh 4vw;
}
.flipbook-viewport .page .time {
  color: #FFD6A1;
  margin: 3vh 4vw;
  display: flex;
  justify-content: flex-end;
}
.flipbook-viewport .page .center {
  display: flex;
  justify-content: center;
}
/* Transition layer */
.cd-transition-layer {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  overflow: hidden;
}
.cd-transition-layer .bg-layer {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-2%);
  height: 100%;
  width: 2500%;
  background: url('http://omph2coqc.bkt.clouddn.com/17-7-31/72171056.jpg') no-repeat 0 0;
  background-size: 100% 100%;
}
.cd-transition-layer.visible {
  opacity: 1;
  visibility: visible;
}
.cd-transition-layer.opening .bg-layer {
  -webkit-animation: cd-sequence 2s steps(24);
  animation-fill-mode: forwards;
}
.cd-transition-layer.closing .bg-layer {
  -webkit-animation: cd-sequence-reverse 2s steps(24);
  animation-fill-mode: forwards;
}
.no-cssanimations.cd-transition-layer {
  display: none;
}
@-webkit-keyframes cd-sequence {
  0% {
    transform: translateY(-50%) translateX(-2%);
  }
  100% {
    transform: translateY(-50%) translateX(-98%);
  }
}
@-webkit-keyframes cd-sequence-reverse {
  0% {
    transform: translateY(-50%) translateX(-98%);
  }
  100% {
    transform: translateY(-50%) translateX(-2%);
  }
}
.menu-wrapper-right {
  .menu {
    .button {
    }
  }
}
</style>
