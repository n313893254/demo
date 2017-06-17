<template lang="html">
  <div id="topbar">
    <div class="wrapper">
      <span class="logo">Kancollect</span>
      <div class="action">
        <el-button>日常</el-button>
        <el-button>舰娘</el-button>
        <el-button>时间轴</el-button>
        <el-button>主力舰队</el-button>
        <el-button>提督热线</el-button>
      </div>
    </div>
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

<style lang="css">
</style>
