import Vue from 'vue'
import Vuex from 'vuex'
import firestore from './firestore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recipes: []
  },
  mutations: {
    watchRecipes (state, recipes) {
      state.recipes = recipes
    },
    removeRecipe (state, recipe) {
      state.recipes.splice(state.recipes.indexOf(recipe), 1)
    }
  },
  actions: {
    addRecipe ({ commit }, recipe) {
      firestore.addRecipe(recipe)
    },
    updateRecipe ({ commit }, recipe) {
      firestore.updateRecipe(recipe)
    },
    removeRecipe ({ commit }, recipe) {
      firestore.removeRecipe(recipe.id)
      commit('removeRecipe', recipe)
    }
  },
  getters: {
    getRecipeByID: (state) => (id) => {
      if (state.recipes && state.recipes.length > 0) {
        return state.recipes.find(recipe => recipe.id === id)
      } else {
        setTimeout(function () {
          let recipe = null
          firestore.getRecipeByID(id).then(doc => {
            recipe = doc.data()
          })
          return recipe
        }, 2000)
      }
    }
  }
})
