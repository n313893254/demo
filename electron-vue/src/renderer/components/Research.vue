<template lang="html">
  <div class="">
  	<MenuBar/>
  	<p>研究 {{ this.$route.path }}</p>
  	<div class="menu-wrapper-left" >
    <div class="menu">
    <router-link class="button" to="/ResearchList">30-40s 30年-40年</router-link>
    <router-link class="button" to="/ResearchList">50-70s 50年-70年</router-link>
    <router-link class="button" to="/ResearchList">80-90s 80年-90年</router-link>
    <router-link class="button" to="/ResearchList">20th 2000年以后</router-link>
    </div>
    </div>
  </div>
</template>

<script>
import MenuBar from './MenuBar'

export default {
  name: 'Research',
  components: { MenuBar },
  computed: {
    message () {
      return this.$store.state.message
    }
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
