import Vue from 'vue'
import Router from "vue-router"
import Bar from '../components/bar.vue'
import Home from '../components/home.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: "/",
      component: Bar
    },
    {
      path: "/home",
      component: Home
    },
  ]
})
