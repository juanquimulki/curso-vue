import Vue from 'vue'
import VueRouter from 'vue-router'

import Cart from '../views/Cart'
import Shop from '../views/Shop'
import Articles from '../views/Articles'

Vue.use(VueRouter)

const routes = [
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/shop',
    component: Shop
  },
  {
    path: '/articles',
    component: Articles
  }
]

const router = new VueRouter({
  routes
})

export default router
