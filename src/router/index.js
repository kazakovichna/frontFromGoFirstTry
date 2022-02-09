import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'main'},
    component: () => import('../views/Home.vue')
  },
  {
    path: '/desk/:id',
    name: 'Desk',
    meta: {layout: "main"},
    component: () => import('../views/Desk')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
