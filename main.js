import Vue from 'vue'
import App from '@/App'
import store from '@/store'
import api from '@/api'
import mixin from '@/mixin'
import uView from 'uview-ui'

Vue.use(mixin)
Vue.use(uView)

Vue.prototype.$store = store
Vue.prototype.$api = api

import "@/utils/config"
// #ifndef VUE3
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
// import { createSSRApp } from 'vue'
// export function createApp() {
//   const app = createSSRApp(App)
//   return {
//     app
//   }
// }
// #endif