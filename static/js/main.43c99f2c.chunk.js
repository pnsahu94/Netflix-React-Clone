(this["webpackJsonpnetflix-react-clone"]=this["webpackJsonpnetflix-react-clone"]||[]).push([[0],{44:function(e,t,c){},45:function(e,t,c){},64:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(34),a=c.n(i),o=(c(44),c(45),c(11)),r=c.n(o),l=c(17),j=c(13),d=c(18),h=c.n(d),b=(c(64),c(35)),x=c(38),O=c.n(x),m=c(0);var u=function(e){var t=e.title,c=e.fetchUrl,s=(e.isLargeRow,Object(n.useState)([])),i=Object(j.a)(s,2),a=i[0],o=i[1],d=Object(n.useState)(""),x=Object(j.a)(d,2),u=x[0],p=x[1];return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://api.themoviedb.org/3".concat(c));case 2:return t=e.sent,o(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("h2",{children:t}),Object(m.jsx)("div",{className:"row__posters",children:a.map((function(e){return Object(m.jsx)("img",{onClick:function(){return function(e){u?p(""):O()((null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);p(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},className:"row__poster",src:"".concat("https://image.tmdb.org/t/p/original").concat(e.poster_path),alt:e.name},e.id)}))}),Object(m.jsx)("div",{className:"row__trailer",children:u&&Object(m.jsx)(b.a,{videoId:u,opts:{height:"480p",width:"640px",playerVars:{autoplay:1}}})})]})},p="f0510b82d72173d6e36a8f41b6244126",A={fetchTrending:"/trending/all/week?api_key=".concat(p,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(p,"&with_network=123"),fetchTopRated:"/movie/top_rated?api_key=".concat(p,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(p,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(p,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(p,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(p,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(p,"&with_genres=99")};c(87);var f=function(){var e=Object(n.useState)({}),t=Object(j.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://api.themoviedb.org/3".concat(A.fetchNetflixOriginals));case 2:return t=e.sent,s(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(c),Object(m.jsxs)("header",{className:"banner",style:{backgroundImage:'url(\n        "https://image.tmdb.org/t/p/original/'.concat(null===c||void 0===c?void 0:c.backdrop_path,'"\n        )')},children:[Object(m.jsxs)("div",{className:"banner_contents",children:[Object(m.jsx)("h1",{className:"banner_title",children:(null===c||void 0===c?void 0:c.title)||(null===c||void 0===c?void 0:c.name)||(null===c||void 0===c?void 0:c.original_name)}),Object(m.jsxs)("div",{className:"banner_buttons",children:[Object(m.jsx)("button",{className:"banner_button",children:"Play"}),Object(m.jsx)("button",{className:"banner_button",children:"My List"})]}),Object(m.jsx)("h1",{className:"banner_description",children:null===c||void 0===c?void 0:c.overview})]}),Object(m.jsx)("div",{className:"banner--fadeBottom"})]})};c(88);var w=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?s(!0):s(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(m.jsx)("div",{className:"nav",children:Object(m.jsxs)("div",{className:"nav ".concat(c&&"nav_black"),children:[Object(m.jsx)("img",{className:"nav_logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png",alt:"Netflix Logo"}),Object(m.jsx)("img",{className:"nav_avatar",src:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png",alt:"Netflix Logo"})]})})};c(89);var v=function(){return Object(m.jsxs)("div",{className:"homepage",children:[Object(m.jsx)(w,{}),Object(m.jsx)(f,{}),Object(m.jsx)(u,{title:"Netflix - Originals",fetchUrl:A.fetchNetflixOriginals,isLargeRow:!0}),Object(m.jsx)(u,{title:"Trending Now",fetchUrl:A.fetchTrending}),Object(m.jsx)(u,{title:"Top Rated",fetchUrl:A.fetchTopRated}),Object(m.jsx)(u,{title:"Action Movies",fetchUrl:A.fetchActionMovies}),Object(m.jsx)(u,{title:"Comedy Movies",fetchUrl:A.fetchComedyMovies}),Object(m.jsx)(u,{title:"Horror Movies",fetchUrl:A.fetchHorrorMovies}),Object(m.jsx)(u,{title:"Romance Movies",fetchUrl:A.fetchRomanceMovies}),Object(m.jsx)(u,{title:"Documentaries",fetchUrl:A.fetchDocumentaries})]})},g=(c(90),"data:image/png;base64,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"),y=c.p+"static/media/cancel-anytime.725d9bff.png",N=c.p+"static/media/watch-anywhere-1.1759b88a.png",C=c.p+"static/media/watch-anywhere-2.a4a82af1.png",I=c.p+"static/media/watch-anywhere-3.55b6f6b4.png",T=c(12),E=c(4),Q=c(3);var B=function(){var e=function(){};return Object(m.jsxs)("div",{className:"login",children:[Object(m.jsx)("div",{className:"showcase",children:Object(m.jsxs)("div",{className:"showcase-container",children:[Object(m.jsxs)("div",{className:"showcase-container-header",children:[Object(m.jsx)(T.b,{to:"/",children:Object(m.jsx)("img",{src:g,alt:"logo",srcset:"",className:"showcase-container-header-logo"})}),Object(m.jsx)(T.b,{to:"/signin",children:Object(m.jsx)("button",{className:"showcase-container-header-btn",children:"Sign In"})})]}),Object(m.jsxs)("div",{className:"showcase-container-body",children:[Object(m.jsxs)("div",{className:"showcase-container-body-xl",children:[Object(m.jsx)("p",{children:"Unlimited movies, TV"}),Object(m.jsx)("p",{children:"shows and more."})]}),Object(m.jsx)("div",{className:"showcase-container-body-l",children:"Watch anywhere. Cancel anytime."}),Object(m.jsx)("div",{className:"showcase-container-body-m",children:"Ready to watch? Enter your email to create or restart your membership."}),Object(m.jsx)("div",{className:"showcase-container-body-getstarted",children:Object(m.jsxs)("form",{action:"submit",children:[Object(m.jsx)("input",{type:"email",className:"showcase-container-body-getstarted-email",placeholder:"Email address"}),Object(m.jsx)("input",{type:"button",value:"Get Started >",className:"showcase-container-body-getstarted-btn"})]})})]})]})}),Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{className:"option",children:[Object(m.jsxs)("div",{className:"option-cancelAnytime",children:[Object(m.jsxs)("div",{className:"option-cancelAnytime-left",children:[Object(m.jsx)("p",{children:"If you decide Netflix isn't for you - no problem. No commitment. Cancel online anytime."}),Object(m.jsx)("div",{class:"option-cancelAnytime-left-btn",children:"WATCH FREE FOR 30 DAYS"})]}),Object(m.jsx)("div",{className:"option-cancelAnytime-right",children:Object(m.jsx)("img",{src:y,alt:"cancel anytime",srcset:""})})]}),Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{className:"option-watchAnywhere",children:[Object(m.jsxs)("div",{className:"option-watchAnywhere-top",children:[Object(m.jsx)("p",{children:"Watch TV shows and movies anytime, anywhere \u2014 personalized for you."}),Object(m.jsx)("div",{class:"option-watchAnywhere-top-btn",children:"WATCH FREE FOR 30 DAYS"})]}),Object(m.jsxs)("div",{className:"option-watchAnywhere-bottom",children:[Object(m.jsxs)("div",{className:"option-watchAnywhere-bottom-col",children:[Object(m.jsx)("img",{src:N,alt:"",srcset:""}),Object(m.jsx)("div",{className:"option-watchAnywhere-bottom-col-title",children:Object(m.jsx)("p",{children:"Watch on your TV"})}),Object(m.jsx)("div",{className:"option-watchAnywhere-bottom-col-description",children:Object(m.jsx)("p",{children:"Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."})})]}),Object(m.jsxs)("div",{className:"option-watchAnywhere-bottom-col",children:[Object(m.jsx)("img",{src:C,alt:"",srcset:""}),Object(m.jsx)("div",{className:"option-watchAnywhere-bottom-col-title",children:Object(m.jsx)("p",{children:"Watch instantly or download for later"})}),Object(m.jsx)("div",{className:"option-watchAnywhere-bottom-col-description",children:Object(m.jsx)("p",{children:"Available on phone and tablet, wherever you go."})})]}),Object(m.jsxs)("div",{className:"option-watchAnywhere-bottom-col",children:[Object(m.jsx)("img",{src:I,alt:"",srcset:""}),Object(m.jsx)("div",{className:"option-watchAnywhere-bottom-col-title",children:Object(m.jsx)("p",{children:"Use any computer"})}),Object(m.jsx)("div",{className:"option-watchAnywhere-bottom-col-description",children:Object(m.jsx)("p",{children:"Watch right on Netflix.com."})})]})]})]}),Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{className:"option-choosePlan",children:[Object(m.jsxs)("div",{class:"option-choosePlan-context",children:[Object(m.jsx)("p",{children:"Choose one plan and watch everything on Netflix."}),Object(m.jsx)("div",{class:"option-choosePlan-context-btn",children:"WATCH FREE FOR 30 DAYS"})]}),Object(m.jsx)("div",{className:"option-choosePlan-table",children:Object(m.jsxs)("table",{className:"option-choosePlan-table-table",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{}),Object(m.jsx)("th",{children:"Basic"}),Object(m.jsx)("th",{children:"Standard"}),Object(m.jsx)("th",{children:"Premium"})]})}),Object(m.jsxs)("tbody",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Monthly price after free month ends on 6/19/19"}),Object(m.jsx)("td",{children:"$8.99"}),Object(m.jsx)("td",{children:"$12.99"}),Object(m.jsx)("td",{children:"$15.99"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"HD Available"}),Object(m.jsx)("td",{children:Object(m.jsx)(E.a,{icon:Q.c})}),Object(m.jsx)("td",{children:Object(m.jsx)(E.a,{icon:Q.a})}),Object(m.jsx)("td",{children:Object(m.jsx)(E.a,{icon:Q.a})})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Ultra HD Available"}),Object(m.jsx)("td",{children:Object(m.jsx)(E.a,{icon:Q.c})}),Object(m.jsx)("td",{children:Object(m.jsx)(E.a,{icon:Q.c})}),Object(m.jsx)("td",{children:Object(m.jsx)(E.a,{icon:Q.a})})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Screens you can watch on at the same time"}),Object(m.jsx)("td",{children:"1"}),Object(m.jsx)("td",{children:"2"}),Object(m.jsx)("td",{children:"4"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Watch on your laptop, TV, phone and tablet"}),Object(m.jsx)("td",{children:Object(m.jsx)(E.a,{icon:Q.a})}),Object(m.jsx)("td",{children:Object(m.jsx)(E.a,{icon:Q.a})}),Object(m.jsx)("td",{children:Object(m.jsx)(E.a,{icon:Q.a})})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Unlimited movies and TV shows"}),Object(m.jsx)("td",{children:Object(m.jsx)(E.a,{icon:Q.a})}),Object(m.jsx)("td",{children:Object(m.jsx)(E.a,{icon:Q.a})}),Object(m.jsx)("td",{children:Object(m.jsx)(E.a,{icon:Q.a})})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Cancel anytime"}),Object(m.jsx)("td",{children:Object(m.jsx)(E.a,{icon:Q.a})}),Object(m.jsx)("td",{children:Object(m.jsx)(E.a,{icon:Q.a})}),Object(m.jsx)("td",{children:Object(m.jsx)(E.a,{icon:Q.a})})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"First month free"}),Object(m.jsx)("td",{children:Object(m.jsx)(E.a,{icon:Q.a})}),Object(m.jsx)("td",{children:Object(m.jsx)(E.a,{icon:Q.a})}),Object(m.jsx)("td",{children:Object(m.jsx)(E.a,{icon:Q.a})})]})]})]})})]}),Object(m.jsx)("hr",{})]}),Object(m.jsxs)("div",{className:"faq",children:[Object(m.jsx)("div",{className:"faq-title",children:"Frequently Asked Questions"}),Object(m.jsxs)("div",{className:"faq-content",children:[Object(m.jsxs)("div",{className:"faq-content-question",children:[Object(m.jsxs)("div",{className:"faq-content-question-question",onClick:e,children:[Object(m.jsx)("p",{children:"What is Netflix ?"}),Object(m.jsx)(E.a,{icon:Q.b})]}),Object(m.jsxs)("div",{className:"faq-content-question-answer",children:[Object(m.jsx)("p",{children:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more \u2013 on thousands of internet-connected devices."}),Object(m.jsx)("p",{children:"You can watch as much as you want, whenever you want, without a single ad \u2013 all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"})]})]}),Object(m.jsxs)("div",{className:"faq-content-question",children:[Object(m.jsxs)("div",{className:"faq-content-question-question",onClick:e,children:[Object(m.jsx)("p",{children:"How much does Netflix cost ?"}),Object(m.jsx)(E.a,{icon:Q.b})]}),Object(m.jsx)("div",{className:"faq-content-question-answer",children:Object(m.jsx)("p",{children:"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from \u20b9 199 to \u20b9 799 a month. No extra costs, no contracts."})})]}),Object(m.jsxs)("div",{className:"faq-content-question",children:[Object(m.jsxs)("div",{className:"faq-content-question-question",onClick:e,children:[Object(m.jsx)("p",{children:"Where can I watch ?"}),Object(m.jsx)(E.a,{icon:Q.b})]}),Object(m.jsxs)("div",{className:"faq-content-question-answer",children:[Object(m.jsx)("p",{children:"Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."}),Object(m.jsx)("p",{children:"You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."})]})]}),Object(m.jsxs)("div",{className:"faq-content-question",children:[Object(m.jsxs)("div",{className:"faq-content-question-question",onClick:e,children:[Object(m.jsx)("p",{children:"How do I cancel ?"}),Object(m.jsx)(E.a,{icon:Q.b})]}),Object(m.jsx)("div",{className:"faq-content-question-answer",children:Object(m.jsx)("p",{children:"Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees \u2013 start or stop your account anytime."})})]}),Object(m.jsxs)("div",{className:"faq-content-question",children:[Object(m.jsxs)("div",{className:"faq-content-question-question",onClick:e,children:[Object(m.jsx)("p",{children:"What can I watch on Netflix ?"}),Object(m.jsx)(E.a,{icon:Q.b})]}),Object(m.jsx)("div",{className:"faq-content-question-answer",children:Object(m.jsx)("p",{children:"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."})})]}),Object(m.jsxs)("div",{className:"faq-content-question",children:[Object(m.jsxs)("div",{className:"faq-content-question-question",onClick:e,children:[Object(m.jsx)("p",{children:"Is Netflix good for kids ?"}),Object(m.jsx)(E.a,{icon:Q.b})]}),Object(m.jsxs)("div",{className:"faq-content-question-answer",children:[Object(m.jsx)("p",{children:"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space."}),Object(m.jsx)("p",{children:"Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don\u2019t want kids to see."})]})]})]})]})]})};c(95);var k=function(){return Object(m.jsxs)(s.a.Fragment,{children:[Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{className:"footer",children:[Object(m.jsx)("div",{className:"footer-row",children:Object(m.jsx)("p",{children:"Questions? Call 1-866-579-7172"})}),Object(m.jsx)("div",{className:"footer-row",children:Object(m.jsxs)("table",{className:"footer-row-table",children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"FAQ"}),Object(m.jsx)("td",{children:"Help Centre"}),Object(m.jsx)("td",{children:"Account"}),Object(m.jsx)("td",{children:"Media Centre"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Investor Relations"}),Object(m.jsx)("td",{children:"Jobs"}),Object(m.jsx)("td",{children:"Ways to Watch"}),Object(m.jsx)("td",{children:"Terns of Use"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Privacy"}),Object(m.jsx)("td",{children:"Cookie Preferences"}),Object(m.jsx)("td",{children:"Corporate Information"}),Object(m.jsx)("td",{children:"Conatct Us"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Speed Test"}),Object(m.jsx)("td",{children:"Legal Notices "}),Object(m.jsx)("td",{children:"Only on Netflix"}),Object(m.jsx)("td",{})]})]})})]})]})};c(96);var q=function(){return Object(m.jsx)("div",{className:"signin",children:Object(m.jsxs)("div",{className:"signin-container",children:[Object(m.jsx)("div",{className:"signin-container-header",children:Object(m.jsx)(T.b,{to:"/",children:Object(m.jsx)("img",{src:g,alt:"logo",srcset:"",className:"signin-container-header-logo"})})}),Object(m.jsxs)("div",{className:"signin-container-signin",children:[Object(m.jsx)("h1",{children:"Sign In"}),Object(m.jsxs)("form",{children:[Object(m.jsx)("h5",{children:"Email Address"}),Object(m.jsx)("input",{type:"email",name:"",id:""}),Object(m.jsx)("h5",{children:"Password"}),Object(m.jsx)("input",{type:"password",name:"",id:""}),Object(m.jsx)("button",{type:"submit",className:"signin-container-signin-signInButton",children:"Sign In"})]}),Object(m.jsx)("p",{children:"By signing-in you agree to the NETFLIX CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."}),Object(m.jsx)("button",{className:"signin-container-signin-registerButton",children:"Create your Netflix Account"})]})]})})},G=c(5);var H=function(){return Object(m.jsx)(T.a,{children:Object(m.jsxs)("div",{className:"app",children:[Object(m.jsxs)(G.c,{children:[Object(m.jsx)(G.a,{path:"/home",children:Object(m.jsx)(v,{})}),Object(m.jsx)(G.a,{path:"/signin",children:Object(m.jsx)(q,{})}),Object(m.jsx)(G.a,{path:"/",children:Object(m.jsx)(B,{})})]}),Object(m.jsx)(k,{})]})})},Y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,98)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};a.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(H,{})}),document.getElementById("root")),Y()}},[[97,1,2]]]);
//# sourceMappingURL=main.43c99f2c.chunk.js.map