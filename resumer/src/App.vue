<template>
  <div id="app">
    <Topbar/>
    <ResumePreview/>
    <ResumeEditor/>
  </div>
</template>

<script>
import './assets/reset.css'
import 'normalize.css/normalize.css'

import Topbar from './components/Topbar'
import ResumePreview from './components/ResumePreview.vue'
import ResumeEditor from './components/ResumeEditor.vue'

export default {
  name: 'app',
  data: function () {
    return {
      text: '你好'
    }
  },
  components: {Topbar, ResumePreview, ResumeEditor}
}
</script>

<style>

</style>
