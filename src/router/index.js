// ======== Client ========
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Portfolio from '@/views/Portfolio/Portfolio.vue'
import AllPortfolio from '@/views/Portfolio/AllPortfolio.vue'
import ShowPortfolio from '@/views/Portfolio/ShowPortfolio.vue'
import Exhibitions from '@/views/Exhibitions/Exhibitions.vue'
import OnShowExhibitions from '@/views/Exhibitions/AllExhibitions.vue'
import ShowExhibition from '@/views/Exhibitions/ShowExhibition.vue'
import Shop from '@/views/Shop.vue'

// ======== Admin ========
import Admin from '@/views/Admin/Admin.vue'

// project
import Projects from '@/views/Admin/Projects/Projects.vue'
import AllProjects from '@/views/Admin/Projects/AllProjects.vue'
import NewProject from '@/views/Admin/Projects/NewProject.vue'
import ShowProject from '@/views/Admin/Projects/ShowProject.vue'
import EditProject from '@/views/Admin/Projects/EditProject.vue'
import AddPiece from '@/views/Admin/Projects/AddPiece.vue'

// exhibition
import AdminExhibitions from '@/views/Admin/Exhibitions/Exhibitions.vue'
import AllAdminExhibitions from '@/views/Admin/Exhibitions/AllExhibitions.vue'
import NewExhibition from '@/views/Admin/Exhibitions/NewExhibition.vue'
import EditExhibition from '@/views/Admin/Exhibitions/EditExhibition.vue'

// inventory
import AdminInventory from '@/views/Admin/Inventory/Inventory.vue'
import AllAdminProducts from '@/views/Admin/Inventory/AllProducts.vue'
import EditProduct from '@/views/Admin/Inventory/EditProduct.vue'
import EditSize from '@/views/Admin/Inventory/EditSize.vue'
import NewProduct from '@/views/Admin/Inventory/NewProduct.vue'

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
    component: Exhibitions,
    children: [
      {
        path: '',
        name: 'OnShowExhibitions',
        component: OnShowExhibitions
      },
      {
        path: ':id',
        name: 'ShowExhibition',
        component: ShowExhibition
      }
    ]
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
        name: 'Projects',
        component: Projects,
        children: [
          {
            path: '',
            name: 'AdminProjects',
            component: AllProjects
          },
          {
            path: 'new',
            name: 'NewProject',
            component: NewProject
          },
          {
            path: ':id',
            name: 'ShowProject',
            component: ShowProject
          },
          {
            path: 'edit/:id',
            name: 'EditProject',
            component: EditProject
          },
          {
            path: ':id/add-piece',
            name: 'AddPiece',
            component: AddPiece
          }
        ]
      },
      {
        path: 'exhibitions',
        name: 'AdminExhibitions',
        component: AdminExhibitions,
        children: [
          {
            path: '',
            name: 'AllExhibitions',
            component: AllAdminExhibitions
          },
          {
            path: 'new',
            name: 'NewExhibition',
            component: NewExhibition
          },
          {
            path: 'edit/:id',
            name: 'EditExhibition',
            component: EditExhibition
          }
        ]
      },
      {
        path: 'inventory',
        name: 'Inventory',
        component: AdminInventory,
        children: [
          {
            path: '',
            name: 'AllProducts',
            component: AllAdminProducts
          },
          {
            path: 'new',
            name: 'NewProduct',
            component: NewProduct
          },
          {
            path: 'edit-product/:id',
            name: 'EditProduct',
            component: EditProduct
          },
          {
            path: 'edit-size/:id',
            name: 'EditSize',
            component: EditSize
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
