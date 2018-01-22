import Vue from 'vue'
import Router from "vue-router"

import ContentBody from '../components/content_body.vue'

import Demo_B from '../components/demo_b/Demo_B.vue'
import ViewTable from '../components/viewTable.vue'

Vue.use(Router)
export default new Router({
  routes: [{
      path: "/",
      component: () =>
        import ('../components/demo_a/Demo_A.vue')
    },
    {
      path: "/home/count",
      component: ContentBody
    },

    {
      path: "/home/a",
      component: () =>
        import ('../components/demo_a/Demo_A.vue')
    },
    {
      path: "/home/b",
      component: Demo_B
    },
    {
      path: "/home/table",
      component: ViewTable
    },




  ]
})
