module.exports=function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";var o=this&&this.__extends||function(){var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])})(e,t)};return function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0});var r=t(1);t(2);var i=function(n){function e(e){var t=n.call(this,e)||this;t.state={menus:{}},t.resolveMenuData=function(n){var e=[];return n.forEach(function(n){var o={dataSource:n,show:!1,subMenu:Array.isArray(n.subMenu)&&n.subMenu.length>0?t.resolveMenuData(n.subMenu):[]};e.push(o)}),e},t.componentDidMount=function(){window.addEventListener("click",t.listenDocClick)},t.componentWillUnmount=function(){window.removeEventListener("click",t.listenDocClick)},t.listenDocClick=function(n){var e=t.props.onClose;!t.scorpioMenu.contains(n.target)&&e&&e(n)},t.onHoverMenuItem=function(n,e){"enter"===n&&(e.show=!0),"leave"===n&&(e.show=!1),t.setState({menu:t.state.menu})},t.onClickMenuItem=function(n,e){var o=t.props.onMenuClick;e.stopPropagation(),o&&o(n.dataSource)},t.renderMenu=function(n){var e=[];return n.subMenu.forEach(function(n,o){var i=!0===n.dataSource.disabled;n.subMenu.length>0?e.push(r.createElement("li",{className:"scorpio-menu-item "+(i?"disabled":""),key:o,onMouseEnter:t.onHoverMenuItem.bind(t,"enter",n),onMouseLeave:t.onHoverMenuItem.bind(t,"leave",n),onClick:t.onClickMenuItem.bind(t,n)},n.dataSource.label,r.createElement("div",{className:"scorpio-menu-submenu-icon"}),r.createElement("div",{className:"scorpio-menu-submenu-container "+(n.show?"":"hide")},t.renderMenu(n)))):!0===n.dataSource.divider?e.push(r.createElement("li",{className:"divider",key:o})):e.push(r.createElement("li",{className:"scorpio-menu-item "+(i?"disabled":""),onClick:t.onClickMenuItem.bind(t,n),key:o},n.dataSource.label))}),r.createElement("ul",{className:"scorpio-menu-list"},e)};var o={dataSource:e.data,show:!0,subMenu:t.resolveMenuData(e.data)};return t.state={menus:o},t}return o(e,n),e.prototype.render=function(){var n=this,e=this.props,t=e.position,o=void 0===t?{x:0,y:0}:t,i=e.show,a=void 0!==i&&i,s=this.state.menus,c={display:a?"block":"none",left:o.x,top:o.y};return r.createElement("div",{className:"scorpio-menu-container",style:c,ref:function(e){e&&(n.scorpioMenu=e)}},this.renderMenu(s))},e}(r.Component);e.default=i},function(n,e){n.exports=require("react")},function(n,e,t){var o=t(3);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(7)(o,r);o.locals&&(n.exports=o.locals)},function(n,e,t){var o=t(4);(n.exports=t(5)(!1)).push([n.i,"@keyframes fadein {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.scorpio-menu-container {\n  position: absolute;\n  z-index: 19911111;\n  animation: fadein ease-in-out 150ms;\n  animation-fill-mode: forwards;\n}\n.scorpio-menu-container.show {\n  display: block;\n}\n.scorpio-menu-container.hide {\n  display: none;\n}\n.scorpio-menu-submenu-container {\n  position: absolute;\n  left: 100%;\n  top: 0;\n  margin-left: 5px;\n  animation: fadein ease-in-out 150ms;\n  animation-fill-mode: forwards;\n}\n.scorpio-menu-submenu-container.hide {\n  display: none;\n}\n.scorpio-menu-submenu-container.show {\n  display: block;\n}\n.scorpio-menu-list {\n  list-style: none;\n  outline: none;\n  position: relative;\n  list-style-type: none;\n  padding: 4px 0;\n  margin: 0;\n  text-align: left;\n  background-color: #fff;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.scorpio-menu-list .scorpio-menu-item {\n  position: relative;\n  min-width: 80px;\n  padding: 5px 12px;\n  margin: 0;\n  font-size: 14px;\n  font-weight: normal;\n  color: rgba(0, 0, 0, 0.65);\n  white-space: nowrap;\n  cursor: pointer;\n  transition: all 0.2s;\n  line-height: 22px;\n}\n.scorpio-menu-list .scorpio-menu-item:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: -5px;\n  width: 5px;\n  height: 100%;\n  cursor: default;\n}\n.scorpio-menu-list .scorpio-menu-item:hover:not(.disabled) {\n  background-color: #f7f7f7;\n}\n.scorpio-menu-list .scorpio-menu-item.disabled {\n  color: rgba(0, 0, 0, 0.25);\n  cursor: not-allowed;\n}\n.scorpio-menu-list .scorpio-menu-item .scorpio-menu-submenu-icon {\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  top: 10px;\n  right: 5px;\n  background-image: url("+o(t(6))+");\n  background-size: 100% 100%;\n}\n.scorpio-menu-list .divider {\n  height: 1px;\n  overflow: hidden;\n  background-color: #e8e8e8;\n  line-height: 0;\n}\n",""])},function(n,e){n.exports=function(n){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)?'"'+n.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':n)}},function(n,e){n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var r=function(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}(o),i=o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"});return[t].concat(i).concat([r]).join("\n")}return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<n.length;r++){var a=n[r];"number"==typeof a[0]&&o[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(n,e){n.exports="data:image/png;base64,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"},function(n,e,t){var o={},r=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),i=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var o=function(n,e){return e?e.querySelector(n):document.querySelector(n)}.call(this,n,t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}e[n]=o}return e[n]}}(),a=null,s=0,c=[],u=t(8);function l(n,e){for(var t=0;t<n.length;t++){var r=n[t],i=o[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(g(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(g(r.parts[a],e));o[r.id]={id:r.id,refs:1,parts:s}}}}function p(n,e){for(var t=[],o={},r=0;r<n.length;r++){var i=n[r],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):t.push(o[a]={id:a,parts:[s]})}return t}function f(n,e){var t=i(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=c[c.length-1];if("top"===n.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),c.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=i(n.insertAt.before,t);t.insertBefore(e,r)}}function d(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=c.indexOf(n);e>=0&&c.splice(e,1)}function m(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var o=function(){0;return t.nc}();o&&(n.attrs.nonce=o)}return h(e,n.attrs),f(n,e),e}function h(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function g(n,e){var t,o,r,i;if(e.transform&&n.css){if(!(i=e.transform(n.css)))return function(){};n.css=i}if(e.singleton){var c=s++;t=a||(a=m(e)),o=C.bind(null,t,c,!1),r=C.bind(null,t,c,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",h(e,n.attrs),f(n,e),e}(e),o=function(n,e,t){var o=t.css,r=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=u(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,e),r=function(){d(t),t.href&&URL.revokeObjectURL(t.href)}):(t=m(e),o=function(n,e){var t=e.css,o=e.media;o&&n.setAttribute("media",o);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),r=function(){d(t)});return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=r()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=p(n,e);return l(t,e),function(n){for(var r=[],i=0;i<t.length;i++){var a=t[i];(s=o[a.id]).refs--,r.push(s)}n&&l(p(n,e),e);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete o[s.id]}}}};var y=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}();function C(n,e,t,o){var r=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=y(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,o=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var r,i=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}}]);
//# sourceMappingURL=scorpio-menu.js.map