// ======== Admin ========
import Admin from '@/views/Admin/Admin.vue'

// project
import Projects from '@/views/Admin/Projects/Projects.vue'
import AllProjects from '@/views/Admin/Projects/AllProjects.vue'
import NewProject from '@/views/Admin/Projects/NewProject.vue'
import ShowProject from '@/views/Admin/Projects/ShowProject.vue'
import EditProject from '@/views/Admin/Projects/EditProject.vue'
import AddPiece from '@/views/Admin/Projects/AddPiece.vue'
import NewTheme from '@/views/Admin/Projects/NewTheme.vue'

// exhibition
import AdminExhibitions from '@/views/Admin/Exhibitions/Exhibitions.vue'
import AllAdminExhibitions from '@/views/Admin/Exhibitions/AllExhibitions.vue'
import NewExhibition from '@/views/Admin/Exhibitions/NewExhibition.vue'
import EditExhibition from '@/views/Admin/Exhibitions/EditExhibition.vue'

// inventory
import AdminInventory from '@/views/Admin/Inventory/Inventory.vue'
import AllAdminProducts from '@/views/Admin/Inventory/AllProducts.vue'
import ShowProductDetails from '@/views/Admin/Inventory/ShowProductDetails.vue'
import NewProduct from '@/views/Admin/Inventory/NewProduct.vue'

// orders
import Orders from '@/views/Admin/Orders/Orders.vue'
import AllOrders from '@/views/Admin/Orders/AllOrders.vue'
import ShowOrder from '@/views/Admin/Orders/ShowOrder.vue'

export default {
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
          path: 'new-project',
          name: 'NewProject',
          component: NewProject
        },
        {
          path: 'new-theme',
          name: 'NewTheme',
          component: NewTheme
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
          path: ':id',
          name: 'ShowProductDetails',
          component: ShowProductDetails
        }
      ]
    },
    {
      path: 'orders',
      name: 'Orders',
      component: Orders,
      children: [
        {
          path: '',
          name: 'AllOrders',
          component: AllOrders
        },
        {
          path: ':id',
          name: 'ShowOrder',
          component: ShowOrder
        }
      ]
    }
  ]
}
