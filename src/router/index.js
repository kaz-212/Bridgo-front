import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Portfolio from '@/views/Portfolio.vue'
import Exhibitions from '@/views/Exhibitions.vue'
import Shop from '@/views/Shop.vue'
import Admin from '@/views/Admin/Admin.vue'
import Projects from '@/views/Admin/Projects/Projects.vue'
import NewProject from '@/views/Admin/Projects/NewProject.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/exhibitions',
    name: 'Exhibitions',
    component: Exhibitions
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    children: [
      {
        path: 'projects',
        name: 'AdminProjects',
        component: Projects
      },
      {
        path: 'projects/new',
        name: 'NewProject',
        component: NewProject
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
