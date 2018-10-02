import Vue from 'vue'
import App from './App.vue'

// These 3 lines add additional functionality to our components
import Rx from 'rxjs'
import VueRx from 'vue-rx'
Vue.use(VueRx, Rx)

// For default styling (that seems to rely on Bulma):
// Also adds some components for us:
// Huh, can't get it to work. `npm run build` won't work, even after install....

// import "buefy/lib/buefy.css"
// import Buefy from "buefy"
// Vue.use(Buefy)


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
