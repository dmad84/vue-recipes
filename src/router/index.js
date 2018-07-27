import Vue from 'vue'
import Router from 'vue-router'
import Recipes from '@/components/Recipes'
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
      path: '/recipe/:id',
      name: 'Recipe',
      component: Recipe,
      props: true
    }
  ]
})
