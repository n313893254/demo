<template lang="html">
  <div class="">
    <Menu/>
    <router-link class="button" to="/exhibit">书法</router-link>
    <router-link class="button" to="/Chronological">连环画</router-link>
    <router-link class="button" to="/Research">速写</router-link>
    <router-link class="button" to="/history">人物</router-link>
    <router-link class="button" to="/painting">临摹</router-link>
    <router-link class="button" to="/Search">山水</router-link>
    <router-link class="button" to="/Search">花鸟</router-link>
    <router-link class="button" to="/">X</router-link>
    <p>这是画作列表</p>
  </div>
</template>

<script>
import Menu from './Menu'

export default {
  name: 'Painting',
  components: { Menu },
  computed: {
    message () {
      return this.$store.state.message
    }
  }
}
</script>

<style lang="css">
</style>
