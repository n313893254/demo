<!-- 获取img的url进行展示 -->
<template lang="html">
  <div class="">
    <div class="box">
      <p>这是画作全屏展示页</p>
      <img :src="this.$route.query.src" alt="">
      <button type="button" name="button" @click="pageBack()">X</button>
    </div>
    <div class="menu-wrapper-right">
      <div class="menu">
        <router-link class="button" to="/Painting/Display/Detail">更多详情</router-link>
        <div class="button" @click="pageBack()">返回</div>
      </div>
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
