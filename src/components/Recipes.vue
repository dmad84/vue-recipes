<template>
  <div class="row justify-content-center">
    <div class="col-12 col-md-8">
      <h1>{{ msg }}</h1>
      <h2>Recipes</h2>
      <table class="table" v-if="recipes.length > 0">
        <thead>
          <tr>
            <th></th>
            <th>Recipe Name</th>
            <th>Details</th>
            <th>created At</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(recipe, idx) in recipes" :key="idx">
            <td><img :src="recipe.image"></td>
            <td><router-link :to="{ path: 'recipe/' + recipe.id }">{{ recipe.name }}</router-link></td>
            <td>{{ recipe.details }}</td>
            <td>{{ recipe.createdAt.toDate().toLocaleString() }}</td>
            <td><span class="glyphicon glyphicon-trash" aria-hidden="true" v-on:click="removeRecipe(recipe)" title="delete recipe"></span></td>
          </tr>
        </tbody>
      </table>
      <div class="loader" v-else></div>
      <router-link to="/addRecipe">
            <button id="myButton" class="btn btn-primary float-right">Add Recipes</button>
        </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Recipes',
  data () {
    return {
      msg: ''
    }
  },
  computed: mapState(['recipes']),
  methods: mapActions(['removeRecipe'])
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
.glyphicon-trash {
  cursor: pointer;
}
img {
  width: 15px;
}
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>
