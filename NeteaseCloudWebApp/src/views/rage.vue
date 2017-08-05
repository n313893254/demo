<template lang="html">
  <div class="">
    <div class="slider">
      <swiper :option="swiperOption">
        <swiper-slide><img src="static/banner1.jpg" width="100%"></swiper-slide>
        <swiper-slide><img src="static/banner2.jpg" width="100%"></swiper-slide>
        <swiper-slide><img src="static/banner3.jpg" width="100%"></swiper-slide>
        <swiper-slide><img src="static/banner4.jpg" width="100%"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClockable: true
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="css">
</style>
