import firebase from 'firebase/app'
import 'firebase/firestore'
import store from './'
import _ from 'lodash'

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

const db = firebase.firestore()

const recipes = db.collection('recipes')

// Getting Real time feeds
recipes.onSnapshot(querySnapshot => {
  const myRecipes = []
  querySnapshot.forEach(doc => {
    myRecipes.push({
      id: doc.id,
      ...doc.data()
    })
  })
  store.commit('watchRecipes', _.orderBy(myRecipes, 'createdAt', 'desc'))
})

export default {
  fetchRecipes: () => {
    return recipes.get()
  },

  addRecipe: (recipe) => {
    return recipes.add(recipe)
  },

  updateRecipe: (recipe) => {
    return recipes.doc(recipe.id).set(recipe)
  },

  removeRecipe: id => {
    return recipes.doc(id).delete()
  }
}
