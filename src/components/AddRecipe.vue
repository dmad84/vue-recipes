<template>
  <div class="row">
    <div class="col-12 col-md-8">
    <h2>Add a new Recipe</h2>
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
          <label for="details">Recipe Summary</label>
          <textarea class="form-control" rows="2" cols="50" v-model="recipe.details" id="details"></textarea>
        </div>
        <div class="form-group" v-for="(step, idx) in recipe.steps" :key="idx">
          <label :for="idx">Step {{idx+1}}</label>
          <textarea class="form-control" rows="4" cols="50" v-model="recipe.steps[idx]" v-bind:id="idx"></textarea>
          <div class="row">
            <div class="col-12 mt-2">
              <button @click="removeStep(idx)" class="btn btn-outline-dark float-right" type="button"><i class="glyphicon glyphicon-trash"></i> Delete Step {{ idx+1 }}</button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 form-group">
            <button @click="addStep()" class="btn btn-outline-primary" type="button"><i class="glyphicon glyphicon-plus"></i>Add Step</button>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <router-link to="/">
              <button id="myButton" class="btn btn-secondary">Back to Recipes</button>
            </router-link>
            <button @click="addRecipe()" class="btn btn-success float-right" type="button">Add Recipe</button>
            <button @click="updateRecipe()" class="btn btn-success float-right" type="button">Save Recipe</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '../store/index.js'

export default {
  name: 'AddRecipe',
  props: ['id'],
  data () {
    return {
      recipe: {
        steps: ['']
      },
      success: false
    }
  },
  computed: {
    ...mapGetters(['getRecipeByID'])
  },
  created () {
    if (this.id && this.id.length > 0) {
      this.recipe = this.getRecipeByID(this.id)
    }
  },
  methods: {
    addRecipe: function () {
      this.recipe.createdAt = new Date()
      store.dispatch('addRecipe', this.recipe).then(() => {
        console.log('success')
        this.success = true
        this.recipe = {
          steps: ['']
        }
        var self = this
        setTimeout(function () {
          self.success = false
        }, 1000)
        setTimeout(function () {
          location.href = '/recipes'
        }, 1005)
      })
    },
    addStep: function () {
      this.recipe.steps.push('')
    },
    removeStep: function (index) {
      this.recipe.steps.splice(index, 1)
    },
    updateRecipe: function () {
      store.dispatch('updateRecipe', this.recipe).then(() => {
        console.log('success')
        this.success = true
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
.glyphicon {
    padding-right: 10px;
}
.btn:hover {
    color: #fff;
}
</style>
