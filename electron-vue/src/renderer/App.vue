<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <MenuBar v-if="menuBarSeen"/>
  </div>
</template>

<script>
import MenuBar from './components/MenuBar'

export default {
  name: 'electron-vue',
  components: { MenuBar },
  computed: {
    menuBarSeen () {
      return this.$store.state.menuBarSeen
    }
  },
  created: function () {
    this.$store.commit('setMenuBarSeen', true)
  }
}
</script>

<style>
  .test {
    position: fixed;
    top: 5vh;
    right: 5vw;
    border: 1px solid #000;
  }
  /* CSS */
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body{
  	background-color: #063E01;
  }
  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .box {
    border: 1px solid #000;
  }
  .button {
    border: 2px solid #000;
    height: 5vh;
    display: inline-block;
    border-radius: 3px;
    text-decoration: none;
    color: blue;
    margin: 10px 10px;
    cursor: pointer;
  }
  .menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .fade-enter-active {
    transition: all .3s ease;
  }
  .fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .menu-wrapper-right {
    position: fixed;
    right: 1vh;
    bottom: 1vw;
  }
</style>
