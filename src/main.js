import Vue from 'vue'
import App from './App.vue'
import { router } from './router/index.js'
import { store } from './store/index.js'

Vue.config.productionTip = false


//main.js에서는 App.vue의 구조가 대략적으로 나와야함
new Vue({
  render: h => h(App),
  // 혹은 router: router,
  router,
  store,
}).$mount('#app')
