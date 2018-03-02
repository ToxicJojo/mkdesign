import Vue from 'vue'

// Plugins
import Buefy from 'buefy'
import KeycapSize from './plugins/keycapSize'
import KeyboardData from './plugins/keyboardData'

// Style
import './sass/style.scss'

// App
import App from './App.vue'
import store from './store'

Vue.use(Buefy)
Vue.use(KeycapSize)
Vue.use(KeyboardData)

const vueApp = new Vue({
  el: '#app',
  render: h => h(App),
  store,
})
