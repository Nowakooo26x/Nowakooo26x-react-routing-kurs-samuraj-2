(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/1.27492ac5.jpg"},,,,,,,function(e,t,a){e.exports=a.p+"static/media/2.8f5e6990.jpg"},function(e,t,a){e.exports=a.p+"static/media/3.68a77fcb.jpg"},,,,,,,,function(e,t,a){e.exports=a(42)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),o=(a(30),a(31),a(2)),m=a(6),u=(a(32),a(9)),i=a.n(u),p=a(16),s=a.n(p),E=a(17),d=a.n(E),h=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.e,null,r.a.createElement(m.c,{path:"/",exact:!0,render:function(){return r.a.createElement("img",{src:i.a,alt:"krajobraz"})}}),r.a.createElement(m.c,{path:"/products",render:function(){return r.a.createElement("img",{src:s.a,alt:"krajobraz"})}}),r.a.createElement(m.c,{path:"/contact",render:function(){return r.a.createElement("img",{src:d.a,alt:"krajobraz"})}}),r.a.createElement(m.c,{path:"/admin",render:function(){return r.a.createElement("img",{src:i.a,alt:"krajobraz"})}}),r.a.createElement(m.c,{render:function(){return r.a.createElement("img",{src:i.a,alt:"krajobraz"})}})))},f=(a(38),[{name:"start",path:"/",exact:!0},{name:"produkty",path:"/products"},{name:"kontakt",path:"/contact"},{name:"panel admin",path:"/admin"}]),g=function(){var e=f.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(o.c,{to:e.path,exact:!!e.exact},e.name.toUpperCase()))}));return r.a.createElement("nav",{className:"main"},r.a.createElement("ul",null,e))},v=function(e){var t=e.title,a=e.author,n=e.text;return r.a.createElement("article",{style:{marginTop:40}},r.a.createElement("h3",{style:{marginBottom:3,textTransform:"uppercase"}},t),r.a.createElement("span",{style:{display:"block",marginBottom:10,fontSize:12}},a),r.a.createElement("p",{style:{fontSize:18}},n))},b=[{id:1,title:"1Czym jest teoria",author:"1Jan Nowak",text:"1Lore ipsum ..."},{id:2,title:"2Czym jest teoria",author:"2Jan Nowak",text:"2Lore ipsum ..."},{id:3,title:"3Czym jest teoria",author:"3Jan Nowak",text:"3Lore ipsum ..."}],y=function(){var e=b.map((function(e){return r.a.createElement(v,Object.assign({key:e.id},e))}));return r.a.createElement("div",{className:"home"},e)},j=function(e){return console.log(e),r.a.createElement("article",{className:"product"},r.a.createElement("h1",null,e.id))},k=function(e){var t=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Strona produktu"),r.a.createElement(j,{id:t.params.id}),r.a.createElement(o.b,{to:"/products"},"Powr\xf3t do listy produkt\xf3w"))},x=(a(39),["car","bike","motocycle"]),w=function(){var e=x.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(o.b,{to:"/product/".concat(e)},e))}));return r.a.createElement("div",{className:"products"},r.a.createElement("h2",null,"Lista produkt\xf3w:"),r.a.createElement("div",null,r.a.createElement("ul",null,e)))},z=a(20),N=a(21),C=a(23),S=a(22),J=a(24),O=(a(40),function(e){function t(){var e,a;Object(z.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(C.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.handleSubmit=function(e){e.prevventDefault(),a.setState({value:""})},a.handleChange=function(e){a.setState({value:e.target.value})},a}return Object(J.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h3",null,"Napisz do nas..."),r.a.createElement("textarea",{value:this.state.value,onChange:this.handleChange}),r.a.createElement("button",null,"Wy\u015blij!")),r.a.createElement(m.a,{when:this.state.value,message:"Masz niewype\u0142niony formularz. Czy na pewno chcesz wyj\u015b\u0107 ?"}))}}]),t}(r.a.Component)),F=function(){return r.a.createElement(m.c,{render:function(){return r.a.createElement(m.b,{to:"/login"})}})},L=function(){return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:""},"Podaj login: ",r.a.createElement("input",{type:"text"})),r.a.createElement("label",{htmlFor:""},"Podaj haslo: ",r.a.createElement("input",{type:"password"})),r.a.createElement("button",null,"Zaloguj"))},P=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.e,null,r.a.createElement(m.c,{path:"/",exact:!0,component:y}),r.a.createElement(m.c,{path:"/products",component:w}),r.a.createElement(m.c,{path:"/product/:id",component:k}),r.a.createElement(m.c,{path:"/contact",component:O}),r.a.createElement(m.c,{path:"/admin",component:F}),r.a.createElement(m.c,{path:"/login",component:L})))},B=(a(41),function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Stopka"),r.a.createElement(m.c,{path:"/",exact:!0,render:function(e){return console.log(e),r.a.createElement("p",null,"Jeste\u015b na",r.a.createElement("span",null," stronie g\u0142\xf3wnej"))}}),r.a.createElement(m.c,{path:"/:page",exact:!0,render:function(e){return console.log(e),r.a.createElement("p",null,"Jeste\u015b na",r.a.createElement("span",null," stronie ",e.match.params.page),r.a.createElement("span",null,e.match.url),r.a.createElement("span",null,e.match.path))}}),r.a.createElement(m.c,{path:"/:page/:idProduct",exact:!0,render:function(e){return console.log(e),r.a.createElement("p",null,"Jeste\u015b na",r.a.createElement("span",null," stronie ",e.match.params.page),r.a.createElement("span",null,e.match.url),r.a.createElement("span",null,e.match.path))}}))});var T=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement(h,null)),r.a.createElement("main",null,r.a.createElement("aside",null,r.a.createElement(g,null)),r.a.createElement("section",{className:"page"},r.a.createElement(P,null))),r.a.createElement("footer",null,r.a.createElement(B,null))))};c.a.render(r.a.createElement(T,null),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.36dfc9d9.chunk.js.map