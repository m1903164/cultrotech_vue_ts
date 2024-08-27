import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/site/HomeView.vue'
import AuthView from '../views/site/AuthView.vue'
import HomeAdminView from '../views/admin/HomeAdminView.vue'
import UserProfileView from '../views/site/UserProfileView.vue'

import adminRoutes from './admin/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/site/LoginView.vue')
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView
    },
    {
      path: '/profile',
      name: 'userProfile',
      component: UserProfileView
    },
    {
      path: '/admin',
      name: 'HomeAdmin',
      component: HomeAdminView,
      children: [
          ...adminRoutes
      ]
    },
  ]
})

export default router
