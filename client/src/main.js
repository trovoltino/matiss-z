import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VTooltip from 'v-tooltip';



Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VTooltip)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
