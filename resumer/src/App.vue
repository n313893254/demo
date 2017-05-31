<template>
  <div id="app">
    <Topbar/>
    <ResumePreview/>
    <ResumeEditor/>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import ResumePreview from './components/ResumePreview.vue'
import ResumeEditor from './components/ResumeEditor.vue'

import './assets/reset.css'

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
