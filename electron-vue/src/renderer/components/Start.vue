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
	background-image: url(../assets/src/bg.jpg);
	width: 100vw;
	height: 100vh;
}
.logo {
	width: 100vw;
	height: 50vh;
	float: left;
	margin-left: 15vw;
	margin-top: 5vh;
}

.konw {
	margin-left: 15vw;
	margin-right: 10vw;
	margin-top: 5vh;
	float: left;
	font-family: "宋体";
	font-size: 5vw;
	color: #FBFC7D;
}
</style>
