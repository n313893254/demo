<template lang="html">
  <div class="">
    <div class="box">
      <p>这是画作详情页</p>
      <button type="button" name="button" @click="pageBack()">X</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaintingDetail',
  methods: {
    pageBack () {
      this.$router.back()
    }
  }
}
</script>

<style lang="css">
</style>
