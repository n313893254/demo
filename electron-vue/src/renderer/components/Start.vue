<template>
  <div class="page">
    <div class="logo">关&nbsp;&nbsp;山&nbsp;&nbsp;月</div>
		<div class="konw"><p>农历九月十六日。生于广东阳江县埠场镇那蓬乡果园村，乳名应新。
		兄弟姐妹八人，排行第二。父亲关籍农为小学教师，擅画梅兰菊竹。农历九月十六日。生于广东阳江县埠场镇那蓬乡果园村，乳名应新。兄弟姐妹八人，排行第二。
		父亲关籍农为小学教师，擅画梅兰菊竹。</p></div>
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
	margin-left: 41.5%;
	margin-top: 17%;
	font-family: "宋体";
	font-size: 1.8em;
	color: yellow;
}
.konw {
	margin-left: 32%;
	margin-right: 27.5%;
	margin-top: 1%;
	font-family: "宋体";
	font-size: 1.4em;
	color: #FFFFFF;
}
</style>
