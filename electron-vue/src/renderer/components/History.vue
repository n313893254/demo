<template lang="html">
  <div class="">
    <MenuBar/>
    <p>史料desu {{ message }}</p>
    <router-link class="button" to="/WritingList">个人著作列表</router-link>
    <router-link class="button" to="/PoetryList">诗词列表</router-link>
    <router-link class="button" to="/VideoList">视频列表</router-link>
    <router-link class="button" to="/Photo">照片列表</router-link>
  </div>
</template>

<script>
import MenuBar from './MenuBar'

export default {
  name: 'History',
  components: { MenuBar },
  computed: {
    message () {
      return this.$store.state.message
    }
  }
}
</script>

<style lang="css">
</style>
