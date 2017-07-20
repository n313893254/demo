<template>
  <div class="page">
    <div class="logo"><img src="../assets/src/gsylogo.png"></div>
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
	background-color: #000000;
	width: 100vw;
	height: 100vh;
}
.logo {
	width: 100vw;
	height: 50vh;
	margin-left: 20vw;
	margin-top: 5vh;
}
.konw {
	margin-left: 16vw;
	margin-right: 16vw;
	margin-top: 8vh;
	font-family: "宋体";
	font-size: 5vw;
	color: #FFFFFF;
}
</style>
