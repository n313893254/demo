<template lang="html">
  <div class="">
    <Menu/>
    <p>搜索desu {{ message }}</p>
  </div>
</template>

<script>
import Menu from './Menu'

export default {
  name: 'Search',
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
