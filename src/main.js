// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
// 跨域
import Axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, Axios)
Vue.prototype.HOST = '/api'
//引入路由设置
import router from '@/router'
import '@/assets/css/app'
// import bootstrap from 'bootstrap'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
