import { createApp } from 'vue'
import axios from 'axios'
import { VueCookieNext } from 'vue-cookie-next'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App)
  .use(store)
  .use(router)
  .use(VueCookieNext)
  .mount('#app')

// axios.defaults.baseURL = 'http://localhost:5000/api/'
axios.defaults.baseURL = 'https://www.bridgetsimpson.art/api'

const secure = process.env.NODE_ENV === 'production'
VueCookieNext.config({ expire: '7d', secure, sameSite: 'Strict' })
