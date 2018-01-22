import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import App from './App.vue'
import store from './store/index'
import echarts from 'echarts'


Vue.prototype.$echarts = echarts;
new Vue({
  el: "#app",
  router,
  store,
  components: {
    App
  },
  template: "<App/>",

})
