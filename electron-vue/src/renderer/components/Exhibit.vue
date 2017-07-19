<template lang="html">
  <div class="">
    <MenuBar/>
    <p>展厅desu {{ this.$route.path }}</p>
    <div class="pic">
      <div class=""  v-for="painting in paintings">
        <router-link
          :to="{ path: '/Painting/Display',query: { src: painting.imgSrc }}">
          <img :src="painting.imgSrc" alt="">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import MenuBar from './MenuBar'

export default {
  name: 'Exhibit',
  components: { MenuBar },
  computed: {
    message () {
      return this.$store.state.message
    },
    paintings () {
      return this.$store.state.paintings.slice(0, 10)
    }
  }
}
</script>

<style lang="css">
.pic {
  width: 120px;
  height: 180px;
  margin: 150px auto 0;
  position: relative;
  transform-style: preserve-3d;
  transform: perspective(800px) rotateX(-10deg) rotateY(0deg);
}
.pic img {
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 0 10px #fff;
}
</style>
