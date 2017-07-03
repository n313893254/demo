$(function () {
  var imgL = $(".pic img").length;
  var deg = 360 / imgL;
  var roY = 0, roX = -10;
  var xN = 0, yN = 0;
  var play = null;

  lightbox.option({
    'fitImagesInViewport': false
  })

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

  $(".item.action").on('click', function () {
    $("nav .menu").fadeToggle()
    if ($(this).text() != 'X') {
      $(this).text('X')
    } else {
      $(this).text('导航菜单')
    }
  })

  $('.item.load').on('click', function (e) {
    if($(this).data('isLoading')) {
      return
    }
    $(this).data('isLoading', true)

    $.ajax({
      url: 'load',
      dataType: 'json',
      type: 'get',
      data: {
        start: 1
      },
      success: function (json) {
        onSuccess(json)
      },
      error: function () {
        $('.item.load').data('isLoading', false)
        alert('网络异常')
      }
    })

    function onSuccess (json) {
      $('.item.load').data('isLoading', false)
      var tbody = ''
      for (var i = 0; i < 10; i++) {
        tbody += '<a href="' + json[i] + '" data-lightbox="1"><img src="' + json[i] + '"></a>'
      }
      tbody += '<p></p>'
      $('.pic').html(tbody)
    }
  })



  var curIdx = 0;
  var autoPlay = setInterval(function () {
    curIdx += 1
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
