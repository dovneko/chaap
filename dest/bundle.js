!function t(e,n,r){function o(u,a){if(!n[u]){if(!e[u]){var s="function"==typeof require&&require;if(!a&&s)return s(u,!0);if(i)return i(u,!0);var c=new Error("Cannot find module '"+u+"'");throw c.code="MODULE_NOT_FOUND",c}var f=n[u]={exports:{}};e[u][0].call(f.exports,function(t){var n=e[u][1][t];return o(n?n:t)},f,f.exports,t,e,n,r)}return n[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(t,e,n){!function(r,o){"object"==typeof n&&"object"==typeof e?e.exports=o(t("riot")):"function"==typeof define&&define.amd?define(["riot"],o):"object"==typeof n?n.Router=o(t("riot")):r.Router=o(r.riot)}(this,function(t){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){var r,o,i;!function(u,a){o=[t,n(1),n(2)],r=a,i="function"==typeof r?r.apply(e,o):r,!(void 0!==i&&(t.exports=i))}(this,function(t,e,n){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t){var e=t.split("?"),n=e[0].split("/"),r=e[1],o={};return r&&r.split("&").forEach(function(t){var e=t.split("=");o[e[0]]=e[1]}),n.push(o),n}var a=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var u=o.get;return void 0!==u?u.call(r):void 0},c=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),f=console&&console.error||function(){},l=function(){function t(){i(this,t),e.router=this,e.observable(this),this.interceptors=[this.processRoute.bind(this)],this.handler=new g,this.current=new p("").response,this.process=this.process.bind(this)}return c(t,[{key:"route",value:function(t){this.handler=t}},{key:"routes",value:function(t){this.route((new g).routes(t))}},{key:"use",value:function(t){this.interceptors.push(t)}},{key:"process",value:function(){var t=Array.prototype.slice.call(arguments),e={},n=t.filter(function(t){return"string"==typeof t||(e=t,!1)}).join("/");"/"!==n[0]&&(n="/"+n);var r=new p(new x(n,e));return this.rootContext||(this.rootContext=r),this.processRequest(r),r}},{key:"processRequest",value:function(t){return this.processInterceptors(t),this.processResponse(t)}},{key:"processResponse",value:function(t){if(this.isRedirect(t))return this.processRedirect(t);var e=(t.request,t.response);return e.redirectTo?void 0:(this.current=e,this.rootContext=null,this.trigger("route:updated",e),t)}},{key:"isRedirect",value:function(t){return!!t.response.redirectTo}},{key:"processRedirect",value:function(t){var e=t.response.redirectTo;this.rootContext.addRedirect(e),this.navigateTo(e)}},{key:"navigateTo",value:function(t){e.route(t)}},{key:"processInterceptors",value:function(t,e,n){var r=(e||[]).concat(this.interceptors).concat(n||[]),o=function e(){if(!t.stop){var n=r.shift(),o=t.request,i=t.response;if(n)return n(o,i,e,t)}return t};return o()}},{key:"processRoute",value:function(t,e,n,r){return this.handler.process(t,e,r),n()}},{key:"start",value:function(){e.route.parser(u),e.route(this.process),e.route.start(),this.exec()}},{key:"exec",value:function(){e.route.exec(this.process)}}]),t}(),p=function(){function t(e){i(this,t),this.request="string"==typeof e?new x(e):e,this.response=new w(this.request),this.redirectStack=[]}return c(t,[{key:"addRedirect",value:function(t){if(this.redirectStack.indexOf(t)>-1)throw new Error("Cyclic redirection to "+t+". Stack = "+this.redirectStack);this.redirectStack.push(t)}}]),t}(),h=function(){function t(){i(this,t)}return c(t,[{key:"matches",value:function(t){return!1}},{key:"process",value:function(t,e){var n=this.matches(t);return n?this.routeMatch(t,e,n):this.routeMiss(t,e)}},{key:"routeMatch",value:function(t,e,n){return e.add(n),!0}},{key:"routeMiss",value:function(t,e){return!1}},{key:"processRoutes",value:function(t,e,n){if(n&&n.length){for(var r=n.length,o=0;o<r;o++){var i=n[o];if(i.process(t,e))return!0}return!1}}},{key:"createRequest",value:function(t,e){return new v(t,e)}}]),t}(),d=function(t){function e(t){i(this,e);var n=r(this,Object.getPrototypeOf(e).call(this,t));t=t||{},n.tag=t.tag,n.api=t.api,n.path=t.path,n.name=t.name,n.updatable=t.updatable,n.pathParameterNames=[];var o=n.getPath().replace(/^\//,"");return n.pattern="^/?"+o.replace(/:([^\/]+)/g,function(t,e){return this.pathParameterNames.push(e),"([^/]+)"}.bind(n))+"(:?/|$)",n.regex=new RegExp(n.pattern),n}return o(e,t),c(e,[{key:"routes",value:function(t){var e=t.filter(function(t){return t instanceof y}),n=t.filter(function(t){return t instanceof b}),r=t.filter(function(t){return t instanceof m}),o=t.filter(function(t){return e.indexOf(t)===-1&&n.indexOf(t)===-1&&r.indexOf(t)===-1});return r.length>1&&f("Can't use more than one NotFoundRoute per route. --> "+this.getPath()),n.length>1&&f("Can't use more than one DefaultRoute per route. --> "+this.getPath()),this._routes=[].concat(e).concat(o).concat(n).concat(r),this}},{key:"matches",value:function(t){var e=this.regex.exec(t.uri);if(e){var n={};for(var r in this.pathParameterNames)if(this.pathParameterNames.hasOwnProperty(r)){var o=this.pathParameterNames[r];n[o]=decodeURIComponent(e[parseInt(r,10)+1])}return{route:this,tag:this.tag,api:this.api,found:e[0],params:n}}return!1}},{key:"routeMatch",value:function(t,n,r){var o=s(Object.getPrototypeOf(e.prototype),"routeMatch",this).call(this,t,n,r);return this.processRoutes(t,n,r),o}},{key:"processRoutes",value:function(t,n,r){return s(Object.getPrototypeOf(e.prototype),"processRoutes",this).call(this,this.createRequest(t,r),n,this._routes)}},{key:"getPath",value:function(){return this.name||this.path||("string"==typeof this.tag?this.tag:"")}}]),e}(h),g=function(t){function e(){return i(this,e),r(this,Object.getPrototypeOf(e).apply(this,arguments))}return o(e,t),e}(d),v=function t(e,n){i(this,t),this.request=e,this.matcher=n,this.uri=this.request.uri.substring(n.found.length),this.parentUri=this.request.uri.substring(0,n.found.length),this.query=this.request.query},m=function(t){function e(t){i(this,e);var n=r(this,Object.getPrototypeOf(e).call(this,t));return t=t||{},n.tag=t.tag,n.api=t.api,n}return o(e,t),c(e,[{key:"matches",value:function(t){return{route:this,tag:this.tag,api:this.api,found:t.uri}}}]),e}(h),y=function(t){function e(t){i(this,e);var n=r(this,Object.getPrototypeOf(e).call(this,t));return t=t||{},n.from=t.from,n.to=t.to,n.pattern="(^/?)"+n.from+"(/|$)",n.regex=new RegExp(n.pattern),n}return o(e,t),c(e,[{key:"process",value:function(t,e){var n=t.uri.replace(this.regex,"$1"+this.to+"$2");if(n!==t.uri){var r=t.parentUri||"";return e.redirectTo=r+n,!0}}}]),e}(h),b=function(t){function e(t){i(this,e);var n=r(this,Object.getPrototypeOf(e).call(this,t));return t=t||{},n.tag=t.tag,n.api=t.api,n}return o(e,t),c(e,[{key:"matches",value:function(t){var e=t.uri.trim();if("/"===e||""===e)return{route:this,tag:this.tag,api:this.api,found:e}}}]),e}(h),x=function t(e,n){i(this,t),this.uri=e,this.query=n},w=function(){function t(e){i(this,t),this.uri=e.uri,this.matches=[],this.params={},this.query=e.query}return c(t,[{key:"add",value:function(t){this.matches.push(t);var e=t.params;if(e)for(var n in e)e.hasOwnProperty(n)&&(this.params[n]=e[n])}},{key:"get",value:function(t){return this.matches[t]}},{key:"size",value:function(){return this.matches.length}},{key:"isEmpty",value:function(){return this.matches.length}}]),t}();e.tag("route","<router-content></router-content>",function(t){this.calculateLevel=function(t){var e=0;return t.parent&&(e+=this.calculateLevel(t.parent)),t.opts.__router_level&&(e+=t.opts.__router_level),t.__router_tag&&(e+=1),e}.bind(this),this.normalizeTag=function(t,e,n){var r=t(e,n);return"string"==typeof r?t=r:(t=r.tag||t,e=r.api||e),[t,e,n]},this.unmountTag=function(){this.instance&&this.instance.unmount(!0)},this.mountTag=function(t,n,r){if("function"==typeof t){var o=this.normalizeTag(t,n,r),i=a(o,3);t=i[0],n=i[1],r=i[2]}this.canUpdate(t,n,r)?this.instance.update(n):(this.unmountTag(),t&&(this.root.replaceChild(document.createElement(t),this.root.children[0]),this.instance=e.mount(this.root.children[0],t,n)[0],this.instanceTag=t,this.instanceApi=n))},this.canUpdate=function(n,r,o){return!!((e.router.config.updatable||t.updatable||o.updatable)&&this.instance&&this.instance.isMounted&&this.instanceTag===n)},this.updateRoute=function(){var r={tag:null};if(e.router&&e.router.current){var o=e.router.current;if(this.level<=o.size()){var i=o.get(this.level);if(i){var u=i.params||{},a=o.query||{},s=n(!0,{},t,a,i.api,u,{__router_level:this.level,query:a});r={tag:i.tag,api:s,updatable:i.route.updatable}}}}r.tag?this.mountTag(r.tag,r.api,r):this.unmountTag()}.bind(this),this.__router_tag="route",this.level=this.calculateLevel(this),e.router.on("route:updated",this.updateRoute),this.on("unmount",function(){e.router.off("route:updated",this.updateRoute),this.unmountTag()}.bind(this)),this.on("mount",function(){this.updateRoute()}.bind(this))});var _=new l;_.Route=d,_.DefaultRoute=b,_.RedirectRoute=y,_.NotFoundRoute=m,_._={Response:w,Request:x},_.config={updatable:!1},e.router=_,t.exports=_})},function(e,n){e.exports=t},function(t,e){"use strict";var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString,o=function(t){return"function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===r.call(t)},i=function(t){if(!t||"[object Object]"!==r.call(t))return!1;var e=n.call(t,"constructor"),o=t.constructor&&t.constructor.prototype&&n.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!e&&!o)return!1;var i;for(i in t);return"undefined"==typeof i||n.call(t,i)};t.exports=function t(){var e,n,r,u,a,s,c=arguments[0],f=1,l=arguments.length,p=!1;for("boolean"==typeof c?(p=c,c=arguments[1]||{},f=2):("object"!=typeof c&&"function"!=typeof c||null==c)&&(c={});f<l;++f)if(e=arguments[f],null!=e)for(n in e)r=c[n],u=e[n],c!==u&&(p&&u&&(i(u)||(a=o(u)))?(a?(a=!1,s=r&&o(r)?r:[]):s=r&&i(r)?r:{},c[n]=t(p,s,u)):"undefined"!=typeof u&&(c[n]=u));return c}}])})},{riot:2}],2:[function(t,e,n){!function(t,r){"use strict";function o(t,e,n){var r={};return r[t.key]=e,t.pos&&(r[t.pos]=n),r}function i(t,e){for(var n,r=e.length,o=t.length;r>o;)n=e[--r],e.splice(r,1),n.unmount()}function u(t,e){Object.keys(t.tags).forEach(function(n){var r=t.tags[n];A(r)?v(r,function(t){C(t,n,e)}):C(r,n,e)})}function a(t,e,n){var r,o=t._root;for(t._virts=[];o;)r=o.nextSibling,n?e.insertBefore(o,n._root):e.appendChild(o),t._virts.push(o),o=r}function s(t,e,n,r){for(var o,i=t._root,u=0;u<r;u++)o=i.nextSibling,e.insertBefore(i,n._root),i=o}function c(t,e,n){_(t,"each");var r,c=typeof R(t,"no-reorder")!==rt||_(t,"no-reorder"),f=M(t),l=J[f]||{tmpl:y(t)},h=at.test(f),d=t.parentNode,g=document.createTextNode(""),v=N(t),m="option"===f.toLowerCase(),b=[],x=[],w="VIRTUAL"==t.tagName;n=ht.loopKeys(n),d.insertBefore(g,t),e.one("before-mount",function(){t.parentNode.removeChild(t),d.stub&&(d=e.root)}).on("update",function(){var y=ht(n.val,e),_=document.createDocumentFragment();A(y)||(r=y||!1,y=r?Object.keys(y).map(function(t){return o(n,t,y[t])}):[]);for(var O=0,R=y.length;O<R;O++){var k=y[O],N=c&&typeof k==ot&&!r,T=x.indexOf(k),C=~T&&N?T:O,j=b[C];k=!r&&n.key?o(n,k,O):k,!N&&!j||N&&!~T||!j?(j=new p(l,{parent:e,isLoop:!0,hasImpl:!!J[f],root:h?d:t.cloneNode(),item:k},t.innerHTML),j.mount(),w&&(j._root=j.root.firstChild),O!=b.length&&b[O]?(w?a(j,d,b[O]):d.insertBefore(j.root,b[O].root),x.splice(O,0,k)):w?a(j,_):_.appendChild(j.root),b.splice(O,0,j),C=O):j.update(k,!0),C!==O&&N&&b[O]&&(w?s(j,d,b[O],t.childNodes.length):d.insertBefore(j.root,b[O].root),n.pos&&(j[n.pos]=O),b.splice(O,0,b.splice(C,1)[0]),x.splice(O,0,x.splice(C,1)[0]),!v&&j.tags&&u(j,O)),j._item=k,L(j,"_parent",e)}if(i(y,b),d.insertBefore(_,g),m&&lt&&!d.multiple)for(var E=0;E<d.length;E++)if(d[E].__riot1374){d.selectedIndex=E,delete d[E].__riot1374;break}v&&(e.tags[f]=b),x=y.slice()})}function f(t,e,n,r){I(t,function(t){if(1==t.nodeType){if(t.isLoop=t.isLoop||t.parentNode&&t.parentNode.isLoop||R(t,"each")?1:0,n){var o=N(t);o&&!t.isLoop&&n.push(j(o,{root:t,parent:e},t.innerHTML,e))}t.isLoop&&!r||G(t,e,[])}})}function l(t,e,n){function r(t,e,r){ht.hasExpr(e)&&n.push(S({dom:t,expr:e},r))}I(t,function(t){var n,o=t.nodeType;if(3==o&&"STYLE"!=t.parentNode.tagName&&r(t,t.nodeValue),1==o)return(n=R(t,"each"))?(c(t,e,n),!1):(v(t.attributes,function(e){var n=e.name,o=n.split("__")[1];if(r(t,e.value,{attr:o||n,bool:o}),o)return _(t,n),!1}),!N(t)&&void 0)})}function p(t,e,n){function o(){var t=b&&y?p:d||p;v(T.attributes,function(e){var n=e.value;h[O(e.name)]=ht.hasExpr(n)?ht(n,t):n}),v(Object.keys(j),function(e){h[O(e)]=ht(j[e],t)})}function i(t){for(var e in x)typeof p[e]!==it&&q(p,e)&&(p[e]=t[e])}function u(){p.parent&&y&&v(Object.keys(p.parent),function(t){var e=!st.test(t)&&P(M,t);(typeof p[t]===it||e)&&(e||M.push(t),p[t]=p.parent[t])})}function a(t){p.update(t,!0)}function s(t){if(v(N,function(e){e[t?"mount":"unmount"]()}),d){var e=t?"on":"off";y?d[e]("unmount",p.unmount):d[e]("update",a)[e]("unmount",p.unmount)}}var c,p=Q.observable(this),h=U(e.opts)||{},d=e.parent,y=e.isLoop,b=e.hasImpl,x=$(e.item),R=[],N=[],T=e.root,C=T.tagName.toLowerCase(),j={},M=[];t.name&&T._tag&&T._tag.unmount(!0),this.isMounted=!1,T.isLoop=y,T._tag=this,L(this,"_riot_id",++X),S(this,{parent:d,root:T,opts:h},x),L(this,"tags",{}),v(T.attributes,function(t){var e=t.value;ht.hasExpr(e)&&(j[t.name]=e)}),c=dt(t.tmpl,n),L(this,"update",function(t,e){return t=$(t),u(),t&&w(x)&&(i(t),x=t),S(p,t),o(),p.trigger("update",t),g(R,p),e&&p.parent?p.parent.one("updated",function(){p.trigger("updated")}):vt(function(){p.trigger("updated")}),this}),L(this,"mixin",function(){return v(arguments,function(t){var e,n,r=[];t=typeof t===rt?Q.mixin(t):t,e=m(t)?new t:t;do r=r.concat(Object.getOwnPropertyNames(n||e));while(n=Object.getPrototypeOf(n||e));v(r,function(t){"init"==t||p[t]||(p[t]=m(e[t])?e[t].bind(p):e[t])}),e.init&&e.init.bind(p)()}),this}),L(this,"mount",function(){o();var e=Q.mixin(W);if(e)for(var n in e)e.hasOwnProperty(n)&&p.mixin(e[n]);if(t.fn&&t.fn.call(p,h),l(c,p,R),s(!0),t.attrs&&D(t.attrs,function(t,e){k(T,t,e)}),(t.attrs||b)&&l(p.root,p,R),p.parent&&!y||p.update(x),p.trigger("before-mount"),y&&!b)T=c.firstChild;else{for(;c.firstChild;)T.appendChild(c.firstChild);T.stub&&(T=d.root)}L(p,"root",T),y&&f(p.root,p.parent,null,!0),!p.parent||p.parent.isMounted?(p.isMounted=!0,p.trigger("mount")):p.parent.one("mount",function(){F(p.root)||(p.parent.isMounted=p.isMounted=!0,p.trigger("mount"))})}),L(this,"unmount",function(t){var e,n=T,o=n.parentNode,i=Y.indexOf(p);if(p.trigger("before-unmount"),~i&&Y.splice(i,1),o){if(d)e=E(d),A(e.tags[C])?v(e.tags[C],function(t,n){t._riot_id==p._riot_id&&e.tags[C].splice(n,1)}):e.tags[C]=r;else for(;n.firstChild;)n.removeChild(n.firstChild);t?(_(o,nt),_(o,et)):o.removeChild(n)}this._virts&&v(this._virts,function(t){t.parentNode&&t.parentNode.removeChild(t)}),p.trigger("unmount"),s(),p.off("*"),p.isMounted=!1,delete T._tag}),f(c,this,N)}function h(e,n,r,o){r[e]=function(e){var i,u=o._parent,a=o._item;if(!a)for(;u&&!a;)a=u._item,u=u._parent;e=e||t.event,q(e,"currentTarget")&&(e.currentTarget=r),q(e,"target")&&(e.target=e.srcElement),q(e,"which")&&(e.which=e.charCode||e.keyCode),e.item=a,n.call(o,e)===!0||/radio|check/.test(r.type)||(e.preventDefault&&e.preventDefault(),e.returnValue=!1),e.preventUpdate||(i=a?E(u):o,i.update())}}function d(t,e,n){t&&(t.insertBefore(n,e),t.removeChild(e))}function g(t,e){v(t,function(t,n){var r=t.dom,o=t.attr,i=ht(t.expr,e),u=t.dom.parentNode;if(t.bool?i=!!i:null==i&&(i=""),t.value!==i){if(t.value=i,!o)return i+="",void(u&&("TEXTAREA"===u.tagName?(u.value=i,ft||(r.nodeValue=i)):r.nodeValue=i));if("value"===o)return void(r.value=i);if(_(r,o),m(i))h(o,i,r,e);else if("if"==o){var a=t.stub,s=function(){d(a.parentNode,a,r)},c=function(){d(r.parentNode,r,a)};i?a&&(s(),r.inStub=!1,F(r)||I(r,function(t){t._tag&&!t._tag.isMounted&&(t._tag.isMounted=!!t._tag.trigger("mount"))})):(a=t.stub=a||document.createTextNode(""),r.parentNode?c():(e.parent||e).one("updated",c),r.inStub=!0)}else"show"===o?r.style.display=i?"":"none":"hide"===o?r.style.display=i?"none":"":t.bool?(r[o]=i,i&&k(r,o,o),lt&&"selected"===o&&"OPTION"===r.tagName&&(r.__riot1374=i)):(0===i||i&&typeof i!==ot)&&(V(o,tt)&&o!=et&&(o=o.slice(tt.length)),k(r,o,i))}})}function v(t,e){for(var n,r=t?t.length:0,o=0;o<r;o++)n=t[o],null!=n&&e(n,o)===!1&&o--;return t}function m(t){return typeof t===ut||!1}function y(t){if(t.outerHTML)return t.outerHTML;var e=H("div");return e.appendChild(t.cloneNode(!0)),e.innerHTML}function b(t,e){if(typeof t.innerHTML!=it)t.innerHTML=e;else{var n=(new DOMParser).parseFromString(e,"application/xml");t.appendChild(t.ownerDocument.importNode(n.documentElement,!0))}}function x(t){return~ct.indexOf(t)}function w(t){return t&&typeof t===ot}function _(t,e){t.removeAttribute(e)}function O(t){return t.replace(/-(\w)/g,function(t,e){return e.toUpperCase()})}function R(t,e){return t.getAttribute(e)}function k(t,e,n){t.setAttribute(e,n)}function N(t){return t.tagName&&J[R(t,nt)||R(t,et)||t.tagName.toLowerCase()]}function T(t,e,n){var r=n.tags[e];r?(A(r)||r!==t&&(n.tags[e]=[r]),P(n.tags[e],t)||n.tags[e].push(t)):n.tags[e]=t}function C(t,e,n){var r,o=t.parent;o&&(r=o.tags[e],A(r)?r.splice(n,0,r.splice(r.indexOf(t),1)[0]):T(t,e,o))}function j(t,e,n,r){var o=new p(t,e,n),i=M(e.root),u=E(r);return o.parent=u,o._parent=r,T(o,i,u),u!==r&&T(o,i,r),e.root.innerHTML="",o}function E(t){for(var e=t;!N(e.root)&&e.parent;)e=e.parent;return e}function L(t,e,n,r){return Object.defineProperty(t,e,S({value:n,enumerable:!1,writable:!1,configurable:!0},r)),t}function M(t){var e=N(t),n=R(t,"name"),r=n&&!ht.hasExpr(n)?n:e?e.name:t.tagName.toLowerCase();return r}function S(t){for(var e,n=arguments,r=1;r<n.length;++r)if(e=n[r])for(var o in e)q(t,o)&&(t[o]=e[o]);return t}function P(t,e){return~t.indexOf(e)}function A(t){return Array.isArray(t)||t instanceof Array}function q(t,e){var n=Object.getOwnPropertyDescriptor(t,e);return typeof t[e]===it||n&&n.writable}function $(t){if(!(t instanceof p||t&&typeof t.trigger==ut))return t;var e={};for(var n in t)st.test(n)||(e[n]=t[n]);return e}function I(t,e){if(t){if(e(t)===!1)return;for(t=t.firstChild;t;)I(t,e),t=t.nextSibling}}function D(t,e){for(var n,r=/([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g;n=r.exec(t);)e(n[1].toLowerCase(),n[2]||n[3]||n[4])}function F(t){for(;t;){if(t.inStub)return!0;t=t.parentNode}return!1}function H(t,e){return e?document.createElementNS("http://www.w3.org/2000/svg","svg"):document.createElement(t)}function z(t,e){return(e||document).querySelectorAll(t)}function B(t,e){return(e||document).querySelector(t)}function U(t){function e(){}return e.prototype=t,new e}function K(t){return R(t,"id")||R(t,"name")}function G(t,e,n){var r,o=K(t),i=function(i){P(n,o)||(r=A(i),i?(!r||r&&!P(i,t))&&(r?i.push(t):e[o]=[i,t]):e[o]=t)};o&&(ht.hasExpr(o)?e.one("mount",function(){o=K(t),i(e[o])}):i(e[o]))}function V(t,e){return t.slice(0,e.length)===e}function Z(t,e,n){var r=J[e],o=t._innerHTML=t._innerHTML||t.innerHTML;return t.innerHTML="",r&&t&&(r=new p(r,{root:t,opts:n},o)),r&&r.mount&&(r.mount(),P(Y,r)||Y.push(r)),r}var Q={version:"v2.5.0",settings:{}},X=0,Y=[],J={},W="__global_mixin",tt="riot-",et=tt+"tag",nt="data-is",rt="string",ot="object",it="undefined",ut="function",at=/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/,st=/^(?:_(?:item|id|parent)|update|root|(?:un)?mount|mixin|is(?:Mounted|Loop)|tags|parent|opts|trigger|o(?:n|ff|ne))$/,ct=["altGlyph","animate","animateColor","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","filter","font","foreignObject","g","glyph","glyphRef","image","line","linearGradient","marker","mask","missing-glyph","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tref","tspan","use"],ft=0|(t&&t.document||{}).documentMode,lt=t&&!!t.InstallTrigger;Q.observable=function(t){function e(t,e){for(var n,r,o=t.split(" "),i=o.length,u=0;u<i;u++)n=o[u],r=n.indexOf("."),n&&e(~r?n.substring(0,r):n,u,~r?n.slice(r+1):null)}t=t||{};var n={},r=Array.prototype.slice;return Object.defineProperties(t,{on:{value:function(r,o){return"function"!=typeof o?t:(e(r,function(t,e,r){(n[t]=n[t]||[]).push(o),o.typed=e>0,o.ns=r}),t)},enumerable:!1,writable:!1,configurable:!1},off:{value:function(r,o){return"*"!=r||o?e(r,function(t,e,r){if(o||r)for(var i,u=n[t],a=0;i=u&&u[a];++a)(i==o||r&&i.ns==r)&&u.splice(a--,1);else delete n[t]}):n={},t},enumerable:!1,writable:!1,configurable:!1},one:{value:function(e,n){function r(){t.off(e,r),n.apply(t,arguments)}return t.on(e,r)},enumerable:!1,writable:!1,configurable:!1},trigger:{value:function(o){for(var i,u=arguments.length-1,a=new Array(u),s=0;s<u;s++)a[s]=arguments[s+1];return e(o,function(e,o,u){i=r.call(n[e]||[],0);for(var s,c=0;s=i[c];++c)s.busy||(s.busy=1,u&&s.ns!=u||s.apply(t,s.typed?[e].concat(a):a),i[c]!==s&&c--,s.busy=0);n["*"]&&"*"!=e&&t.trigger.apply(t,["*",e].concat(a))}),t},enumerable:!1,writable:!1,configurable:!1}}),t},function(e){function n(t){return t.split(/[\/?#]/)}function r(t,e){var n=new RegExp("^"+e[R](/\*/g,"([^/?#]+?)")[R](/\.\./,".*")+"$"),r=t.match(n);if(r)return r.slice(1)}function o(t,e){var n;return function(){clearTimeout(n),n=setTimeout(t,e)}}function i(t){d=o(l,1),j[_](k,d),j[_](N,d),E[_](P,p),t&&l(!0)}function u(){this.$=[],e.observable(this),q.on("stop",this.s.bind(this)),q.on("emit",this.e.bind(this))}function a(t){return t[R](/^\/|\/$/,"")}function s(t){return"string"==typeof t}function c(t){return(t||M.href)[R](b,"")}function f(t){return"#"==g[0]?(t||M.href||"").split(g)[1]||"":(M?c(t):t||"")[R](g,"")}function l(t){var e=0==D;if(!(C<=D)&&(D++,I.push(function(){var e=f();(t||e!=v)&&(q[T]("emit",e),v=e)}),e)){for(;I.length;)I[0](),I.shift();D=0}}function p(t){if(!(1!=t.which||t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){for(var e=t.target;e&&"A"!=e.nodeName;)e=e.parentNode;!e||"A"!=e.nodeName||e[O]("download")||!e[O]("href")||e.target&&"_self"!=e.target||e.href.indexOf(M.href.match(b)[0])==-1||(e.href==M.href||e.href.split("#")[0]!=M.href.split("#")[0]&&("#"==g||0===c(e.href).indexOf(g))&&h(f(e.href),e.title||E.title))&&t.preventDefault()}}function h(t,e,n){return L?(t=g+a(t),e=e||E.title,n?L.replaceState(null,e,t):L.pushState(null,e,t),E.title=e,$=!1,l(),$):q[T]("emit",f(t))}var d,g,v,m,y,b=/^.+?\/\/+[^\/]+/,x="EventListener",w="remove"+x,_="add"+x,O="hasAttribute",R="replace",k="popstate",N="hashchange",T="trigger",C=3,j="undefined"!=typeof t&&t,E="undefined"!=typeof document&&document,L=j&&history,M=j&&(L.location||j.location),S=u.prototype,P=E&&E.ontouchstart?"touchstart":"click",A=!1,q=e.observable(),$=!1,I=[],D=0;S.m=function(t,e,n){!s(t)||e&&!s(e)?e?this.r(t,e):this.r("@",t):h(t,e,n||!1)},S.s=function(){this.off("*"),this.$=[]},S.e=function(t){this.$.concat("@").some(function(e){var n=("@"==e?m:y)(a(t),a(e));if("undefined"!=typeof n)return this[T].apply(null,[e].concat(n)),$=!0},this)},S.r=function(t,e){"@"!=t&&(t="/"+a(t),this.$.push(t)),this.on(t,e)};var F=new u,H=F.m.bind(F);H.create=function(){var t=new u,e=t.m.bind(t);return e.stop=t.s.bind(t),e},H.base=function(t){g=t||"#",v=f()},H.exec=function(){l(!0)},H.parser=function(t,e){t||e||(m=n,y=r),t&&(m=t),e&&(y=e)},H.query=function(){var t={},e=M.href||v;return e[R](/[?&](.+?)=([^&]*)/g,function(e,n,r){t[n]=r}),t},H.stop=function(){A&&(j&&(j[w](k,d),j[w](N,d),E[w](P,p)),q[T]("stop"),A=!1)},H.start=function(t){A||(j&&("complete"==document.readyState?i(t):j[_]("load",function(){setTimeout(function(){i(t)},1)})),A=!0)},H.base(),H.parser(),e.route=H}(Q);var pt=function(t){function e(t){return t}function n(t,e){return e||(e=m),new RegExp(t.source.replace(/{/g,e[2]).replace(/}/g,e[3]),t.global?c:"")}function r(t){if(t===d)return g;var e=t.split(" ");if(2!==e.length||/[\x00-\x1F<>a-zA-Z0-9'",;\\]/.test(t))throw new Error('Unsupported brackets "'+t+'"');return e=e.concat(t.replace(/(?=[[\]()*+?.^$|])/g,"\\").split(" ")),e[4]=n(e[1].length>1?/{[\S\s]*?}/:g[4],e),e[5]=n(t.length>3?/\\({|})/g:g[5],e),e[6]=n(g[6],e),e[7]=RegExp("\\\\("+e[3]+")|([[({])|("+e[3]+")|"+p,c),e[8]=t,e}function o(t){return t instanceof RegExp?a(t):m[t]}function i(t){(t||(t=d))!==m[8]&&(m=r(t),a=t===d?e:n,m[9]=a(g[9])),v=t}function u(t){var e;t=t||{},e=t.brackets,Object.defineProperty(t,"brackets",{set:i,get:function(){return v},enumerable:!0}),s=t,i(e)}var a,s,c="g",f=/\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,l=/"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'/g,p=l.source+"|"+/(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source+"|"+/\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?(\/)[gim]*/.source,h={"(":RegExp("([()])|"+p,c),"[":RegExp("([[\\]])|"+p,c),"{":RegExp("([{}])|"+p,c)},d="{ }",g=["{","}","{","}",/{[^}]*}/,/\\([{}])/g,/\\({)|{/g,RegExp("\\\\(})|([[({])|(})|"+p,c),d,/^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/,/(^|[^\\]){=[\S\s]*?}/],v=t,m=[];return o.split=function(t,e,n){function r(t){e||u?c.push(t&&t.replace(n[5],"$1")):c.push(t)}function o(t,e,n){var r,o=h[e];for(o.lastIndex=n,n=1;(r=o.exec(t))&&(!r[1]||(r[1]===e?++n:--n)););return n?t.length:o.lastIndex}n||(n=m);var i,u,a,s,c=[],f=n[6];for(u=a=f.lastIndex=0;i=f.exec(t);){if(s=i.index,u){if(i[2]){f.lastIndex=o(t,i[2],f.lastIndex);continue}if(!i[3])continue}i[1]||(r(t.slice(a,s)),a=f.lastIndex,f=n[6+(u^=1)],f.lastIndex=a)}return t&&a<t.length&&r(t.slice(a)),c},o.hasExpr=function(t){return m[4].test(t)},o.loopKeys=function(t){var e=t.match(m[9]);return e?{key:e[1],pos:e[2],val:m[0]+e[3].trim()+m[1]}:{val:t.trim()}},o.array=function(t){return t?r(t):m},Object.defineProperty(o,"settings",{set:u,get:function(){return s}}),o.settings="undefined"!=typeof Q&&Q.settings||{},o.set=i,o.R_STRINGS=l,o.R_MLCOMMS=f,o.S_QBLOCKS=p,o}(),ht=function(){function e(t,e){return t?(a[t]||(a[t]=r(t))).call(e,n):t}function n(t,n){e.errorHandler&&(t.riotData={tagName:n&&n.root&&n.root.tagName,_riot_id:n&&n._riot_id},e.errorHandler(t))}function r(t){var e=o(t);return"try{return "!==e.slice(0,11)&&(e="return "+e),new Function("E",e+";")}function o(t){var e,n=[],r=pt.split(t.replace(l,'"'),1);if(r.length>2||r[0]){var o,u,a=[];for(o=u=0;o<r.length;++o)e=r[o],e&&(e=1&o?i(e,1,n):'"'+e.replace(/\\/g,"\\\\").replace(/\r\n?|\n/g,"\\n").replace(/"/g,'\\"')+'"')&&(a[u++]=e);e=u<2?a[0]:"["+a.join(",")+'].join("")'}else e=i(r[1],0,n);return n[0]&&(e=e.replace(p,function(t,e){return n[e].replace(/\r/g,"\\r").replace(/\n/g,"\\n")})),e}function i(t,e,n){function r(e,n){var r,o=1,i=h[e];for(i.lastIndex=n.lastIndex;r=i.exec(t);)if(r[0]===e)++o;else if(!--o)break;n.lastIndex=o?t.length:i.lastIndex}if(t=t.replace(f,function(t,e){return t.length>2&&!e?s+(n.push(t)-1)+"~":t}).replace(/\s+/g," ").trim().replace(/\ ?([[\({},?\.:])\ ?/g,"$1")){for(var o,i=[],a=0;t&&(o=t.match(c))&&!o.index;){var l,p,d=/,|([[{(])|$/g;for(t=RegExp.rightContext,l=o[2]?n[o[2]].slice(1,-1).trim().replace(/\s+/g," "):o[1];p=(o=d.exec(t))[1];)r(p,d);p=t.slice(0,o.index),t=RegExp.rightContext,i[a++]=u(p,1,l)}t=a?a>1?"["+i.join(",")+'].join(" ").trim()':i[0]:u(t,e)}return t}function u(t,e,n){var r;return t=t.replace(g,function(t,e,n,o,i){return n&&(o=r?0:o+t.length,"this"!==n&&"global"!==n&&"window"!==n?(t=e+'("'+n+d+n,o&&(r="."===(i=i[o])||"("===i||"["===i)):o&&(r=!v.test(i.slice(o)))),t}),r&&(t="try{return "+t+"}catch(e){E(e,this)}"),n?t=(r?"function(){"+t+"}.call(this)":"("+t+")")+'?"'+n+'":""':e&&(t="function(v){"+(r?t.replace("return ","v="):"v=("+t+")")+';return v||v===0?v:""}.call(this)'),t}var a={};e.haveRaw=pt.hasRaw,e.hasExpr=pt.hasExpr,e.loopKeys=pt.loopKeys,e.errorHandler=null;var s="⁗",c=/^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\u2057(\d+)~):/,f=RegExp(pt.S_QBLOCKS,"g"),l=/\u2057/g,p=/\u2057(\d+)~/g,h={"(":/[()]/g,"[":/[[\]]/g,"{":/[{}]/g},d='"in this?this:'+("object"!=typeof t?"global":"window")+").",g=/[,{][$\w]+:|(^ *|[^$\w\.])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,v=/^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;return e.parse=function(t){return t},e.version=pt.version="v2.4.0",e}(),dt=function t(){function t(t,r){var o=t&&t.match(/^\s*<([-\w]+)/),i=o&&o[1].toLowerCase(),u=H("div",x(i));return t=n(t,r),s.test(i)?u=e(u,t,i):b(u,t),u.stub=!0,u}function e(t,e,n){var r="o"===n[0],o=r?"select>":"table>";if(t.innerHTML="<"+o+e.trim()+"</"+o,o=t.firstChild,r)o.selectedIndex=-1;else{var i=a[n];i&&1===o.childElementCount&&(o=B(i,o))}return o}function n(t,e){if(!r.test(t))return t;var n={};return e=e&&e.replace(i,function(t,e,r){return n[e]=n[e]||r,""}).trim(),t.replace(u,function(t,e,r){return n[e]||r||""}).replace(o,function(t,n){return e||n||""})}var r=/<yield\b/i,o=/<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>|>)/gi,i=/<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/gi,u=/<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/gi,a={tr:"tbody",th:"tr",td:"tr",col:"colgroup"},s=ft&&ft<10?at:/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/;return t}(),gt=function(e){if(!t)return{add:function(){},inject:function(){}};var n=function(){var t=H("style");k(t,"type","text/css");var e=B("style[type=riot]");return e?(e.id&&(t.id=e.id),e.parentNode.replaceChild(t,e)):document.getElementsByTagName("head")[0].appendChild(t),t}(),r=n.styleSheet,o="";return Object.defineProperty(e,"styleNode",{value:n,writable:!0}),{add:function(t){o+=t},inject:function(){o&&(r?r.cssText+=o:n.innerHTML+=o,o="")}}}(Q),vt=function(t){var e=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame;if(!e||/iP(ad|hone|od).*OS 6/.test(t.navigator.userAgent)){var n=0;e=function(t){var e=Date.now(),r=Math.max(16-(e-n),0);setTimeout(function(){t(n=e+r)},r)}}return e}(t||{});Q.util={brackets:pt,tmpl:ht},Q.mixin=function(){var t={},e=t[W]={},n=0;return function(r,o,i){if(w(r))return void Q.mixin("__unnamed_"+n++,r,!0);var u=i?e:t;if(!o){if(typeof u[r]===it)throw new Error("Unregistered mixin: "+r);return u[r]}m(o)?(S(o.prototype,u[r]||{}),u[r]=o):u[r]=S(u[r]||{},o)}}(),Q.tag=function(t,e,n,r,o){return m(r)&&(o=r,/^[\w\-]+\s?=/.test(n)?(r=n,n=""):r=""),n&&(m(n)?o=n:gt.add(n)),t=t.toLowerCase(),J[t]={name:t,tmpl:e,attrs:r,fn:o},t},Q.tag2=function(t,e,n,r,o){return n&&gt.add(n),J[t]={name:t,tmpl:e,attrs:r,fn:o},t},Q.mount=function(t,e,n){function r(t){var e="";return v(t,function(t){/[^-\w]/.test(t)||(t=t.trim().toLowerCase(),e+=",["+nt+'="'+t+'"],['+et+'="'+t+'"]')}),e}function o(){var t=Object.keys(J);return t+r(t)}function i(t){if(t.tagName){var r=R(t,nt)||R(t,et);
e&&r!==e&&(r=e,k(t,nt,e),k(t,et,e));var o=Z(t,r||t.tagName.toLowerCase(),n);o&&s.push(o)}else t.length&&v(t,i)}var u,a,s=[];if(gt.inject(),w(e)&&(n=e,e=0),typeof t===rt?("*"===t?t=a=o():t+=r(t.split(/, */)),u=t?z(t):[]):u=t,"*"===e){if(e=a||o(),u.tagName)u=z(e,u);else{var c=[];v(u,function(t){c.push(z(e,t))}),u=c}e=0}return i(u),s},Q.update=function(){return v(Y,function(t){t.update()})},Q.vdom=Y,Q.Tag=p,typeof n===ot?e.exports=Q:typeof define===ut&&typeof define.amd!==it?define(function(){return Q}):t.riot=Q}("undefined"!=typeof window?window:void 0)},{}],3:[function(t,e,n){var r=t("riot");t("riot-router"),t("./tags/home.tag"),t("./tags/hello.tag"),t("./tags/not-found.tag");var o=r.router.Route;DefaultRoute=r.router.DefaultRoute,NotFoundRoute=r.router.NotFoundRoute,RedirectRoute=r.router.RedirectRoute,r.router.routes([new o({path:"/hehehe/:zz",tag:"hello"}),new DefaultRoute({tag:"home"}),new RedirectRoute({from:"x",to:"hehehe"}),new NotFoundRoute({tag:"not-found"})]),r.mount("*"),r.router.start()},{"./tags/hello.tag":4,"./tags/home.tag":5,"./tags/not-found.tag":6,riot:2,"riot-router":1}],4:[function(t,e,n){var r=t("riot");e.exports=r.tag2("hello","<p>hello {opts.zz} </p>","","",function(t){})},{riot:2}],5:[function(t,e,n){var r=t("riot");e.exports=r.tag2("home",'<h1>Home! あれれだよ</h1> <a class="btn btn-primary" href="#/hehehe/xx">hello</a> <span class="glyphicon glyphicon-align-left" aria-hidden="true"></span> <span class="glyphicon glyphicon-flash" aria-hidden="true"></span>',"","",function(t){})},{riot:2}],6:[function(t,e,n){var r=t("riot");e.exports=r.tag2("not-found","<p>404 ありませんgo</p>","","",function(t){})},{riot:2}]},{},[3]);