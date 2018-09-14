!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("React")):"function"==typeof define&&define.amd?define("scorpioMenu",["React"],n):"object"==typeof exports?exports.scorpioMenu=n(require("React")):e.scorpioMenu=n(e.React)}(window,function(e){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";var o=this&&this.__extends||function(){var e=function(n,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(n,t)};return function(n,t){function o(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}();Object.defineProperty(n,"__esModule",{value:!0});var r=t(1);t(2);var i=function(e){function n(n){var t=e.call(this,n)||this;t.state={menus:{}},t.resolveMenuData=function(e){var n=[];return e.forEach(function(e){var o={dataSource:e,show:!1,subMenu:Array.isArray(e.subMenu)&&e.subMenu.length>0?t.resolveMenuData(e.subMenu):[]};n.push(o)}),n},t.componentDidMount=function(){window.addEventListener("click",t.listenDocClick)},t.componentWillUnmount=function(){window.removeEventListener("click",t.listenDocClick)},t.listenDocClick=function(e){var n=t.props.onClose;!t.scorpioMenu.contains(e.target)&&n&&n(e)},t.onHoverMenuItem=function(e,n){"enter"===e&&(n.show=!0),"leave"===e&&(n.show=!1),t.setState({menu:t.state.menu})},t.onClickMenuItem=function(e,n){var o=t.props.onMenuClick;n.stopPropagation(),o&&o(e.dataSource)},t.renderMenu=function(e){var n=[];return e.subMenu.forEach(function(e,o){var i=!0===e.dataSource.disabled;e.subMenu.length>0?n.push(r.createElement("li",{className:"scorpio-menu-item "+(i?"disabled":""),key:o,onMouseEnter:t.onHoverMenuItem.bind(t,"enter",e),onMouseLeave:t.onHoverMenuItem.bind(t,"leave",e),onClick:t.onClickMenuItem.bind(t,e)},e.dataSource.label,r.createElement("div",{className:"scorpio-menu-submenu-icon"}),r.createElement("div",{className:"scorpio-menu-submenu-container "+(e.show?"":"hide")},t.renderMenu(e)))):!0===e.dataSource.divider?n.push(r.createElement("li",{className:"divider",key:o})):n.push(r.createElement("li",{className:"scorpio-menu-item "+(i?"disabled":""),onClick:t.onClickMenuItem.bind(t,e),key:o},e.dataSource.label))}),r.createElement("ul",{className:"scorpio-menu-list"},n)};var o={dataSource:n.data,show:!0,subMenu:t.resolveMenuData(n.data)};return t.state={menus:o},t}return o(n,e),n.prototype.render=function(){var e=this,n=this.props,t=n.position,o=void 0===t?{x:0,y:0}:t,i=n.show,a=void 0!==i&&i,s=this.state.menus,c={display:a?"block":"none",left:o.x,top:o.y};return r.createElement("div",{className:"scorpio-menu-container",style:c,ref:function(n){n&&(e.scorpioMenu=n)}},this.renderMenu(s))},n}(r.Component);n.default=i},function(n,t){n.exports=e},function(e,n,t){var o=t(3);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(7)(o,r);o.locals&&(e.exports=o.locals)},function(e,n,t){var o=t(4);(e.exports=t(5)(!1)).push([e.i,"@keyframes fadein {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.scorpio-menu {\n  z-index: 20180910;\n}\n.scorpio-menu-container {\n  position: absolute;\n  animation: fadein ease-in-out 150ms;\n  animation-fill-mode: forwards;\n}\n.scorpio-menu-container.show {\n  display: block;\n}\n.scorpio-menu-container.hide {\n  display: none;\n}\n.scorpio-menu-submenu-container {\n  position: absolute;\n  left: 100%;\n  top: 0;\n  margin-left: 5px;\n  animation: fadein ease-in-out 150ms;\n  animation-fill-mode: forwards;\n}\n.scorpio-menu-submenu-container.hide {\n  display: none;\n}\n.scorpio-menu-submenu-container.show {\n  display: block;\n}\n.scorpio-menu-list {\n  list-style: none;\n  outline: none;\n  position: relative;\n  list-style-type: none;\n  padding: 4px 0;\n  margin: 0;\n  text-align: left;\n  background-color: #fff;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.scorpio-menu-list .scorpio-menu-item {\n  position: relative;\n  min-width: 80px;\n  padding: 5px 12px;\n  margin: 0;\n  font-size: 14px;\n  font-weight: normal;\n  color: rgba(0, 0, 0, 0.65);\n  white-space: nowrap;\n  cursor: pointer;\n  transition: all 0.2s;\n  line-height: 22px;\n}\n.scorpio-menu-list .scorpio-menu-item:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: -5px;\n  width: 5px;\n  height: 100%;\n  cursor: default;\n}\n.scorpio-menu-list .scorpio-menu-item:hover:not(.disabled) {\n  background-color: #f7f7f7;\n}\n.scorpio-menu-list .scorpio-menu-item.disabled {\n  color: rgba(0, 0, 0, 0.25);\n  cursor: not-allowed;\n}\n.scorpio-menu-list .scorpio-menu-item .scorpio-menu-submenu-icon {\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  top: 10px;\n  right: 5px;\n  background-image: url("+o(t(6))+");\n  background-size: 100% 100%;\n}\n.scorpio-menu-list .divider {\n  height: 1px;\n  overflow: hidden;\n  background-color: #e8e8e8;\n  line-height: 0;\n}\n",""])},function(e,n){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},function(e,n){e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var r=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(o),i=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[t].concat(i).concat([r]).join("\n")}return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&o[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}},function(e,n){e.exports="data:image/png;base64,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"},function(e,n,t){var o={},r=function(e){var n;return function(){return void 0===n&&(n=e.apply(this,arguments)),n}}(function(){return window&&document&&document.all&&!window.atob}),i=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var o=function(e,n){return n?n.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}n[e]=o}return n[e]}}(),a=null,s=0,c=[],u=t(8);function l(e,n){for(var t=0;t<e.length;t++){var r=e[t],i=o[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(g(r.parts[a],n))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(g(r.parts[a],n));o[r.id]={id:r.id,refs:1,parts:s}}}}function p(e,n){for(var t=[],o={},r=0;r<e.length;r++){var i=e[r],a=n.base?i[0]+n.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):t.push(o[a]={id:a,parts:[s]})}return t}function f(e,n){var t=i(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=c[c.length-1];if("top"===e.insertAt)o?o.nextSibling?t.insertBefore(n,o.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),c.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=i(e.insertAt.before,t);t.insertBefore(n,r)}}function d(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=c.indexOf(e);n>=0&&c.splice(n,1)}function m(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var o=function(){0;return t.nc}();o&&(e.attrs.nonce=o)}return h(n,e.attrs),f(e,n),n}function h(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function g(e,n){var t,o,r,i;if(n.transform&&e.css){if(!(i=n.transform(e.css)))return function(){};e.css=i}if(n.singleton){var c=s++;t=a||(a=m(n)),o=C.bind(null,t,c,!1),r=C.bind(null,t,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",h(n,e.attrs),f(e,n),n}(n),o=function(e,n,t){var o=t.css,r=t.sourceMap,i=void 0===n.convertToAbsoluteUrls&&r;(n.convertToAbsoluteUrls||i)&&(o=u(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,n),r=function(){d(t),t.href&&URL.revokeObjectURL(t.href)}):(t=m(n),o=function(e,n){var t=n.css,o=n.media;o&&e.setAttribute("media",o);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),r=function(){d(t)});return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=r()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=p(e,n);return l(t,n),function(e){for(var r=[],i=0;i<t.length;i++){var a=t[i];(s=o[a.id]).refs--,r.push(s)}e&&l(p(e,n),n);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete o[s.id]}}}};var y=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}();function C(e,n,t,o){var r=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=y(n,r);else{var i=document.createTextNode(r),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,o=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var r,i=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}}])});
//# sourceMappingURL=scorpio-menu.js.map