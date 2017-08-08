<template>
  <div class="page">
    <div class="logo"><img src="../assets/src/qidong_03.png"></div>
		<div class="know"><p>关山月知识库，传承国画荟萃</p></div>
  </div>
</template>

<script>
export default {
  name: 'Start',
  created: function () {
    this.$store.commit('setMenuBarSeen', false)
    setTimeout(() => {
      this.$router.push({
        name: 'Chronological'
      })
    }, 10000)
  }
}
</script>

<style scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #000000;
}
.know p {
  font-size: 5vw;
  color: #FDD69C;
}
</style>
