// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import Vuex from 'vuex'
import store from './store'  //注册
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vuex)
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(Vant);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
