<template>
  <div>
    <div class="page">
      <MenuBar/>
      <p>这是start页面</p>
      <p>{{ this.$route.hash }}</p>
    </div>
  </div>
</template>

<script>
import MenuBar from './MenuBar'

export default {
  name: 'Start',
  components: { MenuBar },
  computed: {
    message () {
      return this.$store.state.message
    }
  }
}
</script>

<style>

</style>
