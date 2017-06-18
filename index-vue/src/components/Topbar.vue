<template lang="html">
  <div id="topbar">
    <el-row>
      <el-col :span="24">
        <el-menu theme="light" mode="horizontal" class="nav">
          <span class="logo">Kancollect</span>
          <el-menu-item index="">日常</el-menu-item>
          <el-menu-item index="">舰娘</el-menu-item>
          <el-menu-item index="">时间轴</el-menu-item>
          <el-menu-item index="">主力舰队</el-menu-item>
          <el-menu-item index="">提督热线</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Topbar',
  data () {
    return {
      message: 'Topbar'
    }
  }
}
</script>

<style lang="scss" scoped>
#topbar {
  .el-row {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
    .logo {
      font-size: 24px;
      color: #000;
      line-height: 60px;
      margin-left: 20px;
    }
    .el-menu-item {
      float: right;
    }
  }
}
</style>
