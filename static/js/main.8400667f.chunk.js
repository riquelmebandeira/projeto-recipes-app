(this["webpackJsonprecipes-app-test"]=this["webpackJsonprecipes-app-test"]||[]).push([[0],[,,,,,,function(e,t,a){"use strict";a.d(t,"c",(function(){return m})),a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d})),a.d(t,"i",(function(){return v})),a.d(t,"f",(function(){return j})),a.d(t,"e",(function(){return O})),a.d(t,"g",(function(){return k})),a.d(t,"h",(function(){return N})),a.d(t,"k",(function(){return w})),a.d(t,"j",(function(){return x})),a.d(t,"d",(function(){return T}));var n=a(19),r=a(1),c=a.n(r),i=a(7),o=a(16),s=a(10),l=a(11),u=a(8),m="SAVE_USER_LS_DATA",p="SAVE_RECIPES_LS_DATA",d="SAVE_RECIPE_LIST",f=["user","mealsToken","cocktailsToken"],b=["doneRecipes","favoriteRecipes","inProgressRecipes"],h=[].concat(f,b),E=function(e){return e.reduce((function(e,t){return null===localStorage.getItem(t)?e:Object(s.a)(Object(s.a)({},e),{},Object(o.a)({},t,JSON.parse(localStorage.getItem(t))))}),{})},g=function(e){Object.keys(e).forEach((function(t){localStorage.setItem(t,JSON.stringify(e[t]))}))},v=function(e){return{type:d,data:e}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.filterType,a=void 0===t?"name":t,n=e.searchInput,r=void 0===n?"":n,o=e.recipeType,s=void 0===o?"comida":o;return function(){var e=Object(i.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.a)({recipeType:s,filterType:a,searchInput:r});case 2:n=e.sent,t(v(Object.values(n)[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(){h.forEach((function(e){return localStorage.clear(e)}))},y=function(e){return g(e),{type:p,data:e}},k=function(){return function(e,t){f.forEach((function(a){null===localStorage.getItem(a)&&null!==localStorage.getItem("user")?g(Object(o.a)({},a,t().user[a])):e({type:m,data:E([a])})})),b.forEach((function(a){null===localStorage.getItem(a)?g(Object(o.a)({},a,t().recipes[a])):e({type:p,data:E([a])})}))}},N=function(e){return function(t){var a;t((g(a={user:e,mealsToken:1,cocktailsToken:1}),{type:m,data:a}))}},w=function(e){var t=e.recipeType,a=e.recipeId,n=e.steps;return function(e,r){var c=r().recipes.inProgressRecipes,i=u.a[t].inProgress,l={inProgressRecipes:Object(s.a)(Object(s.a)({},c),{},Object(o.a)({},i,Object(s.a)(Object(s.a)({},c[i]),{},Object(o.a)({},a,n))))};e(y(l))}},x=function(e){return function(t,a){var r=a().recipes.favoriteRecipes;if(r.some((function(t){return t.id===e.id})))t(y({favoriteRecipes:Object(n.a)(r.filter((function(t){return t.id!==e.id})))}));else{var c=e.id,i=e.area,o=e.category,s=e.alcoholicOrNot,l=e.name,u=e.image,m=e.type;t(y({favoriteRecipes:[].concat(Object(n.a)(r),[{id:c,area:i,category:o,alcoholicOrNot:s,name:l,image:u,type:m}])}))}}},I=function(){var e=new Date,t=String(e.getDate()).padStart(2,"0"),a=String(e.getMonth()+1).padStart(2,"0"),n=e.getFullYear();return"".concat(t,"/").concat(a,"/").concat(n)},T=function(e){var t=e.name,a=e.image,r=e.tags,c=e.category,i=e.type,o=e.id,s=e.area,l=e.alcoholicOrNot;return function(e,u){var m=u().recipes.doneRecipes,p={name:t,image:a,tags:r,category:c,type:i,id:o,area:s,alcoholicOrNot:l,doneDate:I()};e(y({doneRecipes:[].concat(Object(n.a)(m),[p])}))}}},,function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return c})),a.d(t,"d",(function(){return i})),a.d(t,"b",(function(){return o}));var n=a(15),r={bebida:{base:"Drink",id:"idDrink",thumb:"strDrinkThumb",title:"strDrink",category:"strCategory",area:"strArea",alcoholic:"strAlcoholic",inProgress:"cocktails",instructions:"strInstructions"},comida:{base:"Meal",id:"idMeal",thumb:"strMealThumb",title:"strMeal",category:"strCategory",area:"strArea",inProgress:"meals",instructions:"strInstructions"}};function c(){return window.location.href.includes("comida")?"comida":"bebida"}var i=function(e,t){return"".concat(window.location.origin,"/").concat(t,"s/").concat(e)},o=function(e,t){return{id:e[r[t].id],type:t,area:e[r[t].area]||"",category:e[r[t].category],alcoholicOrNot:e[r[t].alcoholic]||"",name:e[r[t].title],image:e[r[t].thumb],ingredients:Object(n.c)("Ingredient",e),measures:Object(n.c)("Measure",e),instructions:e[r[t].instructions],tags:"comida"===t&&e.strTags?e.strTags.split(","):[]}}},,,function(e,t,a){"use strict";(function(e){var n=a(1),r=a.n(n),c=a(7),i={bebida:{ingredients:"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=",exIngredients:"https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list",name:"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=",first:"https://www.thecocktaildb.com/api/json/v1/1/search.php?f=",list:"https://www.thecocktaildb.com/api/json/v1/1/list.php?c=",lookup:"https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=",category:"https://www.thecocktaildb.com/api/json/v1/1/filter.php?c="},comida:{ingredients:"https://www.themealdb.com/api/json/v1/1/filter.php?i=",exIngredients:"https://www.themealdb.com/api/json/v1/1/list.php?i=list",name:"https://www.themealdb.com/api/json/v1/1/search.php?s=",first:"https://www.themealdb.com/api/json/v1/1/search.php?f=",list:"https://www.themealdb.com/api/json/v1/1/list.php?c=",lookup:"https://www.themealdb.com/api/json/v1/1/lookup.php?i=",category:"https://www.themealdb.com/api/json/v1/1/filter.php?c="}},o=function(){var t=Object(c.a)(r.a.mark((function t(){var a,n,c,o,s,l,u,m,p,d=arguments;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=d.length>0&&void 0!==d[0]?d[0]:{},n=a.recipeType,c=void 0===n?"comida":n,o=a.filterType,s=void 0===o?"name":o,l=a.searchInput,!((u=void 0===l?"":l).length>1&&"first"===s)){t.next=5;break}e.alert("Sua busca deve conter somente 1 (um) caracter"),t.next=12;break;case 5:return t.next=7,fetch("".concat(i[c][s]).concat(u));case 7:return m=t.sent,t.next=10,m.json();case 10:return p=t.sent,t.abrupt("return",p);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t.a=o}).call(this,a(27))},,,,function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return u})),a.d(t,"d",(function(){return m}));var n=a(1),r=a.n(n),c=a(10),i=a(7),o=a(11),s=function(e,t){return Object.entries(t).filter((function(t){return t[0].includes(e)&&t[1]})).map((function(e){return e[1]}))},l=function(){var e=Object(i.a)(r.a.mark((function e(t,a){var n,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.a)({recipeType:a,filterType:"lookup",searchInput:t});case 2:return n=e.sent,i=Object.values(n)[0][0],e.abrupt("return",Object(c.a)(Object(c.a)({},i),{},{ingredients:s("Ingredient",i),measures:s("Measure",i)}));case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),u=function(){var e=Object(i.a)(r.a.mark((function e(t,a){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.a)({recipeType:a});case 2:return n=e.sent,e.abrupt("return",Object.values(n)[0]);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),m=function(e){var t=e.split("=").pop();return"https://www.youtube.com/embed/".concat(t)}},,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},,,,function(e,t,a){e.exports=a.p+"static/media/whiteHeartIcon.ea3b6ba8.svg"},function(e,t,a){e.exports=a.p+"static/media/blackHeartIcon.b8913346.svg"},function(e,t,a){e.exports=a.p+"static/media/shareIcon.06215ed4.svg"},function(e,t,a){e.exports=a.p+"static/media/drinkIcon.f87c47c3.svg"},function(e,t,a){e.exports=a.p+"static/media/exploreIcon.157945ff.svg"},function(e,t,a){e.exports=a.p+"static/media/mealIcon.b27ba19e.svg"},function(e,t,a){e.exports=a.p+"static/media/searchIcon.db812135.svg"},function(e,t,a){e.exports=a.p+"static/media/profileIcon.74e487e5.svg"},function(e,t,a){"use strict";(function(e){var n=a(1),r=a.n(n),c=a(7),i=a(3),o=a(0),s=a.n(o),l=a(4),u=a(2),m=a(6),p=a(11),d=a(8);a(65);t.a=function(){var t=Object(o.useState)(""),a=Object(i.a)(t,2),n=a[0],f=a[1],b=Object(o.useState)("name"),h=Object(i.a)(b,2),E=h[0],g=h[1],v=Object(u.f)(),j=Object(l.b)(),O=function(){var t=Object(c.a)(r.a.mark((function t(){var a,c,i,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Object(d.c)(),t.next=3,Object(p.a)({filterType:E,searchInput:n,recipeType:a});case 3:c=t.sent,null===(i=Object.values(c)[0])?e.alert("Sinto muito, n\xe3o encontramos nenhuma receita para esses filtros."):1===i.length?(o=d.a[a].id,v.push("/".concat(a,"s/").concat(i[0][o]))):i.length>1&&j(Object(m.i)(i));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return s.a.createElement("form",{className:"search-form"},s.a.createElement("input",{"data-testid":"search-input",type:"text",className:"search-input",value:n,onChange:function(e){return f(e.target.value)}}),s.a.createElement("label",{htmlFor:"ingredient-search-radio"},s.a.createElement("input",{"data-testid":"ingredient-search-radio",id:"ingredient-search-radio",type:"radio",value:"ingredients",checked:"ingredients"===E,onChange:function(){return g("ingredients")}}),"Ingrediente"),s.a.createElement("label",{htmlFor:"name-search-radio"},s.a.createElement("input",{"data-testid":"name-search-radio",id:"name-search-radio",type:"radio",value:"name",checked:"name"===E,onChange:function(){return g("name")}}),"Nome"),s.a.createElement("label",{htmlFor:"first-letter-search-radio"},s.a.createElement("input",{"data-testid":"first-letter-search-radio",id:"first-letter-search-radio",type:"radio",value:"first",checked:"first"===E,onChange:function(){return g("first")}}),"Letra inicial"),s.a.createElement("button",{"data-testid":"exec-search-btn",className:"exec-search-btn",type:"button",onClick:function(){return O()}},"Buscar"))}}).call(this,a(27))},function(e,t,a){e.exports=a(74)},,,,,function(e,t,a){},,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),i=a.n(c),o=a(9),s=(a(52),a(4)),l=a(18),u=a(37),m=a(36),p=a(10),d=a(6),f={mealsToken:1,cocktailsToken:1,user:{email:""}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.c:return Object(p.a)(Object(p.a)({},e),t.data);default:return e}},h={doneRecipes:[],favoriteRecipes:[],recipeList:[],inProgressRecipes:{cocktails:{},meals:{}}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.a:return Object(p.a)(Object(p.a)({},e),t.data);case d.b:return Object(p.a)(Object(p.a)({},e),{},{recipeList:t.data});default:return e}},g=Object(l.combineReducers)({user:b,recipes:E}),v=Object(l.createStore)(g,Object(m.composeWithDevTools)(Object(l.applyMiddleware)(u.a))),j=a(2),O=a(1),y=a.n(O),k=a(7),N=a(3);var w=function(){return r.a.createElement("div",{className:"loading-message"},"Carregando...")};var x=function(e){var t=e.ingredients,a=e.measures;return r.a.createElement("section",{className:"ingredients"},r.a.createElement("h2",null,"Ingredientes"),r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement("li",{key:t,"data-testid":"".concat(t,"-ingredient-name-and-measure")},"".concat(e," - ").concat(a[t]))}))))},I=a(8);function T(e){var t=e.recipeId,a=e.recipeType,n=e.className,c=Object(s.c)((function(e){return e.recipes.doneRecipes.some((function(e){var n=e.id,r=e.type;return n===t&&r===a}))})),i=Object(s.c)((function(e){return e.recipes.inProgressRecipes[I.a[a].inProgress]}));return!c&&r.a.createElement(o.b,{to:"".concat(t,"/in-progress")},r.a.createElement("button",{type:"button","data-testid":"start-recipe-btn",className:n},i[t]?"Continuar Receita":"Iniciar receita"))}T.defaultProps={className:""};var S=T;a(28);var C=function(e){var t=e.recipe,a=e.index,n="comida"===Object(I.c)();return r.a.createElement("div",{className:"recommendation-card"},r.a.createElement("img",{src:n?t.strDrinkThumb:t.strMealThumb,alt:"Foto da receita","data-testid":"".concat(a,"-recomendation-card"),className:"card-photo"}),r.a.createElement("p",null,n?t.strAlcoholic:t.strCategory),r.a.createElement("h3",{"data-testid":"".concat(a,"-recomendation-title")},n?t.strDrink:t.strMeal))};var R=function(e){var t=e.recommendations;return r.a.createElement("section",{className:"recommendations"},r.a.createElement("h2",null,"Recomendadas"),r.a.createElement("div",{className:"cards-container"},t.slice(0,6).map((function(e,t){return r.a.createElement(C,Object.assign({key:t},{recipe:e,index:t}))}))))},F=a(38),P=a.n(F),D=a(39),B=a.n(D);a(29);function z(e){var t=e.src,a=e.onClick,n=e.testid;return r.a.createElement("input",{type:"image",className:"share-icon",src:t,alt:n,"data-testid":n,onClick:a})}function A(e){var t=e.recipe,a=e.testid,n=t.id,c=Object(s.b)(),i=Object(s.c)((function(e){return e.recipes.favoriteRecipes.some((function(e){return e.id===n}))}));return r.a.createElement(z,{name:"Favoritar",src:i?B.a:P.a,onClick:function(){c(Object(d.j)(t))},testid:a})}z.defaultProps={src:"",testid:"",onClick:function(){}},A.defaultProps={testid:"favorite-btn"};var M=a(40),L=a.n(M),_=a(62);function V(e){var t=e.recipeId,a=e.testid,c=e.recipeType,i=Object(n.useState)(!1),o=Object(N.a)(i,2),s=o[0],l=o[1];return s?r.a.createElement("div",null,"Link copiado!"):r.a.createElement(z,{name:"Compartilhar",src:L.a,onClick:function(){return _(Object(I.d)(t,c)),l(!0),void setTimeout((function(){return l(!1)}),3e3)},testid:a})}V.defaultProps={testid:"share-btn"};a(63);function J(e){var t=e.recipe,a=t.image,n=t.name,c=t.category,i=t.id,o=t.type,s=t.alcoholicOrNot,l="comida"===o;return r.a.createElement("div",{className:"recipe-header-container"},r.a.createElement("img",{src:a,alt:"Foto da receita","data-testid":"recipe-photo",className:"header-img"}),r.a.createElement("section",null,r.a.createElement("div",{className:"info-container"},r.a.createElement("h1",{"data-testid":"recipe-title"},n),r.a.createElement("p",{"data-testid":"recipe-category"},l?c:s)),r.a.createElement("div",{className:"btn-container"},r.a.createElement(V,{recipeId:i,recipeType:Object(I.c)()}),r.a.createElement(A,{recipe:t}))))}var q=a(15);function H(e){var t=e.ingredients,a=e.measures,n=e.recommendations,c=e.instructions,i=e.url,o=e.id,s=e.type,l="comida"===s;return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,{recipe:e}),r.a.createElement("main",{className:"recipe-details-container"},r.a.createElement("article",{className:"preparation-method"},r.a.createElement(x,{ingredients:t,measures:a}),r.a.createElement("section",{className:"instructions"},r.a.createElement("h2",null,"Instru\xe7\xf5es"),r.a.createElement("p",{"data-testid":"instructions"},c)),l&&r.a.createElement("section",{className:"video-container"},r.a.createElement("h2",null,"Video"),r.a.createElement("iframe",{title:"Video da receita","data-testid":"video",src:Object(q.d)(i)}))),r.a.createElement(R,{recommendations:n}),r.a.createElement(S,{recipeId:o,recipeType:s,ingredientsQty:t.length,className:"bottom-btn"})))}function Y(e){var t=e.match.params.id,a=Object(n.useState)(),c=Object(N.a)(a,2),i=c[0],o=c[1],s=Object(n.useState)(),l=Object(N.a)(s,2),u=l[0],m=l[1];return Object(n.useEffect)((function(){Object(k.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m,e.next=3,Object(q.b)(t,"comida");case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=o,e.next=8,Object(q.a)(t,"bebida");case 8:e.t3=e.sent,(0,e.t2)(e.t3);case 10:case"end":return e.stop()}}),e)})))()}),[t]),i&&u?r.a.createElement(H,{id:i.idDrink,type:"bebida",area:"",category:i.strCategory,alcoholicOrNot:i.strAlcoholic,name:i.strDrink,image:i.strDrinkThumb,ingredients:i.ingredients,measures:i.measures,recommendations:u,instructions:i.strInstructions,url:""}):r.a.createElement(w,null)}function Q(e){var t=e.match.params.id,a=Object(n.useState)(),c=Object(N.a)(a,2),i=c[0],o=c[1],s=Object(n.useState)(),l=Object(N.a)(s,2),u=l[0],m=l[1];return Object(n.useEffect)((function(){Object(k.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m,e.next=3,Object(q.b)(t,"bebida");case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=o,e.next=8,Object(q.a)(t,"comida");case 8:e.t3=e.sent,(0,e.t2)(e.t3);case 10:case"end":return e.stop()}}),e)})))()}),[t]),i&&u?r.a.createElement(H,{id:i.idMeal,type:"comida",area:i.strArea,category:i.strCategory,alcoholicOrNot:"",name:i.strMeal,image:i.strMealThumb,ingredients:i.ingredients,measures:i.measures,recommendations:u,instructions:i.strInstructions,url:i.strYoutube}):r.a.createElement(w,null)}a(64);var U=a(41),W=a.n(U),$=a(42),G=a.n($),K=a(43),X=a.n(K);function Z(){return r.a.createElement("footer",null,r.a.createElement("nav",{className:"footer-container","data-testid":"footer","aria-label":"Footer"},r.a.createElement(o.b,{to:"/bebidas"},r.a.createElement("img",{"data-testid":"drinks-bottom-btn",type:"button",src:W.a,alt:"Drinks"})),r.a.createElement(o.b,{to:"/explorar"},r.a.createElement("img",{"data-testid":"explore-bottom-btn",type:"button",src:G.a,alt:"Explore"})),r.a.createElement(o.b,{to:"/comidas"},r.a.createElement("img",{"data-testid":"food-bottom-btn",type:"button",src:X.a,alt:"Food"}))))}var ee=a(44),te=a.n(ee),ae=a(45),ne=a.n(ae),re=a(46);a(66);function ce(e){var t=e.title,a=e.showSearchBtn,c=e.className,i=Object(n.useState)(!1),s=Object(N.a)(i,2),l=s[0],u=s[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:c},r.a.createElement("div",null,r.a.createElement(o.b,{to:"/perfil"},r.a.createElement("input",{type:"image",src:ne.a,"data-testid":"profile-top-btn",alt:"Foto de perfil"})),r.a.createElement("h1",{className:"title","data-testid":"page-title"},t),a&&r.a.createElement("input",{type:"image",src:te.a,alt:"\xcdcone de lupa","data-testid":"search-top-btn",onClick:function(){return u(!l)}}))),l&&r.a.createElement(re.a,null))}ce.defaultProps={showSearchBtn:!0,className:""};var ie=ce;a(67);function oe(){var e=Object(j.f)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(ie,{title:"Explorar",showSearchBtn:!1,className:"alternative-header"}),r.a.createElement("main",{className:"explore-page-container"},r.a.createElement("section",{className:"explore-options"},r.a.createElement("button",{type:"button",name:"comidas",onClick:function(){e.push("/explorar/comidas")},"data-testid":"explore-food",className:"button"},"Explorar Comidas"),r.a.createElement("button",{type:"button",name:"bebidas",onClick:function(){e.push("/explorar/bebidas")},"data-testid":"explore-drinks",className:"button"},"Explorar Bebidas")),r.a.createElement(Z,null)))}function se(){var e=Object(j.f)(),t=function(){var e=Object(k.a)(y.a.mark((function e(){var t,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://www.thecocktaildb.com/api/json/v1/1/random.php",e.next=3,fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var a=Object(k.a)(y.a.mark((function a(){var n;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t();case 2:n=a.sent,e.push("/bebidas/".concat(Object.values(n)[0][0].idDrink));case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(ie,{title:"Explorar Bebidas",showSearchBtn:!1,className:"alternative-header"}),r.a.createElement("main",{className:"explore-page-container"},r.a.createElement("section",{className:"explore-options"},r.a.createElement("button",{type:"button","data-testid":"explore-by-ingredient",onClick:function(){e.push("/explorar/bebidas/ingredientes")},className:"button"},"Por Ingredientes"),r.a.createElement("button",{type:"button","data-testid":"explore-surprise",onClick:a,className:"button"},"Me Surpreenda!"))),r.a.createElement(Z,null))}function le(){var e=Object(j.f)(),t=function(){var e=Object(k.a)(y.a.mark((function e(){var t,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://www.themealdb.com/api/json/v1/1/random.php",e.next=3,fetch("https://www.themealdb.com/api/json/v1/1/random.php");case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var a=Object(k.a)(y.a.mark((function a(){var n;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t();case 2:n=a.sent,e.push("/comidas/".concat(Object.values(n)[0][0].idMeal));case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(ie,{title:"Explorar Comidas",showSearchBtn:!1,className:"alternative-header"}),r.a.createElement("main",{className:"explore-page-container"},r.a.createElement("section",{className:"explore-options"},r.a.createElement("button",{type:"button","data-testid":"explore-by-ingredient",onClick:function(){e.push("/explorar/comidas/ingredientes")},className:"button"},"Por Ingredientes"),r.a.createElement("button",{type:"button","data-testid":"explore-by-area",onClick:function(){e.push("/explorar/comidas/area")},className:"button"},"Por Local de Origem"),r.a.createElement("button",{type:"button","data-testid":"explore-surprise",onClick:a,className:"button"},"Me Surpreenda!"))),r.a.createElement(Z,null))}function ue(){return r.a.createElement("section",{className:"content-container"},r.a.createElement(ie,{title:"Explorar Origem",className:"alternative-header"}),r.a.createElement(Z,null))}var me=a(11);a(68);function pe(){var e=Object(j.f)(),t=Object(s.b)(),a=Object(n.useState)([]),c=Object(N.a)(a,2),i=c[0],o=c[1],l=Object(I.c)(),u=function(){var e=Object(k.a)(y.a.mark((function e(){var t,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(me.a)({recipeType:l,filterType:"exIngredients",searchInput:""});case 2:t=e.sent,a="comida"===l?t.meals.slice(0,12):t.drinks.slice(0,12),o(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){u()}),[]);var m=function(){var a=Object(k.a)(y.a.mark((function a(n){var r,c;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(me.a)({recipeType:l,filterType:"ingredients",searchInput:n});case 2:r=a.sent,c="comida"===l?r.meals:r.drinks,t(Object(d.i)(c)),e.push("/".concat(l,"s"));case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(ie,{title:"Explorar Ingredientes",showSearchBtn:!1,className:"alternative-header"}),r.a.createElement("main",{className:"ingredients-container"},i.map((function(e,t){return r.a.createElement("section",{key:t,className:"ingredient-card"},r.a.createElement("button",{"data-testid":"".concat(t,"-ingredient-card"),type:"button",onClick:function(){return m(e.strIngredient||e.strIngredient1)}},r.a.createElement("img",{"data-testid":"".concat(t,"-card-img"),src:(a=e.strIngredient||e.strIngredient1,"comida"===l?"https://www.themealdb.com/images/ingredients/".concat(a,"-Small.png"):"https://www.thecocktaildb.com/images/ingredients/".concat(a,"-Small.png")),alt:e.strIngredient||e.strIngredient1})),r.a.createElement("p",{"data-testid":"".concat(t,"-card-name")},e.strIngredient||e.strIngredient1));var a}))),r.a.createElement(Z,null))}a(69);var de=function(){var e=Object(n.useState)(""),t=Object(N.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),o=Object(N.a)(i,2),l=o[0],u=o[1],m=Object(n.useState)(!0),p=Object(N.a)(m,2),f=p[0],b=p[1],h=Object(j.f)(),E=Object(s.b)();Object(n.useEffect)((function(){var e=l.length>=7,t=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/.test(a);b(!t||!e)}),[a,l]);var g={email:a};return r.a.createElement("main",{className:"login-container"},r.a.createElement("h1",null,"Let's Cook!"),r.a.createElement("section",null,r.a.createElement("form",{className:"form-container"},r.a.createElement("input",{className:"box-text",type:"email",name:"email",placeholder:"Email",value:a,"data-testid":"email-input",onChange:function(e){return c(e.target.value)},required:!0}),r.a.createElement("input",{className:"box-text",type:"password",name:"password",placeholder:"Password","data-testid":"password-input",value:l,onChange:function(e){return u(e.target.value)},required:!0}),r.a.createElement("button",{className:"btn-form",type:"button","data-testid":"login-submit-btn",disabled:f,onClick:function(){localStorage.setItem("mealsToken","1"),localStorage.setItem("cocktailsToken","1"),E(Object(d.h)(g)),h.push("/comidas")}},"Entrar"))))};a(70);function fe(){var e=Object(s.c)((function(e){return e.user})).user,t=null===e?"":e.email,a=Object(j.f)(),n=function(e){"recipe-favorite"===e.value?a.push("/receitas-favoritas"):"recipe-done"===e.value?a.push("/receitas-feitas"):(Object(d.e)(),a.push("/"))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(ie,{title:"Perfil",showSearchBtn:!1,className:"alternative-header"}),r.a.createElement(Z,null),r.a.createElement("main",{className:"container-main"},r.a.createElement("section",{className:"box"},r.a.createElement("h3",{"data-testid":"profile-email",className:"profile-email"},t),r.a.createElement("button",{type:"button",className:"button","data-testid":"profile-done-btn",value:"recipe-done",onClick:function(e){return n(e.target)}},"Receitas Feitas"),r.a.createElement("button",{type:"button",className:"button","data-testid":"profile-favorite-btn",value:"recipe-favorite",onClick:function(e){return n(e.target)}},"Receitas Favoritas"),r.a.createElement("button",{type:"button",className:"button","data-testid":"profile-logout-btn",value:"exit",onClick:function(e){return n(e.target)}},"Sair"))))}function be(e){var t=e.className,a=e.name,n=e.onClick,c=e.testid,i=e.disabled,o=e.value;return r.a.createElement("button",{type:"button",className:t,onClick:n,"data-testid":c,disabled:i,value:o},a)}be.defaultProps={name:"Bot\xe3o",disabled:!1,onClick:void 0,testid:void 0,value:void 0,className:void 0};var he=Object(n.createContext)(),Ee=a(19),ge=function(e){var t=e.recipe,a=t.type,c=t.id,i=t.ingredients,o=t.measures,l=I.a[a].inProgress,u=Object(s.c)((function(e){return e.recipes.inProgressRecipes[l]})),m=Object(n.useState)(u[c]||[]),p=Object(N.a)(m,2),f=p[0],b=p[1],h=Object(s.b)();return r.a.createElement("section",{className:"ingredients"},r.a.createElement("h2",null,"Ingredientes"),r.a.createElement("ul",null,i.map((function(e,t){return r.a.createElement("li",{key:"".concat(t,"-ingredient-step")},r.a.createElement("label",{htmlFor:"".concat(t,"-ingredient-step"),"data-testid":"".concat(t,"-ingredient-step")},r.a.createElement("input",{type:"checkbox",id:"".concat(t,"-ingredient-step"),checked:f.includes(e),name:e,onChange:function(){return function(e){var t=f.includes(e)?f.filter((function(t){return t!==e})):[].concat(Object(Ee.a)(f),[e]);b(t),h(Object(d.k)({recipeType:a,recipeId:c,steps:t}))}(e)}}),"".concat(e," - ").concat(o[t])))}))))};function ve(e){var t=e.match.params.id,a=Object(I.c)(),c=Object(n.useState)(null),i=Object(N.a)(c,2),o=i[0],l=i[1],u=Object(n.useContext)(he).loading,m=Object(s.b)(),p=Object(j.f)(),f=Object(s.c)((function(e){return e.recipes.inProgressRecipes[I.a[a].inProgress]}))[t],b=!(!o||!f)&&f.length===o.ingredients.length;return Object(n.useEffect)((function(){Object(me.a)({recipeType:a,filterType:"lookup",searchInput:t}).then((function(e){return Object.values(e)[0]})).then((function(e){return l(Object(I.b)(e[0],a))}))}),[t,a]),u||!o?r.a.createElement(w,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(J,{recipe:o}),r.a.createElement("section",{className:"recipe-details-container"},r.a.createElement(ge,{recipe:o}),r.a.createElement("section",{className:"in-progress-instructions"},r.a.createElement("h2",null,"Instru\xe7\xf5es"),r.a.createElement("p",{"data-testid":"instructions"},o.instructions)),r.a.createElement(be,{name:"Finalizar Receita",testid:"finish-recipe-btn",className:"bottom-btn",onClick:function(){m(Object(d.d)(o)),p.push("/receitas-feitas")},disabled:!b})))}a(71);var je=function(e){var t=e.recipeType,a=Object(s.b)(),c=Object(n.useState)([]),i=Object(N.a)(c,2),o=i[0],l=i[1],u=Object(n.useState)(""),m=Object(N.a)(u,2),p=m[0],f=m[1],b=function(){var e=Object(k.a)(y.a.mark((function e(){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(me.a)({recipeType:t,filterType:"list",searchInput:"list"});case 2:a=e.sent,l(Object.values(a)[0]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){b()}),[t]),r.a.createElement("section",{className:"category-buttons"},r.a.createElement("button",{className:"buttons",type:"button",key:"all","data-testid":"All-category-filter",value:"list",onClick:function(){f(""),a(Object(d.f)({recipeType:t}))}},"All"),o.slice(0,5).map((function(e,n){return r.a.createElement("button",{className:"buttons",type:"button",key:n,"data-testid":"".concat(e.strCategory,"-category-filter"),onClick:function(){p===e.strCategory?(f(""),a(Object(d.f)({recipeType:t}))):(f(e.strCategory),a(Object(d.f)({filterType:"category",searchInput:e.strCategory,recipeType:t})))}},e.strCategory)})))};a(72);var Oe=function(e){var t=e.recipeIndex,a=e.recipeImg,n=e.recipeName,c=e.recipeType,i=e.recipeId;return r.a.createElement("div",{className:"recipe-card"},r.a.createElement(o.b,{to:"".concat(c,"s/").concat(i),key:t,"data-testid":"".concat(t,"-recipe-card")},r.a.createElement("img",{src:a,alt:"img",className:"recipe-img","data-testid":"".concat(t,"-card-img")}),r.a.createElement("li",{className:"recipe-name","data-testid":"".concat(t,"-card-name")},n)))};var ye=function(e){var t=e.recipes,a=Object(I.c)(),n=I.a[a].base;return t[0]&&t[0]["id".concat(n)]?r.a.createElement("section",{className:"recipe-list"},t.map((function(e,t){return r.a.createElement(Oe,{key:e["id".concat(n)],recipeIndex:t,recipeImg:e["str".concat(n,"Thumb")],recipeName:e["str".concat(n)],recipeType:a,recipeId:e["id".concat(n)]})}))):r.a.createElement(w,null)};a(33);function ke(){var e=Object(n.useState)("comida"),t=Object(N.a)(e,2),a=t[0],c=t[1],i=Object(s.c)((function(e){return e.recipes})).recipeList,o=Object(s.b)(),l=i.slice(0,12);return Object(n.useEffect)((function(){var e=Object(I.c)();(e!==a||i.length<1)&&(o(Object(d.f)({recipeType:e})),c(e))})),r.a.createElement(r.a.Fragment,null,r.a.createElement(ie,{title:"comida"===a?"Comidas":"Bebidas",className:"header-container"}),r.a.createElement("main",{className:"content-container"},r.a.createElement(je,{recipeType:a}),r.a.createElement(ye,{recipeType:a,recipes:l}),r.a.createElement(Z,null)))}var Ne=function(e){var t=e.index,a=e.recipe,n=a.category,c=a.image,i=a.type,s=a.id,l=a.name,u=a.area,m=a.alcoholicOrNot;return r.a.createElement("li",{key:t,className:"favorite-recipe-card"},r.a.createElement(o.b,{to:"".concat(i,"s/").concat(s),"data-testid":"".concat(t,"-recipe-card")},r.a.createElement("img",{src:c,alt:"favorite recipe ".concat(t),"data-testid":"".concat(t,"-horizontal-image"),className:"favorite-recipe-photo recipeImgg"})),r.a.createElement("div",null,r.a.createElement("section",{className:"favorite-recipe-info"},r.a.createElement("span",{"data-testid":"".concat(t,"-horizontal-top-text"),className:"category-text"},i.includes("comida")?"".concat(u," - ").concat(n):m),r.a.createElement(o.b,{to:"".concat(i,"s/").concat(s),className:"recipe-name"},r.a.createElement("span",{className:"txt","data-testid":"".concat(t,"-horizontal-name")},l))),r.a.createElement("section",{className:"media-btn-container"},r.a.createElement(V,{testid:"".concat(t,"-horizontal-share-btn"),recipeId:s,recipeType:i}),r.a.createElement(A,{testid:"".concat(t,"-horizontal-favorite-btn"),recipe:a}))))};a(34);function we(e){var t=e.onClick;return r.a.createElement("section",{className:"btn-filter-container"},r.a.createElement(be,{testid:"filter-by-all-btn",name:"All",value:"",onClick:t,classNameBTN:"btn-filter"}),r.a.createElement(be,{testid:"filter-by-food-btn",name:"Food",value:"comida",onClick:t,classNameBTN:"btn-filter"}),r.a.createElement(be,{testid:"filter-by-drink-btn",name:"Drinks",value:"bebida",onClick:t,classNameBTN:"btn-filter"}))}function xe(){var e=Object(n.useState)(""),t=Object(N.a)(e,2),a=t[0],c=t[1],i=Object(s.c)((function(e){return e.recipes.favoriteRecipes}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(ie,{title:"Receitas Favoritas",showSearchBtn:!1,className:"alternative-header"}),r.a.createElement("main",{className:"content-container"},r.a.createElement(we,{onClick:function(e){var t=e.target;return c(t.value)}}),r.a.createElement("section",{className:"recipe-list"},i.filter((function(e){return e.type.includes(a)})).map((function(e,t){return console.log("recipe",e),r.a.createElement(Ne,{key:e.id,index:t,recipe:e})})))))}function Ie(e){var t=e.recipe,a=e.index,n=t.image,c=t.name,i=t.category,s=t.area,l=t.doneDate,u=t.tags,m=t.id,p=t.type;return r.a.createElement("li",{className:"made-recipe-card",key:m},r.a.createElement(o.b,{to:"".concat(p,"s/").concat(m)},r.a.createElement("img",{src:n,alt:"img",className:"made-recipe-img","data-testid":"".concat(a,"-horizontal-image")})),r.a.createElement("section",{className:"made-recipe-info"},r.a.createElement("p",{"data-testid":"".concat(a,"-horizontal-top-text"),className:"category-text"},"".concat(s," - ").concat(i)),r.a.createElement(o.b,{to:"".concat(p,"s/").concat(m),"data-testid":"".concat(a,"-horizontal-name"),className:"recipe-name"},c),r.a.createElement("p",{"data-testid":"".concat(a,"-horizontal-done-date"),className:"done-date"},l),r.a.createElement("p",{className:"recipe-tags"},u.slice(0,2).map((function(e){return r.a.createElement("span",{key:e,"data-testid":"".concat(a,"-").concat(e,"-horizontal-tag")},e)})))),r.a.createElement(V,{testid:"".concat(a,"-horizontal-share-btn"),recipeId:m,recipeType:p}))}function Te(e){var t=e.recipe,a=e.index,n=t.image,c=t.name,i=t.alcoholicOrNot,s=t.doneDate,l=t.id,u=t.type;return r.a.createElement("li",{className:"made-recipe-card",key:l},r.a.createElement(o.b,{to:"".concat(u,"s/").concat(l)},r.a.createElement("img",{src:n,alt:"img",className:"made-recipe-img","data-testid":"".concat(a,"-horizontal-image")})),r.a.createElement("section",{className:"made-recipe-info"},r.a.createElement("p",{"data-testid":"".concat(a,"-horizontal-top-text"),className:"category-text"},i),r.a.createElement(o.b,{to:"".concat(u,"s/").concat(l),"data-testid":"".concat(a,"-horizontal-name"),className:"recipe-name"},c),r.a.createElement("p",{"data-testid":"".concat(a,"-horizontal-done-date"),className:"done-date"},s)),r.a.createElement(V,{testid:"".concat(a,"-horizontal-share-btn"),recipeId:l,recipeType:u}))}function Se(){var e=Object(s.c)((function(e){return e.recipes.doneRecipes})),t=Object(n.useState)(""),a=Object(N.a)(t,2),c=a[0],i=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(ie,{title:"Receitas Feitas",showSearchBtn:!1,className:"alternative-header"}),r.a.createElement("main",{className:"content-container"},r.a.createElement(we,{onClick:function(e){var t=e.target;i(t.value)}}),r.a.createElement("section",{className:"recipe-list"},e.filter((function(e){return e.type.includes(c)})).map((function(e,t){return"comida"===e.type?r.a.createElement(Ie,{key:e.id,recipe:e,index:t}):r.a.createElement(Te,{key:e.id,recipe:e,index:t})})))))}we.defaultProps={onClick:function(){}};var Ce=function(){return r.a.createElement(j.c,null,r.a.createElement(j.a,{exact:!0,path:"/",component:de}),r.a.createElement(j.a,{path:"/comidas/:id/in-progress",component:ve}),r.a.createElement(j.a,{path:"/comidas/:id",component:Q}),r.a.createElement(j.a,{path:"/comidas",component:ke}),r.a.createElement(j.a,{path:"/bebidas/:id/in-progress",component:ve}),r.a.createElement(j.a,{path:"/bebidas/:id",component:Y}),r.a.createElement(j.a,{path:"/bebidas",component:ke}),r.a.createElement(j.a,{path:"/explorar/comidas/ingredientes",component:pe}),r.a.createElement(j.a,{path:"/explorar/bebidas/ingredientes",component:pe}),r.a.createElement(j.a,{path:"/explorar/bebidas",component:se}),r.a.createElement(j.a,{path:"/explorar/comidas/area",component:ue}),r.a.createElement(j.a,{path:"/explorar/comidas",component:le}),r.a.createElement(j.a,{path:"/explorar",component:oe}),r.a.createElement(j.a,{path:"/perfil",component:fe}),r.a.createElement(j.a,{path:"/receitas-feitas",component:Se}),r.a.createElement(j.a,{path:"/receitas-favoritas",component:xe}))},Re=function(e){var t=e.children,a=Object(n.useState)(!0),c=Object(N.a)(a,2),i=c[0],o=c[1],s=Object(n.useState)("comida"),l=Object(N.a)(s,2),u=l[0],m=l[1],p=Object(n.useState)([]),d=Object(N.a)(p,2),f=d[0],b=d[1],h=function(){var e=Object(k.a)(y.a.mark((function e(){var t,a,n=arguments;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},o(!0),e.next=4,Object(me.a)(t);case 4:a=e.sent,b(Object.values(a)[0]),o(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){h()}),[]),r.a.createElement(he.Provider,{value:{loading:i,recipeType:u,recipes:f,setLoading:o,setRecipeType:m,setRecipes:b}},t)};a(73);var Fe=function(){var e=Object(s.b)();return Object(n.useEffect)((function(){e(Object(d.g)())}),[e]),r.a.createElement(Re,null,r.a.createElement(Ce,null))};i.a.render(r.a.createElement(s.a,{store:v},r.a.createElement(o.a,null,r.a.createElement(Fe,null))),document.getElementById("root"))}],[[47,1,2]]]);
//# sourceMappingURL=main.8400667f.chunk.js.map