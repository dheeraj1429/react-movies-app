(this.webpackJsonpclone=this.webpackJsonpclone||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},102:function(e,t,c){},103:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(31),i=c.n(s),r=(c(44),c(45),c(2)),j=(c(46),c(0));var l=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("button",{className:"CustomButton",children:"Play Now"})})},o=c(11),b=c(19),d=c(7),u=c(13);c(48);var h=function(e){var t=e.poster_path,c=e.original_language,n=e.overview,a=e.popularity,s=e.title,i=e.vote_average;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(u.b,{to:{pathname:"/MoviesShowPage",AllDataCollection:{posterPath:t,originalLanguage:c,overview:n,popularity:a,title:s,voteAverage:i}},children:Object(j.jsx)("div",{className:"card",style:{backgroundImage:"url(https://image.tmdb.org/t/p/w1280".concat(t,")")}})})})};c(54);var O=function(e){return Object(j.jsx)("div",{className:"TvShowHeader",children:Object(j.jsx)("div",{className:"TvShowButton",children:Object(j.jsx)("p",{children:e.innerText})})})};c(55);var m=function(e){e.backdrop_path;var t=e.title,c=e.release_date,n=e.overview,a=e.poster_path;return Object(j.jsxs)("div",{className:"ContenueWatchingInnerCard",children:[Object(j.jsx)("div",{className:"ContenueWatchingImgDiv",style:{backgroundImage:"url(https://image.tmdb.org/t/p/w1280".concat(a,")")}}),Object(j.jsxs)("div",{className:"ContenueWatchingContentDiv",children:[Object(j.jsx)("h3",{children:t}),Object(j.jsx)("p",{children:c}),Object(j.jsx)("p",{children:n.slice(0,100)}),Object(j.jsx)("div",{className:"average"})]})]})},x=c(34),v=c.n(x),f=(c(74),["id"]),p=["id"];var g=function(e){var t=Object(n.useState)([]),c=Object(d.a)(t,2),a=c[0],s=c[1];Object(n.useEffect)((function(){v.a.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=".concat(e.num)).then((function(e){s(e.data.results),console.log(e)})).catch((function(e){return console.log(e)}))}),[]);var i=a.filter((function(e,t){return t<8})),r=a.filter((function(e,t){return t<5}));return Object(j.jsx)("div",{className:"TvShowDiv",children:Object(j.jsxs)("div",{className:"Container",children:[Object(j.jsx)(O,{innerText:e.title}),Object(j.jsx)("div",{className:"ContenueWatchingDivCard",children:r.map((function(e){var t=e.id,c=Object(b.a)(e,f);return Object(j.jsx)(m,Object(o.a)({},c),t)}))}),Object(j.jsx)(O,{innerText:e.subTitle}),Object(j.jsx)("div",{className:"TvShowInner",children:i.map((function(e){var t=e.id,c=Object(b.a)(e,p);return Object(j.jsx)(h,Object(o.a)({},c),t)}))})]})})};c(75);var N=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),c=t[0],a=t[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"BannerComponentDiv",children:[Object(j.jsx)("iframe",{src:"https://www.youtube.com/embed/1p8PuCShE4M?autoplay=1",className:c?"ShowVedio":""}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:c?"showBannerSection":"BannerIconDiv ",children:Object(j.jsx)("i",{class:"fas fa-play",onClick:function(){a(!0)}})})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"Line",children:Object(j.jsx)("h1",{children:"9.1"})}),Object(j.jsxs)("div",{className:"bannerSecondContent",children:[Object(j.jsx)("h1",{children:"6 DECEMBER 2020"}),Object(j.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"})]})]})]})})},C=c(14),T=c.n(C),S=c(35),y=c(12);c(77);var w=Object(r.f)((function(){var e,t,c=Object(n.useState)({email:""}),a=Object(d.a)(c,2),s=a[0],i=a[1],r=Object(n.useState)(!1),l=Object(d.a)(r,2),b=l[0],u=l[1],h=Object(n.useState)("Ready to watch? Enter your email to create or your membership."),O=Object(d.a)(h,2),m=O[0],x=O[1],v=s.email,f=function(){var e=Object(S.a)(T.a.mark((function e(t){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!v||!v.includes("@")){e.next=8;break}return e.next=4,fetch("https://react-movies-app-d6f01-default-rtdb.firebaseio.com/react-data.json",{method:"POST",body:JSON.stringify({User:s})});case 4:e.sent&&(i({email:""}),x("Thanks for purchasing pro membership !!!"),u(!0)),e.next=9;break;case 8:alert("please enter yout email");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"MemberShipBanner",children:Object(j.jsxs)("div",{className:"MemberShipInnerDiv",children:[Object(j.jsx)("h3",{children:m}),Object(j.jsx)("div",{className:"inputDiv",children:Object(j.jsxs)("form",{method:"POST",className:b?"hideInput":"",children:[Object(j.jsx)("input",{type:"email",placeholder:"Enter Adress",name:"email",value:s.email,onChange:function(c){e=c.target.name,t=c.target.value,i(Object(o.a)(Object(o.a)({},s),{},Object(y.a)({},e,t.toLowerCase())))}}),Object(j.jsx)("button",{type:"submit",className:"GetStart",onClick:f,children:"GET START"})]})})]})})}));c(78);var L=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"HomePageDiv",children:[Object(j.jsx)("div",{className:"bgDiv"}),Object(j.jsx)("div",{className:"HomePageContent",children:Object(j.jsx)("h1",{children:"SCOOTT PLGRIM US THE WORLD..."})}),Object(j.jsx)("div",{className:"spacer"}),Object(j.jsx)("div",{className:"buttonDiv",children:Object(j.jsx)(l,{})})]}),Object(j.jsx)(g,{num:3,title:"Continue Watching",subTitle:"Tv Show"}),Object(j.jsx)(N,{}),Object(j.jsx)(g,{num:3+Math.floor(6*Math.random()+1),title:"New Movies",subTitle:"Episode 1"}),Object(j.jsx)(g,{num:3+Math.floor(10*Math.random()+1),title:"Best of 2022",subTitle:"Movies"}),Object(j.jsx)(w,{})]})};c(79);var k=Object(r.f)((function(e){var t=e.history,c=e.match,a=Object(n.useState)(!1),s=Object(d.a)(a,2),i=s[0],r=s[1];return window.addEventListener("scroll",(function(e){var t=this.scrollY;r(t>=10)})),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:i?"Navbar active":"Navbar",children:Object(j.jsx)("div",{className:"Navbar-Containr",children:Object(j.jsxs)("div",{className:"Innner-Navbar",children:[Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"Logo"})}),Object(j.jsx)("div",{children:Object(j.jsxs)("ul",{children:[[{urlLink:"",id:1,innerText:"Home"}].map((function(e){return Object(j.jsx)("li",{onClick:function(){return t.push("".concat(c.url).concat(e.urlLink))},children:e.innerText},e.id)})),[{iconClass:"fas fa-search"},{iconClass:"fas fa-user"}].map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)("i",{className:e.iconClass})})}))]})})]})})})})}));c(80);var D=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"SideBar",children:Object(j.jsx)("div",{className:"iconDiv",children:[{iconsClass:"fab fa-facebook-f"},{iconsClass:"fab fa-instagram"},{iconsClass:"fab fa-twitter"},{iconsClass:"fab fa-linkedin-in"}].map((function(e){return Object(j.jsx)("div",{className:"iconInner",children:Object(j.jsx)("i",{className:e.iconsClass})})}))})})})},E=c(36),M=c(39),P=c.n(M);c(100);var I=function(e){var t=Object(n.useState)(""),c=Object(d.a)(t,2),a=(c[0],c[1]),s=Object(n.useState)(""),i=Object(d.a)(s,2),r=i[0],l=i[1],o=e.location.AllDataCollection.title;return Object(n.useEffect)((function(){P()(o).then((function(e){a(e);var t=new URLSearchParams(new URL(e).search);l(t.get("v"))}))}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"vedioPlayDiv",children:Object(j.jsx)(E.a,{videoId:r,opts:{playerVars:{autoplay:1}},className:"youtubeVedio"})})})};c(101);var F=function(){return Object(j.jsx)(j.Fragment,{})};c(102);var B=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"FooterDiv",children:Object(j.jsxs)("div",{className:"Links",children:[Object(j.jsxs)("uL",{children:[Object(j.jsx)("li",{className:"LinkTitle",children:"ABOUT US"}),Object(j.jsx)("li",{children:"Home"}),Object(j.jsx)("li",{children:"Tv Show"}),Object(j.jsx)("li",{children:"Movies"}),Object(j.jsx)("li",{children:"News & Popular"})]}),Object(j.jsxs)("uL",{children:[Object(j.jsx)("li",{className:"LinkTitle",children:"HELP CENTER"}),Object(j.jsx)("li",{children:"Jobs"}),Object(j.jsx)("li",{children:"Cookie Preferences"}),Object(j.jsx)("li",{children:"Legal"})]}),Object(j.jsxs)("uL",{children:[Object(j.jsx)("li",{className:"LinkTitle",children:"ACCOUNT"}),Object(j.jsx)("li",{children:"Wait & Watching"}),Object(j.jsx)("li",{children:"Only on my account"}),Object(j.jsx)("li",{children:"Tv Shows"})]}),Object(j.jsxs)("uL",{children:[Object(j.jsx)("li",{className:"LinkTitle",children:"MEDIA CENTER"}),Object(j.jsx)("li",{children:"Terms of us"}),Object(j.jsx)("li",{children:"Contact us"})]})]})})})},A=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(k,{}),Object(j.jsx)(D,{}),Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{exact:!0,path:"/",component:L}),Object(j.jsx)(r.a,{exact:!0,path:"/MoviesShowPage",component:I}),Object(j.jsx)(r.a,{exact:!0,path:"/MoviesProMember",component:F})]}),Object(j.jsx)(B,{})]})};var R=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(A,{})})},W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,104)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(u.a,{children:Object(j.jsx)(R,{})})}),document.getElementById("root")),W()},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},48:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){}},[[103,1,2]]]);
//# sourceMappingURL=main.762c1aee.chunk.js.map