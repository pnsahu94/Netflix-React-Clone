(this["webpackJsonpnetflix-react-clone"]=this["webpackJsonpnetflix-react-clone"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},48:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(19),o=n.n(i),r=(n(28),n(29),n(4)),s=n.n(r),l=n(6),d=n(5),u=n(7),h=n.n(u),f=(n(48),n(20)),v=n(23),j=n.n(v),b=n(0);var p=function(e){var t=e.title,n=e.fetchUrl,a=(e.isLargeRow,Object(c.useState)([])),i=Object(d.a)(a,2),o=i[0],r=i[1],u=Object(c.useState)(""),v=Object(d.a)(u,2),p=v[0],m=v[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://api.themoviedb.org/3".concat(n));case 2:return t=e.sent,r(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("h2",{children:t}),Object(b.jsx)("div",{className:"row__posters",children:o.map((function(e){return Object(b.jsx)("img",{onClick:function(){return function(e){p?m(""):j()((null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);m(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},className:"row__poster",src:"".concat("https://image.tmdb.org/t/p/original").concat(e.poster_path),alt:e.name},e.id)}))}),Object(b.jsx)("div",{className:"row__trailer",children:p&&Object(b.jsx)(f.a,{videoId:p,opts:{height:"480p",width:"640px",playerVars:{autoplay:1}}})})]})},m="f0510b82d72173d6e36a8f41b6244126",g={fetchTrending:"/trending/all/week?api_key=".concat(m,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(m,"&with_network=123"),fetchTopRated:"/movie/top_rated?api_key=".concat(m,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(m,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(m,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(m,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(m,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(m,"&with_genres=99")};n(71);var O=function(){var e=Object(c.useState)({}),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://api.themoviedb.org/3".concat(g.fetchNetflixOriginals));case 2:return t=e.sent,a(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(n),Object(b.jsxs)("header",{className:"banner",style:{backgroundImage:'url(\n        "https://image.tmdb.org/t/p/original/'.concat(null===n||void 0===n?void 0:n.backdrop_path,'"\n        )')},children:[Object(b.jsxs)("div",{className:"banner_contents",children:[Object(b.jsx)("h1",{className:"banner_title",children:(null===n||void 0===n?void 0:n.title)||(null===n||void 0===n?void 0:n.name)||(null===n||void 0===n?void 0:n.original_name)}),Object(b.jsxs)("div",{className:"banner_buttons",children:[Object(b.jsx)("button",{className:"banner_button",children:"Play"}),Object(b.jsx)("button",{className:"banner_button",children:"My List"})]}),Object(b.jsx)("h1",{className:"banner_description",children:null===n||void 0===n?void 0:n.overview})]}),Object(b.jsx)("div",{className:"banner--fadeBottom"})]})};n(72);var x=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?a(!0):a(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(b.jsx)("div",{className:"nav",children:Object(b.jsxs)("div",{className:"nav ".concat(n&&"nav_black"),children:[Object(b.jsx)("img",{className:"nav_logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png",alt:"Netflix Logo"}),Object(b.jsx)("img",{className:"nav_avatar",src:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png",alt:"Netflix Logo"})]})})};var _=function(){return Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)(x,{}),Object(b.jsx)(O,{}),Object(b.jsx)(p,{title:"Netflix - Originals",fetchUrl:g.fetchNetflixOriginals,isLargeRow:!0}),Object(b.jsx)(p,{title:"Trending Now",fetchUrl:g.fetchTrending}),Object(b.jsx)(p,{title:"Top Rated",fetchUrl:g.fetchTopRated}),Object(b.jsx)(p,{title:"Action Movies",fetchUrl:g.fetchActionMovies}),Object(b.jsx)(p,{title:"Comedy Movies",fetchUrl:g.fetchComedyMovies}),Object(b.jsx)(p,{title:"Horror Movies",fetchUrl:g.fetchHorrorMovies}),Object(b.jsx)(p,{title:"Romance Movies",fetchUrl:g.fetchRomanceMovies}),Object(b.jsx)(p,{title:"Documentaries",fetchUrl:g.fetchDocumentaries})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))};o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(_,{})}),document.getElementById("root")),w()}},[[73,1,2]]]);
//# sourceMappingURL=main.88ad986d.chunk.js.map