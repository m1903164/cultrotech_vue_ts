import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/site/HomeView.vue'
import AuthView from '../views/site/AuthView.vue'
import HomeAdminView from '../views/admin/HomeAdminView.vue'
import KnivesView from '../views/admin/knifes/KnivesView.vue'

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
      path: '/admin/home',
      name: 'HomeAdmin',
      component: HomeAdminView,
      // children: [
      //   { path: '/admin/knives', name: 'knifesView', component: KnivesView },
      //   // { path: 'users', name: 'usersView', component: UsersView },
      //   // { path: 'profile', name: 'adminProfileView', component: AdminProfileView },
      //   // { path: 'orders', name: 'ordersView', component: OrdersView }
      // ]
    },
    {
      path: '/admin/knifes',
      name: 'knifesView',
      component: KnivesView
    }
  ]
})

export default router
