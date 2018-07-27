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
            <td><span class="glyphicon glyphicon-trash" aria-hidden="true" v-on:click="removeRecipe(recipe)"></span></td>
          </tr>
        </tbody>
      </table>
      <form>
        <div class="form-group">
          <label for="name">Recipe Title</label>
          <input type="text" class="form-control" v-model="name" id="name">
        </div>
        <div class="form-group">
          <label for="details">Recipe Details</label>
          <textarea class="form-control"  rows="4" cols="50" v-model="details" id="details"></textarea>
        </div>
        <button @click="addRecipe({name, details, createdAt})" class="btn btn-primary float-right">Add Recipe</button>
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
