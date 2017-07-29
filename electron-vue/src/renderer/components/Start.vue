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
	width: 100vw;
	height: 100vh;
}
.logo {
	width: 100vw;
	height: 45vh;
	float: left;
	margin-left: 15vw;
	margin-top: 5vh;
}
.logo img{
	margin-left: 8vw;
}
.konw {
	width: 100vw;
	height: 25vh;
	margin-top: 3vh;
	float: left;
	font-family: "宋体";
	font-size: 5vw;
	color: #FBFC7D;
}
.konw p{
	margin-left: 15vw;
}
</style>
