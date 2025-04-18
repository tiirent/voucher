import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/create',
      name: 'CreateVoucher',
      component: () => import('../views/CreateVoucherView.vue'),
    },
    {
      path: '/manage',
      name: 'Manage',
      component: () => import('../views/ManageView.vue'),
    },
  ],
})

export default router
