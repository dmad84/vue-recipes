<template>
    <div>
        <h2>{{ recipe.name }}</h2>
        <p>{{ recipe.details }}</p>
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
