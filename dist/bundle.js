!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ParagraphImage=t():e.ParagraphImage=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=7)}([function(e,t){e.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18.1 1C18.5968 1 19 1.41354 19 1.92308V14.8462C19 15.3557 18.5968 15.7692 18.1 15.7692H5.0095L1 19V1.92308C1 1.41354 1.4032 1 1.9 1H18.1ZM17.2 2.84615H2.8V15.2015L4.3867 13.9231H17.2V2.84615ZM8.6635 5.07262L9.0658 5.70769C7.5646 6.54123 7.5907 7.87877 7.5907 8.16677C7.7302 8.14831 7.8769 8.14462 8.0227 8.15846C8.8345 8.236 9.4744 8.92 9.4744 9.76923C9.4744 10.6609 8.7688 11.3846 7.8994 11.3846C7.4161 11.3846 6.9544 11.1585 6.6628 10.84C6.1993 10.336 5.95 9.76923 5.95 8.85077C5.95 7.23538 7.0552 5.788 8.6635 5.07262V5.07262ZM13.1635 5.07262L13.5658 5.70769C12.0646 6.54123 12.0907 7.87877 12.0907 8.16677C12.2302 8.14831 12.3769 8.14462 12.5227 8.15846C13.3345 8.236 13.9744 8.92 13.9744 9.76923C13.9744 10.6609 13.2688 11.3846 12.3994 11.3846C11.9161 11.3846 11.4544 11.1585 11.1628 10.84C10.6993 10.336 10.45 9.76923 10.45 8.85077C10.45 7.23538 11.5552 5.788 13.1635 5.07262V5.07262Z"></path></svg>'},function(e,t,n){window,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";(function(e){var r=n(2),o=setTimeout;function i(){}function a(e){if(!(this instanceof a))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],d(e,this)}function s(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,a._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var r;try{r=n(e._value)}catch(e){return void u(t.promise,e)}c(t.promise,r)}else(1===e._state?c:u)(t.promise,e._value)})):e._deferreds.push(t)}function c(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof a)return e._state=3,e._value=t,void l(e);if("function"==typeof n)return void d((r=n,o=t,function(){r.apply(o,arguments)}),e)}e._state=1,e._value=t,l(e)}catch(t){u(e,t)}var r,o}function u(e,t){e._state=2,e._value=t,l(e)}function l(e){2===e._state&&0===e._deferreds.length&&a._immediateFn(function(){e._handled||a._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)s(e,e._deferreds[t]);e._deferreds=null}function f(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function d(e,t){var n=!1;try{e(function(e){n||(n=!0,c(t,e))},function(e){n||(n=!0,u(t,e))})}catch(e){if(n)return;n=!0,u(t,e)}}a.prototype.catch=function(e){return this.then(null,e)},a.prototype.then=function(e,t){var n=new this.constructor(i);return s(this,new f(e,t,n)),n},a.prototype.finally=r.a,a.all=function(e){return new a(function(t,n){if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var r=Array.prototype.slice.call(e);if(0===r.length)return t([]);var o=r.length;function i(e,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(t){i(e,t)},n)}r[e]=a,0==--o&&t(r)}catch(e){n(e)}}for(var a=0;a<r.length;a++)i(a,r[a])})},a.resolve=function(e){return e&&"object"==typeof e&&e.constructor===a?e:new a(function(t){t(e)})},a.reject=function(e){return new a(function(t,n){n(e)})},a.race=function(e){return new a(function(t,n){for(var r=0,o=e.length;r<o;r++)e[r].then(t,n)})},a._immediateFn="function"==typeof e&&function(t){e(t)}||function(e){o(e,0)},a._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.a=a}).call(this,n(5).setImmediate)},function(e,t,n){"use strict";t.a=function(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){return t.reject(n)})})}},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n(4);var o,i,a,s,c,u,l,f=n(8),d=(i=function(e){return new Promise(function(t,n){e=s(e),(e=c(e)).beforeSend&&e.beforeSend();var r=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP");r.open(e.method,e.url),r.setRequestHeader("X-Requested-With","XMLHttpRequest"),Object.keys(e.headers).forEach(function(t){var n=e.headers[t];r.setRequestHeader(t,n)});var o=e.ratio;r.upload.addEventListener("progress",function(t){var n=Math.round(t.loaded/t.total*100),r=Math.ceil(n*o/100);e.progress(Math.min(r,100))},!1),r.addEventListener("progress",function(t){var n=Math.round(t.loaded/t.total*100),r=Math.ceil(n*(100-o)/100)+o;e.progress(Math.min(r,100))},!1),r.onreadystatechange=function(){if(4===r.readyState){var e=r.response;try{e=JSON.parse(e)}catch(e){}var o=f.parseHeaders(r.getAllResponseHeaders()),i={body:e,code:r.status,headers:o};l(r.status)?t(i):n(i)}},r.send(e.data)})},a=function(e){return e.method="POST",i(e)},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e.url&&"string"!=typeof e.url)throw new Error("Url must be a string");if(e.url=e.url||"",e.method&&"string"!=typeof e.method)throw new Error("`method` must be a string or null");if(e.method=e.method?e.method.toUpperCase():"GET",e.headers&&"object"!==r(e.headers))throw new Error("`headers` must be an object or null");if(e.headers=e.headers||{},e.type&&("string"!=typeof e.type||!Object.values(o).includes(e.type)))throw new Error("`type` must be taken from module's «contentType» library");if(e.progress&&"function"!=typeof e.progress)throw new Error("`progress` must be a function or null");if(e.progress=e.progress||function(e){},e.beforeSend=e.beforeSend||function(e){},e.ratio&&"number"!=typeof e.ratio)throw new Error("`ratio` must be a number");if(e.ratio<0||e.ratio>100)throw new Error("`ratio` must be in a 0-100 interval");if(e.ratio=e.ratio||90,e.accept&&"string"!=typeof e.accept)throw new Error("`accept` must be a string with a list of allowed mime-types");if(e.accept=e.accept||"*/*",e.multiple&&"boolean"!=typeof e.multiple)throw new Error("`multiple` must be a true or false");if(e.multiple=e.multiple||!1,e.fieldName&&"string"!=typeof e.fieldName)throw new Error("`fieldName` must be a string");return e.fieldName=e.fieldName||"files",e},c=function(e){switch(e.method){case"GET":var t=u(e.data,o.URLENCODED);delete e.data,e.url=/\?/.test(e.url)?e.url+"&"+t:e.url+"?"+t;break;case"POST":case"PUT":case"DELETE":case"UPDATE":var n=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).type||o.JSON}(e);(f.isFormData(e.data)||f.isFormElement(e.data))&&(n=o.FORM),e.data=u(e.data,n),n!==d.contentType.FORM&&(e.headers["content-type"]=n)}return e},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch(arguments.length>1?arguments[1]:void 0){case o.URLENCODED:return f.urlEncode(e);case o.JSON:return f.jsonEncode(e);case o.FORM:return f.formEncode(e);default:return e}},l=function(e){return e>=200&&e<300},{contentType:o={URLENCODED:"application/x-www-form-urlencoded; charset=utf-8",FORM:"multipart/form-data",JSON:"application/json; charset=utf-8"},request:i,get:function(e){return e.method="GET",i(e)},post:a,transport:function(e){return e=s(e),f.selectFiles(e).then(function(t){for(var n=new FormData,r=0;r<t.length;r++)n.append(e.fieldName,t[r],t[r].name);f.isObject(e.data)&&Object.keys(e.data).forEach(function(t){var r=e.data[t];n.append(t,r)});var o=e.beforeSend;return e.beforeSend=function(){return o(t)},e.data=n,a(e)})},selectFiles:function(e){return delete(e=s(e)).beforeSend,f.selectFiles(e)}});e.exports=d},function(e,t,n){"use strict";n.r(t);var r=n(1);window.Promise=window.Promise||r.a},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(o.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new i(o.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(6),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(0))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,o,i,a,s,c=1,u={},l=!1,f=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick(function(){h(e)})}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?(a="setImmediate$"+Math.random()+"$",s=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&h(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",s,!1):e.attachEvent("onmessage",s),r=function(t){e.postMessage(a+t,"*")}):e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){h(e.data)},r=function(e){i.port2.postMessage(e)}):f&&"onreadystatechange"in f.createElement("script")?(o=f.documentElement,r=function(e){var t=f.createElement("script");t.onreadystatechange=function(){h(e),t.onreadystatechange=null,o.removeChild(t),t=null},o.appendChild(t)}):r=function(e){setTimeout(h,0,e)},d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var o={callback:e,args:t};return u[c]=o,r(c),c++},d.clearImmediate=p}function p(e){delete u[e]}function h(e){if(l)setTimeout(h,0,e);else{var t=u[e];if(t){l=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}(t)}finally{p(e),l=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(0),n(7))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,u=[],l=!1,f=-1;function d(){l&&c&&(l=!1,c.length?u=c.concat(u):f=-1,u.length&&p())}function p(){if(!l){var e=s(d);l=!0;for(var t=u.length;t;){for(c=u,u=[];++f<t;)c&&c[f].run();f=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||l||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=n(9);e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"urlEncode",value:function(e){return o(e)}},{key:"jsonEncode",value:function(e){return JSON.stringify(e)}},{key:"formEncode",value:function(e){if(this.isFormData(e))return e;if(this.isFormElement(e))return new FormData(e);if(this.isObject(e)){var t=new FormData;return Object.keys(e).forEach(function(n){var r=e[n];t.append(n,r)}),t}throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement")}},{key:"isObject",value:function(e){return"[object Object]"===Object.prototype.toString.call(e)}},{key:"isFormData",value:function(e){return e instanceof FormData}},{key:"isFormElement",value:function(e){return e instanceof HTMLFormElement}},{key:"selectFiles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise(function(t,n){var r=document.createElement("INPUT");r.type="file",e.multiple&&r.setAttribute("multiple","multiple"),e.accept&&r.setAttribute("accept",e.accept),r.style.display="none",document.body.appendChild(r),r.addEventListener("change",function(e){var n=e.target.files;t(n),document.body.removeChild(r)},!1),r.click()})}},{key:"parseHeaders",value:function(e){var t=e.trim().split(/[\r\n]+/),n={};return t.forEach(function(e){var t=e.split(": "),r=t.shift(),o=t.join(": ");r&&(n[r]=o)}),n}}])&&r(t,n),e}()},function(e,t){var n=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,escape).replace(/%20/g,"+")},r=function(e,t,o,i){return t=t||null,o=o||"&",i=i||null,e?function(e){for(var t=new Array,n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t}(Object.keys(e).map(function(a){var s,c,u=a;if(i&&(u=i+"["+u+"]"),"object"==typeof e[a]&&null!==e[a])s=r(e[a],null,o,u);else{t&&(c=u,u=!isNaN(parseFloat(c))&&isFinite(c)?t+Number(u):u);var l=e[a];l=(l=0===(l=!1===(l=!0===l?"1":l)?"0":l)?"0":l)||"",s=n(u)+"="+n(l)}return s})).join(o).replace(/[!'()*]/g,""):""};e.exports=r}])},function(e,t,n){var r=n(3);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(5)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(4)(!1)).push([e.i,'.cdx-paragraph-image [data-placeholder]:empty::before{\n        content: attr(data-placeholder);\n        color: #707684;\n        font-weight: normal;\n        opacity: 1;\n    }\n    .cdx-paragraph-image__wrapper {\n        display: flex;\n        flex-direction: column;\n    }\n    .cdx-paragraph-image__card {\n        display: flex;\n        flex-direction: column;\n    }\n    .cdx-paragraph-image__text {\n        line-height: 1.6em;\n        outline: none;\n        margin-bottom: 10px;\n    }\n    .cdx-paragraph-image__fields {\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n    }\n    .cdx-paragraph-image__title {\n        font-weight: 600;\n    }\n    .cdx-paragraph-image__description {\n        font-size: 0.86em;\n        margin: 10px 0;\n    }\n    .cdx-paragraph-image__title,\n    .cdx-paragraph-image__description {\n        outline: none;\n        border-left: 1px solid rgba(201, 201, 204, 0.48);\n        padding: 5px 0 5px 10px;\n    }\n    .cdx-paragraph-image__image {\n        width: 140px;\n        height: auto;\n        min-width: 70px;\n        min-height: 70px;\n        max-height: 140px;\n        margin-left: 0;\n        margin-bottom: 10px;\n        border-radius: 3px;\n        background: #f6f6f9 url(\'data:image/svg+xml,<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3.15 13.628A7.749 7.749 0 0 0 10 17.75a7.74 7.74 0 0 0 6.305-3.242l-2.387-2.127-2.765 2.244-4.389-4.496-3.614 3.5zm-.787-2.303l4.446-4.371 4.52 4.63 2.534-2.057 3.533 2.797c.23-.734.354-1.514.354-2.324a7.75 7.75 0 1 0-15.387 1.325zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z" fill="gray"></path></svg>\') center center no-repeat;\n        cursor: pointer;\n        overflow: hidden;\n    }\n\n@media (min-width: 728px) {\n        .cdx-paragraph-image__wrapper {\n            flex-direction: row;\n        }\n        .cdx-paragraph-image__card {\n            flex-direction: row-reverse;\n        }\n        .cdx-paragraph-image__image {\n            margin-left: 15px;\n            margin-bottom: 0;\n        }\n}\n',""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=r.sources.map(function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")});return[n].concat(i).concat([o]).join("\n")}var a,s,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<e.length;a++){var s=e[a];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),t.push(s))}},t}},function(e,t,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),c=null,u=0,l=[],f=n(6);function d(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(y(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(y(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:s}}}}function p(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function h(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),l.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertAt.before,n);n.insertBefore(t,o)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function v(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return g(t,e.attrs),h(e,t),t}function g(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function y(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var a=u++;n=c||(c=v(t)),r=x.bind(null,n,a,!1),o=x.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(t,e.attrs),h(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){m(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return d(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}e&&d(p(e,t),t);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var b,w=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function x(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=(n(2),n(1)),a=n.n(i);function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){var n=t.config,r=t.onUpload,o=t.onError;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config=n,this.onUpload=r,this.onError=o}var t,n,r;return t=e,(n=[{key:"uploadSelectedFile",value:function(e){var t=this,n=e.onPreview;a.a.transport({url:this.config.endpoint,accept:this.config.types,data:this.config.additionalRequestData,headers:this.config.additionalRequestHeaders,beforeSend:function(e){var t=new FileReader;t.readAsDataURL(e[0]),t.onload=function(e){n(e.target.result)}},fieldName:this.config.field}).then(function(e){t.onUpload(e)}).catch(function(e){var n=e.body?e.body.message:"Uploading failed";t.onError(n)})}}])&&s(t.prototype,n),r&&s(t,r),e}();function u(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.d(t,"default",function(){return d});var d=function(){function e(t){var n=this,r=t.data,o=t.config,i=t.api;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=i,this.nodes={wrapper:null,text:null,image:null,title:null,description:null},this.config={endpoint:o.endpoint||"",field:o.field||"image",types:o.types||"image/*",additionalRequestData:o.additionalRequestData||{},additionalRequestHeaders:o.additionalRequestHeaders||{},textPlaceholder:o.textPlaceholder||"Text",titlePlaceholder:o.titlePlaceholder||"Title",descriptionPlaceholder:o.descriptionPlaceholder||"Description"},this.data=r,this.uploader=new c({config:this.config,onUpload:function(e){return n.onUpload(e)},onError:function(e){return n.uploadingFailed(e)}})}var t,n,r;return t=e,r=[{key:"toolbox",get:function(){return{icon:o.a,title:"Paragraph Image"}}},{key:"conversionConfig",get:function(){return{export:"text",import:"text"}}},{key:"sanitize",get:function(){var e={br:!1,b:!1,i:!1,a:!1};return{title:e,description:e,text:Object.assign({},e,{br:!0})}}}],(n=[{key:"onUpload",value:function(e){var t=e.body,n=t.success,r=t.file;n&&r&&r.url&&(this.data.image=r,this.showFullImage())}},{key:"showFullImage",value:function(){var e=this;setTimeout(function(){e.nodes.image.classList.remove(e.CSS.loader),e.nodes.image.style.background="url('".concat(e.data.image.url,"') center center / contain no-repeat")},500)}},{key:"stopLoading",value:function(){var e=this;setTimeout(function(){e.nodes.image.classList.remove(e.CSS.loader),e.nodes.image.removeAttribute("style")},500)}},{key:"addLoader",value:function(){this.nodes.image.style.background="none",this.nodes.image.classList.add(this.CSS.loader)}},{key:"uploadingFailed",value:function(e){this.stopLoading(),this.api.notifier.show({message:e,style:"error"})}},{key:"save",value:function(e){var t=(this.nodes.text.innerHTML||"").trim(),n=(this.nodes.title.textContent||"").trim(),r=(this.nodes.description.textContent||"").trim();return Object.assign(this.data,{text:t,title:n,description:r}),this.data}},{key:"render",value:function(){var e=this,t=this.data,n=t.text,r=t.image,o=t.title,i=t.description;this.nodes.wrapper=this.make("div",[this.CSS.baseClass,this.CSS.wrapper]),this.nodes.text=this.make("div",[this.CSS.input,this.CSS.text],{contentEditable:!0,innerHTML:n||""}),this.nodes.text.dataset.placeholder=this.config.textPlaceholder,this.nodes.text.addEventListener("keyup",this.onKeyUp),this.nodes.title=this.make("div",this.CSS.title,{contentEditable:!0}),this.nodes.title.dataset.placeholder=this.config.titlePlaceholder,o&&(this.nodes.title.textContent=o),this.nodes.description=this.make("div",this.CSS.description,{contentEditable:!0}),this.nodes.description.dataset.placeholder=this.config.descriptionPlaceholder,i&&(this.nodes.description.textContent=i),this.nodes.image=this.make("div",this.CSS.image),r&&(this.nodes.image.style.background="url('".concat(r.url,"') center center / contain no-repeat")),this.nodes.image.addEventListener("click",function(){e.uploader.uploadSelectedFile({onPreview:function(){e.addLoader()}})});var a=this.make("div",this.CSS.fields);a.appendChild(this.nodes.title),a.appendChild(this.nodes.description);var s=this.make("div",this.CSS.card);return s.appendChild(this.nodes.image),s.appendChild(a),this.nodes.wrapper.appendChild(this.nodes.text),this.nodes.wrapper.appendChild(s),this.nodes.wrapper}},{key:"onKeyUp",value:function(e){"Backspace"!==e.code&&"Delete"!==e.code||""===this.nodes.text.textContent&&(this.nodes.text.innerHTML="")}},{key:"validate",value:function(e){return""!==e.text.trim()}},{key:"make",value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=document.createElement(e);Array.isArray(n)?(t=o.classList).add.apply(t,u(n)):n&&o.classList.add(n);for(var i in r)o[i]=r[i];return o}},{key:"CSS",get:function(){return{baseClass:this.api.styles.block,input:this.api.styles.input,loader:this.api.styles.loader,wrapper:"cdx-paragraph-image",card:"cdx-paragraph-image__card",fields:"cdx-paragraph-image__fields",image:"cdx-paragraph-image__image",title:"cdx-paragraph-image__title",text:"cdx-paragraph-image__text",description:"cdx-paragraph-image__description"}}}])&&f(t.prototype,n),r&&f(t,r),e}()}]).default});