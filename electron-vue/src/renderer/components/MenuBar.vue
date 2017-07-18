<template lang="html">
  <div class="menu-wrapper-right">
    <div class="menu" v-if="rightMenuSeen">
      <router-link class="button" to="/Chronological">年表</router-link>
      <router-link class="button" to="/painting">画作</router-link>
      <router-link class="button" to="/history">史料</router-link>
      <router-link class="button" to="/Research">研究</router-link>
      <router-link class="button" to="/Search">搜索</router-link>
      <div class="button" @click="closeRightMenu()">返回</div>
    </div>
    <div class="menu" v-else>
      <div class="button" @click="openRightMenu()">导航菜单</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuBar',
  computed: {
    rightMenuSeen () {
      return this.$store.state.rightMenuSeen
    }
  },
  methods: {
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
.menu-wrapper-right {
  position: fixed;
  right: 1vh;
  bottom: 1vw;
}
</style>
