(this["webpackJsonpreact-demo"]=this["webpackJsonpreact-demo"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),u=n.n(a),l=n(7),c=n.n(l),r=n(1),o=n(2),i=n(4),s=n(3),m=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return u.a.createElement("section",{id:"header"},u.a.createElement("h1",null,"RESTy API"))}}]),n}(u.a.Component),h=n(5),b=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={method:"",value:""},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(o.a)(n,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){console.log("URL submitted to form",this.state.value),e.preventDefault()}},{key:"render",value:function(){var e=this;return u.a.createElement("section",{id:"form"},u.a.createElement("form",{onSubmit:this.handleSubmit},u.a.createElement("label",null,"URL:"),u.a.createElement("input",{type:"text",id:"url",placeHolder:"URL",name:"URL",onChange:this.handleChange}),u.a.createElement("input",{className:"submit",value:"GO!"}),u.a.createElement("input",{className:"button",type:"button",value:"GET",onClick:function(){return e.setState({method:"GET"})}}),u.a.createElement("input",{className:"button",type:"button",value:"POST",onClick:function(){return e.setState({method:"POST"})}}),u.a.createElement("input",{className:"button",type:"button",value:"PUT",onClick:function(){return e.setState({method:"PUT"})}}),u.a.createElement("input",{className:"button",type:"button",value:"DELETE",onClick:function(){return e.setState({method:"DELETE"})}})),u.a.createElement("section",null,u.a.createElement("p",{className:"update"},this.state.method," ",this.state.value)))}}]),n}(u.a.Component),d=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return u.a.createElement("section",{id:"footer"},u.a.createElement("p",null,"\xa9 CodeFellows 2020"))}}]),n}(u.a.Component),p=(n(13),n(14),n(15),n(16),function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={},e}return Object(o.a)(n,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(m,null),u.a.createElement(b,null),u.a.createElement(d,null))}}]),n}(u.a.Component)),E=document.getElementById("root");c.a.render(u.a.createElement(p,null),E)}],[[8,1,2]]]);
//# sourceMappingURL=main.80ed46f0.chunk.js.map