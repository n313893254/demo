<template>
  <div id="app">
    <Topbar/>
    <ResumePreview/>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import ResumePreview from './components/ResumePreview.vue'
export default {
  name: 'app',
  data: function () {
    return {
      text: '你好'
    }
  },
  components: {Topbar, ResumePreview}
}
</script>

<style>
p {
  color: red;
}
</style>
