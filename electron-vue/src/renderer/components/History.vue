<template lang="html">
  <div class="">
    <Menu/>
    <p>史料desu {{ message }}</p>
  </div>
</template>

<script>
import Menu from './Menu'

export default {
  name: 'History',
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
