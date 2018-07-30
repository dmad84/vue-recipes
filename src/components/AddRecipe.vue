<template>
  <div class="row">
    <div class="col-12 col-md-8">
      <transition name="fade">
        <div class="alert alert-success" role="alert" v-if="success">
          <i class="glyphicon glyphicon-ok"></i> Recipe has been successfully added
        </div>
      </transition>
      <form>
        <div class="form-group">
          <label for="name">Recipe Title</label>
          <input type="text" class="form-control" v-model="recipe.name" id="name">
        </div>
        <div class="form-group">
          <label for="details">Recipe Details</label>
          <textarea class="form-control" rows="4" cols="50" v-model="recipe.details" id="details"></textarea>
        </div>
        <router-link to="/">
          <button id="myButton" class="btn btn-secondary">Back to Recipes</button>
        </router-link>
        <button @click="addRecipe()" class="btn btn-success float-right" type="button">Add Recipe</button>
      </form>
    </div>
  </div>
</template>

<script>
import store from '../store/index.js'

export default {
  name: 'AddRecipe',
  data () {
    return {
      recipe: {},
      success: false
    }
  },
  methods: {
    addRecipe: function () {
      this.recipe.createdAt = new Date()
      store.dispatch('addRecipe', this.recipe).then(() => {
        console.log('success')
        this.success = true
        this.recipe = {}
        var self = this
        setTimeout(function () {
          self.success = false
        }, 3000)
      })
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.glyphicon-ok {
    padding-right: 10px;
}
.btn:hover {
    color: #fff;
}
</style>
