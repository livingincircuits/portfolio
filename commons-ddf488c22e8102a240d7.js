(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[351],{6494:function(e){"use strict";e.exports=Object.assign},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,l,u,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(!i(e[l],a[l]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;for(s=e.entries();!(l=s.next()).done;)if(!i(l.value[1],a.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!i(e[u[l]],a[u[l]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},2617:function(e){e.exports={blogPostDir:"blog",projectPostDir:"projects",siteTitle:"Emily Young - UX Researcher",siteTitleAlt:"EmilyYoung",siteShortName:"EmilyYoung",siteLogo:"/social/avatar.png",siteBanner:"/social/banner.jpg",siteUrl:"https://livingincircuits.co.uk",pathPrefix:"/",siteDescription:"Emily Young is a User Researcher from Yorkshire who loves to create clean, simple and inclusive experiences",googleAnalyticsID:"UA-100446901-1"}},4160:function(e,t,n){"use strict";n.d(t,{VY:function(){return o},Ar:function(){return m},HJ:function(){return Oe}});var r=n(7294),o=function(e){var t=e.input;return r.createElement("div",{dangerouslySetInnerHTML:{__html:t}})},i=n(1597),a=function(){return r.createElement("header",{className:"header"},r.createElement("div",{className:"inner"},r.createElement("a",{href:"/",className:"link"},r.createElement("img",{src:"/me.jpg",className:"round",alt:"Emily Young",width:"60",height:"60"})),r.createElement("nav",{className:"nav"},r.createElement("ul",null,r.createElement("li",{className:"item"},r.createElement(i.rU,{to:"/about",activeClassName:"active"},"About")),r.createElement("li",{className:"item"},r.createElement(i.rU,{to:"/projects",activeClassName:"active"},"Work")),r.createElement("li",{className:"item"},r.createElement(i.rU,{to:"/blog",activeClassName:"active"},"Writing"))))))},c=function(e){e.children;return r.createElement("footer",{className:"footer"},r.createElement("div",{className:"page-inner"},r.createElement("p",null,r.createElement("img",{src:"/cute-cat.gif",alt:"Cat",width:"30"})," Crafted by Emily Young"),r.createElement("p",null,r.createElement("a",{href:"https://github.com/livingincircuits/portfolio"},"Source")," · ",r.createElement("a",{href:"https://www.linkedin.com/in/emily-jane-young/"},"LinkedIn")," · ",r.createElement("a",{href:"https://dribbble.com/livingincircuits"},"Dribbble")," · ",r.createElement("a",{href:"mailto:ejyoung@protonmail.com?subject=Hello"},"Email"))))},l=c;c.defaultProps={children:!1};var u,s,f,p,m=function(e){var t=e.children;return r.createElement("div",null,r.createElement(r.Fragment,null,r.createElement(Oe,null),r.createElement("div",{className:"page-body"},r.createElement(a,null),r.createElement("main",{className:"page"},t),r.createElement(l,null))))},d=n(9324),h=n.n(d),y=n(4839),g=n.n(y),b=n(2993),v=n.n(b),T=n(6494),E=n.n(T),w="bodyAttributes",A="htmlAttributes",O="titleAttributes",C={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},S=(Object.keys(C).map((function(e){return C[e]})),"charset"),j="cssText",P="href",k="http-equiv",x="innerHTML",N="itemprop",I="name",L="property",_="rel",R="src",M="target",U={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},D="defaultTitle",B="defer",H="encodeSpecialCharacters",Y="onChangeClientState",q="titleTemplate",F=Object.keys(U).reduce((function(e,t){return e[U[t]]=t,e}),{}),K=[C.NOSCRIPT,C.SCRIPT,C.STYLE],W="data-react-helmet",z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},V=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},X=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},$=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Q=function(e){var t=oe(e,C.TITLE),n=oe(e,q);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=oe(e,D);return t||r||void 0},ee=function(e){return oe(e,Y)||function(){}},te=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return G({},e,t)}),{})},ne=function(e,t){return t.filter((function(e){return void 0!==e[C.BASE]})).map((function(e){return e[C.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},re=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ue("Helmet: "+e+' should be of type "Array". Instead found type "'+z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],l=c.toLowerCase();-1===t.indexOf(l)||n===_&&"canonical"===e[n].toLowerCase()||l===_&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==x&&c!==j&&c!==N||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],l=E()({},r[c],o[c]);r[c]=l}return e}),[]).reverse()},oe=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ie=(u=Date.now(),function(e){var t=Date.now();t-u>16?(u=t,e(t)):setTimeout((function(){ie(e)}),0)}),ae=function(e){return clearTimeout(e)},ce="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ie:n.g.requestAnimationFrame||ie,le="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ae:n.g.cancelAnimationFrame||ae,ue=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},se=null,fe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;de(C.BODY,r),de(C.HTML,o),me(f,p);var m={baseTag:he(C.BASE,n),linkTags:he(C.LINK,i),metaTags:he(C.META,a),noscriptTags:he(C.NOSCRIPT,c),scriptTags:he(C.SCRIPT,u),styleTags:he(C.STYLE,s)},d={},h={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(h[e]=m[e].oldTags)})),t&&t(),l(e,d,h)},pe=function(e){return Array.isArray(e)?e.join(""):e},me=function(e,t){void 0!==e&&document.title!==e&&(document.title=pe(e)),de(C.TITLE,t)},de=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(W),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var l=a[c],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===o.indexOf(l)&&o.push(l);var s=i.indexOf(l);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(W):n.getAttribute(W)!==a.join(",")&&n.setAttribute(W,a.join(","))}},he=function(e,t){var n=document.head||document.querySelector(C.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===x)n.innerHTML=t.innerHTML;else if(r===j)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(W,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},ye=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},ge=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[U[n]||n]=e[n],t}),t)},be=function(e,t,n){switch(e){case C.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(o={key:e})[W]=!0,i=ge(n,o),[r.createElement(C.TITLE,i,e)];var e,n,o,i},toString:function(){return function(e,t,n,r){var o=ye(n),i=pe(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+$(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+$(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case w:case A:return{toComponent:function(){return ge(t)},toString:function(){return ye(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var o,i=((o={key:n})[W]=!0,o);return Object.keys(t).forEach((function(e){var n=U[e]||e;if(n===x||n===j){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),r.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===x||e===j)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+$(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===K.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},ve=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:be(C.BASE,t,r),bodyAttributes:be(w,n,r),htmlAttributes:be(A,o,r),link:be(C.LINK,i,r),meta:be(C.META,a,r),noscript:be(C.NOSCRIPT,c,r),script:be(C.SCRIPT,l,r),style:be(C.STYLE,u,r),title:be(C.TITLE,{title:f,titleAttributes:p},r)}},Te=g()((function(e){return{baseTag:ne([P,M],e),bodyAttributes:te(w,e),defer:oe(e,B),encode:oe(e,H),htmlAttributes:te(A,e),linkTags:re(C.LINK,[_,P],e),metaTags:re(C.META,[I,S,k,L,N],e),noscriptTags:re(C.NOSCRIPT,[x],e),onChangeClientState:ee(e),scriptTags:re(C.SCRIPT,[R,x],e),styleTags:re(C.STYLE,[j],e),title:Q(e),titleAttributes:te(O,e)}}),(function(e){se&&le(se),e.defer?se=ce((function(){fe(e,(function(){se=null}))})):(fe(e),se=null)}),ve)((function(){return null})),Ee=(s=Te,p=f=function(e){function t(){return J(this,t),Z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!v()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case C.SCRIPT:case C.NOSCRIPT:return{innerHTML:t};case C.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return G({},r,((t={})[n.type]=[].concat(r[n.type]||[],[G({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case C.TITLE:return G({},o,((t={})[r.type]=a,t.titleAttributes=G({},i),t));case C.BODY:return G({},o,{bodyAttributes:G({},i)});case C.HTML:return G({},o,{htmlAttributes:G({},i)})}return G({},o,((n={})[r.type]=G({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=G({},t);return Object.keys(e).forEach((function(t){var r;n=G({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,o={};return r.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,i=r.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[F[n]||n]=e[n],t}),t)}(X(r,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case C.LINK:case C.META:case C.NOSCRIPT:case C.SCRIPT:case C.STYLE:o=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:o,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(o,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=X(e,["children"]),o=G({},n);return t&&(o=this.mapChildrenToProps(t,o)),r.createElement(s,o)},V(t,null,[{key:"canUseDOM",set:function(e){s.canUseDOM=e}}]),t}(r.Component),f.propTypes={base:h().object,bodyAttributes:h().object,children:h().oneOfType([h().arrayOf(h().node),h().node]),defaultTitle:h().string,defer:h().bool,encodeSpecialCharacters:h().bool,htmlAttributes:h().object,link:h().arrayOf(h().object),meta:h().arrayOf(h().object),noscript:h().arrayOf(h().object),onChangeClientState:h().func,script:h().arrayOf(h().object),style:h().arrayOf(h().object),title:h().string,titleAttributes:h().object,titleTemplate:h().string},f.defaultProps={defer:!0,encodeSpecialCharacters:!0},f.peek=s.peek,f.rewind=function(){var e=s.rewind();return e||(e=ve({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},p);Ee.renderStatic=Ee.rewind;var we=n(2617),Ae=n.n(we),Oe=function(e){var t,n,o,i,a=e.postNode,c=e.postPath,l=e.postSEO;l?(t=a.frontmatter.title+" | "+Ae().siteTitleAlt,n=a.excerpt,i=Ae().siteUrl+c):(t=Ae().siteTitle,n=Ae().siteDescription,o=Ae().siteBanner);var u="/"===Ae().pathPrefix?"":Ae().pathPrefix;o=Ae().siteUrl+u+o;var s=Ae().siteUrl+Ae().pathPrefix,f=[{"@context":"http://schema.org","@type":"WebSite",url:s,name:t,alternateName:Ae().siteTitleAlt?Ae().siteTitleAlt:""}];return l&&f.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":i,name:t,image:o}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:s,name:t,alternateName:Ae().siteTitleAlt,headline:t,image:{"@type":"ImageObject",url:o},description:n}),r.createElement(r.Fragment,null,r.createElement("html",{lang:"en-GB"}),r.createElement("title",null,t),r.createElement("meta",{name:"description",content:n}),r.createElement("meta",{name:"image",content:o}),r.createElement("meta",{charSet:"utf-8"}),r.createElement("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge,chrome=1"}),r.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),r.createElement("script",{type:"application/ld+json"},JSON.stringify(f)),r.createElement("meta",{property:"og:locale",content:"en-GB"}),r.createElement("meta",{property:"og:url",content:l?i:s}),l?r.createElement("meta",{property:"og:type",content:"article"}):null,r.createElement("meta",{property:"og:title",content:t}),r.createElement("meta",{property:"og:description",content:n}),r.createElement("meta",{property:"og:image",content:o}),r.createElement("meta",{name:"google-site-verification",content:"K2IZiKagWwqNsK3TK4SHJrJ5xqj3HkSSJPqH-yG_Zpg"}))}},7579:function(e,t,n){"use strict";var r=n(70);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},9324:function(e,t,n){e.exports=n(7579)()},70:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=commons-ddf488c22e8102a240d7.js.map