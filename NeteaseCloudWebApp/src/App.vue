<template>
  <div id="app">
    <router-view></router-view>
    <Player></Player>
  </div>
</template>

<script>
import Player from './components/playerBar'
export default {
  components: { Player }
}
</script>
