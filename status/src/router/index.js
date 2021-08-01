import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Status from '../views/Status.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/progress',
    name: 'Home',
    component: Home
  },
  {
    path: '/resolved',
    name: 'Status',
    component: Status
  },
  {
    path: '/pending',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
