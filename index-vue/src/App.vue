<template>
  <div id="app">
    <header>
      <Topbar/>
      <Carousel/>
    </header>
    <main>
      <Daily/>
    </main>
  </div>
</template>

<script>
import './assets/reset.css'
import 'normalize.css/normalize.css'

import Topbar from './components/Topbar'
import Carousel from './components/Carousel'
import Daily from './components/Daily'

export default {
  name: 'app',
  components: { Topbar, Carousel, Daily }
}
</script>

<style>
#app {
  min-width: 900px;
}
</style>
