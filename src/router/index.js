import Vue from 'vue'
//调用自己的vue-router
import VueRouter from '../vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Home,
  },
  {
    path: '/learn',
    component: () => import('../views/Learn'),
  },
  {
    path: '/student',
    component: () => import('../views/Student'),
  },
  {
    path: '/about',
    component: () => import('../views/About'),
  },
  {
    path: '/activity',
    component: () => import('../views/Activity'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router