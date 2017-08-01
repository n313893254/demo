<template lang="html">
  <div class="body">
    <div class="flipbook-viewport">
      <div class="container">
        <div class="flipbook">
          <div class="">『魔神Z』新剧场版与日本政府合作对抗麻疹 『终物语』第2季特番公布预告片-日刊和邪晚间版</div>
          <div class="">离开了40度的上海来到了30度的广州，一切都感觉相当良好。离开了喧闹的CHINA JOY，感受广州的夏季，
            其实上次来广州也是夏天。这次还要感谢我们广州的记者Beryl特别来机场接机，给我带来极大的便利，出差了，
            最近几天的更新就要集中在网上了，明天fripSide的八木沼悟志在广州的发布会大家可以期待我们在微博的直播。</div>
          <div class="">TrySail组合的第2张专辑CD「TAILWIND」将在今年8月23日正式发售，
            这张专辑CD将收录包括『埃罗芒阿老师』的ED「adrenaline!!!」在内的12首歌曲，其中还将有以主打歌「TAILWIND」为首的4首新歌。
            近日官方公开了这张专辑CD的封面，分别是蓝光盘限定版、DVD限定版和通常版。</div>
          <div class="">TrySail是日本的声优组合，由Music Ray’n事务所所属的三名女声优麻仓桃、雨宫天、夏川椎菜组成。
            TrySail将出席在今年的「Animelo Summer Live 2017 -THE CARD-」演唱会，登场时间为8月27日。</div>
          <div class="">七月新番『咕噜咕噜魔法阵』ED单曲封面公开</div>
          <div class="">月番『咕噜咕噜魔法阵』是由卫藤ヒロユキ原著的漫画改编，
            动画由Production I.G负责制作。本作的ED是由TECHNOBOYS PULCRAFT GREEN-FUNDfeat.Bonjour铃木组合演唱，歌名叫做
            单曲CD的发售日期为今年8月9日，
            近日官方公布了单曲CD的封面以及艺术照。单曲封面是动画『咕噜咕噜魔法阵』插图，
            而艺术照则是演唱组合的照片。</div>
          <div class="">『咕噜咕噜魔法阵』简介：被勇者迷父母养育成长的少年·尼克，某天，
            父母得知了哥达国国王为了讨伐魔王而募集勇者一事，于是尼克被勇者迷父母说着“到出发旅行的日子了！
            ”而强行展开了旅程。尼克按照村子的惯例，在旅行前前往村子边缘的怪人魔法婆婆家里，
          </div>
          <div class="">  并在那里遇见了使用名为“咕噜咕噜”的不可思议魔法的少女·柯柯丽……。略显轻率的尼克和不谙世事天真烂漫的柯柯丽，
            以及在这样的两人的旅途中加以点缀的独特而具魅力的同伴们。
            尽情欢笑，偶尔哭泣。令人心动不已，满溢勇气与感动的王道冒险幻想剧，现在开幕。</div>
        </div>
      </div>
    </div>
    <div class="cd-transition-layer">
      <div class="bg-layer"></div>
    </div>
    <div class="menu-wrapper-right">
      <div class="menu">
        <div class="button" @click="pageBack()">返回</div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import turn from '../ignore_lib/turn.min'

export default {
  name: 'ArticleDetail',
  methods: {
    pageBack () {
      this.$router.back()
    }
  },
  created: function () {
    this.$store.commit('setMenuBarSeen', false)
  },
  mounted: function () {
    console.log($('.poi'))
    console.log(turn)
    // 泼墨效果
    var transitionLayer = $('.cd-transition-layer')
    transitionLayer.addClass('closing')
    transitionLayer.addClass('visible opening')
    setTimeout(function () {
      transitionLayer.addClass('no-cssanimations')
    }, 3000)

    // 翻书效果
    $('.flipbook').turn({
      width: 60 + 'vw',
      height: 60 + 'vh',
      elevation: 10,
      gradients: true,
      autoCenter: false,
      acceleration: true,
      page: 2,
      turnCorners: 'all'
    })
    // var delay = ($('.no-cssanimations').length > 0) ? 0 : 600

    // function setLayerDimensions () {
    //   let windowWidth = $(window).width()
    //   let windowHeight = $(window).height()
    //   let layerHeight
    //   let layerWidth
    //
    //   if (windowWidth / windowHeight > frameProportion) {
    //     layerWidth = windowWidth
    //     layerHeight = layerWidth / frameProportion
    //   } else {
    //     layerHeight = windowHeight * 1.2
    //     layerWidth = layerHeight * frameProportion
    //   }
    //   transitionBackground.css({
    //     'width': layerWidth * frames + 'px',
    //     'height': layerHeight + 'px'
    //   })
    // }
  }
}
</script>

<style lang="css" scoped>
.body {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
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
</style>
