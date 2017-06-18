<template lang="html">
  <div id="carousel">
    <el-carousel trigger="click" height="600px">
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
  max-width: 1200px;
  margin: 2px auto;
  border: 3px solid #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
  img {
    width: 100%;
    opacity: 0.9;
  }
}
</style>
