<template lang="html">
  <div class="">
    <Menu/>
    <p>史料desu {{ message }}</p>
    <router-link class="button" to="/Writings">个人著作列表</router-link>
    <router-link class="button" to="/Poetry">诗词列表</router-link>
    <router-link class="button" to="/VideoList">视频列表</router-link>
    <router-link class="button" to="/Photo">照片列表</router-link>
  </div>
</template>

<script>
import Menu from './Menu'

export default {
  name: 'History',
  components: { Menu },
  computed: {
    message () {
      return this.$store.state.message
    }
  }
}
</script>

<style lang="css">
</style>
