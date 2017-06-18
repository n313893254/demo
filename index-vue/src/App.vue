<template>
  <div id="app">
    <header>
      <Topbar/>
    </header>
    <main>

    </main>
  </div>
</template>

<script>
import './assets/reset.css'
import 'normalize.css/normalize.css'

import Topbar from './components/Topbar'

export default {
  name: 'app',
  components: { Topbar }
}
</script>

<style>
#app {
  min-width: 900px;
}
</style>
