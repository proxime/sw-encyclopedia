(this["webpackJsonpzadanie-rekrutacyjne"]=this["webpackJsonpzadanie-rekrutacyjne"]||[]).push([[0],{18:function(e,t,a){},47:function(e,t,a){},51:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),s=a.n(n),r=a(19),i=a.n(r),l=a(9),j=a(6),o=a(4),u=a.n(o),b=a(11),h="GET_USER",p="LOGOUT",d="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",O={id:1,username:"user",country:"Poland"},x=function(e){return new Promise((function(t,a){setTimeout((function(){e===d?t(O):a(new TypeError("Invalid token."))}),200)}))},m=function(){return localStorage.removeItem("sw-auth-token"),{type:p}},A=function(){return function(){var e=Object(b.a)(u.a.mark((function e(t){var a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=localStorage.getItem("sw-auth-token")){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,x(a);case 6:c=e.sent,t({type:h,payload:c}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),t(m());case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},f=function(){return function(){var e=Object(b.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e){setTimeout((function(){e(d)}),200)}));case 3:a=e.sent,localStorage.setItem("sw-auth-token",a),t(A()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},v=(a(47),function(){var e=Object(j.c)((function(e){return e.user})).user,t=Object(j.b)();return Object(c.jsx)("nav",{className:"navbar",children:Object(c.jsxs)("div",{className:"navbar__content",children:[Object(c.jsx)("h2",{className:"navbar__title",children:"Star Wars Encyclopedia"}),Object(c.jsx)("button",{type:"button",className:"navbar__button",onClick:function(){t(e?m():f())},children:e?"Sign Out":"Sign In"})]})})}),g=a(5),C=a(10),k=a(34),w=function(e){var t=e.component,a=Object(k.a)(e,["component"]),n=Object(j.c)((function(e){return e.user})).user;return Object(c.jsx)(g.b,Object(C.a)(Object(C.a)({},a),{},{render:function(e){return n?Object(c.jsx)(t,Object(C.a)({},e)):Object(c.jsx)(g.a,{to:{pathname:"/",state:{from:e.location}}})}}))},y=a(7),E=a(33),I="GET_ENCYCLOPEDIA_DATA",N="SET_ENCYCLOPEDIA_REQUEST",B="SET_ENCYCLOPEDIA_ERROR",S=function(){var e=Object(b.a)(u.a.mark((function e(t){var a,c,n,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,a=1,n=[];case 3:return e.next=5,fetch("".concat(t,"?page=").concat(a),{method:"GET"});case 5:return s=e.sent,e.next=8,s.json();case 8:c=e.sent,n.push.apply(n,Object(E.a)(c.results)),a+=1;case 11:if(c.next){e.next=3;break}case 12:return e.abrupt("return",n);case 15:throw e.prev=15,e.t0=e.catch(0),new Error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),Q=(a(51),function(){return Object(c.jsx)("header",{className:"header",children:Object(c.jsxs)("h1",{className:"header__content",children:[Object(c.jsx)("p",{children:"\u201cMay the force"}),Object(c.jsx)("p",{children:"be with you\u201d"})]})})}),M=function(e){var t=e.title,a=e.image,n=e.customClass,s=e.active,r=e.setActive;return Object(c.jsxs)("div",{role:"switch",className:"homepage__select homepage__select--".concat(n," ").concat(s?"active":""),onClick:r,"aria-checked":s,children:[Object(c.jsx)("div",{className:"homepage__select-iamge",children:Object(c.jsx)("img",{src:a,alt:""})}),Object(c.jsx)("h4",{className:"homepage__select-title",children:t})]})},_=a(30),D=a.n(_),H=function(){return Object(c.jsx)("div",{className:"spinner",children:Object(c.jsx)(D.a,{type:"Oval",color:"#ffffff",height:100,width:100})})},U=(a(71),function(e){var t=e.onSubmit,a=Object(n.useState)(""),s=Object(y.a)(a,2),r=s[0],i=s[1];return Object(c.jsx)("div",{className:"search",children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(r)},children:[Object(c.jsx)("input",{type:"text",value:r,onChange:function(e){i(e.target.value)},name:"search",placeholder:"Search by name"}),Object(c.jsx)("button",{type:"submit",children:Object(c.jsx)("img",{src:"data:image/png;base64,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",alt:""})})]})})}),T=function(e){var t=e.name,a=e.children,n=e.type;return Object(c.jsxs)("div",{className:"homepage__card",children:[Object(c.jsx)("h3",{className:"homepage__card-name",children:t}),Object(c.jsxs)("div",{className:"homepage__card-content",children:[a,Object(c.jsx)(l.b,{to:"".concat(n,"/").concat(t),children:"More details"})]})]})},R=(a(72),a.p+"static/media/character.675ed94a.png"),F=a.p+"static/media/planet.d4026d77.png",G=a.p+"static/media/species.19d80948.png",X=a.p+"static/media/starship.87afd21b.png",Y=function(){var e=Object(n.useState)("characters"),t=Object(y.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)(""),i=Object(y.a)(r,2),l=i[0],o=i[1],h=Object(n.useState)([]),p=Object(y.a)(h,2),d=p[0],O=p[1],x=Object(j.c)((function(e){return e.user})).user,m=Object(j.c)((function(e){return e.encyclopedia})),A=Object(j.b)(),v=Object(g.h)(),C=Object(g.g)(),k=Object(n.useCallback)((function(){O(m[a])}),[O,m,a]),w=function(e){switch(a){case"characters":return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("p",{className:"homepage__card-text",children:[Object(c.jsx)("span",{children:"Gender:"})," ",e.gender]}),Object(c.jsxs)("p",{className:"homepage__card-text",children:[Object(c.jsx)("span",{children:"Height:"})," ",e.height]})]});case"planets":return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("p",{className:"homepage__card-text",children:[Object(c.jsx)("span",{children:"Climate:"})," ",e.climate]}),Object(c.jsxs)("p",{className:"homepage__card-text",children:[Object(c.jsx)("span",{children:"Population:"})," ",e.population]})]});case"species":return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("p",{className:"homepage__card-text",children:[Object(c.jsx)("span",{children:"Classification:"})," ",e.classification]}),Object(c.jsxs)("p",{className:"homepage__card-text",children:[Object(c.jsx)("span",{children:"Language:"})," ",e.language]})]});case"starships":return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("p",{className:"homepage__card-text",children:[Object(c.jsx)("span",{children:"Model:"})," ",e.model]}),Object(c.jsxs)("p",{className:"homepage__card-text",children:[Object(c.jsx)("span",{children:"Hyperdrive rating:"})," ",e.hyperdrive_rating]})]});default:return Object(c.jsx)(c.Fragment,{})}};Object(n.useEffect)((function(){x&&!m.fetched&&A(function(){var e=Object(b.a)(u.a.mark((function e(t){var a,c,n,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:N,payload:!0}),e.prev=1,e.next=4,S("https://swapi.dev/api/people");case 4:return a=e.sent,e.next=7,S("https://swapi.dev/api/planets");case 7:return c=e.sent,e.next=10,S("https://swapi.dev/api/species");case 10:return n=e.sent,e.next=13,S("https://swapi.dev/api/starships");case 13:s=e.sent,t({type:I,payload:{planets:c,characters:a,species:n,starships:s}}),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(1),console.error(e.t0),t({type:B,payload:!0});case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}())}),[A,x,m.fetched]),Object(n.useEffect)((function(){k()}),[k]),Object(n.useEffect)((function(){var e,t;x&&(null===(e=v.state)||void 0===e||null===(t=e.from)||void 0===t?void 0:t.pathname)&&C.push(v.state.from.pathname)}),[x,v,C]);var E=null===d||void 0===d?void 0:d.filter((function(e){return e.name.toLowerCase().search(l.toLowerCase())>-1}));return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(Q,{}),Object(c.jsxs)("main",{className:"main",children:[Object(c.jsx)("div",{className:"main__background"}),Object(c.jsx)("section",{className:"homepage",children:x?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"homepage__select-conainer",children:[Object(c.jsx)(M,{title:"Characters",image:R,customClass:"characters",active:"characters"===a,setActive:function(){return s("characters")}}),Object(c.jsx)(M,{title:"Planets",image:F,customClass:"planets",active:"planets"===a,setActive:function(){return s("planets")}}),Object(c.jsx)(M,{title:"Species",image:G,customClass:"species",active:"species"===a,setActive:function(){return s("species")}}),Object(c.jsx)(M,{title:"Starships",image:X,customClass:"starships",active:"starships"===a,setActive:function(){return s("starships")}})]}),Object(c.jsx)(U,{onSubmit:function(e){o(e)}}),m.loading?Object(c.jsx)(H,{}):Object(c.jsx)("section",{className:"homepage__cards",children:E&&E.length>0?null===E||void 0===E?void 0:E.map((function(e){return Object(c.jsx)(T,{name:e.name,type:a,children:w(e)},e.name)})):Object(c.jsx)("h3",{className:"homepage__cards-empty",children:"No search results"})})]}):Object(c.jsxs)("div",{className:"homepage__login",children:[Object(c.jsx)("h4",{className:"homepage__login-text",children:"Sign in to unlock encyclopedia content"}),Object(c.jsx)("button",{type:"button",className:"homepage__login-button",onClick:function(){A(f())},children:"Sign in"})]})})]})]})},J=function(e){var t=e.title,a=e.value;return Object(c.jsxs)("div",{className:"details__element",children:[Object(c.jsx)("span",{children:t}),a]})},K=(a(18),function(){var e=Object(n.useState)(null),t=Object(y.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)(""),i=Object(y.a)(r,2),o=i[0],h=i[1],p=Object(j.c)((function(e){return e.encyclopedia})).characters,d=Object(g.i)(),O=Object(g.g)(),x=Object(n.useCallback)(function(){var e=Object(b.a)(u.a.mark((function e(t){var a,c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=null===p||void 0===p?void 0:p.find((function(e){return e.name===t})))){e.next=4;break}return s(a),e.abrupt("return");case 4:return e.prev=4,e.next=7,fetch("https://swapi.dev/api/people?search=".concat(t),{method:"GET"});case 7:return c=e.sent,e.next=10,c.json();case 10:if(0!==(n=e.sent).results.length){e.next=14;break}return O.push("/"),e.abrupt("return");case 14:s(n.results[0]),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(4),O.push("/");case 20:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[p,O]);return Object(n.useEffect)((function(){x(d.name),h(d.name)}),[d.name,x]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(Q,{}),Object(c.jsxs)("main",{className:"main",children:[Object(c.jsx)("div",{className:"main__background"}),Object(c.jsxs)("section",{className:"details",children:[Object(c.jsxs)("div",{className:"details__path",children:[Object(c.jsx)(l.b,{to:"/",children:"Home"})," / ",Object(c.jsx)("span",{children:"Characters"})," /"," ",Object(c.jsx)("span",{children:o})]}),a&&Object(c.jsxs)("div",{className:"details__content",children:[Object(c.jsx)(J,{title:"Name:",value:a.name}),Object(c.jsx)(J,{title:"Height:",value:a.height}),Object(c.jsx)(J,{title:"Hair color:",value:a.hair_color}),Object(c.jsx)(J,{title:"Skin color:",value:a.skin_color}),Object(c.jsx)(J,{title:"Eye color:",value:a.eye_color}),Object(c.jsx)(J,{title:"Birth year:",value:a.birth_year}),Object(c.jsx)(J,{title:"Gender:",value:a.gender}),Object(c.jsx)(J,{title:"Number of films:",value:a.films.length.toString()})]})]})]})]})}),W=function(){var e=Object(n.useState)(null),t=Object(y.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)(""),i=Object(y.a)(r,2),o=i[0],h=i[1],p=Object(j.c)((function(e){return e.encyclopedia})).planets,d=Object(g.i)(),O=Object(g.g)(),x=Object(n.useCallback)(function(){var e=Object(b.a)(u.a.mark((function e(t){var a,c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=null===p||void 0===p?void 0:p.find((function(e){return e.name===t})))){e.next=4;break}return s(a),e.abrupt("return");case 4:return e.prev=4,e.next=7,fetch("https://swapi.dev/api/planets?search=".concat(t),{method:"GET"});case 7:return c=e.sent,e.next=10,c.json();case 10:if(0!==(n=e.sent).results.length){e.next=14;break}return O.push("/"),e.abrupt("return");case 14:s(n.results[0]),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(4),O.push("/");case 20:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[p,O]);return Object(n.useEffect)((function(){x(d.name),h(d.name)}),[d.name,x]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(Q,{}),Object(c.jsxs)("main",{className:"main",children:[Object(c.jsx)("div",{className:"main__background"}),Object(c.jsxs)("section",{className:"details",children:[Object(c.jsxs)("div",{className:"details__path",children:[Object(c.jsx)(l.b,{to:"/",children:"Home"})," / ",Object(c.jsx)("span",{children:"Characters"})," /"," ",Object(c.jsx)("span",{children:o})]}),a&&Object(c.jsxs)("div",{className:"details__content",children:[Object(c.jsx)(J,{title:"Name:",value:a.name}),Object(c.jsx)(J,{title:"Rotation period:",value:a.rotation_period}),Object(c.jsx)(J,{title:"Orbital period:",value:a.orbital_period}),Object(c.jsx)(J,{title:"Diameter:",value:a.diameter}),Object(c.jsx)(J,{title:"Climate:",value:a.climate}),Object(c.jsx)(J,{title:"Gravity:",value:a.gravity}),Object(c.jsx)(J,{title:"Surface water:",value:a.surface_water}),Object(c.jsx)(J,{title:"Population:",value:a.population}),Object(c.jsx)(J,{title:"Number of films:",value:a.films.length.toString()})]})]})]})]})},L=function(){var e=Object(n.useState)(null),t=Object(y.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)(""),i=Object(y.a)(r,2),o=i[0],h=i[1],p=Object(j.c)((function(e){return e.encyclopedia})).species,d=Object(g.i)(),O=Object(g.g)(),x=Object(n.useCallback)(function(){var e=Object(b.a)(u.a.mark((function e(t){var a,c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=null===p||void 0===p?void 0:p.find((function(e){return e.name===t})))){e.next=4;break}return s(a),e.abrupt("return");case 4:return e.prev=4,e.next=7,fetch("https://swapi.dev/api/species?search=".concat(t),{method:"GET"});case 7:return c=e.sent,e.next=10,c.json();case 10:if(0!==(n=e.sent).results.length){e.next=14;break}return O.push("/"),e.abrupt("return");case 14:s(n.results[0]),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(4),O.push("/");case 20:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[p,O]);return Object(n.useEffect)((function(){x(d.name),h(d.name)}),[d.name,x]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(Q,{}),Object(c.jsxs)("main",{className:"main",children:[Object(c.jsx)("div",{className:"main__background"}),Object(c.jsxs)("section",{className:"details",children:[Object(c.jsxs)("div",{className:"details__path",children:[Object(c.jsx)(l.b,{to:"/",children:"Home"})," / ",Object(c.jsx)("span",{children:"Characters"})," /"," ",Object(c.jsx)("span",{children:o})]}),a&&Object(c.jsxs)("div",{className:"details__content",children:[Object(c.jsx)(J,{title:"Name:",value:a.name}),Object(c.jsx)(J,{title:"Classification:",value:a.classification}),Object(c.jsx)(J,{title:"Designation:",value:a.designation}),Object(c.jsx)(J,{title:"Average height:",value:a.average_height}),Object(c.jsx)(J,{title:"Skin colors:",value:a.skin_colors}),Object(c.jsx)(J,{title:"Hair colors:",value:a.hair_colors}),Object(c.jsx)(J,{title:"Eye colors:",value:a.eye_colors}),Object(c.jsx)(J,{title:"Average lifespan:",value:a.average_lifespan}),Object(c.jsx)(J,{title:"language:",value:a.language})]})]})]})]})},z=function(){var e=Object(n.useState)(null),t=Object(y.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)(""),i=Object(y.a)(r,2),o=i[0],h=i[1],p=Object(j.c)((function(e){return e.encyclopedia})).starships,d=Object(g.i)(),O=Object(g.g)(),x=Object(n.useCallback)(function(){var e=Object(b.a)(u.a.mark((function e(t){var a,c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=null===p||void 0===p?void 0:p.find((function(e){return e.name===t})))){e.next=4;break}return s(a),e.abrupt("return");case 4:return e.prev=4,e.next=7,fetch("https://swapi.dev/api/starships?search=".concat(t),{method:"GET"});case 7:return c=e.sent,e.next=10,c.json();case 10:if(0!==(n=e.sent).results.length){e.next=14;break}return O.push("/"),e.abrupt("return");case 14:s(n.results[0]),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(4),O.push("/");case 20:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[p,O]);return Object(n.useEffect)((function(){x(d.name),h(d.name)}),[d.name,x]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(Q,{}),Object(c.jsxs)("main",{className:"main",children:[Object(c.jsx)("div",{className:"main__background"}),Object(c.jsxs)("section",{className:"details",children:[Object(c.jsxs)("div",{className:"details__path",children:[Object(c.jsx)(l.b,{to:"/",children:"Home"})," / ",Object(c.jsx)("span",{children:"Characters"})," /"," ",Object(c.jsx)("span",{children:o})]}),a&&Object(c.jsxs)("div",{className:"details__content",children:[Object(c.jsx)(J,{title:"Name:",value:a.name}),Object(c.jsx)(J,{title:"Model:",value:a.model}),Object(c.jsx)(J,{title:"Cost in credits:",value:a.cost_in_credits}),Object(c.jsx)(J,{title:"Length:",value:a.length}),Object(c.jsx)(J,{title:"Max atmosphering speed:",value:a.max_atmosphering_speed}),Object(c.jsx)(J,{title:"Crew:",value:a.crew}),Object(c.jsx)(J,{title:"Passengers:",value:a.passengers}),Object(c.jsx)(J,{title:"Cargo capacity:",value:a.cargo_capacity}),Object(c.jsx)(J,{title:"Consumables:",value:a.consumables}),Object(c.jsx)(J,{title:"Hyperdrive rating:",value:a.hyperdrive_rating}),Object(c.jsx)(J,{title:"MGLT:",value:a.MGLT}),Object(c.jsx)(J,{title:"Starship class:",value:a.starship_class})]})]})]})]})},V=function(){return Object(c.jsxs)(g.d,{children:[Object(c.jsx)(g.b,{exact:!0,path:"/",component:Y}),Object(c.jsx)(w,{path:"/characters/:name",component:K}),Object(c.jsx)(w,{path:"/planets/:name",component:W}),Object(c.jsx)(w,{path:"/species/:name",component:L}),Object(c.jsx)(w,{path:"/starships/:name",component:z}),Object(c.jsx)(g.a,{to:"/"})]})},P=(a(73),function(){var e=Object(j.b)();return Object(n.useEffect)((function(){e(A())}),[e]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(v,{}),Object(c.jsx)(V,{})]})}),Z=a(14),q=a(31),$=a(32),ee={user:null},te={planets:null,characters:null,species:null,starships:null,loading:!0,error:!1,fetched:!1},ae=Object(Z.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(C.a)(Object(C.a)({},e),{},{user:t.payload});case p:return ee;default:return e}},encyclopedia:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(C.a)(Object(C.a)(Object(C.a)({},e),t.payload),{},{loading:!1,error:!1,fetched:!0});case N:return Object(C.a)(Object(C.a)({},e),{},{loading:t.payload,error:!1});case B:return Object(C.a)(Object(C.a)({},e),{},{error:t.payload,loading:!1});case p:return te;default:return e}}}),ce=[q.a],ne=Object(Z.createStore)(ae,Object($.composeWithDevTools)(Z.applyMiddleware.apply(void 0,ce)));i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(j.a,{store:ne,children:Object(c.jsx)(l.a,{children:Object(c.jsx)(P,{})})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.08119efe.chunk.js.map