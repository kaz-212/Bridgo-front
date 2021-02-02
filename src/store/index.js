import { createStore } from 'vuex'
import projectModule from './project'
import exhibitionModule from './exhibition'
import inventoryModule from './inventory'
import basketModule from './basket'
import ordersModule from './Admin/orders'
import adminProjectModule from './Admin/projects'

export default createStore({
  modules: {
    project: projectModule,
    exhibition: exhibitionModule,
    inventory: inventoryModule,
    basket: basketModule,
    orders: ordersModule,
    adminProject: adminProjectModule
  }
})
