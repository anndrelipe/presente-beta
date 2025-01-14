import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/random',
      name: 'random',

      component: () => import('../views/RandomView.vue')
    },
    {
      path: '/roleta',
      name: 'roleta',
      component: () => import('../views/RoletaView.vue')
    },
    {
      path: '/galeria',
      name: 'galeria',
      component: () => import('../views/GaleriaView.vue')
    }
  ]
})

export default router
