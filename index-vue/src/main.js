// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { Button, Select, Dialog } from 'element-ui'
import App from './App'
import Topbar from './components/Topbar'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Select)
Vue.use(Dialog)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  Topbar,
  template: '<App/>',
  components: { App }
})
