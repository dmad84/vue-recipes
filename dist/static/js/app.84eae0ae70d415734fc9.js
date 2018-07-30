webpackJsonp([1],{C9st:function(e,t){},FwTJ:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container",attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var c=s("VU/8")({name:"App"},a,!1,function(e){s("jq39")},null,null).exports,n=s("/ocq"),r=s("NYxO"),o={name:"Recipes",data:function(){return{msg:""}},computed:Object(r.d)(["recipes"]),methods:Object(r.b)(["removeRecipe"])},p={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-12 col-md-8"},[s("h1",[e._v(e._s(e.msg))]),e._v(" "),s("h2",[e._v("Recipes")]),e._v(" "),e.recipes.length>0?s("table",{staticClass:"table"},[e._m(0),e._v(" "),s("tbody",e._l(e.recipes,function(t,i){return s("tr",{key:i},[s("td",[s("img",{attrs:{src:t.image}})]),e._v(" "),s("td",[s("router-link",{attrs:{to:{path:"recipe/"+t.id}}},[e._v(e._s(t.name))])],1),e._v(" "),s("td",[e._v(e._s(t.details))]),e._v(" "),s("td",[e._v(e._s(t.createdAt.toDate().toLocaleString()))]),e._v(" "),s("td",[s("span",{staticClass:"glyphicon glyphicon-trash",attrs:{"aria-hidden":"true",title:"delete recipe"},on:{click:function(s){e.removeRecipe(t)}}})])])}))]):s("div",{staticClass:"loader"}),e._v(" "),s("router-link",{attrs:{to:"/addRecipe"}},[s("button",{staticClass:"btn btn-primary float-right",attrs:{id:"myButton"}},[e._v("Add Recipes")])])],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th"),this._v(" "),t("th",[this._v("Recipe Name")]),this._v(" "),t("th",[this._v("Details")]),this._v(" "),t("th",[this._v("created At")]),this._v(" "),t("th")])])}]};var l=s("VU/8")(o,p,!1,function(e){s("FwTJ")},"data-v-49fca893",null).exports,d=s("Dd8w"),u=s.n(d),v=s("yviF"),m=s.n(v);s("881v");m.a.initializeApp({apiKey:"AIzaSyC8HFOu2r1poOpchyCOOjvJsThmXASk98o",authDomain:"vue-recipes-site.firebaseapp.com",databaseURL:"https://vue-recipes-site.firebaseio.com",projectId:"vue-recipes-site",storageBucket:"vue-recipes-site.appspot.com",messagingSenderId:"475258414126"});m.a.firestore().settings({timestampsInSnapshots:!0});var f=m.a.firestore().collection("recipes");f.onSnapshot(function(e){var t=[];e.forEach(function(e){t.push(u()({id:e.id},e.data()))}),g.commit("watchRecipes",t)});var _=function(e){return f.add(e)},h=function(e){return f.doc(e).delete()};i.a.use(r.a);var g=new r.a.Store({state:{recipes:[]},mutations:{watchRecipes:function(e,t){e.recipes=t},removeRecipe:function(e,t){e.recipes.splice(e.recipes.indexOf(t),1)}},actions:{addRecipe:function(e,t){e.commit;_(t)},removeRecipe:function(e,t){var s=e.commit;h(t.id),s("removeRecipe",t)}},getters:{getRecipeByID:function(e){return function(t){return e.recipes.find(function(e){return e.id===t})}}}}),R={name:"AddRecipe",data:function(){return{recipe:{steps:[""]},success:!1}},methods:{addRecipe:function(){var e=this;this.recipe.createdAt=new Date,g.dispatch("addRecipe",this.recipe).then(function(){console.log("success"),e.success=!0,e.recipe={steps:[""]};var t=e;setTimeout(function(){t.success=!1},3e3)})},addStep:function(){this.recipe.steps.push("")},removeStep:function(e){this.recipe.steps.splice(e,1)}}},b={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-md-8"},[s("h2",[e._v("Add a new Recipe")]),e._v(" "),s("transition",{attrs:{name:"fade"}},[e.success?s("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[s("i",{staticClass:"glyphicon glyphicon-ok"}),e._v(" Recipe has been successfully added\n      ")]):e._e()]),e._v(" "),s("form",[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"name"}},[e._v("Recipe Title")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.name,expression:"recipe.name"}],staticClass:"form-control",attrs:{type:"text",id:"name"},domProps:{value:e.recipe.name},on:{input:function(t){t.target.composing||e.$set(e.recipe,"name",t.target.value)}}})]),e._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"details"}},[e._v("Recipe Summary")]),e._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.recipe.details,expression:"recipe.details"}],staticClass:"form-control",attrs:{rows:"2",cols:"50",id:"details"},domProps:{value:e.recipe.details},on:{input:function(t){t.target.composing||e.$set(e.recipe,"details",t.target.value)}}})]),e._v(" "),e._l(e.recipe.steps,function(t,i){return s("div",{key:i,staticClass:"form-group"},[s("label",{attrs:{for:i}},[e._v("Step "+e._s(i+1))]),e._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.recipe.steps[i],expression:"recipe.steps[idx]"}],staticClass:"form-control",attrs:{rows:"4",cols:"50",id:i},domProps:{value:e.recipe.steps[i]},on:{input:function(t){t.target.composing||e.$set(e.recipe.steps,i,t.target.value)}}}),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 mt-2"},[s("button",{staticClass:"btn btn-outline-dark float-right",attrs:{type:"button"},on:{click:function(t){e.removeStep(i)}}},[s("i",{staticClass:"glyphicon glyphicon-trash"}),e._v(" Delete Step "+e._s(i+1))])])])])}),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 form-group"},[s("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:function(t){e.addStep()}}},[s("i",{staticClass:"glyphicon glyphicon-plus"}),e._v("Add Step")])])]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("router-link",{attrs:{to:"/"}},[s("button",{staticClass:"btn btn-secondary",attrs:{id:"myButton"}},[e._v("Back to Recipes")])]),e._v(" "),s("button",{staticClass:"btn btn-success float-right",attrs:{type:"button"},on:{click:function(t){e.addRecipe()}}},[e._v("Add Recipe")])],1)])],2)],1)])},staticRenderFns:[]};var C=s("VU/8")(R,b,!1,function(e){s("qmOP")},null,null).exports,y={name:"Recipe",props:["id"],data:function(){return{recipe:null}},computed:u()({},Object(r.c)(["getRecipeByID"])),created:function(){this.recipe=this.getRecipeByID(this.id)}},w={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-12 col-md-8"},[s("article",[s("h2",[e._v(e._s(e.recipe.name))]),e._v(" "),s("p",[e._v(e._s(e.recipe.details))]),e._v(" "),e._l(e.recipe.steps,function(t,i){return e.recipe.steps&&e.recipe.steps.length>0?s("ol",{key:i},[s("li",[e._v(e._s(t))])]):e._e()})],2),e._v(" "),s("router-link",{attrs:{to:"/"}},[s("button",{staticClass:"btn btn-secondary",attrs:{id:"myButton"}},[e._v("Back to Recipes")])])],1)])},staticRenderFns:[]};var k=s("VU/8")(y,w,!1,function(e){s("vRYJ")},"data-v-28a914ac",null).exports;i.a.use(n.a);var A=new n.a({routes:[{path:"/",name:"Recipes",component:l},{path:"/addRecipe",name:"AddRecipe",component:C},{path:"/recipe/:id",name:"Recipe",component:k,props:!0}]}),S=s("hnaQ");s("C9st"),i.a.use(S.a),i.a.config.productionTip=!1,new i.a({el:"#app",store:g,router:A,components:{App:c},template:"<App/>"})},jq39:function(e,t){},qmOP:function(e,t){},vRYJ:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.84eae0ae70d415734fc9.js.map