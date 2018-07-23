import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/firestore'
import Vuex from 'vuex'
Vue.use(Vuex)

var config = {
  apiKey: 'AIzaSyC8HFOu2r1poOpchyCOOjvJsThmXASk98o',
  authDomain: 'vue-recipes-site.firebaseapp.com',
  databaseURL: 'https://vue-recipes-site.firebaseio.com',
  projectId: 'vue-recipes-site',
  storageBucket: 'vue-recipes-site.appspot.com',
  messagingSenderId: '475258414126'
}

firebase.initializeApp(config)
const settings = {
  timestampsInSnapshots: true
}
firebase.firestore().settings(settings)

// a reference to the recipes collection
const recipesCollection = firebase.firestore()
  .collection('recipes')

// the shared state object that any vue component
// can get access to
export const store = new Vuex.Store({
  state: {
    recipesInFeed: null
  }
})

// onSnapshot is executed every time the data
// in the underlying firestore collection changes
// It will get passed an array of references to
// the documents that match your query
recipesCollection
  .orderBy('createdAt')
  .onSnapshot((recipesRef) => {
    const recipes = []
    recipesRef.forEach((doc) => {
      const recipe = doc.data()
      recipe.id = doc.id
      recipes.push(recipe)
    })
    console.log('Received recipes feed:', recipes)
    store.state.recipesInFeed = recipes
  })
