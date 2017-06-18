<template lang="html">
  <div id="carousel">
    <el-carousel trigger="click" height="700px">
      <el-carousel-item v-for="item in images" :key="item">
        <img :src="item.url" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data () {
    return {
      message: 'Carousel',
      images: [
        {
          url: 'http://omph2coqc.bkt.clouddn.com/61990654_p0%20%281%29.jpg'
        },
        {
          url: 'http://omph2coqc.bkt.clouddn.com/175548qjhhicxqzhfxijhf.jpg'
        },
        {
          url: 'http://omph2coqc.bkt.clouddn.com/thumb-1920-736033.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#carousel {
  img {
    width: 100%;
  }
}
</style>
