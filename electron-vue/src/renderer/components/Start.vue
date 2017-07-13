<template>
  <div>
    <div class="page">
      <Menu/>
      <p>这是start {{ message }}</p>
    </div>
  </div>
</template>

<script>
import Menu from './Menu'

export default {
  name: 'Start',
  components: { Menu },
  computed: {
    message () {
      return this.$store.state.message
    }
  }
}
</script>

<style>

</style>
