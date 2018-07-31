webpackJsonp([1],{C9st:function(t,e){},FwTJ:function(t,e){},GRK6:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},c,!1,function(t){i("jq39")},null,null).exports,n=i("/ocq"),r=i("NYxO"),o={name:"Recipes",data:function(){return{msg:""}},computed:Object(r.d)(["recipes"]),methods:Object(r.b)(["removeRecipe"])},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-12 col-md-8"},[i("h1",[t._v(t._s(t.msg))]),t._v(" "),i("h2",[t._v("Recipes")]),t._v(" "),t.recipes.length>0?i("table",{staticClass:"table"},[t._m(0),t._v(" "),i("tbody",t._l(t.recipes,function(e,s){return i("tr",{key:s},[i("td",[i("img",{attrs:{src:e.image}})]),t._v(" "),i("td",[i("router-link",{attrs:{to:{path:"recipe/"+e.id}}},[t._v(t._s(e.name))])],1),t._v(" "),i("td",[t._v(t._s(e.details))]),t._v(" "),i("td",[t._v(t._s(e.createdAt.toDate().toLocaleString()))]),t._v(" "),i("td",[i("span",{staticClass:"glyphicon glyphicon-trash",attrs:{"aria-hidden":"true",title:"delete recipe"},on:{click:function(i){t.removeRecipe(e)}}})])])}))]):i("div",{staticClass:"loader"}),t._v(" "),i("router-link",{attrs:{to:"/addRecipe"}},[i("button",{staticClass:"btn btn-primary float-right",attrs:{id:"myButton"}},[t._v("Add Recipes")])])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th"),this._v(" "),e("th",[this._v("Recipe Name")]),this._v(" "),e("th",[this._v("Details")]),this._v(" "),e("th",[this._v("created At")]),this._v(" "),e("th")])])}]};var u=i("VU/8")(o,p,!1,function(t){i("FwTJ")},"data-v-49fca893",null).exports,d=i("Dd8w"),l=i.n(d),v=i("yviF"),m=i.n(v);i("881v");m.a.initializeApp({apiKey:"AIzaSyC8HFOu2r1poOpchyCOOjvJsThmXASk98o",authDomain:"vue-recipes-site.firebaseapp.com",databaseURL:"https://vue-recipes-site.firebaseio.com",projectId:"vue-recipes-site",storageBucket:"vue-recipes-site.appspot.com",messagingSenderId:"475258414126"});m.a.firestore().settings({timestampsInSnapshots:!0});var f=m.a.firestore().collection("recipes");f.onSnapshot(function(t){var e=[];t.forEach(function(t){e.push(l()({id:t.id},t.data()))}),g.commit("watchRecipes",e)});var h=function(t){return f.add(t)},_=function(t){return f.doc(t.id).set(t)},R=function(t){return f.doc(t).delete()};s.a.use(r.a);var g=new r.a.Store({state:{recipes:[]},mutations:{watchRecipes:function(t,e){t.recipes=e},removeRecipe:function(t,e){t.recipes.splice(t.recipes.indexOf(e),1)}},actions:{addRecipe:function(t,e){t.commit;h(e)},updateRecipe:function(t,e){t.commit;_(e)},removeRecipe:function(t,e){var i=t.commit;R(e.id),i("removeRecipe",e)}},getters:{getRecipeByID:function(t){return function(e){return t.recipes.find(function(t){return t.id===e})}}}}),b={name:"AddRecipe",props:["id"],data:function(){return{recipe:{steps:[""]},success:!1,isEdit:!1}},computed:l()({},Object(r.c)(["getRecipeByID"])),created:function(){this.id&&this.id.length>0&&(this.recipe=this.getRecipeByID(this.id),this.isEdit=!0)},methods:{addRecipe:function(){var t=this;this.recipe.createdAt=new Date,g.dispatch("addRecipe",this.recipe).then(function(){console.log("success"),t.success=!0,t.recipe={steps:[""]};var e=t;setTimeout(function(){e.success=!1},1e3),setTimeout(function(){location.href="/recipes"},1005)})},addStep:function(){this.recipe.steps.push("")},removeStep:function(t){this.recipe.steps.splice(t,1)},updateRecipe:function(){var t=this;g.dispatch("updateRecipe",this.recipe).then(function(){console.log("success"),t.success=!0;var e=t;setTimeout(function(){e.success=!1},3e3)})}}},y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-md-8"},[i("h2",[t._v("Add a new Recipe")]),t._v(" "),i("transition",{attrs:{name:"fade"}},[t.success?i("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[i("i",{staticClass:"glyphicon glyphicon-ok"}),t._v(" Recipe has been successfully added\n      ")]):t._e()]),t._v(" "),i("form",[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"name"}},[t._v("Recipe Title")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.recipe.name,expression:"recipe.name"}],staticClass:"form-control",attrs:{type:"text",id:"name"},domProps:{value:t.recipe.name},on:{input:function(e){e.target.composing||t.$set(t.recipe,"name",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"details"}},[t._v("Recipe Summary")]),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.recipe.details,expression:"recipe.details"}],staticClass:"form-control",attrs:{rows:"2",cols:"50",id:"details"},domProps:{value:t.recipe.details},on:{input:function(e){e.target.composing||t.$set(t.recipe,"details",e.target.value)}}})]),t._v(" "),t._l(t.recipe.steps,function(e,s){return i("div",{key:s,staticClass:"form-group"},[i("label",{attrs:{for:s}},[t._v("Step "+t._s(s+1))]),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.recipe.steps[s],expression:"recipe.steps[idx]"}],staticClass:"form-control",attrs:{rows:"4",cols:"50",id:s},domProps:{value:t.recipe.steps[s]},on:{input:function(e){e.target.composing||t.$set(t.recipe.steps,s,e.target.value)}}}),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 mt-2"},[i("button",{staticClass:"btn btn-outline-dark float-right",attrs:{type:"button"},on:{click:function(e){t.removeStep(s)}}},[i("i",{staticClass:"glyphicon glyphicon-trash"}),t._v(" Delete Step "+t._s(s+1))])])])])}),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 form-group"},[i("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:function(e){t.addStep()}}},[i("i",{staticClass:"glyphicon glyphicon-plus"}),t._v("Add Step")])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("router-link",{attrs:{to:"/"}},[i("button",{staticClass:"btn btn-secondary",attrs:{id:"myButton"}},[t._v("Back to Recipes")])]),t._v(" "),t.isEdit?t._e():i("button",{staticClass:"btn btn-success float-right",attrs:{type:"button"},on:{click:function(e){t.addRecipe()}}},[t._v("Add Recipe")]),t._v(" "),t.isEdit?i("button",{staticClass:"btn btn-success float-right",attrs:{type:"button"},on:{click:function(e){t.updateRecipe()}}},[t._v("Save Recipe")]):t._e()],1)])],2)],1)])},staticRenderFns:[]};var C=i("VU/8")(b,y,!1,function(t){i("GRK6")},null,null).exports,w={name:"Recipe",props:["id"],data:function(){return{recipe:null}},computed:l()({},Object(r.c)(["getRecipeByID"])),created:function(){this.recipe=this.getRecipeByID(this.id)}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-12 col-md-8"},[i("article",[i("h2",[t._v(t._s(t.recipe.name))]),t._v(" "),i("p",[t._v(t._s(t.recipe.details))]),t._v(" "),t._l(t.recipe.steps,function(e,s){return t.recipe.steps&&t.recipe.steps.length>0?i("ul",{key:s},[i("li",[t._v(t._s(s+1)+". "+t._s(e))])]):t._e()})],2),t._v(" "),i("router-link",{attrs:{to:"/"}},[i("button",{staticClass:"btn btn-secondary",attrs:{id:"myButton"}},[t._v("Back to Recipes")])]),t._v(" "),i("router-link",{attrs:{to:{path:"/EditRecipe/"+t.id}}},[i("button",{staticClass:"btn btn-primary",attrs:{id:"myButton"}},[t._v("Edit")])])],1)])},staticRenderFns:[]};var S=i("VU/8")(w,k,!1,function(t){i("zHU+")},"data-v-7001223e",null).exports;s.a.use(n.a);var A=new n.a({routes:[{path:"/",name:"Recipes",component:u},{path:"/addRecipe",name:"AddRecipe",component:C},{path:"/recipe/:id",name:"Recipe",component:S,props:!0},{path:"/EditRecipe/:id",name:"EditRecipe",component:C,props:!0}]}),E=i("hnaQ");i("C9st"),s.a.use(E.a),s.a.config.productionTip=!1,new s.a({el:"#app",store:g,router:A,components:{App:a},template:"<App/>"})},jq39:function(t,e){},"zHU+":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.df5249ec5eae63cdb4be.js.map