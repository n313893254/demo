<template lang="html">
  <div class="cd-transition-layer">
    <div class="bg-layer"></div>
  </div>
</template>

<script>
import $ from 'jquery'
import turn from '../ignore_lib/turn.min'

export default {
  name: 'TransisionLayer',
  components: { $, turn },
  mounted: function () {
    // 泼墨效果
    var transitionLayer = $('.cd-transition-layer')
    transitionLayer.addClass('closing')
    transitionLayer.addClass('visible opening')
    setTimeout(function () {
      transitionLayer.addClass('no-cssanimations')
    }, 3000)
  }
}
</script>

<style lang="css" scoped>
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
