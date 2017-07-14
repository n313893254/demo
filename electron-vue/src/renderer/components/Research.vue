<template lang="html">
  <div class="">
    <MenuBar/>
    <p>研究desu {{ message }}</p>
  </div>
</template>

<script>
import MenuBar from './MenuBar'

export default {
  name: 'Research',
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
