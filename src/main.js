import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'

axios.defaults.baseURL = 'http://localhost:5000/api/'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
