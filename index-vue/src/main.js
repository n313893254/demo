// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {
  Button,
  Select,
  Dialog,
  Menu,
  MenuItem,
  Row,
  Col,
  Carousel,
  CarouselItem
} from 'element-ui'
import App from './App'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Select)
Vue.use(Dialog)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Carousel)
Vue.use(CarouselItem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
