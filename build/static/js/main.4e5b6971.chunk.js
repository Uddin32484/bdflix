(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],{22:function(e,t,a){e.exports=a(64)},27:function(e,t,a){},28:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),c=a.n(o),i=(a(27),a(28),a(4)),l=a.n(i),s=a(5),u=a(3),m=a(17),d=a.n(m).a.create({baseURL:"https://api.themoviedb.org/3"}),h=(a(46),"6b508ae2ea74dbd73050c230d8bc6f9d"),v={fetchTrending:"/trending/all/week?api_key=".concat(h,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(h,"&with_networks=123"),fetchTopRated:"/movie/top_rated?api_key=".concat(h,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(h,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(h,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(h,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(h,"&with_genres=10749"),fetchDocumentariesMovies:"/discover/movie?api_key=".concat(h,"&with_genres=99")};var f=function(){var e,t,a=Object(n.useState)([]),o=Object(u.a)(a,2),c=o[0],i=o[1];return Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get(v.fetchTrending);case 2:return t=e.sent,console.log(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),i(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.table(c),r.a.createElement("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat((null===c||void 0===c?void 0:c.poster_path)||(null===c||void 0===c?void 0:c.backdrop_path),'")'),backgroundPosition:"center center"}},r.a.createElement("div",{className:"banner_contents"},r.a.createElement("h1",{className:"banner_title"},(null===c||void 0===c?void 0:c.title)||(null===c||void 0===c?void 0:c.name)||(null===c||void 0===c?void 0:c.original_name)),r.a.createElement("div",{className:"banner_buttons"},r.a.createElement("button",{className:"banner_button"},"Play"),r.a.createElement("button",{className:"banner_button"}," My List")),r.a.createElement("h1",{className:"banner_description"},(e=null===c||void 0===c?void 0:c.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e))),r.a.createElement("div",{className:"banner-fadeBottom"}))};a(47);var g=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?o(!0):o(!1)})),function(){window.removeEventListener("scroll")}}),[]),r.a.createElement("div",{className:"nav ".concat(a&&"nav_black")},r.a.createElement("img",{className:"nav_logo",src:"/image/deshiflix1.jpg",alt:"Netflix Logo"}),r.a.createElement("img",{className:"nav_avatar",src:"/image/smilyface.jpg",alt:"Netflix Logo"}))},p=a(18),b=a.n(p),E=a(19);a(63);var w=function(e){var t=e.title,a=e.fetchUrl,o=e.isLargeRow,c=Object(n.useState)([]),i=Object(u.a)(c,2),m=i[0],h=i[1],v=Object(n.useState)(""),f=Object(u.a)(v,2),g=f[0],p=f[1];Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get(a);case 2:return t=e.sent,h(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]);var w={cat:"qbN7DtPAKQo",dog:"qggx-7o5cqU",cow:"bS-HMwdt6AE?t=70",a:"eirmiouZsE4",B:"4CikNRsHKhs",C:"zaCbuB3w0kg",D:"ZPSUimDt7N8",E:"2jgkVWMNIq8",F:"61l74K5ZRdA",G:"mCKxEOnzQug"};return r.a.createElement("div",{className:"row"},r.a.createElement("h2",null,t),r.a.createElement("div",{className:"row_posters"},m.map((function(e){return r.a.createElement("img",{key:e.id,onClick:function(){return function(e){g?p(""):b()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);p(t.get("v"))||p(w[Object.keys(w)[Math.floor(Math.random()*Object.keys(w).length)]])})).catch((function(e){return console.log(e)})),p(w[Object.keys(w)[Math.floor(Math.random()*Object.keys(w).length)]])}(e)},className:"row_poster ".concat(o&&"row_posterLarger"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(o?e.poster_path:e.backdrop_path),alt:e.name})}))),g&&r.a.createElement(E.a,{videoId:g,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}}))};var _=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(g,null),r.a.createElement(f,null),r.a.createElement("div",{className:"heading"},"Bangladeshi  Movie Bazar ",r.a.createElement("small",null,"  \u09ac\u09be\u09ac\u09c1 \u0996\u09be\u0987\u099b\u09cb  -Dedicated to -Farhan vai")),r.a.createElement(w,{title:"Top Rated Movie- Yub Uddin",fetchUrl:v.fetchTopRated,isLargeRow:!0}),r.a.createElement(w,{title:"Trending NOW",fetchUrl:v.fetchTrending}),r.a.createElement(w,{title:"Action Movie",fetchUrl:v.fetchActionMovies}),r.a.createElement(w,{title:"Comedy Movie",fetchUrl:v.fetchComedyMovies}),r.a.createElement(w,{title:"Horror Movie",fetchUrl:v.fetchHorrorMovies}),r.a.createElement(w,{title:"Romance Deshi Movie",fetchUrl:v.fetchRomanceMovies}),r.a.createElement(w,{title:"Documentaries Movie",fetchUrl:v.fetchDocumentariesMovies}),r.a.createElement(w,{title:"Deshi Hindi Bangla Movie",fetchUrl:v.fetchRomanceMovies}),r.a.createElement(w,{title:"NETFLIX ORIGINALS",fetchUrl:v.fetchNetflixOriginals}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.4e5b6971.chunk.js.map