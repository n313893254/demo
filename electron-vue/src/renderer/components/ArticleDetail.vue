<template lang="html">
  <div class="">
    <div class="box">
      <div class="article_content">
         <img src="../assets/src/wenzhang.jpg">
      </div>
    </div>
    <button class="button_out" type="button" name="button" @click="pageBack()">返回</button>
  </div>
</template>

<script>
export default {
  name: 'ArticleDetail',
  methods: {
    pageBack () {
      this.$router.back()
    }
  },
  created: function () {
    this.$store.commit('setMenuBarSeen', false)
  }
}
</script>

<style lang="css">
.article_content{
	width: 90vw;
	height: 90vh;
	margin-top: 3vh;
}
.article_content img{
	width: 90vw;
	height: 90vh;
}
.button_out{
	float: right;
	font-size: 2vw;
	width: 5vw;
	height: 5vh;
}
</style>
