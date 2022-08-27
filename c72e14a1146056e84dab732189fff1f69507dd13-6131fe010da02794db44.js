(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[65],{2617:function(e){e.exports={blogPostDir:"blog",projectPostDir:"projects",siteTitle:"Emily Young - UX Researcher",siteTitleAlt:"EmilyYoung",siteShortName:"EmilyYoung",siteLogo:"/social/avatar.png",siteBanner:"/social/banner.jpg",siteUrl:"https://livingincircuits.co.uk",pathPrefix:"/",siteDescription:"Emily Young is a User Researcher from Yorkshire who loves to create clean, simple and inclusive experiences",googleAnalyticsID:"UA-100446901-1"}},6162:function(e,t,a){"use strict";var r=a(2930);t.Z=void 0;var i,n=r(a(2824)),s=r(a(5648)),l=r(a(1334)),o=r(a(5255)),c=r(a(7294)),d=r(a(3383)),u=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],f=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=x([].concat(t.fluid))),t.fixed&&(t.fixed=x([].concat(t.fixed))),t},p=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=g(t||a||[]);return r&&r.src},g=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(p);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),y=function(e){var t=f(e),a=m(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,E=v&&window.IntersectionObserver,S=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&c.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function x(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function O(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var N=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+c+s+l+a+r+t+n+i+o+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},k=c.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,l=c.default.createElement(T,(0,o.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?c.default.createElement("picture",null,i(r),l):l})),T=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,d=e.onError,f=e.loading,p=e.draggable,m=e.ariaHidden,g=(0,l.default)(e,u);return c.default.createElement("img",(0,o.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:d,ref:t,loading:f,draggable:p,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));T.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var P=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&y(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&E&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=c.default.createRef(),a.placeholderRef=t.placeholderRef||c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:y(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=N(e,(function(){var e=y(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=f(e),(a=m(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=f(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,d=e.placeholderStyle,u=void 0===d?{}:d,p=e.placeholderClassName,m=e.fluid,h=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,E=e.itemProp,S=e.loading,x=e.draggable,I=m||h;if(!I)return null;var N=!1===this.state.fadeIn||this.state.imgLoaded,P=!0===this.state.fadeIn&&!this.state.imgCached,_=(0,o.default)({opacity:N?1:0,transition:P?"opacity "+b+"ms":"none"},l),C="boolean"==typeof y?"lightgray":y,j={transitionDelay:b+"ms"},H=(0,o.default)({opacity:this.state.imgLoaded?0:1},P&&j,l,u),z={title:t,alt:this.state.isVisible?"":a,style:H,className:p,itemProp:E},V=this.state.isHydrated?g(I):I[0];if(m)return c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:V.maxWidth?V.maxWidth+"px":null,maxHeight:V.maxHeight?V.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},c.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),C&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},P&&j)}),V.base64&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:V.base64,spreadProps:z,imageVariants:I,generateSources:O}),V.tracedSVG&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:V.tracedSVG,spreadProps:z,imageVariants:I,generateSources:L}),this.state.isVisible&&c.default.createElement("picture",null,w(I),c.default.createElement(T,{alt:a,title:t,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:_,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:x})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,o.default)({alt:a,title:t,loading:S},V,{imageVariants:I}))}}));if(h){var W=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:V.width,height:V.height},n);return"inherit"===n.display&&delete W.display,c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(V.srcSet)},C&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:C,width:V.width,opacity:this.state.imgLoaded?0:1,height:V.height},P&&j)}),V.base64&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:V.base64,spreadProps:z,imageVariants:I,generateSources:O}),V.tracedSVG&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:V.tracedSVG,spreadProps:z,imageVariants:I,generateSources:L}),this.state.isVisible&&c.default.createElement("picture",null,w(I),c.default.createElement(T,{alt:a,title:t,width:V.width,height:V.height,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:_,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:x})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,o.default)({alt:a,title:t,loading:S},V,{imageVariants:I}))}}))}return null},t}(c.default.Component);P.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var _=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),C=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});function j(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");d.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}P.propTypes={resolutions:_,sizes:C,fixed:j(d.default.oneOfType([_,d.default.arrayOf(_)])),fluid:j(d.default.oneOfType([C,d.default.arrayOf(C)])),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var H=P;t.Z=H},3593:function(e,t,a){"use strict";var r=a(4937);function i(){}function n(){}n.resetWarningCache=i,e.exports=function(){function e(e,t,a,i,n,s){if(s!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:n,resetWarningCache:i};return a.PropTypes=a,a}},3383:function(e,t,a){e.exports=a(3593)()},4937:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},4063:function(e,t,a){"use strict";var r=a(7294),i=function(e){e.children;var t=e.title;return r.createElement("h1",{className:"pinline"},r.createElement("svg",{className:"pinline__svg pinline__svg--top",width:"80",height:"60",viewBox:"5 0 80 60"},r.createElement("path",{className:"wave",fill:"none",stroke:"#00FADB",strokeWidth:"4",strokeLinecap:"round",d:"M 0 37.5 c 7.684299348848887 0 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15"})),r.createElement("span",null,t),r.createElement("svg",{className:"pinline__svg pinline__svg--bottom",width:"80",height:"40",viewBox:"5 0 80 40"},r.createElement("path",{className:"wave",fill:"none",stroke:"#00FADB",strokeWidth:"4",strokeLinecap:"round",d:"M 0 37.5 c 7.684299348848887 0 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15"})))};t.Z=i,i.defaultProps={children:!1}},5210:function(e,t,a){"use strict";a.d(t,{VY:function(){return i},Ar:function(){return c},HJ:function(){return f}});var r=a(7294),i=function(e){var t=e.input;return r.createElement("div",{dangerouslySetInnerHTML:{__html:t}})},n=a(1597),s=function(){return r.createElement("header",{className:"header"},r.createElement("div",{className:"inner"},r.createElement("a",{href:"/",className:"link"},r.createElement("img",{src:"/me.jpg",className:"round",alt:"Emily Young",width:"60",height:"60"})),r.createElement("nav",{className:"nav"},r.createElement("ul",null,r.createElement("li",{className:"item"},r.createElement(n.rU,{to:"/about",activeClassName:"active"},"About")),r.createElement("li",{className:"item"},r.createElement(n.rU,{to:"/projects",activeClassName:"active"},"Work")),r.createElement("li",{className:"item"},r.createElement(n.rU,{to:"/blog",activeClassName:"active"},"Writing"))))))},l=function(e){e.children;return r.createElement("footer",{className:"footer"},r.createElement("div",{className:"page-inner"},r.createElement("p",null,r.createElement("img",{src:"/cute-cat.gif",alt:"Cat",width:"30"})," Crafted by Emily Young"),r.createElement("p",null,r.createElement("a",{href:"https://github.com/livingincircuits/portfolio"},"Source")," · ",r.createElement("a",{href:"https://www.linkedin.com/in/emily-jane-young/"},"LinkedIn")," · ",r.createElement("a",{href:"https://dribbble.com/livingincircuits"},"Dribbble")," · ",r.createElement("a",{href:"mailto:ejyoung@protonmail.com?subject=Hello"},"Email"))))},o=l;l.defaultProps={children:!1};var c=function(e){var t=e.children;return r.createElement("div",null,r.createElement(r.Fragment,null,r.createElement(f,null),r.createElement("div",{className:"page-body"},r.createElement(s,null),r.createElement("main",{className:"page"},t),r.createElement(o,null))))},d=a(2617),u=a.n(d),f=function(e){var t,a,i,n,s=e.postNode,l=e.postPath,o=e.postSEO;o?(t=s.frontmatter.title+" | "+u().siteTitleAlt,a=s.excerpt,n=u().siteUrl+l):(t=u().siteTitle,a=u().siteDescription,i=u().siteBanner);var c="/"===u().pathPrefix?"":u().pathPrefix;i=u().siteUrl+c+i;var d=u().siteUrl+u().pathPrefix,f=[{"@context":"http://schema.org","@type":"WebSite",url:d,name:t,alternateName:u().siteTitleAlt?u().siteTitleAlt:""}];return o&&f.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:t,image:i}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:d,name:t,alternateName:u().siteTitleAlt,headline:t,image:{"@type":"ImageObject",url:i},description:a}),r.createElement(r.Fragment,null,r.createElement("html",{lang:"en-GB"}),r.createElement("title",null,t),r.createElement("meta",{name:"description",content:a}),r.createElement("meta",{name:"image",content:i}),r.createElement("meta",{charSet:"utf-8"}),r.createElement("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge,chrome=1"}),r.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),r.createElement("script",{type:"application/ld+json"},JSON.stringify(f)),r.createElement("meta",{property:"og:locale",content:"en-GB"}),r.createElement("meta",{property:"og:url",content:o?n:d}),o?r.createElement("meta",{property:"og:type",content:"article"}):null,r.createElement("meta",{property:"og:title",content:t}),r.createElement("meta",{property:"og:description",content:a}),r.createElement("meta",{property:"og:image",content:i}),r.createElement("meta",{name:"google-site-verification",content:"K2IZiKagWwqNsK3TK4SHJrJ5xqj3HkSSJPqH-yG_Zpg"}))}},5255:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},1334:function(e){e.exports=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=c72e14a1146056e84dab732189fff1f69507dd13-6131fe010da02794db44.js.map