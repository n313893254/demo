<template lang="html">
  <div class="menu-wrapper-right">
    <div class="menu" @click="clearCount()">
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
      <div class="button main" v-if="rightMenuSeen" @click="closeRightMenu()"><img src="../assets/src/piclist_46.png"></div>
    </div>
    <div class="menu" >
      <div class="button main" v-if="rightMenuSeen === false" @click="openRightMenu()"><img src="../assets/src/piclist_46.png"></div>
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
      this.count = 0
      this.timer = setInterval(() => {
        this.count++
        // console.log(this.count)
        if (this.count > 10) {
          this.count = 10
          clearInterval(this.timer)
        }
      }, 200)
      return this.$store.commit('openRightMenu')
    },
    closeRightMenu () {
      clearInterval(this.timer)
      this.count = 10
      // console.log(this)
      this.timer = setInterval(() => {
        this.count--
        // console.log(this.count)
        if (this.count < 0) {
          this.count = 0
          clearInterval(this.timer)
        }
      }, 50)
      return this.$store.commit('closeRightMenu')
    },
    clearCount () {
      clearInterval(this.timer)
      this.count = 0
      console.log(this.count)
    }
  }
}
</script>

<style lang="less" scoped>
@import "../assets/animate.less";

.menu-wrapper-right {
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 200;
  .menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .button {
       width: 10vw;
       height: 10vh;
       display: inline-block;
       text-decoration: none;
       position: relative;
       margin-top: 1vh;
       cursor: pointer;
       img {

       }
     }
     .main.button {
       width: 13vw;
       height: 13vh;
     }
  }
}
</style>
