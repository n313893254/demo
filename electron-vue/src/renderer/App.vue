<template>
  <div id="app">
    <router-view></router-view>
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
</style>
