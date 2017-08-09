<template lang="html">
  <div class="">
    <p>这是年表</p>
    <router-link class="button" to="/Painting">画作</router-link>
    <router-link class="button" to="/exhibit">生活</router-link>
    <button>工作</button>
    <router-link class="button" to="/Chronological/ArticleDetail">文章</router-link>
    <button>展览</button>
    <p>时间轴</p>
    <TransisionLayer/>
  </div>
</template>

<script>
import TransisionLayer from '../components/TransisionLayer'
export default {
  name: 'Chronological',
  components: { TransisionLayer },
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

<style lang="css" scoped>
p{
	margin: auto;
	font-size: 9vw;
}
</style>
