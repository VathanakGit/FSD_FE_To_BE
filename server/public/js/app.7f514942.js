(function(t){function e(e){for(var r,s,c=e[0],i=e[1],u=e[2],p=0,f=[];p<c.length;p++)s=c[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("PostComponent")],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",[t._v("Latest Posts")]),n("div",{staticClass:"create-post"},[n("label",{attrs:{for:"create-post"}},[t._v("Say something...")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text",id:"create-post",placeholder:"Create a post"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),n("button",{on:{click:t.createPost}},[t._v("Post")])]),n("hr"),t.error?n("p",{staticClass:"error"},[t._v(t._s(t.error))]):t._e(),n("div",{staticClass:"posts-container"},t._l(t.posts,(function(e,r){return n("div",{key:e._id,staticClass:"post",attrs:{item:e,index:r},on:{dblclick:function(n){return t.deletePost(e._id)}}},[t._v(" "+t._s(e.createdAt.substring(0,10))+" "),n("p",{staticClass:"text"},[t._v(t._s(e.text))])])})),0)])},c=[],i=(n("96cf"),n("1da1")),u=n("d4ec"),l=n("bee2"),p=n("bc3a"),f=n.n(p),d="/api/posts/",v=function(){function t(){Object(u["a"])(this,t)}return Object(l["a"])(t,[{key:"getPosts",value:function(){return f.a.get(d)}},{key:"insertPost",value:function(t){return f.a.post(d,{text:t})}},{key:"deletePost",value:function(t){return f.a.delete("".concat(d).concat(t))}}]),t}(),h=v,b=new h,m={name:"PostComponent",data:function(){return{posts:[],error:"",text:""}},created:function(){var t=this;b.getPosts().then((function(e){t.posts=e.data}))},methods:{createPost:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b.insertPost(t.text);case 2:return t.text="",e.next=5,b.getPosts().then((function(e){t.posts=e.data}));case 5:case"end":return e.stop()}}),e)})))()},deletePost:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,b.deletePost(t);case 2:return n.next=4,b.getPosts().then((function(t){e.posts=t.data}));case 4:case"end":return n.stop()}}),n)})))()}}},g=m,x=(n("c2c2"),n("2877")),P=Object(x["a"])(g,s,c,!1,null,"e9e82736",null),y=P.exports,_={name:"App",components:{PostComponent:y}},w=_,O=(n("034f"),Object(x["a"])(w,o,a,!1,null,null,null)),j=O.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(j)}}).$mount("#app")},6487:function(t,e,n){},"85ec":function(t,e,n){},c2c2:function(t,e,n){"use strict";var r=n("6487"),o=n.n(r);o.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.7f514942.js.map