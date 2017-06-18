<template lang="html">
  <div id="daily">
    <el-row class="header" type="flex" justify="center">
      <el-col :span="6">
        <h2>日常</h2>
        <p>玄不救非 氪不改命</p>
      </el-col>
    </el-row>
    <el-row class="main" type="flex" justify="space-around">
      <el-col :span="6">
        <span class="iconfont">&#xe607</span>
        <h3>作战</h3>
        <p>邂逅小姐姐</p>
      </el-col>
      <el-col :span="6">
        <span class="iconfont">&#xe965</span>
        <h3>赌船</h3>
        <p>手快出金刚 手慢出扶桑</p>
      </el-col>
      <el-col :span="6">
        <span class="iconfont">&#xe65b</span>
        <h3>咸鱼</h3>
        <p>我已经是一条死鱼了</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Daily',
  data () {
    return {
      message: 'poi'
    }
  }
}
</script>

<style lang="scss" scoped>
#daily{
  background: #f8f8f8;
  max-width: 1200px;
  margin: 2px auto;
  .header {
    text-align: center;
    h2 {
      font-size: 40px;
      font-weight: 800;
      margin: 25px auto;
      color: #333;
    }
    p {
      font-size: 16px;
      color: #777;
    }
  }
  .main {
    text-align: center;
    margin-top: 40px;
    span {
      font-size: 56px;
      background: #fed136;
      border-radius: 50%;
      color: #fff;
      padding: 20px;
      width: 100%;
      height: 100%;
    }
    h3 {
      font-size: 18px;
      margin-top: 50px;
      color: #333;
      font-weight: 800;
    }
    p {
      font-size: 14px;
      color: #777;
      line-height: 25px;
    }
  }
}

/* iconfont */
@font-face {
  font-family: 'iconfont';  /* project id 256894 */
  src: url('//at.alicdn.com/t/font_iw2erhd9acv50zfr.eot');
  src: url('//at.alicdn.com/t/font_iw2erhd9acv50zfr.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_iw2erhd9acv50zfr.woff') format('woff'),
  url('//at.alicdn.com/t/font_iw2erhd9acv50zfr.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_iw2erhd9acv50zfr.svg#iconfont') format('svg');
}

.iconfont {
  font-family: "iconfont"!important;
  font-size: normal;
}
</style>
