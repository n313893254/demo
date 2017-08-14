<template>
  <div class="page">
    <div class="logo"><img src="../assets/src/qidong_03.png"></div>
		<div class="know">关山月知识库，传承国画荟萃</div>
  </div>
</template>

<script>
export default {
  name: 'Start',
  created: function () {
    this.$store.commit('setMenuBarSeen', false)

    // 启动页定时跳转
    setTimeout(() => {
      this.$router.push({
        name: 'Chronological'
      })
    }, 10000)
  }
}
</script>

<style lang="css" scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #000000;
}

</style>
