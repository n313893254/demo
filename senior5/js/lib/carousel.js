var $ = require('jquery')
  function _Carousel($ctn) {
    this.$ctn = $ctn;
    this.init();
    this.bind();
    this.autoPlay();
  }

  _Carousel.prototype.init = function() {
    this.curIdx = 0;
    this.isAnimate = false;
    this.$container = this.$ctn.find('.img-ct');
    this.$items = this.$container.children();
    this.imgWidth = this.$items.width();
    this.imgCount = this.$items.length;
    this.$pre = this.$ctn.find('.btn-pre');
    this.$next = this.$ctn.find('.btn-next');
    this.$dots = this.$ctn.find('.dots');
  }

  _Carousel.prototype.bind = function(){
    var _this = this;
    this.$next.on('click', function(){
      var idx = _this.curIdx + 1;
      if(idx === _this.imgCount) {
        idx = 0;
      }
      _this.play(idx);
    })

    this.$pre.on('click', function() {
      var idx = _this.curIdx - 1;
      if(idx < 0){
        idx = _this.imgCount - 1;
      }
      _this.play(idx);
    })

    this.$dots.on('click', 'li', function(){
      var idx = $(this).index();
      _this.play(idx);
    })

    this.$items.on('mouseover', function(){
    //  _this.stopAuto();
    })

    this.$items.on('mouseout', function(){
    //  _this.autoPlay();
    })
  }

  _Carousel.prototype.play = function(idx) {
    var _this = this;
    if(this.isAnimate) return;
    this.isAnimate = true;
    this.$items.eq(this.curIdx).fadeOut(500);
    this.$items.eq(idx).fadeIn(500, function(){
      _this.isAnimate = false;
    })
    this.curIdx = idx;
    this.setBullet();
  }

  _Carousel.prototype.setBullet = function() {
    this.$dots.children().removeClass('active').eq(this.curIdx).addClass('active');
  }

  _Carousel.prototype.autoPlay = function(){
    var _this = this;
    clock = setInterval (function(){
      var idx = _this.curIdx + 1;
      if(idx === _this.imgCount){
        idx = 0;
      }
      _this.play(idx);
    }, 3000)
  }

  _Carousel.prototype.stopAuto = function(){
    clearInterval(clock);
  }

  var Carousel = (function(){
    return {
      init: function($ctn) {
        $ctn.each(function(index, node){
          new _Carousel($(node))
        })
      }
    }
  })()

module.exports = Carousel
