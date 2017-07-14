<template lang="html">
  <div class="">
    <router-link class="button" to="/exhibit">自动展示</router-link>
    <router-link class="button" to="/Chronological">年表</router-link>
    <router-link class="button" to="/Research">研究</router-link>
    <router-link class="button" to="/history">史料</router-link>
    <router-link class="button" to="/painting">画作</router-link>
    <router-link class="button" to="/Search">搜索</router-link>
    <router-link class="button" to="/">X</router-link>
  </div>
</template>

<script>
export default {
  name: 'MenuBar'
}
</script>

<style lang="css">
.button {
  border: 2px solid #000;
  height: 20px;
  display: inline-block;
  border-radius: 3px;
  text-decoration: none;
  color: blue;
  padding: 10px 10px;
  margin: 10px 10px;
}
</style>
