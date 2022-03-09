import { createStore } from 'vuex'
import projectModule from './project'
import exhibitionModule from './exhibition'
import basketModule from './basket'
import inventoryModule from './Admin/inventory'
import ordersModule from './Admin/orders'
import adminProjectModule from './Admin/projects'
import adminExhibitionModule from './Admin/exhibition'
import adminUser from './Admin/user'

export default createStore({
  modules: {
    project: projectModule,
    exhibition: exhibitionModule,
    inventory: inventoryModule,
    basket: basketModule,
    orders: ordersModule,
    adminProject: adminProjectModule,
    adminExhibition: adminExhibitionModule,
    user: adminUser
  }
})
