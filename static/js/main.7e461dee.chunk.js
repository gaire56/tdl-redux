(this.webpackJsonptodoredux=this.webpackJsonptodoredux||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(5),i=n.n(r),s=(n(16),n(17),n(3)),o=n(1),d=Object(s.b)((function(e){return{todos:e.todos.data}}))((function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"todo__style",children:Object(o.jsx)("ul",{children:e.todos.map((function(t,n){return Object(o.jsxs)("li",{children:[t.message,Object(o.jsx)("i",{onClick:function(){return e.dispatch({type:"DELETE_TODO",id:t.id})},className:"fa fa-times","aria-hidden":"true"})]},n)}))})})})})),j=Object(s.b)()((function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"app",children:Object(o.jsxs)("div",{className:"center__div",children:[Object(o.jsx)("br",{}),Object(o.jsx)("h1",{children:"ToDo List"}),Object(o.jsx)("br",{}),Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=t.target.userInput.value;e.dispatch({type:"ADD_TODO",message:n,id:Math.random()}),t.target.userInput.value=""},children:[Object(o.jsx)("input",{name:"userInput",placeholder:"add todo ...",type:"text"}),Object(o.jsx)("button",{children:"+"})]}),Object(o.jsx)("ol",{children:Object(o.jsx)(d,{})})]})})})}));var u=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(j,{})})},O=n(2),l=n(11),b=n(4),h={data:[]},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return Object(b.a)(Object(b.a)({},e),{},{data:[].concat(Object(l.a)(e.data),[{message:t.message,id:t.id}])});case"DELETE_TODO":var n=e.data.filter((function(e){return e.id!==t.id}));return Object(b.a)(Object(b.a)({},e),{},{data:n});default:return e}},m=Object(O.b)({todos:x}),p=Object(O.c)(m,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(s.a,{store:p,children:Object(o.jsx)(u,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.7e461dee.chunk.js.map