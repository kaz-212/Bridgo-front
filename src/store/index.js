import { createStore } from 'vuex'
import projectModule from './project'
import exhibitionModule from './exhibition'
import inventoryModule from './inventory'

export default createStore({
  modules: {
    project: projectModule,
    exhibition: exhibitionModule,
    inventory: inventoryModule
  }
})
