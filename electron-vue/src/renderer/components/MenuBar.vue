<template lang="html">
  <div class="menu-wrapper-right">
    <div class="menu" v-if="rightMenuSeen">
      <router-link class="button" to="/Chronological"><img src="../assets/src/book_29.png"></router-link>
      <router-link class="button" to="/painting"><img src="../assets/src/book_24.png"></router-link>
      <router-link class="button" to="/history"><img src="../assets/src/book_15.png"></router-link>
      <router-link class="button" to="/Research"><img src="../assets/src/book_20.png"></router-link>
      <router-link class="button" to="/Search"><img src="../assets/src/book_12.png"></router-link>
      <router-link class="button" to="/">start</router-link>
      <div class="button" @click="closeRightMenu()"><img src="../assets/src/circle_12.png"></div>
    </div>
    <div class="menu" v-else>
      <div class="button" @click="openRightMenu()"><img src="../assets/src/circle_12.png"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuBar',
  computed: {
    rightMenuSeen () {
      return this.$store.state.rightMenuSeen
    }
  },
  methods: {
    openRightMenu () {
      return this.$store.commit('openRightMenu')
    },
    closeRightMenu () {
      return this.$store.commit('closeRightMenu')
    }
  }
}
</script>

<style lang="css" scoped>
img{
	width: 100%;
	height: 100%;
}
</style>
