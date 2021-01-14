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
