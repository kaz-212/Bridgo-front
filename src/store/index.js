import { createStore } from 'vuex'
import projectModule from './project'
import exhibitionModule from './exhibition'
import inventoryModule from './inventory'
import basketModule from './basket'
import ordersModule from './Admin/orders'
import adminProjectModule from './Admin/projects'
import adminExhibitionModule from './Admin/exhibition'

export default createStore({
  modules: {
    project: projectModule,
    exhibition: exhibitionModule,
    inventory: inventoryModule,
    basket: basketModule,
    orders: ordersModule,
    adminProject: adminProjectModule,
    adminExhibition: adminExhibitionModule
  }
})
