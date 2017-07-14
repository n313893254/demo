<template lang="html">
  <div class="">
    <MenuBar/>
    <button @click="set('书法')">书法</button>
    <button @click="set('连环画')">连环画</button>
    <button @click="set('速写')">速写</button>
    <button @click="set('人物')">人物</button>
    <button @click="set('临摹')">临摹</button>
    <button @click="set('山水')">山水</button>
    <button @click="set('花鸟')">花鸟</button>
    <router-link class="button" to="/">X</router-link>
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

<style lang="css">
</style>
