import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import {webFrame} from 'electron'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import './assets/theme.less'
import VueTouch from 'vue-touch'

Vue.use(MuseUI)
Vue.use(VueTouch, {name: 'v-touch'})

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

webFrame.setVisualZoomLevelLimits(1, 1)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
