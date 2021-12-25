import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Главная',
    },
    component: Home
  },
  {
    path: '/catalog',
    name: 'Catalog',
    meta: {
      title: 'Каталог',
    },
    component: () => import('../views/Catalog.vue')
  },
  {
    path: '/basket',
    name: 'Basket',
    meta: {
      title: 'Корзина',
    },
    component: () => import('../views/Basket.vue')
  },
  {
    path: '/product/:id',
    name: 'Product',
    meta: {
      title: 'Покрышка',
    },
    component: () => import('../views/Product.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'bg-warning',
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
