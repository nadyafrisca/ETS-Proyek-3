import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Updatemenu from './views/updatemenu'
import Addmenu from './views/addmenu'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'updatemenu',
      path: '/updatemenu',
      component: Updatemenu,
    },
    {
      name: 'addmenu',
      path: '/addmenu',
      component: Addmenu,
    },
  ],
})
