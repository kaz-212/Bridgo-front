// ======== Client ========
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Login from '@/views/Login.vue'

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
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Admin Login'
    }
  },
  Admin
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// This callback runs before every route change, including on page load.
/* eslint-disable */
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title)

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags)

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el =>
    el.parentNode.removeChild(el)
  )

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next()

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map(tagDef => {
      const tag = document.createElement('meta')

      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key])
      })

      // We use this to track which meta tags we create so we don't interfere with other ones.
      tag.setAttribute('data-vue-router-controlled', '')

      return tag
    })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag))

  return next()
})

export default router
