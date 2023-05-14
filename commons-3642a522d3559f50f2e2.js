(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[351],{4852:function(e){"use strict";e.exports=Object.assign},2617:function(e){e.exports={blogPostDir:"blog",projectPostDir:"projects",siteTitle:"Emily Young - UX Researcher",siteTitleAlt:"EmilyYoung",siteShortName:"EmilyYoung",siteLogo:"/social/avatar.png",siteBanner:"/social/banner.jpg",siteUrl:"https://livingincircuits.co.uk",pathPrefix:"/",siteDescription:"Emily Young is a User Researcher from Yorkshire who loves to create clean, simple and inclusive experiences",googleAnalyticsID:"UA-100446901-1"}},5210:function(e,t,n){"use strict";n.d(t,{VY:function(){return i},Ar:function(){return u},HJ:function(){return m}});var r=n(7294);var i=e=>{let{input:t}=e;return r.createElement("div",{dangerouslySetInnerHTML:{__html:t}})},o=n(6598);var a=()=>r.createElement("header",{className:"header"},r.createElement("div",{className:"inner"},r.createElement("a",{href:"/",className:"link"},r.createElement("img",{src:"/me.jpg",className:"round",alt:"Emily Young",width:"60",height:"60"})),r.createElement("nav",{className:"nav"},r.createElement("ul",null,r.createElement("li",{className:"item"},r.createElement(o.rU,{to:"/about",activeClassName:"active"},"About")),r.createElement("li",{className:"item"},r.createElement(o.rU,{to:"/projects",activeClassName:"active"},"Work")),r.createElement("li",{className:"item"},r.createElement(o.rU,{to:"/blog",activeClassName:"active"},"Writing"))))));const c=e=>{let{children:t}=e;return r.createElement("footer",{className:"footer"},r.createElement("div",{className:"page-inner"},r.createElement("p",null,r.createElement("img",{src:"/cute-cat.gif",alt:"Cat",width:"30"})," Crafted by Emily Young"),r.createElement("p",null,r.createElement("a",{href:"https://github.com/livingincircuits/portfolio"},"Source")," · ",r.createElement("a",{href:"https://www.linkedin.com/in/emily-jane-young/"},"LinkedIn")," · ",r.createElement("a",{href:"https://dribbble.com/livingincircuits"},"Dribbble")," · ",r.createElement("a",{href:"mailto:ejyoung@protonmail.com?subject=Hello"},"Email"))))};var l=c;c.defaultProps={children:!1};var u=e=>{let{children:t}=e;return r.createElement("div",null,r.createElement(r.Fragment,null,r.createElement(m,null),r.createElement("div",{className:"page-body"},r.createElement(a,null),r.createElement("main",{className:"page"},t),r.createElement(l,null))))},s=n(4593),f=n(2617),p=n.n(f);var m=e=>{const{postNode:t,postPath:n,postSEO:i}=e;let o,a,c,l;if(i){o=t.frontmatter.title+" | "+p().siteTitleAlt,a=t.excerpt,l=p().siteUrl+n}else o=p().siteTitle,a=p().siteDescription,c=p().siteBanner;const u="/"===p().pathPrefix?"":p().pathPrefix;c=p().siteUrl+u+c;const f=p().siteUrl+p().pathPrefix,m=[{"@context":"http://schema.org","@type":"WebSite",url:f,name:o,alternateName:p().siteTitleAlt?p().siteTitleAlt:""}];return i&&m.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":l,name:o,image:c}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:f,name:o,alternateName:p().siteTitleAlt,headline:o,image:{"@type":"ImageObject",url:c},description:a}),r.createElement(s.q,null,r.createElement("html",{lang:"en-GB"}),r.createElement("title",null,o),r.createElement("meta",{name:"description",content:a}),r.createElement("meta",{name:"image",content:c}),r.createElement("meta",{charSet:"utf-8"}),r.createElement("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge,chrome=1"}),r.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),r.createElement("script",{type:"application/ld+json"},JSON.stringify(m)),r.createElement("meta",{property:"og:locale",content:"en-GB"}),r.createElement("meta",{property:"og:url",content:i?l:f}),i?r.createElement("meta",{property:"og:type",content:"article"}):null,r.createElement("meta",{property:"og:title",content:o}),r.createElement("meta",{property:"og:description",content:a}),r.createElement("meta",{property:"og:image",content:c}),r.createElement("meta",{name:"google-site-verification",content:"K2IZiKagWwqNsK3TK4SHJrJ5xqj3HkSSJPqH-yG_Zpg"}))}},9590:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,l,u,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(!o(e[l],a[l]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;for(s=e.entries();!(l=s.next()).done;)if(!o(l.value[1],a.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof a.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof a.toString)return e.toString()===a.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!o(e[u[l]],a[u[l]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4593:function(e,t,n){"use strict";n.d(t,{q:function(){return me}});var r,i,o,a,c=n(5697),l=n.n(c),u=n(3524),s=n.n(u),f=n(9590),p=n.n(f),m=n(7294),d=n(4852),h=n.n(d),y="bodyAttributes",g="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(v).map((function(e){return v[e]})),"charset"),E="cssText",w="href",A="http-equiv",O="innerHTML",C="itemprop",S="name",j="property",k="rel",P="src",x="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",I="defer",M="encodeSpecialCharacters",R="onChangeClientState",U="titleTemplate",B=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),D=[v.NOSCRIPT,v.SCRIPT,v.STYLE],H="data-react-helmet",Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},K=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},z=function(e){var t=X(e,v.TITLE),n=X(e,U);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,L);return t||r||void 0},W=function(e){return X(e,R)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return q({},e,t)}),{})},V=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},G=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&te("Helmet: "+e+' should be of type "Array". Instead found type "'+Y(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),a=0;a<o.length;a++){var c=o[a],l=c.toLowerCase();-1===t.indexOf(l)||n===k&&"canonical"===e[n].toLowerCase()||l===k&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==O&&c!==E&&c!==C||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][u]&&(i[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var c=o[a],l=h()({},r[c],i[c]);r[c]=l}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Z=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Z(e)}),0)}),$=function(e){return clearTimeout(e)},Q="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Z:n.g.requestAnimationFrame||Z,ee="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||$:n.g.cancelAnimationFrame||$,te=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ne=null,re=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;ae(v.BODY,r),ae(v.HTML,i),oe(f,p);var m={baseTag:ce(v.BASE,n),linkTags:ce(v.LINK,o),metaTags:ce(v.META,a),noscriptTags:ce(v.NOSCRIPT,c),scriptTags:ce(v.SCRIPT,u),styleTags:ce(v.STYLE,s)},d={},h={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(h[e]=m[e].oldTags)})),t&&t(),l(e,d,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},oe=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ae(v.TITLE,t)},ae=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(H),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(t),c=0;c<a.length;c++){var l=a[c],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===i.indexOf(l)&&i.push(l);var s=o.indexOf(l);-1!==s&&o.splice(s,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);i.length===o.length?n.removeAttribute(H):n.getAttribute(H)!==a.join(",")&&n.setAttribute(H,a.join(","))}},ce=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+H+"]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(H,"true"),i.some((function(e,t){return a=t,n.isEqualNode(e)}))?i.splice(a,1):o.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:o}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},ue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[N[n]||n]=e[n],t}),t)},se=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[H]=!0,i=ue(n,r),[m.createElement(v.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=le(n),o=ie(t);return i?"<"+e+" "+H+'="true" '+i+">"+K(o,r)+"</"+e+">":"<"+e+" "+H+'="true">'+K(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case g:return{toComponent:function(){return ue(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[H]=!0,r);return Object.keys(t).forEach((function(e){var n=N[e]||e;if(n===O||n===E){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),m.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===O||e===E)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===D.indexOf(e);return t+"<"+e+" "+H+'="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},fe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:se(v.BASE,t,r),bodyAttributes:se(y,n,r),htmlAttributes:se(g,i,r),link:se(v.LINK,o,r),meta:se(v.META,a,r),noscript:se(v.NOSCRIPT,c,r),script:se(v.SCRIPT,l,r),style:se(v.STYLE,u,r),title:se(v.TITLE,{title:f,titleAttributes:p},r)}},pe=s()((function(e){return{baseTag:V([w,x],e),bodyAttributes:J(y,e),defer:X(e,I),encode:X(e,M),htmlAttributes:J(g,e),linkTags:G(v.LINK,[k,w],e),metaTags:G(v.META,[S,T,A,j,C],e),noscriptTags:G(v.NOSCRIPT,[O],e),onChangeClientState:W(e),scriptTags:G(v.SCRIPT,[P,O],e),styleTags:G(v.STYLE,[E],e),title:z(e),titleAttributes:J(b,e)}}),(function(e){ne&&ee(ne),e.defer?ne=Q((function(){re(e,(function(){ne=null}))})):(re(e),ne=null)}),fe)((function(){return null})),me=(i=pe,a=o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return q({},r,((t={})[n.type]=[].concat(r[n.type]||[],[q({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(r.type){case v.TITLE:return q({},i,((t={})[r.type]=a,t.titleAttributes=q({},o),t));case v.BODY:return q({},i,{bodyAttributes:q({},o)});case v.HTML:return q({},i,{htmlAttributes:q({},o)})}return q({},i,((n={})[r.type]=q({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=q({},t);return Object.keys(e).forEach((function(t){var r;n=q({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return m.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[B[n]||n]=e[n],t}),t)}(F(i,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=F(e,["children"]),r=q({},n);return t&&(r=this.mapChildrenToProps(t,r)),m.createElement(i,r)},_(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(m.Component),o.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var e=i.rewind();return e||(e=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);me.renderStatic=me.rewind},3524:function(e,t,n){"use strict";var r,i=n(7294),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return l},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},a.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}}}]);
//# sourceMappingURL=commons-3642a522d3559f50f2e2.js.map