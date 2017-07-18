<template lang="html">
  <div class="">
    <MenuBar/>
    <div class="menu-wrapper-left">
      <div class="menu" v-if="rightMenuSeen">
        <div class="button" @click="set('书法')">书法</div>
        <div class="button" @click="set('连环画')">连环画</div>
        <div class="button" @click="set('速写')">速写</div>
        <div class="button" @click="set('人物')">人物</div>
        <div class="button" @click="set('临摹')">临摹</div>
        <div class="button" @click="set('山水')">山水</div>
        <div class="button" @click="set('花鸟')">花鸟</div>
        <div class="button" @click="closeRightMenu()">返回</div>
      </div>
      <div class="menu" v-else>
        <div class="button" @click="openRightMenu()">分类菜单</div>
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
    title () {
      return this.$store.state.paintingTitle
    },
    rightMenuSeen () {
      return this.$store.state.rightMenuSeen
    }
  },
  methods: {
    set (value) {
      return this.$store.commit('setPaintingList', value)
    },
    openRightMenu () {
      return this.$store.commit('openRightMenu')
    },
    closeRightMenu () {
      return this.$store.commit('closeRightMenu')
    }
  }
}
</script>

<style lang="css" scoped>
.menu-wrapper-left {
  position: fixed;
  left: 1vh;
  bottom: 1vw;
  /*margin: 5vh 5vw;*/
}
</style>
