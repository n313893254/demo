<template lang="html">
  <div class="">
    <Menu/>
    <p>画作desu {{ message }}</p>
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
