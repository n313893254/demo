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
      <div class="content" v-if="title === '画作'">
        <div class="img-list">
          <div class="img" v-for="painting in paintings">
            <router-link :to="{ path: '/Painting/Display', query: { src: painting.imgSrc }}"><img :src="painting.imgSrc" alt=""></router-link>
            <p>{{ painting.title }}</p>
            <p>{{ painting.year }}</p>
          </div>
        </div>
      </div>
      <div class="content" v-else-if="title === '史料'">
        <p>这是史料页面</p>
      </div>
      <div class="content" v-else>
        <p>内容</p>
      </div>
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
      return this.$store.state.searchTitle
    },
    paintings () {
      return this.$store.state.paintings.slice(0, 6)
    }
  },
  methods: {
    set (value) {
      return this.$store.commit('setSearchList', value)
    }
  }
}
</script>

<style lang="css" scoped>
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
.img {
  height: 15vh;
  width: 9vw;
  margin: 5vh 2vw;
}

.img  img {
  height: 100%;
  width: 100%;
  border: 1px solid #000;
  border-radius: 50%;
}

.img p {
  text-align: center;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}

.title {
  height: 10vh;
  text-align: center;
  margin: 5vh auto;
  line-height: 10vh;
  font-size: 5vh;
}

.img-list {
  display: flex;
  justify-content: space-between;
  width: 70vw;
  flex-wrap: wrap;
}
</style>
