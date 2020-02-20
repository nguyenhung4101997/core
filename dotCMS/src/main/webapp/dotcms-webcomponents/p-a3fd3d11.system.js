var __extends=this&&this.__extends||function(){var t=function(e,n){t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)if(e.hasOwnProperty(n))t[n]=e[n]};return t(e,n)};return function(e,n){t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();System.register(["./p-79c65723.system.js"],(function(t){"use strict";var e;return{setters:[function(t){e=t.h}],execute:function(){t({a:a,b:d,c:U,d:p,e:o,f:u,g:f,h:n,i:s,j:r,k:i,l:h,m:j,n:v,o:c,u:l});function n(t,e,n){return{"dot-valid":e,"dot-invalid":!e,"dot-pristine":t.dotPristine,"dot-dirty":!t.dotPristine,"dot-touched":t.dotTouched,"dot-untouched":!t.dotTouched,"dot-required":n}}function r(t){return typeof t==="string"&&!!t}function i(t){if(!r(t)){return[]}t=t.replace(/(?:\\[rn]|[\r\n]+)+/g,",");var e=w(t)?t.split(",").filter((function(t){return!!t.length})).map((function(t){var e=t.split("|"),n=e[0],r=e[1];return{label:n,value:r}})):[];return e}function o(t){return t?undefined:"dot-field__error"}function u(t){var e=m(t);return e?"hint-"+e:undefined}function a(t){var e=m(t);return t?"dot-"+m(e):undefined}function c(t){var e=m(t);return e?"label-"+e:undefined}function f(t){return{dotValid:typeof t==="undefined"?true:t,dotTouched:false,dotPristine:true}}function s(t){return t.map((function(t){return t.key+"|"+t.value})).join(",")}function l(t,e){return Object.assign(Object.assign({},t),e)}function d(t,n){return t&&r(n)?e("span",{class:"dot-field__error-message"},n):null}function p(t){return r(t)?e("span",{class:"dot-field__hint",id:u(t)},t):null}function v(t){try{return!!new URL(t)}catch(e){return false}}function h(t,e){var n=e.split(",");n=n.map((function(t){return t.trim()}));var r=t?t.substring(t.indexOf("."),t.length):"";return g(n)||n.includes(r)}function g(t){return t[0]===""||t.includes("*")}function m(t){return t?t.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,""):null}function w(t){var e=/([^|,]*)\|([^|,]*)/;var n=t.split(",");var r=true;for(var i=0,o=n.length;i<o;i++){if(!e.test(n[i])){r=false;break}}return r}var y=new RegExp("^\\d\\d\\d\\d-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])");var _=new RegExp("^(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])$");function b(t){return y.test(t)?t:null}function x(t){return _.test(t)?t:null}function j(t){var e=t?t.split(" "):"",n=e[0],r=e[1];return{date:b(n),time:x(r)||x(n)}}function D(t,e){return!!e?e.split(" ").length>1?O(t):S(t):false}function O(t){return!!t.date&&!!t.time}function S(t){return!!t.date||!!t.time}var T=function(t){__extends(e,t);function e(e,n){var r=t.call(this,'Warning: Invalid prop "'+e.name+'" of type "'+typeof e.value+'" supplied to "'+e.field.type+'" with the name "'+e.field.name+'", expected "'+n+'".\nDoc Reference: https://github.com/dotCMS/core-web/blob/master/projects/dotcms-field-elements/src/components/'+e.field.type+"/readme.md")||this;r.propInfo=e;return r}e.prototype.getProps=function(){return Object.assign({},this.propInfo)};return e}(Error);function P(t){if(typeof t.value!=="string"){throw new T(t,"string")}}function R(t){try{RegExp(t.value.toString())}catch(e){throw new T(t,"valid regular expression")}}function k(t){if(isNaN(Number(t.value))){throw new T(t,"Number")}}function C(t){if(!b(t.value.toString())){throw new T(t,"Date")}}var N=function(t,e,n){if(t>e){throw new T(n,"Date")}};function E(t){var e=t.value.toString().split(","),n=e[0],r=e[1];if(!b(n)||!b(r)){throw new T(t,"Date")}N(new Date(n),new Date(r),t)}function L(t){if(!x(t.value.toString())){throw new T(t,"Time")}}function I(t){if(typeof t.value==="string"){var e=j(t.value);if(!D(e,t.value)){throw new T(t,"Date/Time")}}else{throw new T(t,"Date/Time")}}var $={date:C,dateRange:E,dateTime:I,number:k,options:P,regexCheck:R,step:P,string:P,time:L,type:P,accept:P};var q={options:"",regexCheck:"",value:"",min:"",max:"",step:"",type:"text",accept:null};function A(t,e){if(!!t.value){$[e||t.name](t)}}function M(t,e){return{value:t[e],name:e,field:{name:t["name"],type:t["el"].tagName.toLocaleLowerCase()}}}function U(t,e,n){var r=M(t,e);try{A(r,n);return t[e]}catch(i){console.warn(i.message);return q[e]}}}}}));