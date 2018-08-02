webpackJsonp([1],{"6xiH":function(t,e){},C9st:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=i("VU/8")({name:"App"},a,!1,function(t){i("6xiH")},null,null).exports,c=i("/ocq"),r=i("Dd8w"),o=i.n(r),p=i("NYxO"),l=i("yviF"),u=i.n(l),d=(i("cWbj"),i("881v"),i("M4fF")),v=i.n(d);u.a.initializeApp({apiKey:"AIzaSyC8HFOu2r1poOpchyCOOjvJsThmXASk98o",authDomain:"vue-recipes-site.firebaseapp.com",databaseURL:"https://vue-recipes-site.firebaseio.com",projectId:"vue-recipes-site",storageBucket:"vue-recipes-site.appspot.com",messagingSenderId:"475258414126"});u.a.firestore().settings({timestampsInSnapshots:!0});var m=u.a.firestore().collection("recipes"),f=u.a.storage().ref();m.onSnapshot(function(t){var e=[];t.forEach(function(t){e.push(o()({id:t.id},t.data()))}),R.commit("watchRecipes",v.a.orderBy(e,"createdAt","desc"))});var h=function(t){return m.add(t)},_=function(t){return m.doc(t).get()},g=function(t){return m.doc(t.id).set(t)},C=function(t){return m.doc(t).delete()},b=function(t){return f.child(t.name).put(t.file)};s.a.use(p.a);var R=new p.a.Store({state:{recipes:[]},mutations:{watchRecipes:function(t,e){t.recipes=e},removeRecipe:function(t,e){t.recipes.splice(t.recipes.indexOf(e),1)}},actions:{addRecipe:function(t,e){t.commit;h(e)},updateRecipe:function(t,e){t.commit;g(e)},removeRecipe:function(t,e){var i=t.commit;C(e.id),i("removeRecipe",e)}},getters:{getRecipeByID:function(t){return function(e){if(t.recipes&&t.recipes.length>0)return t.recipes.find(function(t){return t.id===e});console.log(e),setTimeout(function(){var t=null;return _(e).then(function(e){t=e.data()}),console.log(t),t},2e3)}}}}),y={name:"Recipes",data:function(){return{msg:"",filter:""}},computed:{recipes:function(){var t=this.filter.trim().toLowerCase();return""===t?R.state.recipes:R.state.recipes.filter(function(e){return e.name.toLowerCase().indexOf(t)>-1})}},methods:o()({},Object(p.b)(["removeRecipe"]))},w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-12 col-md-8"},[i("h1",[t._v(t._s(t.msg))]),t._v(" "),i("h2",[t._v("Recipes")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],ref:"filter",staticClass:"form-control mb-4",attrs:{type:"text",placeholder:"filter"},domProps:{value:t.filter},on:{input:function(e){e.target.composing||(t.filter=e.target.value)}}}),t._v(" "),i("router-link",{attrs:{to:"/addRecipe"}},[t.recipes.length>15?i("button",{staticClass:"btn btn-primary float-right my-4",attrs:{id:"myButton"}},[t._v("Add Recipes")]):t._e()]),t._v(" "),t.recipes.length>0?i("table",{staticClass:"table"},[t._m(0),t._v(" "),i("tbody",t._l(t.recipes,function(e,s){return i("tr",{key:s},[i("td",[i("img",{attrs:{src:e.image}})]),t._v(" "),i("td",[i("router-link",{attrs:{to:{path:"recipe/"+e.id}}},[t._v(t._s(e.name))])],1),t._v(" "),i("td",[t._v(t._s(e.details))]),t._v(" "),i("td",[t._v(t._s(e.createdAt.toDate().toLocaleString()))]),t._v(" "),i("td",[i("span",{staticClass:"glyphicon glyphicon-trash",attrs:{"aria-hidden":"true",title:"delete recipe"},on:{click:function(i){t.removeRecipe(e)}}})])])}))]):i("div",{staticClass:"loader"}),t._v(" "),i("router-link",{attrs:{to:"/addRecipe"}},[i("button",{staticClass:"btn btn-primary float-right",attrs:{id:"myButton"}},[t._v("Add Recipes")])])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th"),this._v(" "),e("th",[this._v("Recipe Name")]),this._v(" "),e("th",[this._v("Details")]),this._v(" "),e("th",[this._v("created At")]),this._v(" "),e("th")])])}]};var k=i("VU/8")(y,w,!1,function(t){i("o3IU")},"data-v-6ff96d53",null).exports,x={name:"AddRecipe",props:["id"],data:function(){return{file:null,success:!1,isEdit:!1}},computed:o()({},Object(p.c)(["getRecipeByID"]),{recipe:function(){return this.id&&this.id.length>0?this.getRecipeByID(this.id):{steps:[""]}}}),created:function(){this.id&&this.id.length>0&&(this.isEdit=!0)},methods:{addRecipe:function(){var t=this;this.recipe.createdAt=new Date,R.dispatch("addRecipe",this.recipe).then(function(){console.log("success"),t.success=!0;var e=t;setTimeout(function(){e.success=!1},2e3),setTimeout(function(){e.$router.push("/")},2001)})},addStep:function(){this.recipe.steps.push("")},removeStep:function(t){this.recipe.steps.splice(t,1)},updateRecipe:function(){var t=this;R.dispatch("updateRecipe",this.recipe).then(function(){console.log("success"),t.success=!0;var e=t;setTimeout(function(){e.success=!1},3e3)})},uploadFile:function(t){var e=this,i={};i.name=event.target.files[0].name,i.file=event.target.files[0],b(i).then(function(t){e.updateUrl(t)})},updateUrl:function(t){var e=this;t.ref.getDownloadURL().then(function(t){e.recipe.image=t})}}},A={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-12 col-md-8"},[i("h2",[t._v("Add a new Recipe")]),t._v(" "),i("transition",{attrs:{name:"fade"}},[t.success?i("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[i("i",{staticClass:"glyphicon glyphicon-ok"}),t._v(" Recipe has been successfully added\n      ")]):t._e()]),t._v(" "),t.recipe?i("form",[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"name"}},[t._v("Recipe Title")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.recipe.name,expression:"recipe.name"}],staticClass:"form-control",attrs:{type:"text",id:"name"},domProps:{value:t.recipe.name},on:{input:function(e){e.target.composing||t.$set(t.recipe,"name",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"details"}},[t._v("Recipe Summary")]),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.recipe.details,expression:"recipe.details"}],staticClass:"form-control",attrs:{rows:"2",cols:"50",id:"details"},domProps:{value:t.recipe.details},on:{input:function(e){e.target.composing||t.$set(t.recipe,"details",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"exampleFormControlFile1"}},[t._v("upload photo")]),t._v(" "),i("input",{staticClass:"form-control-file",attrs:{type:"file",id:"exampleFormControlFile1"},on:{change:t.uploadFile}})]),t._v(" "),t._l(t.recipe.steps,function(e,s){return i("div",{key:s,staticClass:"form-group"},[i("label",{attrs:{for:s}},[t._v("Step "+t._s(s+1))]),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.recipe.steps[s],expression:"recipe.steps[idx]"}],staticClass:"form-control",attrs:{rows:"4",cols:"50",id:s},domProps:{value:t.recipe.steps[s]},on:{input:function(e){e.target.composing||t.$set(t.recipe.steps,s,e.target.value)}}}),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 mt-2"},[i("button",{staticClass:"btn btn-outline-dark float-right",attrs:{type:"button"},on:{click:function(e){t.removeStep(s)}}},[i("i",{staticClass:"glyphicon glyphicon-trash"}),t._v(" Delete Step "+t._s(s+1))])])])])}),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 form-group"},[i("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:function(e){t.addStep()}}},[i("i",{staticClass:"glyphicon glyphicon-plus"}),t._v("Add Step")])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("router-link",{attrs:{to:"/"}},[i("button",{staticClass:"btn btn-secondary",attrs:{id:"myButton"}},[t._v("Back to Recipes")])]),t._v(" "),t.isEdit?t._e():i("button",{staticClass:"btn btn-success float-right",attrs:{type:"button"},on:{click:function(e){t.addRecipe()}}},[t._v("Add Recipe")]),t._v(" "),t.isEdit?i("button",{staticClass:"btn btn-success float-right",attrs:{type:"button"},on:{click:function(e){t.updateRecipe()}}},[t._v("Save Recipe")]):t._e()],1)])],2):t._e()],1)])},staticRenderFns:[]};var S=i("VU/8")(x,A,!1,function(t){i("hVWP")},null,null).exports,B={name:"Recipe",props:["id"],data:function(){return{recipe:null}},created:function(){this.getRecipeByID(this.id)},methods:{getRecipeByID:function(t){var e=this;_(t).then(function(t){e.recipe=t.data()})}}},E={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.recipe?i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-12 col-md-8"},[i("article",[i("div",{staticClass:"media"},[i("img",{staticClass:"mr-3",attrs:{src:t.recipe.image,alt:"Generic placeholder image"}}),t._v(" "),i("div",{staticClass:"media-body"},[i("h2",{staticClass:"mt-0"},[t._v(t._s(t.recipe.name))]),t._v(" "),i("p",[t._v(t._s(t.recipe.details))])])]),t._v(" "),i("h3",[t._v("Steps")]),t._v(" "),t._l(t.recipe.steps,function(e,s){return t.recipe.steps&&t.recipe.steps.length>0?i("ul",{key:s},[i("li",[t._v(t._s(s+1)+". "+t._s(e))])]):t._e()})],2),t._v(" "),i("router-link",{attrs:{to:"/"}},[i("button",{staticClass:"btn btn-secondary",attrs:{id:"myButton"}},[t._v("Back to Recipes")])]),t._v(" "),i("router-link",{attrs:{to:{path:"/EditRecipe/"+t.id}}},[i("button",{staticClass:"btn btn-primary",attrs:{id:"myButton"}},[t._v("Edit")])])],1)]):i("div",{staticClass:"loader"})},staticRenderFns:[]};var F=i("VU/8")(B,E,!1,function(t){i("YHTc")},"data-v-27d37780",null).exports;s.a.use(c.a);var D=new c.a({routes:[{path:"/",name:"Recipes",component:k},{path:"/addRecipe",name:"AddRecipe",component:S},{path:"/recipe/:id",name:"Recipe",component:F,props:!0},{path:"/EditRecipe/:id",name:"EditRecipe",component:S,props:!0}]}),I=i("hnaQ");i("C9st"),s.a.use(I.a),s.a.config.productionTip=!1,new s.a({el:"#app",store:R,router:D,components:{App:n},template:"<App/>"})},YHTc:function(t,e){},hVWP:function(t,e){},o3IU:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0a9744850cdf80cd9862.js.map