(function(A){function e(e){for(var t,a,c=e[0],u=e[1],o=e[2],g=0,l=[];g<c.length;g++)a=c[g],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&l.push(n[a][0]),n[a]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(A[t]=u[t]);s&&s(e);while(l.length)l.shift()();return i.push.apply(i,o||[]),r()}function r(){for(var A,e=0;e<i.length;e++){for(var r=i[e],t=!0,c=1;c<r.length;c++){var u=r[c];0!==n[u]&&(t=!1)}t&&(i.splice(e--,1),A=a(a.s=r[0]))}return A}var t={},n={app:0},i=[];function a(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return A[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=A,a.c=t,a.d=function(A,e,r){a.o(A,e)||Object.defineProperty(A,e,{enumerable:!0,get:r})},a.r=function(A){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},a.t=function(A,e){if(1&e&&(A=a(A)),8&e)return A;if(4&e&&"object"===typeof A&&A&&A.__esModule)return A;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:A}),2&e&&"string"!=typeof A)for(var t in A)a.d(r,t,function(e){return A[e]}.bind(null,t));return r},a.n=function(A){var e=A&&A.__esModule?function(){return A["default"]}:function(){return A};return a.d(e,"a",e),e},a.o=function(A,e){return Object.prototype.hasOwnProperty.call(A,e)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var s=u;i.push([0,"chunk-vendors"]),r()})({0:function(A,e,r){A.exports=r("56d7")},"0839":function(A,e,r){A.exports=r.p+"img/en.be45e44f.gif"},3745:function(A,e,r){A.exports=r.p+"img/de.a81bc284.gif"},5523:function(A,e,r){A.exports=r.p+"img/it.75bc9ab3.gif"},"56d7":function(A,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var t=r("2b0e"),n=function(){var A=this,e=A.$createElement,r=A._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"searchbar"},[r("input",{directives:[{name:"model",rawName:"v-model",value:A.userSearch,expression:"userSearch"}],attrs:{type:"text"},domProps:{value:A.userSearch},on:{input:function(e){e.target.composing||(A.userSearch=e.target.value)}}}),r("button",{on:{click:function(e){A.searchQuery(A.movieSearch,A.userSearch,"moviesList"),A.searchQuery(A.seriesSearch,A.userSearch,"seriesList")}}},[A._v(" search ")])]),r("div",{staticClass:"cards-container"},[A._l(A.moviesList,(function(A){return r("Card",{key:A.id,attrs:{cardTitle:A.title,cardOriginalTitle:A.original_title,cardLanguage:A.original_language,cardVote:A.vote_average,cardImg:A.poster_path}})})),A._l(A.seriesList,(function(A){return r("Card",{key:A.id,attrs:{cardTitle:A.name,cardOriginalTitle:A.original_name,cardLanguage:A.original_language,cardVote:A.vote_average,cardImg:A.poster_path}})}))],2)])},i=[],a=r("bc3a"),c=r.n(a),u=function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("ol",[t("li",[A._v("Titolo: "+A._s(A.cardTitle))]),t("li",[A._v("Titolo Originale: "+A._s(A.cardOriginalTitle))]),t("li",[A._v(" Lingua: "+A._s(A.cardLanguage)+" "),A.filter(A.cardLanguage)?t("img",{attrs:{src:r("56e0")("./"+A.cardLanguage+".gif"),alt:""}}):A._e()]),t("li",[A._v(" Voto: "),A.ratingStars?t("div",[A._l(A.ratingStars,(function(A){return t("span",{key:A},[t("i",{staticClass:"fa fa-star"})])})),A._l(5-A.ratingStars,(function(A){return t("span",{key:A},[t("i",{staticClass:"fa fa-star-o"})])}))],2):A._e()]),t("li",[A._v(" Immagine di copertina: "),A.cardImg?t("img",{attrs:{src:A.imgPath,alt:A.cardTitle}}):t("img",{attrs:{src:r("90ab"),alt:"no image found"}})]),A._v(" --\x3e ")])},o=[],s=(r("a9e3"),r("4de4"),r("d3b7"),{name:"Card",props:{cardTitle:String,cardOriginalTitle:String,cardLanguage:String,cardVote:Number,cardImg:String},data:function(){return{langFlags:["de","hu","fr","sp","it","en"]}},computed:{imgPath:function(){var A="https://image.tmdb.org/t/p/",e="w342";return A+e+this.cardImg},ratingStars:function(){var A=this.cardVote;return Math.ceil(A/2)}},methods:{filter:function(A){return 0!==this.langFlags.filter((function(e){return e===A})).length}},mounted:function(){}}),g=s,l=r("2877"),p=Object(l["a"])(g,u,o,!1,null,"1d28dfd8",null),v=p.exports,d={name:"App",components:{Card:v},data:function(){return{apiKey:"91101de13ecb336e5b615f4754a0341a",apiUrl:"https://api.themoviedb.org/3",movieSearch:"/search/movie",seriesSearch:"/search/tv",moviesList:[],seriesList:[],userSearch:"scrubs"}},computed:{},methods:{searchQuery:function(A,e,r){var t=this;c.a.get(this.apiUrl+A,{params:{api_key:this.apiKey,query:e,language:"it"}}).then((function(A){t[r]=A.data.results,console.log(t[r])}))}},mounted:function(){}},f=d,m=(r("5c0b"),Object(l["a"])(f,n,i,!1,null,null,null)),I=m.exports;t["a"].config.productionTip=!1,new t["a"]({render:function(A){return A(I)}}).$mount("#app")},"56e0":function(A,e,r){var t={"./de.gif":"3745","./en.gif":"0839","./fr.gif":"e533","./hu.gif":"7bc0","./it.gif":"5523","./sp.gif":"991c"};function n(A){var e=i(A);return r(e)}function i(A){if(!r.o(t,A)){var e=new Error("Cannot find module '"+A+"'");throw e.code="MODULE_NOT_FOUND",e}return t[A]}n.keys=function(){return Object.keys(t)},n.resolve=i,A.exports=n,n.id="56e0"},"5c0b":function(A,e,r){"use strict";r("9c0c")},"7bc0":function(A,e){A.exports="data:image/gif;base64,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"},"90ab":function(A,e,r){A.exports=r.p+"img/placeholder.38b5701e.jpg"},"991c":function(A,e,r){A.exports=r.p+"img/sp.1d79e3af.gif"},"9c0c":function(A,e,r){},e533:function(A,e,r){A.exports=r.p+"img/fr.f3636932.gif"}});
//# sourceMappingURL=app.adae6524.js.map