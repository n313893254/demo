<template lang="html">
  <div class="">
    <div id="book" ref="book">
      <canvas id="pageflip-canvas"></canvas>
      <div class="pages">
        <section>
          <div class="">
            <h2>壁画自序</h2>
            <p>模块化开发涉及到性能优化，对构建工具有一定的配套实现要求，同时也会影响开发规范的制定
组件化开发应该基于模块化框架来加载其他依赖的组件，如果组件化框架自带模块管理功能，那么就可能导致工程的性能优化实现困难（我们可以直接使用ES6的module语法及loader）
组件库应该与组件化开发配套，组件仓库中的组件应该按照相同的标准实现
开发规范工具必须容易实现，如果部署上有特殊要求，工具是否能很容易的做出</p>
          </div>
        </section>
        <section>
          <div class="">
            <h2>poi</h2>
            <p>Here is my debug.log with error:
CI detected, so artifacts will be published if draft release exists
Thu, 01 Sep 2016 15:53:24 GMT electron-builder Found existing nsis C:\Users\S2S Dev.cache\nsis\nsis-3.0.1
Thu, 01 Sep 2016 15:53:24 GMT electron-builder Spawning npm.cmd rebuild --production --build-from-source --cache-min 999999999
Rebuilding app dependencies for arch x64 to C:\Users\S2S Dev\projects\softphone\desktop\trunk\app-container\app

child_process@1.0.2 C:\Users\S2S Dev\projects\softphone\desktop\trunk\app-container\app\node_modules\child_process
electron-json-storage@2.0.0 C:\Users\S2S Dev\projects\softphone\desktop\trunk\app-container\app\node_modules\electron-json-storage
async@1.5.2 C:\Users\S2S Dev\projects\softphone\desktop\trunk\app-container\app\node_modules\electron-json-storage\n</p>
          </div>
        </section>
      </div>
    </div>
    <div class="box">
      <div class="article_content">
         <!-- <img src="../assets/src/wenzhang.jpg"> -->
      </div>
    </div>
    <button class="button_out" type="button" name="button" @click="pageBack()">返回</button>
  </div>
</template>

<script>
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
    var BOOK_WIDTH = 830
    var BOOK_HEIGHT = 260
    var PAGE_WIDTH = 400
    var PAGE_HEIGHT = 250
    var CANVAS_PADDING = 60
    var PAGE_Y = (BOOK_HEIGHT - BOOK_WIDTH) / 2

    var page = 0
    var flips = []

    var book = this.$refs.book
    var pages = book.querySelectorAll('.pages section')
    var canvas = document.getElementById('pageflip-canvas')
    var context = canvas.getContext('2d')

    for (let i = 0, len = pages.length; i < len; i++) {
      pages[i].style.zIndex = len - i
      flips.push({
        progress: 1,
        target: 1,
        page: pages[i],
        dragging: false
      })
    }

    var mouse = { x: 0, y: 0 }
    canvas.width = BOOK_WIDTH + (CANVAS_PADDING * 2)
    canvas.height = BOOK_HEIGHT + (CANVAS_PADDING * 2)
    canvas.style.top = -CANVAS_PADDING + 'px'
    canvas.style.left = -CANVAS_PADDING + 'px'

    setInterval(render, 1000 / 60)

    document.addEventListener('mousemove', mouseMoveHandler, false)
    document.addEventListener('mousedown', mouseDownHandler, false)
    document.addEventListener('mouseup', mouseUpHandler, false)

    function mouseMoveHandler (event) {
      mouse.x = event.clientX - book.offsetLeft - (BOOK_WIDTH / 2)
      mouse.y = event.clientY - book.offsetTop
    }

    function mouseDownHandler (event) {
      if (Math.abs(mouse.x) < PAGE_WIDTH) {
        if (mouse.x < 0 && page - 1 >= 0) {
          flips[page - 1].dragging = true
        } else if (mouse.x > 0 && page + 1 < flips.length) {
          flips[page].dragging = true
        }
      }
      event.preventDefault()
    }

    function mouseUpHandler (event) {
      for (let i = 0; i < flips.length; i++) {
        if (flips[i].dragging) {
          if (mouse.x < 0) {
            flips[i].target = -1
            page = Math.min(page + 1, flips.length)
          } else {
            flips[i].target = 1
            page = Math.max(page - 1, 0)
          }
        }
        flips[i].dragging = false
      }
    }

    function render () {
      context.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0, len = flips.length; i < len; i++) {
        let flip = flips[i]
        if (flip.dragging) {
          flip.target = Math.max(Math.min(mouse.x / PAGE_WIDTH, 1), -1)
        }
        flip.progress += (flip.target - flip.progress) * 0.2
        if (flip.dragging || Math.abs(flip.progress) < 0.997) {
          drawFlip(flip)
        }
      }
      // console.log()
    }

    function drawFlip (flip) {
      let strength = 1 - Math.abs(flip.progress)
      let foldWidth = (PAGE_WIDTH * 0.5) * (1 - flip.progress)
      let foldX = PAGE_WIDTH * flip.progress + foldWidth
      let verticalOutdent = 20 * strength

      let paperShadowWidth = (PAGE_WIDTH * 0.5) * Math.max(Math.min(1 - flip.progress, 0.5), 0)
      let rightShadowWidth = (PAGE_WIDTH * 0.5) * Math.max(Math.min(strength, 0.5), 0)
      let leftShadowWidth = (PAGE_WIDTH * 0.5) * Math.max(Math.min(strength, 0.5), 0)

      flip.page.style.width = Math.max(foldX, 0) + 'px'
      context.save()
      context.translate(CANVAS_PADDING + (BOOK_WIDTH / 2), PAGE_Y + CANVAS_PADDING)

      context.strokeStyle = 'rgba(0, 0, 0,' + (0.05 * strength) + ')'
      context.lineWidth = 30 * strength
      context.beginPath()
      context.moveTo(foldX - foldWidth, -verticalOutdent * 0.5)
      context.lineTo(foldX - foldWidth, PAGE_HEIGHT + (verticalOutdent * 0.5))
      context.stroke()

      let rightShadowGradient = context.createLinearGradient(foldX, 0, foldX + rightShadowWidth, 0)
      rightShadowGradient.addColorStop(0, 'rgba(0,0,0,' + (strength * 0.2) + ')')
      rightShadowGradient.addColorStop(0.8, 'rgba(0,0,0,0.0)')

      context.fillStyle = rightShadowGradient
      context.beginPath()
      context.moveTo(foldX, 0)
      context.lineTo(foldX + rightShadowWidth, 0)
      context.lineTo(foldX + rightShadowWidth, PAGE_HEIGHT)
      context.lineTo(foldX, PAGE_HEIGHT)
      context.fill()

      let leftShadowGradient = context.createLinearGradient(foldX - foldWidth - leftShadowWidth, 0, foldX - foldWidth, 0)
      leftShadowGradient.addColorStop(0, 'rgba(0,0,0,0.0)')
      leftShadowGradient.addColorStop(1, 'rgba(0,0,0,' + (strength * 0.15) + ')')

      context.fillStyle = leftShadowGradient
      context.beginPath()
      context.moveTo(foldX - foldWidth - leftShadowWidth, 0)
      context.lineTo(foldX - foldWidth, 0)
      context.lineTo(foldX - foldWidth, PAGE_HEIGHT)
      context.lineTo(foldX - foldWidth - leftShadowWidth, PAGE_HEIGHT)
      context.fill()

      let foldGradient = context.createLinearGradient(foldX - paperShadowWidth, 0, foldX, 0)
      foldGradient.addColorStop(0.35, '#fafafa')
      foldGradient.addColorStop(0.73, '#eeeeee')
      foldGradient.addColorStop(0.9, '#fafafa')
      foldGradient.addColorStop(1.0, '#e2e2e2')

      context.fillStyle = foldGradient
      context.strokeStyle = 'rgba(0, 0, 0, 0.06)'
      context.lineWidth = 0.5

      context.beginPath()
      context.moveTo(foldX, 0)
      context.lineTo(foldX, PAGE_HEIGHT)
      context.quadraticCurveTo(foldX, PAGE_HEIGHT + (verticalOutdent * 2), foldX - foldWidth, PAGE_HEIGHT + verticalOutdent)
      context.lineTo(foldX - foldWidth, -verticalOutdent)
      context.quadraticCurveTo(foldX, -verticalOutdent * 2, foldX, 0)

      context.fill()
      context.stroke()

      context.restore()
    }
  }
}
</script>

<style lang="css">
#book {
  color: #333;
  background: #444;
  font-family: Helvetica, sans-serif;

  background: url('http://omph2coqc.bkt.clouddn.com/GSYbook.png') no-repeat;
  position: absolute;
  width: 830px;
  height: 260px;
  left: 50%;
  top: 50%;
  margin-left: -400px;
  margin-top: -125px;
}

.pages section {
  background: url('http://omph2coqc.bkt.clouddn.com/GSYpaper.png') no-repeat;
  display: block;
  width: 400px;
  height: 250px;
  position: absolute;
  left: 415px;
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
