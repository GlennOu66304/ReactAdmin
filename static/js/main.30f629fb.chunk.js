(this["webpackJsonpreact-admin"]=this["webpackJsonpreact-admin"]||[]).push([[0],{140:function(e,t,n){"use strict";n(54);var a=n(35),r=n.n(a),i=(n(88),n(39)),s=n.n(i),o=n(11),c=n(12),u=n(16),l=n(17),d=n(0),m=n(98),b=n(97),j=n(5),h=null,f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).getCode=function(){var e=a.state.username;if(!e)return s.a.warning("\u7528\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a\uff01\uff01",1),!1;if(!Object(b.a)(e))return s.a.warning("\u90ae\u7bb1\u683c\u5f0f\u4e0d\u6b63\u89e3",1),!1;a.setState({button_loading:!0,button_text:"\u53d1\u9001\u4e2d"});var t={username:e,module:a.state.module};Object(m.a)(t).then((function(e){s.a.success(e.data.message),a.countDown()})).catch((function(e){a.setState({button_loading:!1,button_text:"\u91cd\u65b0\u83b7\u53d6"})}))},a.countDown=function(){var e=60;a.setState({button_loading:!1,button_disabled:!0,button_text:"".concat(e,"S")}),h=setInterval((function(){if(--e<=0)return a.setState({button_text:"\u91cd\u65b0\u83b7\u53d6",button_disabled:!1}),clearInterval(h),!1;a.setState({button_text:"".concat(e,"S")})}),1e3)},a.state={username:e.username,button_text:"\u83b7\u53d6\u9a8c\u8bc1\u7801",button_loading:!1,button_disabled:!1,module:e.module},a}return Object(c.a)(n,[{key:"componentWillReceiveProps",value:function(e){var t=e.username;this.setState({username:t})}},{key:"componentWillUnmount",value:function(){clearInterval(h)}},{key:"render",value:function(){return Object(j.jsx)(r.a,{type:"danger",disabled:this.state.button_disabled,loading:this.state.button_loading,block:!0,onClick:this.getCode,children:this.state.button_text})}}]),n}(d.Component);t.a=f},144:function(e,t,n){"use strict";var a=n(1),r=n(10),i=(n(0),n(68)),s=n(79),o=n(5),c=["component"];t.a=function(e){var t=e.component,n=Object(r.a)(e,c);return Object(o.jsx)(i.b,Object(a.a)(Object(a.a)({},n),{},{render:function(e){return Object(s.a)()?Object(o.jsx)(t,Object(a.a)({},e)):Object(o.jsx)(i.a,{to:"/"})}}))}},147:function(e,t,n){"use strict";var a=n(195),r={status:[{label:"config",value:!1},{label:"\u542f\u7528",value:!0}]},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r;return e},s={status:[{label:"job",value:!1},{label:"\u542f\u7528",value:!0}]},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;return e},c={status:[{label:"department",value:!1},{label:"\u542f\u7528",value:!0}]},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c;return e},l={config:i,job:o,department:u},d=Object(a.a)(l),m=Object(a.b)(d);t.a=m},187:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n(12),i=n(16),s=n(17),o=n(0),c=(n(297),n(188)),u=n(190),l=n(5),d=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).switchForm=function(e){r.setState({formType:e})},r.state={formType:"login"},r}return Object(r.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"form-wrap",children:Object(l.jsx)("div",{children:"login"===this.state.formType?Object(l.jsx)(c.default,{switchForm:this.switchForm}):Object(l.jsx)(u.default,{switchForm:this.switchForm})})})}}]),n}(o.Component);t.default=d},188:function(e,t,n){"use strict";n.r(t),function(e){n(54);var a=n(35),r=n.n(a),i=(n(149),n(103)),s=n.n(i),o=(n(151),n(74)),c=n.n(o),u=(n(116),n(29)),l=n.n(u),d=(n(107),n(46)),m=n.n(d),b=n(11),j=n(12),h=n(16),f=n(17),p=n(0),O=n(291),g=n(114),v=n(97),x=n(98),y=n(140),C=n(141),k=n.n(C),S=n(68),w=n(79),I=n(5),F=function(t){Object(h.a)(a,t);var n=Object(f.a)(a);function a(e){var t;return Object(b.a)(this,a),(t=n.call(this,e)).toggleForm=function(){t.props.switchForm("register")},t.onFinish=function(e){var n={username:t.state.username,password:k.a.MD5(t.state.password).toString(),code:t.state.code};t.setState({loading:!0}),Object(x.b)(n).then((function(e){t.setState({loading:!1});var n=e.data.data;Object(w.c)(n.token),Object(w.d)(n.username),t.props.history.push("/index")})).catch((function(e){t.setState({loading:!1})}))},t.inputChangeUsername=function(e){var n=e.target.value;t.setState({username:n})},t.inputChangePassword=function(e){var n=e.target.value;t.setState({password:n})},t.inputChangeCode=function(e){var n=e.target.value;t.setState({code:n})},t.state={username:"",password:"",code:"",module:"login",loading:!1},t}return Object(j.a)(a,[{key:"render",value:function(){var t=this.state,n=t.username,a=t.loading;return Object(I.jsxs)(p.Fragment,{children:[Object(I.jsxs)("div",{className:"form-header",children:[Object(I.jsx)("h4",{className:"column",children:"\u767b\u5f55"}),Object(I.jsx)("span",{onClick:this.toggleForm,children:"\u8d26\u53f7\u6ce8\u518c"})]}),Object(I.jsxs)("div",{className:"form-content",children:[Object(I.jsxs)(l.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:this.onFinish,children:[Object(I.jsx)(l.a.Item,{name:"username",rules:[{required:!0,message:"\u90ae\u7bb1\u4e0d\u80fd\u4e3a\u7a7a"},{type:"email",message:"\u90ae\u7bb1\u683c\u5f0f\u4e0d\u6b63\u786e"}],children:Object(I.jsx)(m.a,{onChange:this.inputChangeUsername,value:n,prefix:Object(I.jsx)(O.a,{className:"site-form-item-icon"}),placeholder:"\u8bf7\u8f93\u5165\u90ae\u7bb1"})}),Object(I.jsx)(l.a.Item,{name:"password",rules:[{required:!0,message:"\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a!"},{pattern:v.c,message:"\u8bf7\u8f93\u5165\u5927\u4e8e6\u4f4d\u5c0f\u4e8e20\u4f4d\u7684\u6570\u5b57+\u5bc6\u7801"}],children:Object(I.jsx)(m.a,{onChange:this.inputChangePassword,prefix:Object(I.jsx)(g.a,{className:"site-form-item-icon"}),placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801"})}),Object(I.jsx)(l.a.Item,{name:"code",rules:[{required:!0,message:"\u9a8c\u8bc1\u7801\u4e0d\u80fd\u4e3a\u7a7a!"},{len:6,message:"\u8bf7\u8f93\u51656\u4f4d\u7684\u9a8c\u8bc1\u7801"}],children:Object(I.jsxs)(s.a,{gutter:13,children:[Object(I.jsx)(c.a,{span:15,children:Object(I.jsx)(m.a,{onChange:this.inputChangeCode,prefix:Object(I.jsx)(g.a,{className:"site-form-item-icon"}),placeholder:"\u8bf7\u8f93\u5165\u4ee3\u7801"})}),Object(I.jsx)(c.a,{span:9,children:Object(I.jsx)(y.a,{username:n,module:e})})]})}),Object(I.jsx)(l.a.Item,{children:Object(I.jsx)(r.a,{loading:a,type:"primary",htmlType:"submit",className:"login-form-button",block:!0,children:"\u767b\u5f55"})})]}),";"]})]})}}]),a}(p.Component);t.default=Object(S.f)(F)}.call(this,n(298)(e))},190:function(e,t,n){"use strict";n.r(t);n(54);var a=n(35),r=n.n(a),i=(n(149),n(103)),s=n.n(i),o=(n(151),n(74)),c=n.n(o),u=(n(116),n(29)),l=n.n(u),d=(n(107),n(46)),m=n.n(d),b=(n(88),n(39)),j=n.n(b),h=n(11),f=n(12),p=n(16),O=n(17),g=n(0),v=n(291),x=n(114),y=n(140),C=n(97),k=n(98),S=n(141),w=n.n(S),I=n(5),F=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).toggleForm=function(){a.props.switchForm("login")},a.onFinish=function(e){var t={username:a.state.username,password:w.a.MD5(a.state.password).toString(),code:a.state.code};Object(k.c)(t).then((function(e){var t=e.data;j.a.success(t.message),0===t.resCode&&a.toggleForm()})).catch((function(e){}))},a.inputChangeUsername=function(e){var t=e.target.value;a.setState({username:t})},a.inputChangePassword=function(e){var t=e.target.value;a.setState({password:t})},a.inputChangeCode=function(e){var t=e.target.value;a.setState({code:t})},a.state={username:"",password:"",code:"",module:"register"},a}return Object(f.a)(n,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.module;return Object(I.jsxs)(g.Fragment,{children:[Object(I.jsxs)("div",{className:"form-header",children:[Object(I.jsx)("h4",{className:"column",children:"\u6ce8\u518c"}),Object(I.jsx)("span",{onClick:this.toggleForm,type:"primary",children:"\u8d26\u53f7\u767b\u5f55"})]}),Object(I.jsxs)("div",{className:"form-content",children:[Object(I.jsxs)(l.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:this.onFinish,children:[Object(I.jsx)(l.a.Item,{name:"username",rules:[{required:!0,message:"\u90ae\u7bb1\u4e0d\u80fd\u4e3a\u7a7a!"},{type:"email",message:"\u90ae\u7bb1\u683c\u5f0f\u4e0d\u6b63\u786e"}],children:Object(I.jsx)(m.a,{onChange:this.inputChangeUsername,prefix:Object(I.jsx)(v.a,{className:"site-form-item-icon"}),placeholder:"\u8bf7\u8f93\u5165\u90ae\u7bb1"})}),Object(I.jsx)(l.a.Item,{name:"password",rules:[{required:!0,message:"\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a!"},function(e){var t=e.getFieldValue;return{validator:function(e,n){var a=t("passwords");return Object(C.b)(n)?a&&n!==a?Promise.reject("\u4e24\u6b21\u8f93\u5165\u5bc6\u7801\u4e0d\u4e00\u81f4"):Promise.resolve():Promise.reject("\u8bf7\u8f93\u5165\u5927\u4e8e6\u4f4d\u5c0f\u4e8e20\u4f4d\u6570\u5b57+\u5b57\u6bcd")}}}],children:Object(I.jsx)(m.a,{onChange:this.inputChangePassword,type:"password",prefix:Object(I.jsx)(x.a,{className:"site-form-item-icon"}),placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801"})}),Object(I.jsx)(l.a.Item,{name:"passwords",rules:[{required:!0,message:"\u518d\u6b21\u786e\u8ba4\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a"},function(e){var t=e.getFieldValue;return{validator:function(e,n){return n!==t("password")?Promise.reject("\u4e24\u6b21\u8f93\u5165\u5bc6\u7801\u4e0d\u4e00\u81f4"):Promise.resolve()}}}],children:Object(I.jsx)(m.a,{type:"password",prefix:Object(I.jsx)(x.a,{className:"site-form-item-icon"}),placeholder:"\u8bf7\u518d\u6b21\u8f93\u5165\u5bc6\u7801"})}),Object(I.jsx)(l.a.Item,{name:"code",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u957f\u5ea6\u4e3a6\u4f4d\u7684\u9a8c\u8bc1\u7801!",len:6}],children:Object(I.jsxs)(s.a,{gutter:13,children:[Object(I.jsx)(c.a,{span:15,children:Object(I.jsx)(m.a,{onChange:this.inputChangeCode,prefix:Object(I.jsx)(x.a,{className:"site-form-item-icon"}),placeholder:"\u9a8c\u8bc1\u7801"})}),Object(I.jsx)(c.a,{span:9,children:Object(I.jsx)(y.a,{username:t,module:n})})]})}),Object(I.jsx)(l.a.Item,{children:Object(I.jsx)(r.a,{type:"primary",htmlType:"submit",className:"login-form-button",block:!0,children:"\u6ce8\u518c"})})]}),";"]})]})}}]),n}(g.Component);t.default=F},192:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n(12),i=n(16),s=n(17),o=(n(503),n(106)),c=n.n(o),u=n(0),l=(n(505),n(193)),d=n(68),m=n(144),b=n(522),j=[];b.keys().map((function(e){if(e.includes("./index/")||e.includes("./login/"))return!1;var t=e.split("."),n={},a="/index".concat(t[1].toLowerCase()),r=b(e).default;return n.path=a,n.component=r,j.push(n),!0}));var h=j,f=n(5),p=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(f.jsx)(d.d,{children:h.map((function(e){return Object(f.jsx)(m.a,{exact:!0,component:e.component,path:e.path},e.path)}))})}}]),n}(u.Component),O=n(669),g=c.a.Sider,v=c.a.Header,x=c.a.Content,y=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).toggleCollapsed=function(){r.setState({collapsed:!r.state.collapsed})},r.state={collapsed:!1},r}return Object(r.a)(n,[{key:"render",value:function(){return Object(f.jsxs)(c.a,{className:"layout-wrap",children:[Object(f.jsx)(g,{width:"250px",collapsed:this.state.collapsed,children:Object(f.jsx)(l.default,{})}),Object(f.jsxs)(c.a,{children:[Object(f.jsx)(v,{className:"layout-header",children:Object(f.jsx)("span",{onClick:this.toggleCollapsed,className:"collapsed-icon",style:{fontSize:"20px"},children:Object(f.jsx)(O.a,{})})}),Object(f.jsx)(x,{className:"layout-main",children:Object(f.jsx)(p,{})})]})]})}}]),n}(u.Component);t.default=y},193:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n(12),i=n(16),s=n(17),o=n(0),c=(n(506),n(507),n(104)),u=n.n(c),l=n(291),d=[{key:"/index",title:"\u63a7\u5236\u53f0",icon:"laptop",role:["user","information","product"]},{key:"/index/user",title:"\u7528\u6237\u7ba1\u7406",icon:"laptop",role:["information","user"],child:[{key:"/index/user/list",title:"\u7528\u6237\u5217\u8868",icon:"",role:["user"]},{key:"/index/user/add",title:"\u6dfb\u52a0\u7528\u6237",icon:"",role:["user"]}]},{key:"/index/department",title:"\u90e8\u95e8\u7ba1\u7406",icon:"bars",role:["user"],child:[{key:"/index/department/list",title:"\u90e8\u95e8\u5217\u8868",icon:"",role:["user"]},{key:"/index/department/add",title:"\u6dfb\u52a0\u90e8\u95e8",icon:"",role:["user"]}]},{key:"/index/job",title:"\u804c\u4f4d\u7ba1\u7406",icon:"edit",role:["user"],child:[{key:"/index/job/list",title:"\u804c\u4f4d\u5217\u8868",icon:""},{key:"/index/job/add",title:"\u6dfb\u52a0\u804c\u4f4d",icon:""}]},{title:"\u804c\u5458\u7ba1\u7406",icon:"edit",key:"/index/staff",child:[{key:"/index/staff/list",title:"\u804c\u5458\u5217\u8868",icon:""},{key:"/index/staff/add",title:"\u6dfb\u52a0\u804c\u5458",icon:""}]},{title:"\u8bf7\u5047",icon:"info-circle-o",key:"/home/about"},{title:"\u52a0\u73ed",icon:"info-circle-o",key:"/home/abouta"}],m=n(70),b=n(68),j=n(5),h=u.a.SubMenu,f=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).renderSubMenu=function(e){var t=e.title,n=e.key,a=e.child;return Object(j.jsx)(h,{icon:Object(j.jsx)(l.a,{}),title:t,children:a&&a.map((function(e){return e.child&&e.child.length>0?r.renderSubMenu(e):r.renderMenu(e)}))},n)},r.renderMenu=function(e){var t=e.title,n=e.key;return Object(j.jsx)(u.a.Item,{children:Object(j.jsx)(m.b,{to:n,children:Object(j.jsx)("span",{children:t})})},n)},r.state={},r}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsx)(o.Fragment,{children:Object(j.jsx)(u.a,{theme:"dark",mode:"inline",style:{height:"100%",borderRight:0},children:d&&d.map((function(t){return t.child&&t.child.length>0?e.renderSubMenu(t):e.renderMenu(t)}))})})}}]),n}(o.Component),p=Object(b.f)(f),O=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={},r}return Object(r.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(o.Fragment,{children:[Object(j.jsx)("h1",{className:"logo",children:Object(j.jsx)("span",{children:"Logo"})}),Object(j.jsx)(p,{})]})}}]),n}(o.Component);t.default=O},297:function(e,t,n){},372:function(e,t){},50:function(e,t,n){"use strict";n(88);var a=n(39),r=n.n(a),i=n(283),s=n.n(i),o=n(79),c=s.a.create({baseURL:"/devApi",timeout:5e3});c.interceptors.request.use((function(e){return e.headers.Token=Object(o.a)(),e.headers.Username=Object(o.b)(),e}),(function(e){return Promise.reject(e)})),c.interceptors.response.use((function(e){var t=e.data;return 0!==t.resCode?(r.a.info(t.message),1023===t.resCode&&alert(111),Promise.reject(t)):e}),(function(e){var t=e.request;return Promise.reject(t)})),t.a=c},505:function(e,t,n){},506:function(e,t,n){},522:function(e,t,n){var a={"./department/Add.js":667,"./department/List.js":661,"./index/Index.js":192,"./index/components/aside.js":193,"./index/components/close.js":653,"./login/Index.js":187,"./login/LoginForm.js":188,"./login/RegisterForm.js":190,"./user/Add.js":654,"./user/List.js":655};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=522},653:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(11),r=n(12),i=n(16),s=n(17),o=n(0),c=n(5),u=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:"close"})}}]),n}(o.Component)},654:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(11),r=n(12),i=n(16),s=n(17),o=n(0),c=n(5),u=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:"This is user Add page"})}}]),n}(o.Component)},655:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(11),r=n(12),i=n(16),s=n(17),o=n(0),c=n(5),u=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:"user list start"})}}]),n}(o.Component)},661:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return K}));n(54);var a=n(35),r=n.n(a),i=(n(539),n(288)),s=n.n(i),o=(n(88),n(39)),c=n.n(o),u=n(11),l=n(12),d=n(16),m=n(17),b=n(0),j=n(81),h=n(70),f=(n(541),n(287)),p=n.n(f),O=n(50);n(149);var g=n(103),v=n.n(g),x=(n(253),n(191)),y=n.n(x),C=(n(151),n(74)),k=n.n(C),S=(n(544),n(286)),w=n.n(S),I=n(5),F=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.columns,n=e.data,a=e.total,i=e.batchButton,s=e.rowSelection,o=e.rowkey,c=e.pageNumber,u=e.onShowSizeChange,l=e.onChange,d=e.loadingTable,m=e.onDelete;return Object(I.jsxs)(b.Fragment,{children:[Object(I.jsx)(w.a,{rowKey:o,pagination:!1,columns:t,dataSource:n,rowSelection:s,bordered:!0,loading:d}),Object(I.jsxs)(v.a,{children:[Object(I.jsx)(k.a,{span:8,children:{batchButton:i}&&Object(I.jsx)(r.a,{onClick:m,children:"\u6279\u91cf\u5220\u9664"})}),Object(I.jsx)(k.a,{span:16,children:Object(I.jsx)(y.a,{className:"pull-right",total:a,defaultCurrent:c,showSizeChanger:!0,onShowSizeChange:u,showQuickJumper:!0,showTotal:function(e){return"Total ".concat(e," items")},onChange:l})})]})]})}}]),n}(b.Component);F.defaultProps={columns:[],dataSource:[],total:0,batchButton:!1,rowkey:"id",id:""};var N=n(1),D=(n(176),n(77)),T=n.n(D),P=(n(250),n(145)),q=n.n(P),R=(n(116),n(29)),E=n.n(R),_=(n(107),n(46)),z=n.n(_),V=(n(177),n(76)),A=n.n(V),L=n(147),M=A.a.Option,H=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).rules=function(e){var t=a.state.mesPreix,n=[];if(e.required){var r=e.message||"".concat(t[e.type]).concat(e.label);n.push({required:!0,message:r})}return e.rules&&e.rules.length>0&&(n=n.concat(e.rules)),n},a.inputElem=function(e){var t=a.rules(e);return Object(I.jsx)(E.a.Item,{label:e.label,name:e.name,rules:t,children:Object(I.jsx)(z.a,{style:e.style,placeholder:e.placeholder})},e.name)},a.inputNumberElem=function(e){var t=a.rules(e);return Object(I.jsx)(E.a.Item,{label:e.label,name:e.name,rules:t,children:Object(I.jsx)(q.a,{min:e.min,max:e.max})},e.name)},a.selectElem=function(e){var t=a.rules(e);return Object(I.jsx)(E.a.Item,{label:e.label,name:e.name,rules:t,children:Object(I.jsx)(A.a,{style:e.style,placeholder:e.placeholder,children:e.options&&e.options.map((function(e){return Object(I.jsx)(M,{value:e.value,children:e.label},e.value)}))})},e.name)},a.radioElem=function(e){var t=a.rules(e);return Object(I.jsx)(E.a.Item,{label:e.label,name:e.name,rules:t,children:Object(I.jsx)(T.a.Group,{children:e.options&&e.options.map((function(e){return Object(I.jsx)(T.a,{value:e.value,children:e.label},e.value)}))})},e.name)},a.initFormItem=function(){var e=a.props.formItem;if(!e||e&&0===e.length)return!1;var t=[];return e.forEach((function(e){"Input"===e.type&&t.push(a.inputElem(e)),"Select"===e.type&&(e.options=L.a.getState().config[e.optionsKey],t.push(a.selectElem(e))),"InputNumber"===e.type&&t.push(a.inputNumberElem(e)),"Radio"===e.type&&t.push(a.radioElem(e))})),t},a.onSubmit=function(e){var t={};for(var n in e)void 0!==e[n]&&""!==e[n]&&(t[n]=e[n]);a.props.search(t)},a.state={loading:!1,mesPreix:{Input:"\u8bf7\u8f93\u5165",Radio:"\u8bf7\u9009\u62e9",Select:"\u8bf7\u9009\u62e9"}},a}return Object(l.a)(n,[{key:"componentWillReceiveProps",value:function(e){var t=e.formConfig;this.refs.form.setFieldsValue(t.setFieldValue)}},{key:"render",value:function(){return Object(I.jsxs)(E.a,Object(N.a)(Object(N.a)({layout:"inline",ref:"form",onFinish:this.onSubmit,initialValues:this.props.formConfig.initValue},this.props.formLayout),{},{children:[this.initFormItem(),Object(I.jsx)(E.a.Item,{children:Object(I.jsx)(r.a,{loading:this.state.loading,type:"primary",htmlType:"submit",children:"\u641c\u7d22"})})]}))}}]),n}(b.Component);H.defaultProps={formConfig:{}};var W=H,U=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).search=function(e){if(console.log(e),a.state.loadingTable)return!1;a.setState({keyWork:e.username,pageNumber:1,pageSize:10}),a.loadData()},a.loadData=function(){var e,t=a.state,n=t.pageNumber,r=t.pageSize,i=t.keyWork,s={url:a.props.config.url,method:a.props.config.method,data:{name:i,pageNumber:n,pageSize:r}};i&&(s.data.keyWork=i),(e=s,O.a.request({url:e.url,method:e.method||"post",data:e.data})).then((function(e){var t=e.data.data;t&&a.setState({data:t.data,total:t.total}),a.setState({loadingTable:!1})})).catch((function(e){a.setState({loadingTable:!1})}))},a.onChangePagesize=function(e,t){a.setState({pageNumber:1,pageSize:t},(function(){a.loadData()}))},a.onChangeCurrentPage=function(e){a.setState({pageNumber:e},(function(){a.loadData()}))},a.onHandleDelete=function(e){a.setState({visible:!0}),e&&a.setState({id:[e]})},a.handleOk=function(){Object(j.b)({id:a.state.id.join()}).then((function(e){c.a.info(e.data.message),a.setState({visible:!1,selectedRowKeys:[],id:""}),a.loadData()}))},a.handleCancel=function(){a.setState({visible:!1})},a.onCheckbox=function(e){},a.state={keyWork:"",data:[],pageNumber:1,pageSize:10,checkboxValue:[],rowkey:"id",loadingTable:!1,toal:0,visible:!1,id:""},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.loadData(),this.props.onRef(this)}},{key:"render",value:function(){var e=this.props.config,t=e.thead,n=e.checkbox,a=e.rowkey,r=e.formItem,i={onChange:this.onCheckbox};return Object(I.jsxs)(b.Fragment,{children:[Object(I.jsx)(W,{formItem:r,search:this.search}),Object(I.jsxs)("div",{className:"table-wrap",children:[Object(I.jsx)(F,{columns:t,data:this.state.data,total:this.state.total,loaddingTbale:this.state.loadingTable,bastchButton:!0,rowSelection:n?i:null,rowkey:a,onShowSizeChange:this.onChangePagesize,onChange:this.onChangeCurrentPage,onDelete:this.onHandleDelete}),Object(I.jsx)(p.a,{title:"\u63d0\u793a",visible:this.state.visible,okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onCancel:this.handleCancel,onOk:this.handleOk,children:Object(I.jsxs)("p",{children:["\u786e\u5b9a\u5220\u9664\u6b64\u9009\u9879\uff1f",Object(I.jsx)("strong",{children:"\u5220\u9664\u540e\u5c06\u65e0\u6cd5\u4fee\u590d"})]})})]})]})}}]),n}(b.Component);U.defaultProps={batchButton:!1,id:""};var B={departmentList:"department/list/"},K=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getChildRef=function(e){a.TableData=e},a.Delete=function(e){a.TableData.onHandleDelete(e)},a.onHandlerSwitch=function(e){if(!e.status)return!1;var t={id:e.id,status:"1"!==e.status};a.setState({id:e.id}),Object(j.a)(t).then((function(e){c.a.info(e.data.message),a.setState({id:""})})).catch((function(e){a.setState({id:""})}))},a.onCheckbox=function(e){a.setState({selectedRowKeys:e})},a.state={keyWork:"",data:[],visible:!0,id:"",flag:!0,loadingTable:!1,tableConfigs:{url:B.departmentList,checkbox:!0,rowkey:"id",method:"post",thead:[{title:"\u90e8\u95e8\u540d\u79f0",dataIndex:"name",key:"name"},{title:"\u7981\u542f\u7528",dataIndex:"status",key:"status",render:function(e,t){return Object(I.jsx)(s.a,{onChange:function(){return a.onHandlerSwitch(t)},loading:t.id===a.state.id,checkedChildren:"\u5f00\u542f",unCheckedChildren:"\u5173\u95ed",defaultChecked:e})}},{title:"\u4eba\u5458\u6570\u91cf",dataIndex:"number",key:"number"},{title:"\u64cd\u4f5c",dataIndex:"operation",key:"operation",width:215,render:function(e,t){return Object(I.jsxs)("div",{className:"inline-button",children:[Object(I.jsx)(r.a,{type:"primary",children:Object(I.jsx)(h.b,{to:{pathname:"/index/department/add",state:{id:t.id}},children:"\u7f16\u8f91"})}),Object(I.jsx)(r.a,{type:"danger",onClick:function(){return a.Delete(t.id)},children:"\u5220\u9664"})]})}}],formItem:[{type:"Input",label:"\u90e8\u95e8\u540d\u79f0",name:"name"},{type:"Radio",label:"\u7981\u542f\u7528",name:"status",options:[{label:"\u7981\u7528",value:!1},{label:"\u542f\u7528",value:!0}]}]},pageNumber:1,pageSize:10,selectedRowKeys:[]},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(I.jsx)(b.Fragment,{children:Object(I.jsx)(U,{onRef:this.getChildRef,config:this.state.tableConfigs})})}}]),n}(b.Component)},664:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(31),s=n.n(i),o=n(11),c=n(12),u=n(16),l=n(17),d=n(70),m=n(68),b=n(187),j=n(192),h=n(144),f=n(147),p=n(290),O=n(5),g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={},a}return Object(c.a)(n,[{key:"render",value:function(){return Object(O.jsx)(p.a,{store:f.a,children:Object(O.jsx)(d.a,{basename:"/ReactAdmin",children:Object(O.jsxs)(m.d,{children:[Object(O.jsx)(m.b,{exact:!0,render:function(){return Object(O.jsx)(b.default,{})},path:"/",basename:"/ReactAdmin"}),Object(O.jsx)(h.a,{component:j.default,path:"/index",basename:"/ReactAdmin"})]})})})}}]),n}(r.a.Component),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,670)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),i(e),s(e)}))};s.a.render(Object(O.jsx)(g,{}),document.getElementById("root")),v()},667:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return I}));n(88);var a=n(39),r=n.n(a),i=n(1),s=n(11),o=n(12),c=n(16),u=n(17),l=n(0),d=n(81),m=(n(54),n(35)),b=n.n(m),j=(n(176),n(77)),h=n.n(j),f=(n(250),n(145)),p=n.n(f),O=(n(116),n(29)),g=n.n(O),v=(n(107),n(46)),x=n.n(v),y=(n(177),n(76)),C=n.n(y),k=n(5),S=C.a.Option,w=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).rules=function(e){var t=[];return e.required&&t.push({required:!0,message:"\u4e0d\u80fd\u4e3a\u7a7a"}),e.rules&&e.rules.length>0&&(t=t.concat(e.rules)),t},a.inputItem=function(e){var t=a.rules(e);return Object(k.jsx)(g.a.Item,{label:e.label,name:e.name,rules:t,children:Object(k.jsx)(x.a,{})},e.name)},a.selectElem=function(e){var t=a.rules(e);return Object(k.jsx)(g.a.Item,{label:e.label,name:e.name,rules:t,children:Object(k.jsx)(C.a,{children:e.options&&e.options.map((function(e){return Object(k.jsx)(S,{value:e.value,children:e.label})}))})},e.name)},a.inputNumberElem=function(e){return Object(k.jsx)(g.a.Item,{label:e.label,name:e.name,children:Object(k.jsx)(p.a,{min:e.min,max:e.max})},e.name)},a.radioElem=function(e){return Object(k.jsx)(g.a.Item,{label:e.label,name:e.name,children:Object(k.jsx)(h.a.Group,{children:e.options&&e.options.map((function(e){return Object(k.jsx)(h.a,{value:e.value,children:e.label},e.value)}))})},e.name)},a.initformItem=function(){var e=a.props.formItem,t=[];return e.map((function(e){return"Input"===e.type&&t.push(a.inputItem(e)),"Select"===e.type&&t.push(a.selectElem(e)),"InputNumber"===e.type&&t.push(a.inputNumberElem(e)),"Radio"===e.type&&t.push(a.radioElem(e)),t})),t},a.onSubmit=function(e){if(a.props.submit)return a.props.submit(e),!1},a.state={},a}return Object(o.a)(n,[{key:"componentWillReceiveProps",value:function(e){var t=e.formConfig;this.refs.form.setFieldsValue(t.setFiledValue)}},{key:"render",value:function(){return Object(k.jsxs)(g.a,Object(i.a)(Object(i.a)({ref:"form",onFinish:this.onSubmit,initialValues:this.props.formConfig.initialValues},this.state.formLayout),{},{children:[this.initformItem(),Object(k.jsx)(g.a.Item,{children:Object(k.jsx)(b.a,{type:"primary",htmlType:"submit",loading:this.state.loading,children:"\u786e\u8ba4"})})]}))}}]),n}(l.Component),I=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).getDetailed=function(){if(!a.props.location.state)return!1;Object(d.c)({id:a.state.id}).then((function(e){a.setState({formConfig:Object(i.a)(Object(i.a)({},a.state.formConfig),{},{setFiledValue:e.data.data})})}))},a.onHandleEdit=function(e){var t=e;t.id=a.state.id,Object(d.d)(t).then((function(e){var t=e.data;r.a.info(t.message),a.setState({loading:!1})})).catch((function(e){a.setState({loading:!1})}))},a.onHandleAdd=function(e){var t=e;Object(d.e)(t).then((function(e){var t=e.data;r.a.info(t.message),a.setState({loading:!1})})).catch((function(e){a.setState({loading:!1})}))},a.onHandleSubmit=function(e){a.state.id?a.onHandleEdit(e):a.onHandleAdd(e)},a.state={loading:!1,formLayout:{labelCol:{span:2},wrapperCol:{span:20}},formConfig:{url:"/department/add",initialValues:{number:0,status:!0},setFiledValue:""},formItem:[{type:"Input",label:"\u90e8\u95e8\u540d\u79f0",name:"name",required:!0,rules:[{},{}]},{type:"InputNumber",label:"\u4eba\u5458\u6570\u91cf",name:"number",required:!0,min:0,max:100,placeholder:"\u8bf7\u8f93\u5165\u4eba\u5458\u6570\u91cf"},{type:"Radio",label:"\u7981\u542f\u7528",name:"status",required:!0,options:[{label:"\u7981\u7528",value:!1},{label:"\u542f\u7528",value:!0}]},{type:"Input",label:"\u63cf\u8ff0",name:"content"}],id:""},a}return Object(o.a)(n,[{key:"componentWillMount",value:function(){this.props.location.state&&this.setState({id:this.props.location.state.id})}},{key:"componentDidMount",value:function(){this.getDetailed()}},{key:"render",value:function(){return Object(k.jsx)(l.Fragment,{children:Object(k.jsx)(w,{formConfig:this.state.formConfig,formItem:this.state.formItem,submit:this.onHandleSubmit})})}}]),n}(l.Component)},79:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return l}));var a=n(113),r=n.n(a),i="adminToken",s="username";function o(e){return r.a.save(i,e)}function c(e){return r.a.load(i)}function u(e){return r.a.save(s,e)}function l(e){return r.a.load(s)}},81:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return c}));var a=n(50);function r(e){return a.a.request({url:"/department/add/",method:"post",data:e})}function i(e){return a.a.request({url:"/department/delete/",method:"post",data:e})}function s(e){return a.a.request({url:"/department/status/",method:"post",data:e})}function o(e){return a.a.request({url:"/department/detailed/",method:"post",data:e})}function c(e){return a.a.request({url:"/department/edit/",method:"post",data:e})}},97:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return o}));var a=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/,r=/^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,i=a;function s(e){return r.test(e)}function o(e){return a.test(e)}},98:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return s}));var a=n(50);function r(e){return a.a.request({url:"/login/",method:"post",data:e})}function i(e){return a.a.request({url:"/register/",method:"post",data:e})}function s(e){return a.a.request({url:"/getSms/",method:"post",data:e})}}},[[664,1,2]]]);
//# sourceMappingURL=main.30f629fb.chunk.js.map