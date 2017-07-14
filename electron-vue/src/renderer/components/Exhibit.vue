<template lang="html">
  <div class="">
    <MenuBar/>
    <p>展厅desu {{ message }}</p>
  </div>
</template>

<script>
import MenuBar from './MenuBar'

export default {
  name: 'Exhibit',
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
