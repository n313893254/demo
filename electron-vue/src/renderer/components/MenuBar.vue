<template lang="html">
  <div class="menu-wrapper-right">
    <div class="menu" v-if="rightMenuSeen">
      <router-link class="button" to="/Chronological"><img src="../assets/src/piclist_42.png"></router-link>
      <router-link class="button" to="/painting"><img src="../assets/src/piclist_39.png"></router-link>
      <router-link class="button" to="/history"><img src="../assets/src/piclist_32.png"></router-link>
      <router-link class="button" to="/Research"><img src="../assets/src/piclist_36.png"></router-link>
      <router-link class="button" to="/Search"><img src="../assets/src/piclist_28.png"></router-link>
      <router-link class="button" to="/">start</router-link>
      <div class="button" @click="closeRightMenu()"><img src="../assets/src/piclist_46.png"></div>
    </div>
    <div class="menu" v-else>
      <div class="button" @click="openRightMenu()"><img src="../assets/src/piclist_46.png"></div>
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

</style>
