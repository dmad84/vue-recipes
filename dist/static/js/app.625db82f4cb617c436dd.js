webpackJsonp([1],{C9st:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("7+uW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container",attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var n=a("VU/8")({name:"App"},s,!1,function(e){a("oase")},null,null).exports,r=a("/ocq"),c=a("NYxO"),o={name:"Recipes",data:function(){return{msg:"",name:"",details:"",createdAt:new Date}},computed:Object(c.c)(["recipes"]),methods:Object(c.b)(["addRecipe","removeRecipe"])},p={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-12 col-md-8"},[a("h1",[e._v(e._s(e.msg))]),e._v(" "),a("h2",[e._v("Recipes")]),e._v(" "),a("table",{staticClass:"table"},[e._m(0),e._v(" "),a("tbody",e._l(e.recipes,function(t,i){return a("tr",{key:i},[a("td",[e._v(e._s(t.name))]),e._v(" "),a("td",[e._v(e._s(t.details))]),e._v(" "),a("td",[a("span",{staticClass:"glyphicon glyphicon-trash",attrs:{"aria-hidden":"true"},on:{click:function(a){e.removeRecipe(t)}}})])])}))]),e._v(" "),a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[e._v("Recipe Title")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",id:"name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"details"}},[e._v("Recipe Details")]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.details,expression:"details"}],staticClass:"form-control",attrs:{rows:"4",cols:"50",id:"details"},domProps:{value:e.details},on:{input:function(t){t.target.composing||(e.details=t.target.value)}}})]),e._v(" "),a("button",{staticClass:"btn btn-primary float-right",on:{click:function(t){e.addRecipe({name:e.name,details:e.details,createdAt:e.createdAt})}}},[e._v("Add Recipe")])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",[this._v("Recipe Name")]),this._v(" "),t("th",[this._v("Details")]),this._v(" "),t("th")])])}]};var l=a("VU/8")(o,p,!1,function(e){a("y6Er")},"data-v-51838230",null).exports;i.a.use(r.a);var d=new r.a({routes:[{path:"/",name:"Recipes",component:l}]}),u=a("Dd8w"),m=a.n(u),v=a("yviF"),f=a.n(v);a("881v");f.a.initializeApp({apiKey:"AIzaSyC8HFOu2r1poOpchyCOOjvJsThmXASk98o",authDomain:"vue-recipes-site.firebaseapp.com",databaseURL:"https://vue-recipes-site.firebaseio.com",projectId:"vue-recipes-site",storageBucket:"vue-recipes-site.appspot.com",messagingSenderId:"475258414126"});f.a.firestore().settings({timestampsInSnapshots:!0});var _=f.a.firestore().collection("recipes");_.onSnapshot(function(e){var t=[];e.forEach(function(e){t.push(m()({id:e.id},e.data()))}),g.commit("watchRecipes",t)});var h=function(e){return _.add(e)},R=function(e){return _.doc(e).delete()};i.a.use(c.a);var g=new c.a.Store({state:{recipes:[]},mutations:{watchRecipes:function(e,t){e.recipes=t},removeRecipe:function(e,t){e.recipes.splice(e.recipes.indexOf(t),1)}},actions:{addRecipe:function(e,t){e.commit;h(t)},removeRecipe:function(e,t){var a=e.commit;R(t.id),a("removeRecipe",t)}}}),b=a("hnaQ");a("C9st"),i.a.use(b.a),i.a.config.productionTip=!1,new i.a({el:"#app",store:g,router:d,components:{App:n},template:"<App/>"})},oase:function(e,t){},y6Er:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.625db82f4cb617c436dd.js.map