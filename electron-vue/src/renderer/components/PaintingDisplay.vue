<!-- 获取img的url进行展示 -->
<template lang="html">
  <div class="">
    <div class="page">
      <img :class="[isHeight ? 'height' : 'width']" :src="this.$route.query.src" alt="">
    </div>
    <div class="menu-wrapper-right">
      <div class="menu">
        <router-link class="button"
          :to="{ path: '/Painting/Display/Detail', query: { src: this.$route.query.src }}">
          更多详情
        </router-link>
        <div class="button" @click="pageBack()">返回</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaintingDisplay',
  computed: {
    isHeight () {
      return this.$store.state.isHeight
    }
  },
  created: function () {
    let img = new Image()
    img.src = this.$route.query.src
    if (img.height > img.width) {
      this.$store.commit('setHeight')
    } else {
      this.$store.commit('setWidth')
    }
  },
  methods: {
    pageBack () {
      this.$router.back()
    }
  }
}
</script>

<style lang="css" scoped>
.page img.height {
  height: 100vh;
}
.page img.width {
  width: 100vw;
}

</style>
