(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/1.27492ac5.jpg"},,,,,,,function(e,t,a){e.exports=a.p+"static/media/2.8f5e6990.jpg"},function(e,t,a){e.exports=a.p+"static/media/3.68a77fcb.jpg"},,,function(e,t,a){e.exports=a(42)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),o=(a(30),a(9)),m=a(10),u=a(12),i=a(11),p=a(13),s=(a(31),a(2)),E=a(6),h=(a(32),a(14)),d=a.n(h),f=a(21),g=a.n(f),b=a(22),j=a.n(b),v=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.e,null,r.a.createElement(E.c,{path:"/",exact:!0,render:function(){return r.a.createElement("img",{src:d.a,alt:"krajobraz"})}}),r.a.createElement(E.c,{path:"/products",render:function(){return r.a.createElement("img",{src:g.a,alt:"krajobraz"})}}),r.a.createElement(E.c,{path:"/contact",render:function(){return r.a.createElement("img",{src:j.a,alt:"krajobraz"})}}),r.a.createElement(E.c,{path:"/admin",render:function(){return r.a.createElement("img",{src:d.a,alt:"krajobraz"})}}),r.a.createElement(E.c,{render:function(){return r.a.createElement("img",{src:d.a,alt:"krajobraz"})}})))},y=(a(38),[{name:"start",path:"/",exact:!0},{name:"produkty",path:"/products"},{name:"kontakt",path:"/contact"},{name:"panel admin",path:"/admin"}]),k=function(){var e=y.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(s.c,{to:e.path,exact:!!e.exact},e.name.toUpperCase()))}));return r.a.createElement("nav",{className:"main"},r.a.createElement("ul",null,e))},x=function(e){var t=e.title,a=e.author,n=e.text;return r.a.createElement("article",{style:{marginTop:40}},r.a.createElement("h3",{style:{marginBottom:3,textTransform:"uppercase"}},t),r.a.createElement("span",{style:{display:"block",marginBottom:10,fontSize:12}},a),r.a.createElement("p",{style:{fontSize:18}},n))},w=[{id:1,title:"1Czym jest teoria",author:"1Jan Nowak",text:"1Lore ipsum ..."},{id:2,title:"2Czym jest teoria",author:"2Jan Nowak",text:"2Lore ipsum ..."},{id:3,title:"3Czym jest teoria",author:"3Jan Nowak",text:"3Lore ipsum ..."}],z=function(){var e=w.map((function(e){return r.a.createElement(x,Object.assign({key:e.id},e))}));return r.a.createElement("div",{className:"home"},e)},N=function(e){return console.log(e),r.a.createElement("article",{className:"product"},r.a.createElement("h1",null,e.id))},O=function(e){var t=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Strona produktu"),r.a.createElement(N,{id:t.params.id}),r.a.createElement(s.b,{to:"/products"},"Powr\xf3t do listy produkt\xf3w"))},C=(a(39),["car","bike","motocycle"]),S=function(){var e=C.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(s.b,{to:"/product/".concat(e)},e))}));return r.a.createElement("div",{className:"products"},r.a.createElement("h2",null,"Lista produkt\xf3w:"),r.a.createElement("div",null,r.a.createElement("ul",null,e)))},J=(a(40),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.handleSubmit=function(e){e.prevventDefault(),a.setState({value:""})},a.handleChange=function(e){a.setState({value:e.target.value})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h3",null,"Napisz do nas..."),r.a.createElement("textarea",{value:this.state.value,onChange:this.handleChange}),r.a.createElement("button",null,"Wy\u015blij!")),r.a.createElement(E.a,{when:this.state.value,message:"Masz niewype\u0142niony formularz. Czy na pewno chcesz wyj\u015b\u0107 ?"}))}}]),t}(r.a.Component)),F=function(){return r.a.createElement(E.c,{render:function(){return r.a.createElement(E.b,{to:"/login"})}})},L=function(){return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:""},"Podaj login: ",r.a.createElement("input",{type:"text"})),r.a.createElement("label",{htmlFor:""},"Podaj haslo: ",r.a.createElement("input",{type:"password"})),r.a.createElement("button",null,"Zaloguj"))},P=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.e,null,r.a.createElement(E.c,{path:"/",exact:!0,component:z}),r.a.createElement(E.c,{path:"/products",component:S}),r.a.createElement(E.c,{path:"/product/:id",component:O}),r.a.createElement(E.c,{path:"/contact",component:J}),r.a.createElement(E.c,{path:"/admin",component:F}),r.a.createElement(E.c,{path:"/login",component:L})))},B=(a(41),function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Stopka"),r.a.createElement(E.c,{path:"/",exact:!0,render:function(e){return console.log(e),r.a.createElement("p",null,"Jeste\u015b na",r.a.createElement("span",null," stronie g\u0142\xf3wnej"))}}),r.a.createElement(E.c,{path:"/:page",exact:!0,render:function(e){return console.log(e),r.a.createElement("p",null,"Jeste\u015b na",r.a.createElement("span",null," stronie ",e.match.params.page),r.a.createElement("span",null,e.match.url),r.a.createElement("span",null,e.match.path))}}),r.a.createElement(E.c,{path:"/:page/:idProduct",exact:!0,render:function(e){return console.log(e),r.a.createElement("p",null,"Jeste\u015b na",r.a.createElement("span",null," stronie ",e.match.params.page),r.a.createElement("span",null,e.match.url),r.a.createElement("span",null,e.match.path))}}))}),T=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(s.a,{basename:"/Nowakooo26x-react-routing-kurs-samuraj-2"},r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement(v,null)),r.a.createElement("main",null,r.a.createElement("aside",null,r.a.createElement(k,null)),r.a.createElement("section",{className:"page"},r.a.createElement(P,null))),r.a.createElement("footer",null,r.a.createElement(B,null))))}}]),t}(r.a.Component);l.a.render(r.a.createElement(T,null),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.def066ee.chunk.js.map