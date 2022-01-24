import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Catalog from '../views/Catalog.vue'

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
    component: Catalog
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
  },
  {
    path: '/ordering',
    name: 'Ordering',
    meta: {
      title: 'Оформление заказа',
    },
    component: () => import('../views/Ordering.vue')
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: '',
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
