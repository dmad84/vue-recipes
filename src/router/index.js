import Vue from 'vue'
import Router from 'vue-router'
import Recipe from '@/components/Recipe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Recipe',
      component: Recipe
    }
  ]
})
