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
    removeRecipe ({ commit }, recipe) {
      firestore.removeRecipe(recipe.id)
      commit('removeRecipe', recipe)
    }
  }
})
