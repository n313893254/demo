<template lang="html">
  <div class="">
    <router-link class="button" to="/exhibit">展厅</router-link>
    <router-link class="button" to="/Chronological">年表</router-link>
    <router-link class="button" to="/">研究</router-link>
    <router-link class="button" to="/">史料</router-link>
    <router-link class="button" to="/">画作</router-link>
    <router-link class="button" to="/">搜索</router-link>
    <router-link class="button" to="/">X</router-link>
  </div>
</template>

<script>
export default {
  name: 'menu'
}
</script>

<style lang="css">
.button {
  border: 2px solid #000;
  border-radius: 3px;
  text-decoration: none;
  color: blue;
  padding: 10px 10px;
}
</style>
