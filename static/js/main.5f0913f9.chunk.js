(this["webpackJsonpnetflix-react-clone"]=this["webpackJsonpnetflix-react-clone"]||[]).push([[0],{40:function(e,t,c){},41:function(e,t,c){},60:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),i=c(30),a=c.n(i),r=(c(40),c(41),c(9)),j=c.n(r),o=c(13),l=c(10),d=c(14),h=c.n(d),b=(c(60),c(31)),x=c(34),O=c.n(x),A=c(0);var u=function(e){var t=e.title,c=e.fetchUrl,n=(e.isLargeRow,Object(s.useState)([])),i=Object(l.a)(n,2),a=i[0],r=i[1],d=Object(s.useState)(""),x=Object(l.a)(d,2),u=x[0],f=x[1];return Object(s.useEffect)((function(){function e(){return(e=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://api.themoviedb.org/3".concat(c));case 2:return t=e.sent,r(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),Object(A.jsxs)("div",{className:"row",children:[Object(A.jsx)("h2",{children:t}),Object(A.jsx)("div",{className:"row__posters",children:a.map((function(e){return Object(A.jsx)("img",{onClick:function(){return function(e){u?f(""):O()((null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);f(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},className:"row__poster",src:"".concat("https://image.tmdb.org/t/p/original").concat(e.poster_path),alt:e.name},e.id)}))}),Object(A.jsx)("div",{className:"row__trailer",children:u&&Object(A.jsx)(b.a,{videoId:u,opts:{height:"480p",width:"640px",playerVars:{autoplay:1}}})})]})},f="f0510b82d72173d6e36a8f41b6244126",m={fetchTrending:"/trending/all/week?api_key=".concat(f,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(f,"&with_network=123"),fetchTopRated:"/movie/top_rated?api_key=".concat(f,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(f,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(f,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(f,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(f,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(f,"&with_genres=99")};c(83);var p=function(){var e=Object(s.useState)({}),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){function e(){return(e=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://api.themoviedb.org/3".concat(m.fetchNetflixOriginals));case 2:return t=e.sent,n(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(c),Object(A.jsxs)("header",{className:"banner",style:{backgroundImage:'url(\n        "https://image.tmdb.org/t/p/original/'.concat(null===c||void 0===c?void 0:c.backdrop_path,'"\n        )')},children:[Object(A.jsxs)("div",{className:"banner_contents",children:[Object(A.jsx)("h1",{className:"banner_title",children:(null===c||void 0===c?void 0:c.title)||(null===c||void 0===c?void 0:c.name)||(null===c||void 0===c?void 0:c.original_name)}),Object(A.jsxs)("div",{className:"banner_buttons",children:[Object(A.jsx)("button",{className:"banner_button",children:"Play"}),Object(A.jsx)("button",{className:"banner_button",children:"My List"})]}),Object(A.jsx)("h1",{className:"banner_description",children:null===c||void 0===c?void 0:c.overview})]}),Object(A.jsx)("div",{className:"banner--fadeBottom"})]})};c(84);var v=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?n(!0):n(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(A.jsx)("div",{className:"nav",children:Object(A.jsxs)("div",{className:"nav ".concat(c&&"nav_black"),children:[Object(A.jsx)("img",{className:"nav_logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png",alt:"Netflix Logo"}),Object(A.jsx)("img",{className:"nav_avatar",src:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png",alt:"Netflix Logo"})]})})};c(85);var g=function(){return Object(A.jsxs)("div",{className:"homepage",children:[Object(A.jsx)(v,{}),Object(A.jsx)(p,{}),Object(A.jsx)(u,{title:"Netflix - Originals",fetchUrl:m.fetchNetflixOriginals,isLargeRow:!0}),Object(A.jsx)(u,{title:"Trending Now",fetchUrl:m.fetchTrending}),Object(A.jsx)(u,{title:"Top Rated",fetchUrl:m.fetchTopRated}),Object(A.jsx)(u,{title:"Action Movies",fetchUrl:m.fetchActionMovies}),Object(A.jsx)(u,{title:"Comedy Movies",fetchUrl:m.fetchComedyMovies}),Object(A.jsx)(u,{title:"Horror Movies",fetchUrl:m.fetchHorrorMovies}),Object(A.jsx)(u,{title:"Romance Movies",fetchUrl:m.fetchRomanceMovies}),Object(A.jsx)(u,{title:"Documentaries",fetchUrl:m.fetchDocumentaries})]})},w=(c(86),c(12));var y=function(){return Object(A.jsxs)("div",{className:"login",children:[Object(A.jsx)("div",{className:"showcase",children:Object(A.jsxs)("div",{className:"showcase-container",children:[Object(A.jsxs)("div",{className:"showcase-container-header",children:[Object(A.jsx)(w.b,{to:"/",children:Object(A.jsx)("img",{src:"data:image/png;base64,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",alt:"logo",srcset:"",className:"showcase-container-header-logo"})}),Object(A.jsx)(w.b,{to:"/signin",children:Object(A.jsx)("button",{className:"showcase-container-header-btn",children:"Sign In"})})]}),Object(A.jsxs)("div",{className:"showcase-container-body",children:[Object(A.jsxs)("div",{className:"showcase-container-body-xl",children:[Object(A.jsx)("p",{children:"Unlimited movies, TV"}),Object(A.jsx)("p",{children:"shows and more."})]}),Object(A.jsx)("div",{className:"showcase-container-body-l",children:"Watch anywhere. Cancel anytime."}),Object(A.jsx)("div",{className:"showcase-container-body-m",children:"Ready to watch? Enter your email to create or restart your membership."}),Object(A.jsx)("div",{className:"showcase-container-body-getstarted",children:Object(A.jsxs)("form",{action:"submit",children:[Object(A.jsx)("input",{type:"email",className:"showcase-container-body-getstarted-email",placeholder:"Email address"}),Object(A.jsx)("input",{type:"button",value:"Get Started >",className:"showcase-container-body-getstarted-btn"})]})})]})]})}),Object(A.jsx)("hr",{}),Object(A.jsxs)("div",{className:"option",children:[Object(A.jsx)("div",{className:"option-cancelAnytime"}),Object(A.jsx)("div",{className:"option-watchAnywhere"}),Object(A.jsx)("div",{className:"option-choosePlan",children:Object(A.jsx)("div",{className:"option-choosePlan-table",children:Object(A.jsxs)("table",{className:"option-choosePlan-table-table",children:[Object(A.jsx)("thead",{children:Object(A.jsxs)("tr",{children:[Object(A.jsx)("th",{}),Object(A.jsx)("th",{children:"Basic"}),Object(A.jsx)("th",{children:"Standard"}),Object(A.jsx)("th",{children:"Premium"})]})}),Object(A.jsxs)("tbody",{children:[Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{children:"Monthly price after free month ends on 6/19/19"}),Object(A.jsx)("td",{children:"$8.99"}),Object(A.jsx)("td",{children:"$12.99"}),Object(A.jsx)("td",{children:"$15.99"})]}),Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{children:"HD Available"}),Object(A.jsx)("td",{children:Object(A.jsx)("i",{class:"fas fa-times"})}),Object(A.jsx)("td",{children:Object(A.jsx)("i",{class:"fas fa-check"})}),Object(A.jsx)("td",{children:Object(A.jsx)("i",{class:"fas fa-check"})})]}),Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{children:"Ultra HD Available"}),Object(A.jsx)("td",{children:Object(A.jsx)("i",{class:"fas fa-times"})}),Object(A.jsx)("td",{children:Object(A.jsx)("i",{class:"fas fa-times"})}),Object(A.jsx)("td",{children:Object(A.jsx)("i",{class:"fas fa-check"})})]}),Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{children:"Screens you can watch on at the same time"}),Object(A.jsx)("td",{children:"1"}),Object(A.jsx)("td",{children:"2"}),Object(A.jsx)("td",{children:"4"})]}),Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{children:"Watch on your laptop, TV, phone and tablet"}),Object(A.jsx)("td",{children:Object(A.jsx)("i",{class:"fas fa-check"})}),Object(A.jsx)("td",{children:Object(A.jsx)("i",{class:"fas fa-check"})}),Object(A.jsx)("td",{children:Object(A.jsx)("i",{class:"fas fa-check"})})]}),Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{children:"Unlimited movies and TV shows"}),Object(A.jsx)("td",{children:Object(A.jsx)("i",{class:"fas fa-check"})}),Object(A.jsx)("td",{children:Object(A.jsx)("i",{class:"fas fa-check"})}),Object(A.jsx)("td",{children:Object(A.jsx)("i",{class:"fas fa-check"})})]}),Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{children:"Cancel anytime"}),Object(A.jsx)("td",{children:Object(A.jsx)("i",{class:"fas fa-check"})}),Object(A.jsx)("td",{children:Object(A.jsx)("i",{class:"fas fa-check"})}),Object(A.jsx)("td",{children:Object(A.jsx)("i",{class:"fas fa-check"})})]}),Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{children:"First month free"}),Object(A.jsx)("td",{children:Object(A.jsx)("i",{class:"fas fa-check"})}),Object(A.jsx)("td",{children:Object(A.jsx)("i",{class:"fas fa-check"})}),Object(A.jsx)("td",{children:Object(A.jsx)("i",{class:"fas fa-check"})})]})]})]})})})]}),Object(A.jsx)("hr",{}),Object(A.jsx)("div",{className:"faq"})]})};c(90);var N=function(){return Object(A.jsxs)(n.a.Fragment,{children:[Object(A.jsx)("hr",{}),Object(A.jsxs)("div",{className:"footer",children:[Object(A.jsx)("div",{className:"footer-row",children:Object(A.jsx)("p",{children:"Questions? Call 1-866-579-7172"})}),Object(A.jsx)("div",{className:"footer-row",children:Object(A.jsxs)("table",{className:"footer-row-table",children:[Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{children:"FAQ"}),Object(A.jsx)("td",{children:"Help Centre"}),Object(A.jsx)("td",{children:"Account"}),Object(A.jsx)("td",{children:"Media Centre"})]}),Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{children:"Investor Relations"}),Object(A.jsx)("td",{children:"Jobs"}),Object(A.jsx)("td",{children:"Ways to Watch"}),Object(A.jsx)("td",{children:"Terns of Use"})]}),Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{children:"Privacy"}),Object(A.jsx)("td",{children:"Cookie Preferences"}),Object(A.jsx)("td",{children:"Corporate Information"}),Object(A.jsx)("td",{children:"Conatct Us"})]}),Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{children:"Speed Test"}),Object(A.jsx)("td",{children:"Legal Notices "}),Object(A.jsx)("td",{children:"Only on Netflix"}),Object(A.jsx)("td",{})]})]})})]})]})},I=c(2);var C=function(){return Object(A.jsx)(w.a,{children:Object(A.jsxs)("div",{className:"app",children:[Object(A.jsxs)(I.c,{children:[Object(A.jsxs)(I.a,{path:"/home",children:[Object(A.jsx)(g,{}),";"]}),Object(A.jsx)(I.a,{path:"/",children:Object(A.jsx)(y,{})})]}),Object(A.jsx)(N,{})]})})},Q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,92)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),i(e),a(e)}))};a.a.render(Object(A.jsx)(n.a.StrictMode,{children:Object(A.jsx)(C,{})}),document.getElementById("root")),Q()}},[[91,1,2]]]);
//# sourceMappingURL=main.5f0913f9.chunk.js.map