!function(e){function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=3)}([function(e,n,t){e.exports=t.p+"images/girl_085b832a.jpg"},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e){void 0===e&&(e="World"),this._name=e}return e.prototype.toString=function(){return"Hello "+this._name+"!"},e}();n.ModuleA=o},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(){return console.log("shake")};n.shake=o;var r=function(){return console.log("bake")};n.bake=r},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(1);t(2).bake(),window.onload=function(){var e=document.createElement("div");e.innerHTML=new o.ModuleA("Nshen").toString(),document.body.appendChild(e);var n=t(0);console.log(n);var r=new Image(n.width,n.height);r.src=n.src,document.body.appendChild(r)}}]);