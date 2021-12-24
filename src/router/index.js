import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    title: 'Главная',
    component: Home
  },
  {
    path: '/catalog',
    name: 'Catalog',
    title: 'Каталог',
    component: () => import('../views/Catalog.vue')
  },
  {
    path: '/product/:id',
    name: 'Product',
    title: 'Каталог',
    component: () => import('../views/Product.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'bg-warning',
})

export default router
