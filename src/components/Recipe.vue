<template>
 <div class="row justify-content-center">
    <div class="col-12 col-md-8">
        <div>
            <h2>{{ recipe.name }}</h2>
            <p>{{ recipe.details }}</p>
        </div>
        <router-link to="/">
            <button id="myButton" class="btn btn-secondary">Back to Recipes</button>
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
