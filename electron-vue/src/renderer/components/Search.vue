<template lang="html">
  <div class="page">
    <MenuBar/>
    <div class="searchBar">
      <label for="">年份</label>
      <select class="" name="">
        <option value="1993">1990</option>
        <option value="1993">1980</option>
        <option value="1993">1970</option>
        <option value="1993">1960</option>
        <option value="1993">1950</option>
        <option value="1993">1940</option>
      </select>
      <label for="">月份</label>
      <select class="" name="">
        <option value="1">1月</option>
        <option value="1">2月</option>
        <option value="1">3月</option>
        <option value="1">4月</option>
        <option value="1">5月</option>
        <option value="1">6月</option>
        <option value="1">7月</option>
        <option value="1">8月</option>
        <option value="1">9月</option>
        <option value="1">10月</option>
        <option value="1">11月</option>
        <option value="1">12月</option>
      </select>
    </div>
    <div class="tab">
      <div @click="set('画作')">画作</div>
      <div @click="set('史料')">史料</div>
      <div @click="set('研究')">研究</div>
    </div>
    <div class="panel">
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
.page {
  width: 100%;
}
.searchBar select {
  margin: 5vh 5vw 5vh 1vw;
}
.searchBar label {
  margin-left: 5vw;
}
.tab div {
  border: 1px solid #000;
  cursor: pointer;
  display: inline-block;
  margin: 0 3vw;
}
.panel {
  border: 1px solid #000;
  height: 79vh;
  margin: 0 1.4vw;
}
</style>
