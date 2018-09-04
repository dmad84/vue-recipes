<template>
  <div class="row justify-content-center">
    <div class="col-12 col-md-8">
      <h1>{{ msg }}</h1>
      <h2>Recipes</h2>
      <input type="text" v-model="filter" class="form-control mb-4" placeholder="filter" ref="filter">
      <router-link to="/addRecipe">
        <button id="myButton" class="btn btn-primary float-right my-4" v-if="recipes.length > 15">Add Recipes</button>
      </router-link>
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
            <td>
              <img v-if="recipe.image" :src="recipe.image">
            </td>
            <td>
              <router-link :to="{ path: 'recipe/' + recipe.id }">{{ recipe.name }}</router-link>
            </td>
            <td>{{ recipe.details }}</td>
            <td>{{ recipe.createdAt.toDate().toLocaleString() }}</td>
            <td>
              <!-- <span class="glyphicon glyphicon-trash" aria-hidden="true" v-on:click="removeRecipe(recipe)" title="delete recipe"></span> -->
              <span class="glyphicon glyphicon-trash" aria-hidden="true" v-on:click="showModal(recipe)" title="delete recipe"></span>
            </td>
          </tr>
        </tbody>
        <modal v-show="isModalVisible" @close="closeModal">
          <h3 slot="header" class="modal-title">Are you sure?</h3>
          <p slot="body">Do you really want to delete the recipe?</p>
          <div slot="footer">
            <button @click="closeModal" class="btn btn-secondary float-left">Back to Recipes</button>
            <button @click="deleteRecipe()" class="btn btn-primary a-btn-slide-text float-right">
              <span><strong>Delete</strong></span>
            </button>
          </div>
        </modal>
      </table>
      <div class="loader" v-else></div>
      <router-link to="/addRecipe">
        <button id="myButton" class="btn btn-primary float-right">Add Recipes</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import store from '../store/index.js'
import modal from './Modal.vue'

export default {
  name: 'Recipes',
  components: {
    modal
  },
  data () {
    return {
      msg: '',
      filter: '',
      isModalVisible: false,
      selectedRecipe: null
    }
  },
  computed: {
    recipes: function () {
      var filter = this.filter.trim().toLowerCase()
      if (filter === '') return store.state.recipes
      return store.state.recipes.filter(function (s) {
        return s.name.toLowerCase().indexOf(filter) > -1
      })
    }
  },
  methods: {
    ...mapActions(['removeRecipe']),
    showModal: function (recipe) {
      this.isModalVisible = true
      this.selectedRecipe = recipe
    },
    closeModal () {
      this.isModalVisible = false
      this.selectedRecipe = null
    },
    deleteRecipe: function () {
      if (this.selectedRecipe) {
        this.removeRecipe(this.selectedRecipe)
      }
      this.closeModal()
    }
  }
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
.glyphicon-trash {
  cursor: pointer;
}
img {
  width: 100px;
}
</style>
