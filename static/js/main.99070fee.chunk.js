(this["webpackJsonpto-do-list-app-reactjs"]=this["webpackJsonpto-do-list-app-reactjs"]||[]).push([[0],{38:function(t,e,o){},61:function(t,e,o){"use strict";o.r(e);var n=o(1),r=o(0),c=o.n(r),a=o(30),i=o.n(a),s=o(20),d=o(8),l=o(9),p=o(11),u=o(10),j=o(14),h=o(2);o(38);function b(){return Object(n.jsxs)("div",{style:f,children:[Object(n.jsx)("h1",{children:"ToDo List"}),Object(n.jsx)(j.b,{to:"/",style:m,children:"Home"})," | "," ",Object(n.jsx)(j.b,{to:"/about",style:m,children:"About"})]})}var f={background:"#333",color:"white",padding:"10px",textAlign:"center"},m={color:"white",textDecoration:"none"},O=o(32),x=function(t){Object(p.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={title:""},t.onSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state.title),t.setState({title:""})},t.onChange=function(e){return t.setState(Object(O.a)({},e.target.name,e.target.value))},t}return Object(l.a)(o,[{key:"render",value:function(){return Object(n.jsxs)("form",{onSubmit:this.onSubmit,style:{display:"flex"},children:[Object(n.jsx)("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add Todo ...",value:this.state.title,onChange:this.onChange}),Object(n.jsx)("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}})]})}}]),o}(r.Component),g=function(t){Object(p.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:t.props.todo.completed?"line-through":"none"}},t}return Object(l.a)(o,[{key:"render",value:function(){var t=this.props.todo,e=t.id,o=t.title,r=t.completed;return Object(n.jsx)("div",{style:this.getStyle(),children:Object(n.jsxs)("p",{children:[Object(n.jsx)("input",{type:"checkbox",checked:r,onChange:this.props.markComplete.bind(this,e)}),"  ",o,Object(n.jsx)("button",{style:v,onClick:this.props.delTodo.bind(this,e),children:"X"})]})})}}]),o}(r.Component),v={background:"red",color:"white",padding:"5px 9px",border:"none",borderRadius:"50%",cursor:"pointer",float:"right",fontSize:"20px",transform:"TranslateY(-5px)",outline:"none"},y=g,k=function(t){Object(p.a)(o,t);var e=Object(u.a)(o);function o(){return Object(d.a)(this,o),e.apply(this,arguments)}return Object(l.a)(o,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return Object(n.jsx)(y,{todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo},e.id)}))}}]),o}(r.Component);function C(){return Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)("h1",{children:"About"}),Object(n.jsx)("p",{children:"This is Todo App by Zokir.It is the part of react project while learning"})]})}var T=o(15),S=o.n(T),w=function(t){Object(p.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={todos:[]},t.markComplete=function(e){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t.addTodo=function(e){S.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,completed:!1}).then((function(e){return t.setState({todos:[].concat(Object(s.a)(t.state.todos),[e.data])})}))},t.delTodo=function(e){S.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then((function(o){return t.setState({todos:Object(s.a)(t.state.todos.filter((function(t){return t.id!==e})))})}))},t}return Object(l.a)(o,[{key:"componentDidMount",value:function(){var t=this;S.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return t.setState({todos:e.data})}))}},{key:"render",value:function(){var t=this;return Object(n.jsx)(j.a,{children:Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(b,{}),Object(n.jsx)(h.a,{exact:!0,path:"/",render:function(e){return Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)(x,{addTodo:t.addTodo}),Object(n.jsx)(k,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo})]})}}),Object(n.jsx)(h.a,{path:"/about",component:C})]})})})}}]),o}(r.Component),A=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,62)).then((function(e){var o=e.getCLS,n=e.getFID,r=e.getFCP,c=e.getLCP,a=e.getTTFB;o(t),n(t),r(t),c(t),a(t)}))};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(w,{})}),document.getElementById("root")),A()}},[[61,1,2]]]);
//# sourceMappingURL=main.99070fee.chunk.js.map