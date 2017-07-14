<template lang="html">
  <div class="">
    <MenuBar/>
    <p>这是年表</p>
    <router-link class="button" to="/Painting">画作</router-link>
    <router-link class="button" to="/exhibit">生活</router-link>
    <button>工作</button>
    <router-link class="button" to="/exhibit">文章</router-link>
    <button>展览</button>
  </div>
</template>

<script>
import MenuBar from './MenuBar'

export default {
  name: 'Chronological',
  components: { MenuBar },
  computed: {
    message () {
      return this.$store.state.message
    }
  }
}
</script>

<style lang="css">
</style>
