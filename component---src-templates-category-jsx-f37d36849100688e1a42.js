(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{221:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(58),u=n(104),f=n.n(u),c=n(209),i=n(11),l=n.n(i),s=n(210),d=(n(229),function(e){e.category;var t=e.path,n=e.title,r=e.date,u=e.timeToRead,f=e.excerpt;return o.a.createElement(a.a,{className:"post-block__item",to:t},o.a.createElement("article",{className:"post-block__bordered"},o.a.createElement("div",{className:"post-block__content"},o.a.createElement("h2",{className:"post-block__title"},n),o.a.createElement("p",{className:"post-block__date"},r," — Time to Read: ",u," Min"),o.a.createElement("p",{className:"post-block__text"},f))))});n.d(t,"pageQuery",(function(){return x}));t.default=function(e){var t=e.pageContext.category,n=e.data.allMarkdownRemark,r=n.edges;n.totalCount;return o.a.createElement(c.b,null,o.a.createElement(f.a,{title:t+" | "+l.a.siteTitle}),o.a.createElement(s.a,{title:t},"Category"),o.a.createElement("section",{className:"page-inner"},o.a.createElement("div",{className:"post-block post-block--full"},r.map((function(e){return o.a.createElement(d,{key:e.node.frontmatter.title,title:e.node.frontmatter.title,category:e.node.frontmatter.category,path:e.node.fields.slug,date:e.node.frontmatter.date,timeToRead:e.node.timeToRead,excerpt:e.node.excerpt})})))),o.a.createElement("div",{className:"align-central"},o.a.createElement(a.a,{className:"btn",to:"/categories/"},"View all Categories")))};var x="192116435"},223:function(e,t,n){var r=n(224).Symbol;e.exports=r},224:function(e,t,n){var r=n(236),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},225:function(e,t,n){var r=n(235);e.exports=function(e){return null==e?"":r(e)}},226:function(e,t,n){var r=n(223),o=n(239),a=n(240),u="[object Null]",f="[object Undefined]",c=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?f:u:c&&c in Object(e)?o(e):a(e)}},227:function(e,t,n){n(37);var r=Array.isArray;e.exports=r},228:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},229:function(e,t,n){var r=n(230)((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=r},230:function(e,t,n){n(19),n(141);var r=n(231),o=n(232),a=n(241),u=RegExp("['’]","g");e.exports=function(e){return function(t){return r(a(o(t).replace(u,"")),e,"")}}},231:function(e,t){e.exports=function(e,t,n,r){var o=-1,a=null==e?0:e.length;for(r&&a&&(n=e[++o]);++o<a;)n=t(n,e[o],o,e);return n}},232:function(e,t,n){n(19),n(141);var r=n(233),o=n(225),a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,u=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=o(e))&&e.replace(a,r).replace(u,"")}},233:function(e,t,n){var r=n(234)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=r},234:function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},235:function(e,t,n){n(57),n(77),n(8);var r=n(223),o=n(237),a=n(227),u=n(238),f=1/0,c=r?r.prototype:void 0,i=c?c.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(a(t))return o(t,e)+"";if(u(t))return i?i.call(t):"";var n=t+"";return"0"==n&&1/t==-f?"-0":n}},236:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(142))},237:function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}},238:function(e,t,n){var r=n(226),o=n(228),a="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||o(e)&&r(e)==a}},239:function(e,t,n){n(57),n(77),n(8);var r=n(223),o=Object.prototype,a=o.hasOwnProperty,u=o.toString,f=r?r.toStringTag:void 0;e.exports=function(e){var t=a.call(e,f),n=e[f];try{e[f]=void 0;var r=!0}catch(c){}var o=u.call(e);return r&&(t?e[f]=n:delete e[f]),o}},240:function(e,t,n){n(57),n(77),n(8);var r=Object.prototype.toString;e.exports=function(e){return r.call(e)}},241:function(e,t,n){n(103);var r=n(242),o=n(243),a=n(225),u=n(244);e.exports=function(e,t,n){return e=a(e),void 0===(t=n?void 0:t)?o(e)?u(e):r(e):e.match(t)||[]}},242:function(e,t,n){n(103);var r=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(r)||[]}},243:function(e,t){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return n.test(e)}},244:function(e,t,n){n(103),n(141);var r="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",o="["+r+"]",a="\\d+",u="[\\u2700-\\u27bf]",f="[a-z\\xdf-\\xf6\\xf8-\\xff]",c="[^\\ud800-\\udfff"+r+a+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",i="(?:\\ud83c[\\udde6-\\uddff]){2}",l="[\\ud800-\\udbff][\\udc00-\\udfff]",s="[A-Z\\xc0-\\xd6\\xd8-\\xde]",d="(?:"+f+"|"+c+")",x="(?:"+s+"|"+c+")",p="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",m="[\\ufe0e\\ufe0f]?"+p+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",i,l].join("|")+")[\\ufe0e\\ufe0f]?"+p+")*"),b="(?:"+[u,i,l].join("|")+")"+m,v=RegExp([s+"?"+f+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[o,s,"$"].join("|")+")",x+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[o,s+d,"$"].join("|")+")",s+"?"+d+"+(?:['’](?:d|ll|m|re|s|t|ve))?",s+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",a,b].join("|"),"g");e.exports=function(e){return e.match(v)||[]}}}]);
//# sourceMappingURL=component---src-templates-category-jsx-f37d36849100688e1a42.js.map