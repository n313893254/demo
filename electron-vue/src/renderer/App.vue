<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'electron-vue'
  }
</script>

<style>
  /* CSS */
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
    height: 20px;
    display: inline-block;
    border-radius: 3px;
    text-decoration: none;
    color: blue;
    padding: 10px 10px;
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
</style>
