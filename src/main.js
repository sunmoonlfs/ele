import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';
Vue.use(VueRouter)
Vue.config.productionTip = false
import router from './assets/js/router.js'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
