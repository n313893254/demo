define(['jquery'], function($){
  var GoTop = function(ctn, target) {
    this.ctn = ctn;
    this.target = target;
    this.createNode();
    this.bindEvent();
  }

  GoTop.prototype.createNode = function() {
    var $wrapper = $('<' + this.ctn + '>' + '</' + this.ctn + '>'),
    $node = $('<' + this.target + '>' + 'Top' + '</' + this.target + '>');
    $node.addClass('on');
    $wrapper.append($node);
    $('body').append($wrapper);
  }

  GoTop.prototype.bindEvent = function(){
    $(window).scroll(function(){
      if($(this).scrollTop() > 900) {
        $('.on').css('display', 'block')
      } else {
        $('.on').css('display', 'none')
      }
    })
    $('.on').click(function(){
      $(window).scrollTop(0)
      $('.on').css('display', 'none')
    })
  }
  return GoTop;
})
