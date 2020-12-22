import { createStore } from 'vuex'
import projectModule from './project'
import exhibitionModule from './exhibition'

export default createStore({
  modules: {
    project: projectModule,
    exhibition: exhibitionModule
  }
})
