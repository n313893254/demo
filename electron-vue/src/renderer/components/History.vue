<template lang="html">
  <div class="">
    <p>史料 {{ this.$route.path }}</p>
    <div class="menu-wrapper-left">
    <div class="menu">
    <router-link class="button" to="/WritingList">个人著作列表</router-link>
    <router-link class="button" to="/PoetryList">诗词列表</router-link>
    <router-link class="button" to="/VideoList">视频列表</router-link>
    <router-link class="button" to="/Photo">照片列表</router-link>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'History',
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

<style lang="css">
.menu-wrapper-left {
  position: fixed;
  left: 1vh;
  bottom: 1vw;
}
</style>
