<template>
  <div class="row justify-content-center">
    <div class="col-12 col-md-8">
    <h2 v-if="isEdit">Edit Recipe</h2>
    <h2 v-else>Add a new Recipe</h2>
      <transition name="fade">
        <div class="alert alert-success" role="alert" v-if="success">
          <i class="glyphicon glyphicon-ok"></i> Recipe has been successfully saved
        </div>
      </transition>
      <form v-if="recipe" >
        <div class="form-group">
          <label for="name">Recipe Title</label>
          <input type="text" class="form-control" v-model="recipe.name" id="name">
        </div>
        <div class="form-group">
          <label for="details">Recipe Summary</label>
          <textarea class="form-control" rows="2" cols="50" v-model="recipe.details" id="details"></textarea>
        </div>
        <div class="form-group">
          <label for="exampleFormControlFile1">upload photo</label>
          <input type="file" class="form-control-file" id="exampleFormControlFile1" v-on:change="uploadFile">
        </div>
        <div class="form-group" v-for="(ingredient, idx) in recipe.ingredients" :key="idx + '1'">
          <label :for="idx + 'a'">Ingredient {{idx+1}}</label>
          <input type="text" class="form-control" v-model="recipe.ingredients[idx]" v-bind:id="idx + 'a'">
          <div class="row">
            <div class="col-12 mt-2">
              <button @click="removeIngredient(idx)" class="btn btn-outline-dark float-right" type="button"><i class="glyphicon glyphicon-trash"></i> Delete ingredient {{ idx+1 }}</button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 form-group">
            <button @click="addIngredient()" class="btn btn-outline-primary" type="button"><i class="glyphicon glyphicon-plus"></i>Add Ingredient</button>
          </div>
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
            <button @click="addRecipe()" class="btn btn-success float-right" type="button" v-if="!isEdit">Add Recipe</button>
            <button @click="updateRecipe()" class="btn btn-success float-right" type="button"  v-if="isEdit">Save Recipe</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '../store/index.js'
import firestore from '../store/firestore.js'

export default {
  name: 'AddRecipe',
  props: ['id'],
  data () {
    return {
      file: null,
      success: false,
      isEdit: false,
      recipe: {
        steps: [''],
        ingredients: ['']
      }
    }
  },
  computed: {
    ...mapGetters(['getRecipeByID'])
  },
  created () {
    if (this.id && this.id.length > 0) {
      console.log('id', this.id)
      console.log('recipe', this.getRecipeByID(this.id))
      this.recipe = this.getRecipeByID(this.id)
      this.isEdit = true
    }
  },
  methods: {
    addRecipe: function () {
      this.recipe.createdAt = new Date()
      store.dispatch('addRecipe', this.recipe).then(() => {
        console.log('success')
        this.success = true
        var self = this
        setTimeout(function () {
          self.success = false
        }, 2000)
        setTimeout(function () {
          self.$router.push('/')
        }, 2001)
      })
    },
    addIngredient: function () {
      this.recipe.ingredients.push('')
    },
    addStep: function () {
      this.recipe.steps.push('')
    },
    removeStep: function (index) {
      this.recipe.steps.splice(index, 1)
    },
    removeIngredient: function (index) {
      this.recipe.ingredients.splice(index, 1)
    },
    updateRecipe: function () {
      store.dispatch('updateRecipe', this.recipe).then(() => {
        console.log('success')
        this.success = true
        window.scrollTo(0, 0)
        var self = this
        setTimeout(function () {
          self.success = false
        }, 3000)
      })
    },
    uploadFile: function (e) {
      const img = {}
      img.name = event.target.files[0].name
      img.file = event.target.files[0]
      firestore.uploadImage(img).then(storageSnapshot => {
        this.updateUrl(storageSnapshot)
      })
    },
    updateUrl: function (snapshot) {
      snapshot.ref.getDownloadURL()
        .then((url) => {
          this.recipe.image = url
        })
    }
  }
}
</script>

<style scoped>
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
