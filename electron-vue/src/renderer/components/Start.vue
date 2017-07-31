<template>
  <div class="page">
    <div class="logo"><img src="../assets/src/qidong_03.png"></div>
		<div class="konw"><p>关山月知识库，传承国画荟萃</p></div>
  </div>
</template>

<script>
export default {
  name: 'Start',
  computed: {
    message () {
      return this.$store.state.message
    }
  },
  created: function () {
    this.$store.commit('setMenuBarSeen', true)
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
}
.know p {
  font-size: 5vw;
  color: #FBFC7D;
}
</style>
