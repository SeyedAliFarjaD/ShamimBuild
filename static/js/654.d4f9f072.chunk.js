(self.webpackChunkkhademan=self.webpackChunkkhademan||[]).push([[654],{5095:(e,t,n)=>{var r=NaN,o="[object Symbol]",i=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,f="object"==typeof self&&self&&self.Object===Object&&self,d=s||f||Function("return this")(),v=Object.prototype.toString,w=Math.max,g=Math.min,y=function(){return d.Date.now()};function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&v.call(e)==o}(e))return r;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=u.test(e);return n||a.test(e)?l(e.slice(2),n?2:8):c.test(e)?r:+e}e.exports=function(e,t,n){var r,o,i,c,u,a,l=0,s=!1,f=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=r,i=o;return r=o=void 0,l=t,c=e.apply(i,n)}function m(e){var n=e-a;return void 0===a||n>=t||n<0||f&&e-l>=i}function b(){var e=y();if(m(e))return k(e);u=setTimeout(b,function(e){var n=t-(e-a);return f?g(n,i-(e-l)):n}(e))}function k(e){return u=void 0,d&&r?v(e):(r=o=void 0,c)}function E(){var e=y(),n=m(e);if(r=arguments,o=this,a=e,n){if(void 0===u)return function(e){return l=e,u=setTimeout(b,t),s?v(e):c}(a);if(f)return u=setTimeout(b,t),v(a)}return void 0===u&&(u=setTimeout(b,t)),c}return t=h(t)||0,p(n)&&(s=!!n.leading,i=(f="maxWait"in n)?w(h(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),E.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=a=o=u=void 0},E.flush=function(){return void 0===u?c:k(y())},E}},6654:(e,t,n)=>{"use strict";n.d(t,{_:()=>a,jr:()=>s});var r=n(2791);n(5095);var o="undefined"!==typeof window?r.useLayoutEffect:r.useEffect;function i(e,t,n,i){const c=(0,r.useRef)(t);o((()=>{c.current=t}),[t]),(0,r.useEffect)((()=>{var t;const r=null!==(t=null==n?void 0:n.current)&&void 0!==t?t:window;if(!r||!r.addEventListener)return;const o=e=>{c.current(e)};return r.addEventListener(e,o,i),()=>{r.removeEventListener(e,o,i)}}),[e,n,i])}function c(e){const t=(0,r.useRef)((()=>{throw new Error("Cannot call an event handler while rendering.")}));return o((()=>{t.current=e}),[e]),(0,r.useCallback)((function(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return null==(e=t.current)?void 0:e.call(t,...r)}),[t])}var u="undefined"===typeof window;function a(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{initializeWithValue:o=!0}=n,a=(0,r.useCallback)((e=>n.serializer?n.serializer(e):JSON.stringify(e)),[n]),l=(0,r.useCallback)((e=>{if(n.deserializer)return n.deserializer(e);if("undefined"===e)return;const r=t instanceof Function?t():t;let o;try{o=JSON.parse(e)}catch(i){return console.error("Error parsing JSON:",i),r}return o}),[n,t]),s=(0,r.useCallback)((()=>{const n=t instanceof Function?t():t;if(u)return n;try{const t=window.localStorage.getItem(e);return t?l(t):n}catch(r){return console.warn("Error reading localStorage key \u201c".concat(e,"\u201d:"),r),n}}),[t,e,l]),[f,d]=(0,r.useState)((()=>o?s():t instanceof Function?t():t)),v=c((t=>{u&&console.warn("Tried setting localStorage key \u201c".concat(e,"\u201d even though environment is not a client"));try{const n=t instanceof Function?t(s()):t;window.localStorage.setItem(e,a(n)),d(n),window.dispatchEvent(new StorageEvent("local-storage",{key:e}))}catch(n){console.warn("Error setting localStorage key \u201c".concat(e,"\u201d:"),n)}})),w=c((()=>{u&&console.warn("Tried removing localStorage key \u201c".concat(e,"\u201d even though environment is not a client"));const n=t instanceof Function?t():t;window.localStorage.removeItem(e),d(n),window.dispatchEvent(new StorageEvent("local-storage",{key:e}))}));(0,r.useEffect)((()=>{d(s())}),[e]);const g=(0,r.useCallback)((t=>{t.key&&t.key!==e||d(s())}),[e,s]);return i("storage",g),i("local-storage",g),[f,v,w]}function l(e){const t=(0,r.useRef)(e);t.current=e,(0,r.useEffect)((()=>()=>{t.current()}),[])}function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{preserveTitleOnUnmount:n=!0}=t,i=(0,r.useRef)(null);o((()=>{i.current=window.document.title}),[]),o((()=>{window.document.title=e}),[e]),l((()=>{!n&&i.current&&(window.document.title=i.current)}))}}}]);
//# sourceMappingURL=654.d4f9f072.chunk.js.map