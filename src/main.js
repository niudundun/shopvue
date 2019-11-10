import Vue from 'vue'
import App from './App.vue'
import "lib-flexible"

import router from "./router";
import store from "./store";
import HeaderGuide from "./components/HeaderGuide/HeaderGuide.vue";

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

Vue.component('HeaderGuide',HeaderGuide)

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  router,
  store
})