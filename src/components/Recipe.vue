<template>
  <div class="row justify-content-center">
    <div class="col-12 col-md-8">
      <h1>{{ msg }}</h1>
      <h2>Recipes</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Recipe</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(recipe, idx) in recipes" :key="idx">
            <td>{{ recipe.name }}</td>
            <td>{{ recipe.details }}</td>
          </tr>
        </tbody>
      </table>
      <button @click="addRecipe">Add Recipe</button>
    </div>
  </div>
</template>

<script>
import { db } from '../main'

export default {
  name: 'Recipe',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      recipes: []
    }
  },
  firestore () {
    return {
      recipes: db.collection('recipes').orderBy('createdAt')
    }
  },
  methods: {
    addRecipe () {
      const name = 'new recipe'
      const details = 'A brand new recipe'
      const createdAt = new Date()
      db.collection('recipes').add({ name, details, createdAt })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
