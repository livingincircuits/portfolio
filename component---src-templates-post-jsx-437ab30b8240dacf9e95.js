(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{211:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return s}));var r=n(0),a=n.n(r),o=n(58),u=n(229),c=n.n(u),f=n(209),i=n(210),l=n(249);t.default=function(e){var t=e.pageContext,n=t.slug,r=t.left,u=t.right,s=e.data.markdownRemark,d=s.frontmatter;return d.id||(d.id=n),a.a.createElement(f.b,null,a.a.createElement(f.c,{postPath:n,postNode:s,postSEO:!0}),a.a.createElement(i.a,{title:d.title},d.title),a.a.createElement("div",{className:"page-inner"},a.a.createElement("section",{className:"article-header"},a.a.createElement("p",{className:"article-header__text content"},d.date," · Time to Read: ",s.timeToRead," Min",a.a.createElement("span",null,"Category: ",a.a.createElement(o.a,{to:"/categories/"+c()(d.category)},d.category)))),a.a.createElement("div",{className:"page-text"},a.a.createElement("article",{className:"content page-content",type:"article"},a.a.createElement(f.a,{input:s.html}))),a.a.createElement("section",null,a.a.createElement("h3",{className:"heading align-central"},"More Posts"),a.a.createElement(l.a,{left:r,right:u,secondary:!0}))))};var s="3358939816"},223:function(e,t,n){var r=n(224).Symbol;e.exports=r},224:function(e,t,n){var r=n(236),a="object"==typeof self&&self&&self.Object===Object&&self,o=r||a||Function("return this")();e.exports=o},225:function(e,t,n){var r=n(235);e.exports=function(e){return null==e?"":r(e)}},226:function(e,t,n){var r=n(223),a=n(239),o=n(240),u="[object Null]",c="[object Undefined]",f=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?c:u:f&&f in Object(e)?a(e):o(e)}},227:function(e,t,n){n(37);var r=Array.isArray;e.exports=r},228:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},229:function(e,t,n){var r=n(230)((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=r},230:function(e,t,n){n(19),n(141);var r=n(231),a=n(232),o=n(241),u=RegExp("['’]","g");e.exports=function(e){return function(t){return r(o(a(t).replace(u,"")),e,"")}}},231:function(e,t){e.exports=function(e,t,n,r){var a=-1,o=null==e?0:e.length;for(r&&o&&(n=e[++a]);++a<o;)n=t(n,e[a],a,e);return n}},232:function(e,t,n){n(19),n(141);var r=n(233),a=n(225),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,u=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=a(e))&&e.replace(o,r).replace(u,"")}},233:function(e,t,n){var r=n(234)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=r},234:function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},235:function(e,t,n){n(57),n(77),n(8);var r=n(223),a=n(237),o=n(227),u=n(238),c=1/0,f=r?r.prototype:void 0,i=f?f.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(o(t))return a(t,e)+"";if(u(t))return i?i.call(t):"";var n=t+"";return"0"==n&&1/t==-c?"-0":n}},236:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(142))},237:function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a}},238:function(e,t,n){var r=n(226),a=n(228),o="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||a(e)&&r(e)==o}},239:function(e,t,n){n(57),n(77),n(8);var r=n(223),a=Object.prototype,o=a.hasOwnProperty,u=a.toString,c=r?r.toStringTag:void 0;e.exports=function(e){var t=o.call(e,c),n=e[c];try{e[c]=void 0;var r=!0}catch(f){}var a=u.call(e);return r&&(t?e[c]=n:delete e[c]),a}},240:function(e,t,n){n(57),n(77),n(8);var r=Object.prototype.toString;e.exports=function(e){return r.call(e)}},241:function(e,t,n){n(103);var r=n(242),a=n(243),o=n(225),u=n(244);e.exports=function(e,t,n){return e=o(e),void 0===(t=n?void 0:t)?a(e)?u(e):r(e):e.match(t)||[]}},242:function(e,t,n){n(103);var r=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(r)||[]}},243:function(e,t){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return n.test(e)}},244:function(e,t,n){n(103),n(141);var r="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",a="["+r+"]",o="\\d+",u="[\\u2700-\\u27bf]",c="[a-z\\xdf-\\xf6\\xf8-\\xff]",f="[^\\ud800-\\udfff"+r+o+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",i="(?:\\ud83c[\\udde6-\\uddff]){2}",l="[\\ud800-\\udbff][\\udc00-\\udfff]",s="[A-Z\\xc0-\\xd6\\xd8-\\xde]",d="(?:"+c+"|"+f+")",x="(?:"+s+"|"+f+")",p="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",m="[\\ufe0e\\ufe0f]?"+p+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",i,l].join("|")+")[\\ufe0e\\ufe0f]?"+p+")*"),v="(?:"+[u,i,l].join("|")+")"+m,b=RegExp([s+"?"+c+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[a,s,"$"].join("|")+")",x+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[a,s+d,"$"].join("|")+")",s+"?"+d+"+(?:['’](?:d|ll|m|re|s|t|ve))?",s+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",o,v].join("|"),"g");e.exports=function(e){return e.match(b)||[]}},249:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(58);t.a=function(e){var t=e.left,n=e.right;return a.a.createElement("div",{className:"post-block post-block--half"},t&&a.a.createElement(o.a,{className:"post-block__item",to:t.fields.slug},a.a.createElement("article",{className:"post-block__bordered"},a.a.createElement("div",{className:"post-block__content"},a.a.createElement("h2",{className:"post-block__title"},t.frontmatter.title)))),n&&a.a.createElement(o.a,{className:"post-block__item",to:n.fields.slug},a.a.createElement("article",{className:"post-block__bordered"},a.a.createElement("div",{className:"post-block__content"},a.a.createElement("h2",{className:"post-block__title"},n.frontmatter.title)))))}}}]);
//# sourceMappingURL=component---src-templates-post-jsx-437ab30b8240dacf9e95.js.map