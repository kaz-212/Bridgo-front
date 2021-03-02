// ======== Client ========
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

import Portfolio from '@/views/Portfolio/Portfolio.vue'
import AllPortfolio from '@/views/Portfolio/AllPortfolio.vue'
import ShowPortfolio from '@/views/Portfolio/ShowPortfolio.vue'

import Exhibitions from '@/views/Exhibitions/Exhibitions.vue'
import OnShowExhibitions from '@/views/Exhibitions/AllExhibitions.vue'
import ShowExhibition from '@/views/Exhibitions/ShowExhibition.vue'

import Shop from '@/views/Shop/Shop.vue'
import ShopFront from '@/views/Shop/ShopFront.vue'
import ShowItem from '@/views/Shop/ShowItem.vue'
import Basket from '@/views/Shop/Basket.vue'
import Checkout from '@/views/Shop/Checkout.vue'

import Admin from '@/router/admin'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Bridget Simpson Art'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About Me - Bridget Simpson Art'
    }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
    meta: {
      title: 'Portfolio - Bridget Simpson Art'
    },
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
    meta: {
      title: 'Exhibitions - Bridget Simpson Art'
    },
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
    component: Shop,
    meta: {
      title: 'Shop - Bridget Simpson Art'
    },
    children: [
      {
        path: '',
        name: 'ShopFront',
        component: ShopFront
      },
      {
        path: ':id',
        name: 'ShowItem',
        component: ShowItem
      },
      {
        path: 'basket',
        name: 'Basket',
        component: Basket,
        meta: {
          title: 'Basket - Bridget Simpson Art'
        }
      },
      {
        path: 'checkout',
        name: 'Checkout',
        component: Checkout,
        meta: {
          title: 'Checkout - Bridget Simpson Art'
        }
      }
    ]
  },
  Admin
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
