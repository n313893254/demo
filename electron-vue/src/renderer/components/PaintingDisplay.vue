<!-- 获取img的url进行展示 -->
<template lang="html">
  <div class="">
    <div class="box">
      <p>这是画作全屏展示页</p>
      <button type="button" name="button" @click="pageBack()">X</button>
      <router-link class="button" to="/Painting/Display/Detail">右面拉出</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaintingDisplay',
  methods: {
    pageBack () {
      this.$router.back()
    }
  }
}
</script>

<style lang="css">
</style>
