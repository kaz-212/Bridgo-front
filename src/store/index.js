import { createStore } from 'vuex'
import projectModule from './project'
import exhibitionModule from './exhibition'
import inventoryModule from './inventory'
import basketModule from './basket'

export default createStore({
  modules: {
    project: projectModule,
    exhibition: exhibitionModule,
    inventory: inventoryModule,
    basket: basketModule
  }
})
