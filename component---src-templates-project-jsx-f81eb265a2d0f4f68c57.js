(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{212:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return c}));var r=a(0),i=a.n(r),s=a(245),n=a.n(s),l=(a(58),a(210),a(209)),o=a(249);t.default=function(e){var t=e.pageContext,a=t.slug,r=t.left,s=t.right,c=e.data.markdownRemark,d=c.frontmatter,u=d.landscape.childImageSharp.fluid;return d.id||(d.id=a),i.a.createElement(l.b,null,i.a.createElement(l.c,{postPath:a,postNode:c,postSEO:!0}),i.a.createElement("div",{className:"page-inner"},i.a.createElement("ul",{className:"project__meta"},i.a.createElement("li",{className:"project__meta-item"},i.a.createElement("h1",null,"Client"),d.customer),i.a.createElement("li",{className:"project__meta-item"},i.a.createElement("h1",null,"Role"),d.task),i.a.createElement("li",{className:"project__meta-item"},i.a.createElement("h1",null,"Team"),d.company)),i.a.createElement("section",{className:"project__img"},i.a.createElement(n.a,{fluid:u})),i.a.createElement("section",{className:"callout"},i.a.createElement("div",{className:"page-content align-central"},i.a.createElement("h2",{className:"callout__title"},"Activities"),i.a.createElement("p",null,d.activities))),i.a.createElement("div",{className:"page-text"},i.a.createElement("article",{className:"content page-content",type:"article"},i.a.createElement(l.a,{input:c.html}))),i.a.createElement("section",null,i.a.createElement("h3",{className:"heading align-central"},"More Projects"),i.a.createElement(o.a,{left:r,right:s}))))};var c="1345875587"},245:function(e,t,a){"use strict";a(16),a(17),a(8),a(105),a(143),a(246);var r=a(20);t.__esModule=!0,t.default=void 0;var i,s=r(a(78)),n=r(a(79)),l=r(a(144)),o=r(a(145)),c=r(a(0)),d=r(a(46)),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},m=Object.create({}),g=function(e){var t=u(e),a=f(t);return m[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,E=new WeakMap;function y(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,s=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:s}),c.default.createElement("source",{media:i,srcSet:a,sizes:s}))}))}function v(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,s=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(s?'sizes="'+s+'" ':"")+"/>"}var N=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},_=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+c+n+l+a+r+t+s+i+o+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,s=c.default.createElement(k,(0,o.default)({src:t},i));return a.length>1?c.default.createElement("picture",null,r(a),s):s},k=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,s=e.style,n=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,m=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:i},m,{onLoad:n,onError:d,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))}));k.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var O=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!p&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(p||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)(a)),a.handleRef=a.handleRef.bind((0,s.default)(a)),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=N(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,s=void 0===i?{}:i,n=e.imgStyle,l=void 0===n?{}:n,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,g=e.fluid,p=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,E=e.Tag,v=e.itemProp,L=e.loading,N=e.draggable,O=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,o.default)({opacity:O?1:0,transition:R?"opacity "+b+"ms":"none"},l),z="boolean"==typeof h?"lightgray":h,C={transitionDelay:b+"ms"},j=(0,o.default)({opacity:this.state.imgLoaded?0:1},R&&C,{},l,{},f),T={title:t,alt:this.state.isVisible?"":a,style:j,className:m};if(g){var P=g,x=P[0];return c.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(x.srcSet)},c.default.createElement(E,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),z&&c.default.createElement(E,{title:t,style:(0,o.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&C)}),x.base64&&c.default.createElement(I,{src:x.base64,spreadProps:T,imageVariants:P,generateSources:w}),x.tracedSVG&&c.default.createElement(I,{src:x.tracedSVG,spreadProps:T,imageVariants:P,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,y(P),c.default.createElement(k,{alt:a,title:t,sizes:x.sizes,src:x.src,crossOrigin:this.props.crossOrigin,srcSet:x.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:L,draggable:N})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:_((0,o.default)({alt:a,title:t,loading:L},x,{imageVariants:P}))}}))}if(p){var q=p,M=q[0],W=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},s);return"inherit"===s.display&&delete W.display,c.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},z&&c.default.createElement(E,{title:t,style:(0,o.default)({backgroundColor:z,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},R&&C)}),M.base64&&c.default.createElement(I,{src:M.base64,spreadProps:T,imageVariants:q,generateSources:w}),M.tracedSVG&&c.default.createElement(I,{src:M.tracedSVG,spreadProps:T,imageVariants:q,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,y(q),c.default.createElement(k,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:L,draggable:N})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:_((0,o.default)({alt:a,title:t,loading:L},M,{imageVariants:q}))}}))}return null},t}(c.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),V=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});O.propTypes={resolutions:R,sizes:V,fixed:d.default.oneOfType([R,d.default.arrayOf(R)]),fluid:d.default.oneOfType([V,d.default.arrayOf(V)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var z=O;t.default=z},246:function(e,t,a){"use strict";a(247)("fixed",(function(e){return function(){return e(this,"tt","","")}}))},247:function(e,t,a){var r=a(1),i=a(9),s=a(38),n=/"/g,l=function(e,t,a,r){var i=String(s(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(r).replace(n,"&quot;")+'"'),l+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},249:function(e,t,a){"use strict";var r=a(0),i=a.n(r),s=a(58);t.a=function(e){var t=e.left,a=e.right;return i.a.createElement("div",{className:"post-block post-block--half"},t&&i.a.createElement(s.a,{className:"post-block__item",to:t.fields.slug},i.a.createElement("article",{className:"post-block__bordered"},i.a.createElement("div",{className:"post-block__content"},i.a.createElement("h2",{className:"post-block__title"},t.frontmatter.title)))),a&&i.a.createElement(s.a,{className:"post-block__item",to:a.fields.slug},i.a.createElement("article",{className:"post-block__bordered"},i.a.createElement("div",{className:"post-block__content"},i.a.createElement("h2",{className:"post-block__title"},a.frontmatter.title)))))}}}]);
//# sourceMappingURL=component---src-templates-project-jsx-f81eb265a2d0f4f68c57.js.map