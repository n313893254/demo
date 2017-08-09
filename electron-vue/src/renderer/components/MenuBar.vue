<template lang="html">
  <div class="menu-wrapper-right">
    <div class="menu" v-if="rightMenuSeen">
      <transition name="bounce">
        <router-link v-if="count > 5" class="button" to="/Chronological"><img src="../assets/src/piclist_42.png"></router-link>
      </transition>
      <transition name="bounce">
        <router-link v-if="count > 4" class="button" to="/painting"><img src="../assets/src/piclist_39.png"></router-link>
      </transition>
      <transition name="bounce">
        <router-link v-if="count > 3" class="button" to="/history"><img src="../assets/src/piclist_32.png"></router-link>
      </transition>
      <transition name="bounce">
        <router-link v-if="count > 2" class="button" to="/Research"><img src="../assets/src/piclist_36.png"></router-link>
      </transition>
      <transition name="bounce">
        <router-link v-if="count > 1" class="button" to="/Search"><img src="../assets/src/piclist_28.png"></router-link>
      </transition>
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
  data () {
    return {
      count: 0,
      timer: ''
    }
  },
  computed: {
    rightMenuSeen () {
      return this.$store.state.rightMenuSeen
    }
  },
  methods: {
    openRightMenu () {
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        this.count++
        console.log(this.count)
        if (this.count > 10) {
          this.count = 10
        }
      }, 100)
      return this.$store.commit('openRightMenu')
    },
    closeRightMenu () {
      clearInterval(this.timer)
      return this.$store.commit('closeRightMenu')
    }
  }
}
</script>

<style lang="less" scoped>
@import "../assets/animate.less";
</style>
