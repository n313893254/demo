<template>
  <div id="app">
    <header>
      <Topbar/>
    </header>
    <main>
      <ResumePreview/>
      <ResumeEditor/>
    </main>
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
  .page {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .page>main {
    flex-grow: 1;
  }

  .page>main {
    min-width: 1024px;
    max-width: 1440px;
    margin: 0;
    display: flex;
    justify-content: space-around;
  }

  #resumeEditor {
    width: 35%;
    background: #444;
  }

  #resumePreview {
    width: 61.66667%;
    background: #777;
  }
</style>
