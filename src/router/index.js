import Vue from 'vue'
import VueRouter from 'vue-router'
import alphaShop from './../views/alphaShop.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'alphashop',
    component: alphaShop
  },
  {
    path: '*',
    name: '404',
    component: () =>  import('./../views/NotFound.vue')
  }
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  routes
})

export default router
