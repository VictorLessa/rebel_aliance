import Vue from 'vue'
import App from './App.vue'
import SuiVue from 'semantic-ui-vue'
import store from './store'
import 'semantic-ui-css/semantic.min.css'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

Vue.use(PerfectScrollbar)

Vue.use(SuiVue)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
