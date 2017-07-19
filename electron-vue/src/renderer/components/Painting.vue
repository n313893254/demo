<template lang="html">
  <div class="">
    <MenuBar/>
    <div class="menu-wrapper-left">
      <div class="menu" v-if="leftMenuSeen">
        <div class="button" @click="set('书法')">书法</div>
        <div class="button" @click="set('连环画')">连环画</div>
        <div class="button" @click="set('速写')">速写</div>
        <div class="button" @click="set('人物')">人物</div>
        <div class="button" @click="set('临摹')">临摹</div>
        <div class="button" @click="set('山水')">山水</div>
        <div class="button" @click="set('花鸟')">花鸟</div>
        <div class="button" @click="closeLeftMenu()">返回</div>
      </div>
      <div class="menu" v-else>
        <div class="button" @click="openLeftMenu()">分类菜单</div>
      </div>
    </div>
    <div class="title">
      <span> {{ title }} </span>
    </div>
    <div class="img-list">
      <div class="img" v-for="painting in paintings">
        <router-link :to="{ path: '/Painting/Display', query: { src: painting.imgSrc }}"><img :src="painting.imgSrc" alt=""></router-link>
        <p>{{ painting.title }}</p>
        <p>{{ painting.year }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import MenuBar from './MenuBar'

export default {
  name: 'Painting',
  components: { MenuBar },
  computed: {
    title () {
      return this.$store.state.paintingTitle
    },
    leftMenuSeen () {
      return this.$store.state.leftMenuSeen
    },
    paintings () {
      return this.$store.state.paintings.slice(0, 6)
    }
  },
  methods: {
    set (value) {
      return this.$store.commit('setPaintingList', value)
    },
    openLeftMenu () {
      return this.$store.commit('openLeftMenu')
    },
    closeLeftMenu () {
      return this.$store.commit('closeLeftMenu')
    }
  }
}
</script>

<style lang="css" scoped>
.menu-wrapper-left {
  position: fixed;
  left: 1vh;
  bottom: 1vw;
}

.img {
  height: 30vh;
  width: 17vw;
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
