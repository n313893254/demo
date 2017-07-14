<template lang="html">
  <div class="">
    <div class="box">
      <p>这是画作全屏展示页</p>
      <button type="button" name="button" @click="back()">X</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaintingDisplay',
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>

<style lang="css">
</style>
