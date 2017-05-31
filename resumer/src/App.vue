<template>
  <div class="page">
    <header>
      <Topbar/>
    </header>
    <main>
      <ResumeEditor/>
      <ResumePreview/>
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
    background: #EAEBEC;
  }
  .page>main {
    flex-grow: 1;
  }

  .page>main {
    min-width: 1024px;
    max-width: 1440px;
    margin-top: 16px;
    margin-bottom: 16px;
    margin: 0;
    display: flex;
    justify-content: space-around;
    width: 100%;
    align-self: center;
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
