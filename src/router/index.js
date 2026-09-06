import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import IndexView from '../views/IndexView.vue'
import LivingView from '../views/LivingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/index',
      name: 'index',
      component: IndexView
    },
    {
      path: '/home',
      name: 'home',
      component: IndexView
    },
    {
      path: '/',
      name: 'home',
      component: IndexView
    },
    {
      path: '/living',
      name: 'living',
      component: LivingView
    }
  ]
})

export default router
