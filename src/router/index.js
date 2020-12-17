import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Portfolio from '@/views/Portfolio/Portfolio.vue'
import AllPortfolio from '@/views/Portfolio/AllPortfolio.vue'
import ShowPortfolio from '@/views/Portfolio/ShowPortfolio.vue'
import Exhibitions from '@/views/Exhibitions.vue'
import Shop from '@/views/Shop.vue'
import Admin from '@/views/Admin/Admin.vue'
import AllProjects from '@/views/Admin/Projects/AllProjects.vue'
import NewProject from '@/views/Admin/Projects/NewProject.vue'
import ShowProject from '@/views/Admin/Projects/ShowProject.vue'
import EditProject from '@/views/Admin/Projects/EditProject.vue'
import AddPiece from '@/views/Admin/Projects/AddPiece.vue'

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
    component: Portfolio,
    children: [
      {
        path: '',
        name: 'AllPortfolio',
        component: AllPortfolio
      },
      {
        path: ':id',
        name: 'ShowPortfolio',
        component: ShowPortfolio
      }
    ]
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
        component: AllProjects
      },
      {
        path: 'projects/new',
        name: 'NewProject',
        component: NewProject
      },
      {
        path: 'projects/:id',
        name: 'ShowProject',
        component: ShowProject
      },
      {
        path: 'projects/:id/edit',
        name: 'EditProject',
        component: EditProject
      },
      {
        path: 'projects/:id/add-piece',
        name: 'AddPiece',
        component: AddPiece
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
