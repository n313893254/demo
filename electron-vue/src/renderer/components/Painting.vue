<template lang="html">
  <div class="">
    <MenuBar/>
    <div class="menu-wrapper">
      <div class="menu" v-if="true">
        <div class="button" @click="set('书法')">书法</div>
        <div class="button" @click="set('连环画')">连环画</div>
        <div class="button" @click="set('速写')">速写</div>
        <div class="button" @click="set('人物')">人物</div>
        <div class="button" @click="set('临摹')">临摹</div>
        <div class="button" @click="set('山水')">山水</div>
        <div class="button" @click="set('花鸟')">花鸟</div>
        <div class="button">返回</div>
      </div>
    </div>

    <div class="box">
      <router-link class="button" to="/Painting/Display">🚢 poi</router-link>
      <p>这是{{ title }}图片</p>
    </div>
  </div>
</template>

<script>
import MenuBar from './MenuBar'

export default {
  name: 'Painting',
  components: { MenuBar },
  computed: {
    message () {
      return this.$store.state.message
    },
    title () {
      return this.$store.state.paintingTitle
    }
  },
  methods: {
    set (value) {
      return this.$store.commit('setPaintingList', value)
    }
  }
}
</script>

<style lang="css" scoped>
.menu-wrapper {
  position: fixed;
  left: 5vh;
  bottom: 5vw;
  /*margin: 5vh 5vw;*/
}
</style>
