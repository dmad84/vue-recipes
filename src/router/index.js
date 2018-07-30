import Vue from 'vue'
import Router from 'vue-router'
import Recipes from '@/components/Recipes'
import AddRecipe from '@/components/AddRecipe'
import Recipe from '@/components/Recipe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Recipes',
      component: Recipes
    },
    {
      path: '/addRecipe',
      name: 'AddRecipe',
      component: AddRecipe
    },
    {
      path: '/recipe/:id',
      name: 'Recipe',
      component: Recipe,
      props: true
    }
  ]
})
