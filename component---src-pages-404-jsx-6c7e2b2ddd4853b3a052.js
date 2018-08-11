(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{223:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=(a(226),a(232)),l=a.n(i),o=a(231),c=a(229),s=a.n(c);t.default=function(){return r.a.createElement(o.b,null,r.a.createElement(l.a,{title:"404 | "+s.a.siteTitle,bodyAttributes:{class:"error-page"}}),r.a.createElement("audio",{autoPlay:!0,loop:!0},r.a.createElement("source",{src:"https://ia801308.us.archive.org/0/items/NyanCatoriginal/Nyan%20Cat%20%5boriginal%5d.ogg",type:"audio/ogg"}),r.a.createElement("source",{src:"https://ia801308.us.archive.org/0/items/NyanCatoriginal/Nyan%20Cat%20[original].mp3",type:"audio/mpeg"})),r.a.createElement("div",{className:"align-central"},r.a.createElement("h1",null,"404"),r.a.createElement("h2",null,"The page you were looking for could not be found."),r.a.createElement("p",null,"Sorry about that."),r.a.createElement("img",{src:"../nyan.gif",width:"80%",alt:"Nyan Cat",className:"align-central"}),r.a.createElement("a",{href:"/"},"Go back to the homepage")))}},226:function(e,t,a){"use strict";a(55);var n=a(54),r=a(5);t.__esModule=!0,t.graphql=function(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")},t.StaticQuery=t.StaticQueryContext=void 0;var i=r(a(1)),l=r(a(0)),o=n(a(271));t.Link=o.default,t.withPrefix=o.withPrefix,t.push=o.push,t.replace=o.replace,t.navigateTo=o.navigateTo;var c=r(a(268));t.PageRenderer=c.default;var s=i.default.createContext({});t.StaticQueryContext=s;var m=function(e){return i.default.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.default.createElement("div",null,"Loading (StaticQuery)")})};t.StaticQuery=m,m.propTypes={data:l.default.object,query:l.default.string.isRequired,render:l.default.func,children:l.default.func}},229:function(e,t){e.exports={blogPostDir:"blog",projectPostDir:"projects",siteTitle:"Emily Young - UX Designer",siteTitleAlt:"EmilyYoung",siteShortName:"EmilyYoung",siteLogo:"/social/avatar.png",siteBanner:"/social/banner.jpg",siteUrl:"https://livingincircuits.co.uk",pathPrefix:"/",siteDescription:"Emily Young is a UX Designer/Developer from Yorkshire who loves to create clean, simple and inclusive experiences",googleAnalyticsID:"UA-100446901-1"}},231:function(e,t,a){"use strict";var n=a(1),r=a.n(n),i=a(0),l=a.n(i),o=function(e){var t=e.input;return r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})},c=o;o.propTypes={input:l.a.any.isRequired};var s=a(226),m=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"inner"},r.a.createElement("a",{href:"/",className:"link"},r.a.createElement("img",{src:"../me.jpg",className:"round",alt:"Emily Young",width:"60",height:"60"})),r.a.createElement("nav",{className:"nav"},r.a.createElement("ul",null,r.a.createElement("li",{className:"item"},r.a.createElement(s.Link,{to:"/about"},"About")),r.a.createElement("li",{className:"item"},r.a.createElement(s.Link,{to:"/projects"},"Projects")),r.a.createElement("li",{className:"item"},r.a.createElement(s.Link,{to:"/blog"},"Blog"))))))},u=function(e){return e.children,r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"page-inner"},r.a.createElement("p",null,r.a.createElement("img",{src:"../cute-cat.gif",alt:"Cat",width:"30"})," Crafted by Emily Young"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/livingincircuits/portfolio"},"Source")," · ",r.a.createElement("a",{href:"https://www.linkedin.com/in/emily-jane-young/"},"LinkedIn")," · ",r.a.createElement("a",{href:"https://dribbble.com/livingincircuits"},"Dribbble")," · ",r.a.createElement("a",{href:"mailto:emily@emily-young.com?subject=Hello"},"Email"))))},p=u;u.propTypes={children:l.a.any},u.defaultProps={children:!1},a(265),a(263),a(261),a(259),a(257);var d=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement("div",{className:"page-body"},r.a.createElement(m,null),r.a.createElement("main",{className:"page"},t),r.a.createElement(p,null))))},g=d;d.propTypes={children:l.a.any.isRequired};var f=a(232),h=a.n(f),E=a(229),y=a.n(E),v=function(e){var t,a,n,i,l=e.postNode,o=e.postPath,c=e.postSEO;c?(t=l.frontmatter.title+" | "+y.a.siteTitleAlt,a=l.excerpt,i=y.a.siteUrl+o):(t=y.a.siteTitle,a=y.a.siteDescription,n=y.a.siteBanner);var s="/"===y.a.pathPrefix?"":y.a.pathPrefix;n=y.a.siteUrl+s+n;var m=y.a.siteUrl+y.a.pathPrefix,u=[{"@context":"http://schema.org","@type":"WebSite",url:m,name:t,alternateName:y.a.siteTitleAlt?y.a.siteTitleAlt:""}];return c&&u.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":i,name:t,image:n}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:m,name:t,alternateName:y.a.siteTitleAlt,headline:t,image:{"@type":"ImageObject",url:n},description:a}),r.a.createElement(h.a,null,r.a.createElement("html",{lang:"en_GB"}),r.a.createElement("title",null,t),r.a.createElement("meta",{name:"description",content:a}),r.a.createElement("meta",{name:"image",content:n}),r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge,chrome=1"}),r.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),r.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(u)),r.a.createElement("meta",{property:"og:locale",content:"en_GB"}),r.a.createElement("meta",{property:"og:url",content:c?i:m}),c?r.a.createElement("meta",{property:"og:type",content:"article"}):null,r.a.createElement("meta",{property:"og:title",content:t}),r.a.createElement("meta",{property:"og:description",content:a}),r.a.createElement("meta",{property:"og:image",content:n}),r.a.createElement("meta",{name:"google-site-verification",content:"K2IZiKagWwqNsK3TK4SHJrJ5xqj3HkSSJPqH-yG_Zpg"}))},b=v;v.propTypes={postNode:l.a.object,postPath:l.a.string,postSEO:l.a.bool},a.d(t,"a",function(){return c}),a.d(t,"b",function(){return g}),a.d(t,"c",function(){return b})},257:function(e,t,a){},259:function(e,t,a){},261:function(e,t,a){},263:function(e,t,a){},265:function(e,t,a){},267:function(e,t,a){"use strict";var n=a(5);t.__esModule=!0,t.default=void 0;var r=n(a(1)),i=n(a(0)),l=n(a(105)),o=n(a(52)),c=function(e){var t=e.location,a=o.default.getResourcesForPathname(t.pathname);return r.default.createElement(l.default,{location:t,pageResources:a})};c.propTypes={location:i.default.shape({pathname:i.default.string.isRequired}).isRequired};var s=c;t.default=s},268:function(e,t,a){"use strict";var n;e.exports=(n=a(267))&&n.default||n}}]);
//# sourceMappingURL=component---src-pages-404-jsx-6c7e2b2ddd4853b3a052.js.map