import { createStore } from 'vuex'
import projectsModule from './projects'

export default createStore({
  modules: {
    project: projectsModule
  }
})
