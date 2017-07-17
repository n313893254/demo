<template lang="html">
  <div class="menu-wrapper">
    <div class="menu" v-if="seen">
      <router-link class="button" to="/Chronological">年表</router-link>
      <router-link class="button" to="/painting">画作</router-link>
      <router-link class="button" to="/history">史料</router-link>
      <router-link class="button" to="/Research">研究</router-link>
      <router-link class="button" to="/Search">搜索</router-link>
      <div class="button" @click="closeMenu">返回</div>
    </div>
    <div class="menu" v-else>
      <div class="button" @click="openMenu">导航菜单</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuBar',
  computed: {
    seen () {
      return this.$store.state.menuSeen
    }
  },
  methods: {
    openMenu () {
      return this.$store.commit('openMenu')
    },
    closeMenu () {
      return this.$store.commit('closeMenu')
    }
  }
}
</script>

<style lang="css" scoped>
.menu-wrapper {
  position: fixed;
  right: 5vh;
  bottom: 5vw;
  /*margin: 5vh 5vw;*/
}
</style>
