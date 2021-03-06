// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueFire from 'vuefire'
import VueLazyload from 'vue-lazyload'

require('../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss')

Vue.use(VueFire)
Vue.use(VueLazyload)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App/>'
})
