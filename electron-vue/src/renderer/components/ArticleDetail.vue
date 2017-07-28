<template lang="html">
  <div class="body">
    <div class="flipbook-viewport">
      <div class="container">
        <div class="flipbook">
          <div class="" style="background-image: url(http://omph2coqc.bkt.clouddn.com/00357D.png)"></div>
          <div class="" style="background-image: url(http://omph2coqc.bkt.clouddn.com/thumb-1920-736033.jpg)"></div>
          <div class="" style="background-image: url(http://omph2coqc.bkt.clouddn.com/00357D.png)"></div>
          <div class="" style="background-image: url(http://omph2coqc.bkt.clouddn.com/00357D.png)"></div>
          <div class="" style="background-image: url(http://omph2coqc.bkt.clouddn.com/00357D.png)"></div>
          <div class="" style="background-image: url(http://omph2coqc.bkt.clouddn.com/00357D.png)"></div>
          <div class="" style="background-image: url(http://omph2coqc.bkt.clouddn.com/00357D.png)"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import turn from '../ignore_lib/turn'

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

    $('.flipbook').turn({
      width: 922,
      height: 600,
      elevation: 50,
      gradients: true,
      autoCenter: true
    })
  }
}
</script>

<style lang="css" scoped>
.body {
  background-color: #fcfcfc;
  overflow: hidden;
  margin: 0;
  padding: 0
}
.flipbook-viewport {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.flipbook-viewport .container {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: auto;
}
.flipbook-viewport .flipbook {
  width: 922px;
  height: 600px;
  left: -461px;
  top: 300px;
}
.flipbook-viewport .page {
  width: 461px;
  height: 600px;
  background-color: white;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.flipbook .page {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}
.flipbook-viewport .page img {
  user-select: none;
  margin: 0;
}
.flipbook-viewport .shadow {
  box-shadow: 0 0 20px #ccc;
}
#book {
  color: #333;
  background: #444;
  font-family: Helvetica, sans-serif;

  /*background: url('http://omph2coqc.bkt.clouddn.com/GSYbook.png') no-repeat;*/
  position: absolute;
  width: 830px;
  height: 260px;
  left: 50%;
  top: 50%;
  margin-left: -400px;
  margin-top: -125px;
}
.pages section:nth-child(even) {
  background: url('http://omph2coqc.bkt.clouddn.com/GSYpaper.png') no-repeat;
  display: block;
  width: 400px;
  height: 250px;
  position: absolute;
  left: 415px;
  top: 5px;
  overflow: hidden;
}
.pages section:nth-child(odd) {
  background: url('http://omph2coqc.bkt.clouddn.com/GSYpaper.png') no-repeat;
  display: block;
  width: 400px;
  height: 250px;
  position: absolute;
  left: 0px;
  top: 5px;
  overflow: hidden;
}
  .pages section > div {
    display: block;
    width: 400px;
    height: 250px;
    font-size: 12px;
  }
  .pages section p,
  .pages section h2 {
    padding: 3px 35px;
    line-height: 1.4em;
    text-align: justify;
    margin: 15px 0 10px;
  }
#pageflip-canvas {
  position: absolute;
  z-index: 100;
}
.article_content{
	width: 90vw;
	height: 90vh;
	margin-top: 3vh;
}
.article_content img{
	width: 90vw;
	height: 90vh;
}
.button_out{
	float: right;
	font-size: 2vw;
	width: 5vw;
	height: 5vh;
}
</style>
