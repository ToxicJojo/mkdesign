import Vue from 'vue'

// Plugins
import Buefy from 'buefy'

import './sass/style.scss'

// App
import App from './App.vue'

Vue.use(Buefy)

const vueApp = new Vue({
  el: '#app',
  render: h => h(App),
})
