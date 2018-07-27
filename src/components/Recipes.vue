<template>
  <div class="row justify-content-center">
    <div class="col-12 col-md-8">
      <h1>{{ msg }}</h1>
      <h2>Recipes</h2>
      <table class="table" v-if="recipes.length > 0">
        <thead>
          <tr>
            <th>Recipe Name</th>
            <th>Details</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(recipe, idx) in recipes" :key="idx">
            <td><router-link :to="{ path: 'recipe/' + recipe.id }">{{ recipe.name }}</router-link></td>
            <td>{{ recipe.details }}</td>
            <td><span class="glyphicon glyphicon-trash" aria-hidden="true" v-on:click="removeRecipe(recipe)"></span></td>
          </tr>
        </tbody>
      </table>
      <div class="loader" v-else></div>
      <form>
        <div class="form-group">
          <label for="name">Recipe Title</label>
          <input type="text" class="form-control" v-model="name" id="name">
        </div>
        <div class="form-group">
          <label for="details">Recipe Details</label>
          <textarea class="form-control"  rows="4" cols="50" v-model="details" id="details"></textarea>
        </div>
        <button @click="addRecipe({name, details, createdAt})" class="btn btn-success float-right">Add Recipe</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Recipes',
  data () {
    return {
      msg: '',
      name: '',
      details: '',
      createdAt: new Date()
    }
  },
  computed: mapState(['recipes']),
  methods: mapActions(['addRecipe', 'removeRecipe'])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #217f54;
}
.loader {
  animation: spin 2s linear infinite;
  border: 5px solid #f3f3f3;
  animation: spin 1s linear infinite;
  border-top: 5px solid #555;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 30px auto;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>
