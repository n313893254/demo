<template lang="html">
  <div class="menu-wrapper">
    <div class="menu" v-if="seen">
      <router-link class="button" to="/exhibit">自动展示</router-link>
      <router-link class="button" to="/Chronological">年表</router-link>
      <router-link class="button" to="/painting">画作</router-link>
      <router-link class="button" to="/history">史料</router-link>
      <router-link class="button" to="/Research">研究</router-link>
      <router-link class="button" to="/Search">搜索</router-link>
      <router-link class="button" to="/?user=1">X</router-link>
      <button type="button" name="button" @click="closeMenu">❌</button>
    </div>
    <div class="" v-else>
      <button type="button" name="button" @click="openMenu">导航菜单</button>
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

<style lang="css">
.button {
  border: 2px solid #000;
  height: 20px;
  display: inline-block;
  border-radius: 3px;
  text-decoration: none;
  color: blue;
  padding: 10px 10px;
  margin: 10px 10px;
}

.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.menu-wrapper {
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 5vh 5vw;
}
</style>
