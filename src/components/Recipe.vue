<template>
 <div class="row justify-content-center">
    <div class="col-12 col-md-8">
        <article>
            <h2>{{ recipe.name }}</h2>
            <p>{{ recipe.details }}</p>
            <ol v-for="(step, idx) in recipe.steps" :key="idx" v-if="recipe.steps && recipe.steps.length > 0">
              <li>{{ step }}</li>
            </ol>
        </article>
        <router-link to="/">
            <button id="myButton" class="btn btn-secondary">Back to Recipes</button>
        </router-link>
       <router-link :to="{ path: '/EditRecipe/' + id }">
            <button id="myButton" class="btn btn-primary">Edit</button>
        </router-link>
    </div>
 </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Recipe',
  props: ['id'],
  data () {
    return {
      recipe: null
    }
  },
  computed: {
    ...mapGetters(['getRecipeByID'])
  },
  created () {
    this.recipe = this.getRecipeByID(this.id)
  }
}
</script>

<style scoped>
.btn:hover {
    color: #fff;
  }
</style>
