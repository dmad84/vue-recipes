// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueFire)

var config = {
  apiKey: 'AIzaSyC8HFOu2r1poOpchyCOOjvJsThmXASk98o',
  authDomain: 'vue-recipes-site.firebaseapp.com',
  databaseURL: 'https://vue-recipes-site.firebaseio.com',
  projectId: 'vue-recipes-site',
  storageBucket: 'vue-recipes-site.appspot.com',
  messagingSenderId: '475258414126'
}
firebase.initializeApp(config)
const settings = {timestampsInSnapshots: true}
firebase.firestore().settings(settings)

export const db = firebase.firestore()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
