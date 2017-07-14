<template lang="html">
  <div class="">
    <Menu/>
    <button @click="set('书法')">书法</button>
    <button @click="set('连环画')">连环画</button>
    <button @click="set('速写')">速写</button>
    <button @click="set('人物')">人物</button>
    <button @click="set('临摹')">临摹</button>
    <button @click="set('山水')">山水</button>
    <button @click="set('花鸟')">花鸟</button>
    <router-link class="button" to="/">X</router-link>
    <p>这是{{ title }}列表</p>
    <p>poi {{ count }}</p>
    <button type="button" name="button" @click="add">test</button>
  </div>
</template>

<script>
import Menu from './Menu'

export default {
  name: 'Painting',
  components: { Menu },
  computed: {
    count () {
      return this.$store.state.count
    },
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
    },
    add () {
      this.$store.commit('increment')
    }
  }
}
</script>

<style lang="css">
</style>
