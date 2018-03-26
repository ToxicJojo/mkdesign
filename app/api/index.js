import api from './api'

const apiPlugin = {
  install (Vue) {
    api.initialize()
    Vue.prototype.$api = api
  }
}

export default apiPlugin
