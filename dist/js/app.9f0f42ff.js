(function(e){function t(t){for(var A,a,o=t[0],s=t[1],c=t[2],l=0,v=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&v.push(r[a][0]),r[a]=0;for(A in s)Object.prototype.hasOwnProperty.call(s,A)&&(e[A]=s[A]);u&&u(t);while(v.length)v.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],A=!0,o=1;o<i.length;o++){var s=i[o];0!==r[s]&&(A=!1)}A&&(n.splice(t--,1),e=a(a.s=i[0]))}return e}var A={},r={app:0},n=[];function a(t){if(A[t])return A[t].exports;var i=A[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=A,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var A in e)a.d(i,A,function(t){return e[t]}.bind(null,A));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=s;n.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"0839":function(e,t,i){e.exports=i.p+"img/en.be45e44f.gif"},3745:function(e,t,i){e.exports=i.p+"img/de.a81bc284.gif"},5523:function(e,t,i){e.exports=i.p+"img/it.75bc9ab3.gif"},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var A=i("2b0e"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"shell"},[i("Header",{on:{search:e.searchQuery}}),i("Main",{attrs:{propMovie:e.moviesList,propSerie:e.seriesList}})],1)},n=[],a=i("bc3a"),o=i.n(a),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("main",[i("div",{staticClass:"container"},[e.propMovie.length>0?i("h1",[e._v("Film")]):e._e(),i("div",{staticClass:"d-flex flex-wrap"},e._l(e.propMovie,(function(e){return i("Card",{key:e.id,attrs:{movie:e}})})),1),e.propSerie.length>0?i("h1",[e._v("Series")]):e._e(),i("div",{staticClass:"d-flex flex-wrap"},e._l(e.propSerie,(function(e){return i("Card",{key:e.id,attrs:{movie:e}})})),1)])])},c=[],u=function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("div",{staticClass:"my-col"},[A("div",{staticClass:"card"},[e.movie.poster_path?A("img",{staticClass:"card-img",attrs:{src:e.imgPath,alt:e.movieTitle}}):A("img",{attrs:{src:i("90ab"),alt:"no image found"}}),A("div",{staticClass:"overlay"},[A("ul",[A("li",[A("h3",{staticClass:"mb-3"},[e._v(e._s(e.movieOriginalTitle))])]),e.movieOriginalTitle!=e.movieTitle?A("li",[A("h4",{staticClass:"mb-3"},[e._v(e._s(e.movieTitle))])]):e._e(),A("li",[e.filter(e.movie.original_language)?A("img",{staticClass:"flag-img mb-3",attrs:{src:i("56e0")("./"+e.movie.original_language+".gif"),alt:e.movie.original_language}}):A("p",[e._v(e._s(e.movie.original_language))])]),A("li",[e.ratingStars?A("div",e._l(5,(function(t){return A("i",{key:"vote_star_"+t,staticClass:"fa mb-2",class:t<=e.ratingStars?"fa-star":"fa-star-o"})})),0):e._e()]),A("li",[e.movie.overview?A("h4",[e._v("Trama")]):e._e(),A("p",[e._v(e._s(e.movie.overview))])])])])])])},l=[],v=(i("b0c0"),i("4de4"),i("d3b7"),{name:"Card",props:{movie:Object},data:function(){return{langFlags:["de","hu","fr","sp","it","en"]}},computed:{movieTitle:function(){return this.movie.title?this.movie.title:this.movie.name},movieOriginalTitle:function(){return this.movie.original_title?this.movie.original_title:this.movie.original_name},imgPath:function(){var e="https://image.tmdb.org/t/p/",t="w342";return e+t+this.movie.poster_path},ratingStars:function(){var e=this.movie.vote_average;return Math.ceil(e/2)}},methods:{filter:function(e){return 0!==this.langFlags.filter((function(t){return t===e})).length}},mounted:function(){}}),p=v,m=i("2877"),g=Object(m["a"])(p,u,l,!1,null,"3ff0676d",null),f=g.exports,d={name:"Main",props:{propMovie:Array,propSerie:Array},components:{Card:f},data:function(){return{}},computed:{},methods:{},mounted:function(){}},h=d,b=Object(m["a"])(h,s,c,!1,null,null,null),I=b.exports,M=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("header",[i("nav",[i("div",{staticClass:"container justify-content-between align-items-center d-flex py-3"},[i("div",{staticClass:"logo"},[e._v("BOOLFLIX")]),i("div",{staticClass:"searchbar"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.userSearch,expression:"userSearch"}],staticClass:"align-middle",attrs:{type:"text"},domProps:{value:e.userSearch},on:{input:function(t){t.target.composing||(e.userSearch=t.target.value)}}}),i("button",{staticClass:"btn btn-danger align-middle",on:{click:function(t){return e.$emit("search",e.userSearch)}}},[e._v("search")])])])])])},C=[],y={name:"Header",data:function(){return{userSearch:""}}},O=y,j=Object(m["a"])(O,M,C,!1,null,null,null),Q=j.exports,x={name:"App",components:{Header:Q,Main:I},data:function(){return{apiKey:"91101de13ecb336e5b615f4754a0341a",apiUrl:"https://api.themoviedb.org/3",moviesList:[],seriesList:[]}},computed:{},methods:{searchQuery:function(e){var t=this;o.a.get(this.apiUrl+"/search/movie",{params:{api_key:this.apiKey,query:e,language:"it"}}).then((function(e){t.moviesList=e.data.results})),o.a.get(this.apiUrl+"/search/tv",{params:{api_key:this.apiKey,query:e,language:"it"}}).then((function(e){t.seriesList=e.data.results}))}},mounted:function(){}},w=x,D=(i("5c0b"),Object(m["a"])(w,r,n,!1,null,null,null)),S=D.exports;A["a"].config.productionTip=!1,new A["a"]({render:function(e){return e(S)}}).$mount("#app")},"56e0":function(e,t,i){var A={"./de.gif":"3745","./en.gif":"0839","./fr.gif":"e533","./hu.gif":"7bc0","./it.gif":"5523","./sp.gif":"991c"};function r(e){var t=n(e);return i(t)}function n(e){if(!i.o(A,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return A[e]}r.keys=function(){return Object.keys(A)},r.resolve=n,e.exports=r,r.id="56e0"},"5c0b":function(e,t,i){"use strict";i("9c0c")},"7bc0":function(e,t){e.exports="data:image/gif;base64,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"},"90ab":function(e,t,i){e.exports=i.p+"img/placeholder.38b5701e.jpg"},"991c":function(e,t,i){e.exports=i.p+"img/sp.1d79e3af.gif"},"9c0c":function(e,t,i){},e533:function(e,t,i){e.exports=i.p+"img/fr.f3636932.gif"}});
//# sourceMappingURL=app.9f0f42ff.js.map