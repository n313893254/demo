$(function () {
  var imgL = $(".pic img").length;
  var deg = 360 / imgL;
  var roY = 0, roX = -10;
  var xN = 0, yN = 0;
  var play = null;

  $(".pic img").each(function (i) {
    $(this).css({
      'transform': "rotateY("+i*deg+"deg) translateZ(300px);"
    })
    $(this).attr('ondragstart', 'return false')
  })

  $(document).mousedown(function (ev) {
    var x_ = ev.clientX;
    var y_ = ev.clientY;
    clearInterval(play);
    $(this).bind('mousemove', function (ev) {
      var x = ev.clientX;
      var y = ev.clientY;

      xN = x - x_;
      yN = y - y_;

      roY += xN * 0.2;
      roX -= yN * 0.1;

      $('.pic').css({
        transform: 'perspective(800px) rotateX('+roX+'deg) rotateY('+roY+'deg)'
      })

      x_ = ev.clientX;
      y_ = ev.clientY;
    })
  }).mouseup(function () {
    $(this).unbind('mousemove')
    var play = setInterval(function () {
      xN *= 0.95;
      yN *= 0.1;
      $('.pic').css({
        transform: 'perspective(800px) rotateX('+roX+'deg) rotateY('+roY+'deg)'
      })
    }, 30)
  })

  // $('.pic img').on('click', function () {
  //   $(this).toggleClass('max')
  // })

  var curIdx = 0;
  var autoPlay = setInterval(function () {
    curIdx += 1
    console.log(curIdx)
    if (curIdx === 10) {
      curIdx = 0;
    }
    $(".pic img").each(function (i) {
      $(this).css({
        'transform': "rotateY("+(curIdx+i)*deg+"deg) translateZ(300px);"
      })
    })
  }, 3000)
})
