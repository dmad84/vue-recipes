<template>
  <div class="row justify-content-center">
    <div class="col-12 col-md-8">
      <h1>{{ msg }}</h1>
      <h2>Recipes</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Recipe Name</th>
            <th>Details</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(recipe, idx) in recipes" :key="idx">
            <td>{{ recipe.name }}</td>
            <td>{{ recipe.details }}</td>
            <td><span class="glyphicon glyphicon-trash" aria-hidden="true" v-on:click="removeRecipe(recipe.id)"></span></td>
          </tr>
        </tbody>
      </table>
      <label for="recipeName">Recipe Title</label>
      <input type="text" v-model="recipeName" id="recipeName">
      <br>
      <textarea rows="4" cols="50" v-model="recipeDetails">
      </textarea>
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
      recipes: [],
      recipeName: '',
      recipeDetails: ''
    }
  },
  firestore () {
    return {
      recipes: db.collection('recipes').orderBy('createdAt')
    }
  },
  methods: {
    addRecipe () {
      const name = this.recipeName
      const details = this.recipeDetails
      const createdAt = new Date()
      db.collection('recipes').add({ name, details, createdAt })
    },
    removeRecipe (id) {
      db.collection('recipes').doc(id).delete()
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
