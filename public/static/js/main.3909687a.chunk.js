(this["webpackJsonpget-scripts"]=this["webpackJsonpget-scripts"]||[]).push([[0],{34:function(e,t,a){e.exports=a(63)},39:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),s=a.n(c),o=a(8),l=a(2),i=a(4),u=a(6),m=a(5),p=(a(39),a(3)),d=a(14),h=a.n(d),v=new(function(){function e(){Object(l.a)(this,e),this.auth=h.a.create({baseURL:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URI),withCredentials:!0})}return Object(i.a)(e,[{key:"signup",value:function(e){var t=e.username,a=e.password;return this.auth.post("/auth/signup",{username:t,password:a}).then((function(e){return e.data}))}},{key:"login",value:function(e){var t=e.username,a=e.password;return this.auth.post("/auth/login",{username:t,password:a}).then((function(e){return e.data}))}},{key:"logout",value:function(){return this.auth.post("/auth/logout",{}).then((function(e){return e.data}))}},{key:"me",value:function(){return this.auth.get("/auth/me").then((function(e){return e.data}))}}]),e}()),f=r.a.createContext(),g=f.Consumer,E=f.Provider,b=function(e){return function(t){Object(u.a)(n,t);var a=Object(m.a)(n);function n(){return Object(l.a)(this,n),a.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement(g,null,(function(a){var n=a.login,c=a.signup,s=a.user,o=a.logout,l=a.isLoggedin;return r.a.createElement(e,Object.assign({login:n,signup:c,user:s,logout:o,isLoggedin:l},t.props))}))}}]),n}(r.a.Component)},O=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isLoggedin:!1,user:null,isLoading:!0},e.signup=function(t){var a=t.username,n=t.password;v.signup({username:a,password:n}).then((function(t){return e.setState({isLoggedin:!0,user:t})})).catch((function(t){var a=t.response;return e.setState({message:a.data.statusMessage})}))},e.login=function(t){var a=t.username,n=t.password;v.login({username:a,password:n}).then((function(t){return e.setState({isLoggedin:!0,user:t})})).catch((function(e){return console.log(e)}))},e.logout=function(){v.logout().then((function(){return e.setState({isLoggedin:!1,user:null})})).catch((function(e){return console.log(e)}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.me().then((function(t){return e.setState({isLoggedin:!0,user:t,isLoading:!1})})).catch((function(t){return e.setState({isLoggedin:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.isLoggedin,n=e.user,c=this.login,s=this.logout,o=this.signup;return t?r.a.createElement("div",null,"Loading"):r.a.createElement(E,{value:{isLoggedin:a,user:n,login:c,logout:s,signup:o}},this.props.children)}}]),a}(r.a.Component),S=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"home"},r.a.createElement("h1",{className:"encuentra"},"Encuentra a tu profesional"),r.a.createElement("img",{src:"",alt:""}),r.a.createElement("div",{className:"profesionales"},r.a.createElement("div",{className:"profesional"},r.a.createElement(o.b,{className:"enlace",to:"/cerrajeros"},"CERRAJEROS")),r.a.createElement("div",{className:"profesional"},r.a.createElement(o.b,{className:"enlace",to:"/pintores"},"PINTORES")),r.a.createElement("div",{className:"profesional"},r.a.createElement(o.b,{className:"enlace",to:"/fontaneros"},"FONTANEROS")),r.a.createElement("div",{className:"profesional"},r.a.createElement(o.b,{className:"enlace",to:"/alba\xf1iles"},"ALBA\xd1ILES"))),r.a.createElement("div",{className:"discurso"},r.a.createElement("p",null)))}}]),a}(n.Component);function w(){return r.a.createElement("div",{className:"navbar"},r.a.createElement(o.b,{className:"enlace",to:"/"},r.a.createElement("h1",{className:"home"},"STAYPROF")),r.a.createElement(o.b,{className:"login",to:"/login"},r.a.createElement("h1",null,"LOGIN")),r.a.createElement(o.b,{className:"signup",to:"/signup"},r.a.createElement("h1",null,"SIGNUP")))}var y=a(15),j=b(function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,r=a.password;e.props.signup({username:n,password:r})},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(y.a)({},n,r))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return r.a.createElement("div",{id:"idSignupAndLogin"},r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:t,onChange:this.handleChange}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:a,onChange:this.handleChange}),r.a.createElement("input",{className:"button",type:"submit",value:"Signup"})),r.a.createElement("div",{class:"already"},r.a.createElement("p",null,"Already have account?"),r.a.createElement(o.b,{to:"/login"}," Login")))}}]),a}(n.Component)),C=b(function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,r=a.password;e.props.login({username:n,password:r})},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(y.a)({},n,r))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return r.a.createElement("div",{id:"idSignupAndLogin"},r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:t,onChange:this.handleChange}),r.a.createElement("label",null,r.a.createElement("p",null,"Password:")),r.a.createElement("input",{type:"password",name:"password",value:a,onChange:this.handleChange}),r.a.createElement("input",{className:"button",type:"submit",value:"Login"})))}}]),a}(n.Component)),_=a(1),N=a.n(_),k=a(9),L=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",address:"",specialty:"",phone:"",web:""},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(y.a)({},n,r))},e.handleSubmit=function(){var t=Object(k.a)(N.a.mark((function t(a){var n,r,c,s,o,l;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=e.state,r=n.name,c=n.address,s=n.specialty,o=n.phone,l=n.web,t.next=4,h.a.post(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URI+"/locksmith/",{name:r,address:c,specialty:s,phone:o,web:l});case 4:e.setState({name:"",address:"",specialty:"",phone:"",web:""});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{id:"idSignupAndLogin"},r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("label",{className:"label"},"Name"),r.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",{className:"label"},"Address"),r.a.createElement("input",{type:"text",name:"address",value:this.state.address,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",{className:"label"},"Specialty"),r.a.createElement("input",{type:"text",name:"specialty",value:this.state.specialty,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",{className:"label"},"Phone"),r.a.createElement("input",{type:"text",name:"phone",value:this.state.phone,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",{className:"label"},"Web"),r.a.createElement("input",{type:"text",name:"web",value:this.state.web,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("button",{type:"submit"},"Guardar"))),r.a.createElement("p",null,"Estos datos ser\xe1n revisados.")))}}]),a}(n.Component),x=b(function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={users:[],showForm:!1},e.showFormClick=function(){e.setState({showForm:!e.state.showForm}),console.log("adios")},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(k.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("http://localhost:4000/api/users");case 2:t=e.sent,console.log(t.data),this.setState({users:t.data});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.logout;return r.a.createElement("div",{id:"profile"},r.a.createElement("div",{className:"profileCard"},r.a.createElement("img",{src:this.props.user.image,alt:""}),r.a.createElement("br",null),r.a.createElement("h1",null,"Bienvenido, ",this.props.user.username),r.a.createElement("button",{onClick:e},"Logout"),r.a.createElement("p",null,"\xbfEres profesional? ",r.a.createElement("p",{className:"unete",onClick:this.showFormClick},"\xdanete.")),this.state.showForm?r.a.createElement(L,null):null))}}]),a}(n.Component)),T=a(18);var A=b((function(e){var t=e.component,a=e.isLoggedin,n=Object(T.a)(e,["component","isLoggedin"]);return r.a.createElement(p.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(p.a,{to:"/private"}):r.a.createElement(t,e)}}))}));var P=b((function(e){var t=e.component,a=e.isLoggedin,n=Object(T.a)(e,["component","isLoggedin"]);return r.a.createElement(p.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(p.a,{to:"/login"})}}))})),D=new function e(){var t=this;Object(l.a)(this,e),this.handleUpload=function(){var e=Object(k.a)(N.a.mark((function e(a){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("file in service: ",a),e.prev=1,e.next=4,t.service.post("/upload",a);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),this.saveNewMovie=function(){var e=Object(k.a)(N.a.mark((function e(a){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("new thing is: ",a),e.prev=1,e.next=4,t.service.post("/images/create",a);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),this.getMovies=Object(k.a)(N.a.mark((function e(){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.service.get("/movies");case 3:return a=e.sent,console.log(a.data),e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),this.service=h.a.create({baseURL:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URI)})},R=b(function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={title:"",description:"",imageUrl:""},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(y.a)({},n,r))},e.handleFileUpload=function(){var t=Object(k.a)(N.a.mark((function t(a){var n,r;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("the file to be uploaded is: ",a.target.files[0]),(n=new FormData).append("imageUrl",a.target.files[0]),t.prev=3,t.next=6,D.handleUpload(n);case 6:r=t.sent,console.log("response is",r),e.setState({imageUrl:r.secure_url}),t.next=13;break;case 11:t.prev=11,t.t0=t.catch(3);case 13:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(e){return t.apply(this,arguments)}}(),e.handleSubmit=function(){var t=Object(k.a)(N.a.mark((function t(a){var n;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,D.saveNewMovie(e.state);case 4:n=t.sent,console.log("added",n),e.setState({title:"",description:"",imageUrl:""}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log("Error while adding the movie: ",t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h2",null,"New Movie"),r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("label",{htmlFor:""},"Name"),r.a.createElement("input",{type:"text",name:"title",value:this.state.title,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",{htmlFor:""},"Description"),r.a.createElement("input",{type:"text",name:"description",value:this.state.description,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"file",onChange:function(t){return e.handleFileUpload(t)}}),r.a.createElement("button",{type:"submit"},"Save new movie")))}}]),a}(n.Component));function U(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",null,r.a.createElement("p",null,"Si quieres aparecer en nuestra web env\xedanos un E-mail y revisaremos tus datos."),r.a.createElement("a",{href:"mailto:stayprof@prostarcompany.com"},"stayprof@stayprof.com")))}var I=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={lockmasters:[]},e.getlockmasters=Object(k.a)(N.a.mark((function t(){var a;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URI,"/api/locksmith"));case 2:a=t.sent,e.setState({lockmasters:a.data}),console.log(a.data);case 5:case"end":return t.stop()}}),t)}))),e.deleter=function(){var t=Object(k.a)(N.a.mark((function t(a){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.delete(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URI+"/api/locksmith/"+a);case 2:console.log(a),e.getlockmasters();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(k.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getlockmasters();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"tarjetas"},this.state.lockmasters.map((function(t){return r.a.createElement("div",{className:"tarjeta"},r.a.createElement("div",{className:"cerrajeros",key:t._id},r.a.createElement("p",{className:"nombre"},t.name),r.a.createElement("img",{src:t.image,alt:""}),r.a.createElement("p",null,t.specialty),r.a.createElement("p",null,t.address),r.a.createElement("p",null,t.phone),r.a.createElement("p",null,t.web),r.a.createElement("button",{className:"delete",onClick:function(){return e.deleter(t._id)}},"Delete")))}))))}}]),a}(n.Component),F=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(O,null,r.a.createElement("div",{className:"container"},r.a.createElement(w,null),r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",component:S}),r.a.createElement(A,{exact:!0,path:"/signup",component:j}),r.a.createElement(A,{exact:!0,path:"/login",component:C}),r.a.createElement(P,{exact:!0,path:"/private",component:x}),r.a.createElement(P,{exact:!0,path:"/image",component:R}),r.a.createElement(p.b,{exact:!0,path:"/cerrajeros",component:I})),r.a.createElement(U,null)))}}]),a}(n.Component);s.a.render(r.a.createElement(o.a,null,r.a.createElement(F,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.3909687a.chunk.js.map