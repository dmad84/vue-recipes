<template>
  <div class="row justify-content-center" v-if="recipe">
    <div class="col-12 col-md-8">
      <article>
        <div class="media">
          <img v-if="recipe.image" class="mr-3" v-lazy="recipe.image" alt="Generic placeholder image">
          <div class="media-body">
            <h2 class="mt-0">{{ recipe.name }}</h2>
            <p>{{ recipe.details }}</p>
          </div>
        </div>
        <h3 v-if="recipe.ingredients && recipe.ingredients.length > 0">Ingredients</h3>
        <ul v-for="(ingredient, key) in recipe.ingredients" :key="key + '.'" v-if="recipe.ingredients && recipe.ingredients.length > 0">
          <li> {{ ingredient }}</li>
        </ul>
        <h3>Steps</h3>
        <ul v-for="(step, idx) in recipe.steps" :key="idx" v-if="recipe.steps && recipe.steps.length > 0">
          <li>{{ idx+1 }}. {{ step }}</li>
        </ul>
      </article>
      <router-link to="/">
        <button id="myButton" class="btn btn-secondary">Back to Recipes</button>
      </router-link>
      <router-link :to="{ path: '/EditRecipe/' + id }">
        <button id="myButton" class="btn btn-primary">Edit</button>
      </router-link>
    </div>
  </div>
  <div class="loader" v-else></div>
</template>

<script>
import firestore from '../store/firestore.js'

export default {
  name: 'Recipe',
  props: ['id'],
  data () {
    return {
      recipe: null
    }
  },
  created () {
    this.getRecipeByID(this.id)
  },
  methods: {
    getRecipeByID: function (id) {
      firestore.getRecipeByID(id).then(doc => {
        this.recipe = doc.data()
      })
    }
  }
}
</script>

<style scoped>
  ul {
    list-style: none;
    padding: 0;
  }
  img {
    width: 50%;
    max-width: 200px;
    background: #cccccc;
  }
  @include media-breakpoint-up(sm) {
    img {
      width: 30%;
      max-width: 200px;
    }
  }
</style>
