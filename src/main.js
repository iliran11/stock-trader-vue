import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import { sync } from 'vuex-router-sync'
import VueHead from 'vue-head'

sync(store, router)
Vue.use(VueHead)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
