<template lang="html">
  <div class="">
    <MenuBar/>
    <p>这是搜索页面</p>
    <button @click="set('画作')">画作</button>
    <button @click="set('史料')">史料</button>
    <button @click="set('研究')">研究</button>
    <div class="box">
        <p>这是{{ title }}页面</p>
    </div>
  </div>
</template>

<script>
import MenuBar from './MenuBar'

export default {
  name: 'Search',
  components: { MenuBar },
  computed: {
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
