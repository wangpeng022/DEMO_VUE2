import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import App from './App.vue'
new Vue({
  el: "#app",
  router,
  components: {
    App
  },
  template: "<App/>"
})
