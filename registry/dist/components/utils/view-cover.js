!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/view-cover"]=t():e["utils/view-cover"]=t()}(globalThis,(()=>(()=>{var e={926:(e,t,n)=>{var o=n(218)((function(e){return e[1]}));o.push([e.id,".download-cover-config.download-video-config-section .be-dropdown {\n  text-transform: uppercase;\n}",""]),e.exports=o},218:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,o){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var s=this[i][0];null!=s&&(r[s]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},518:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});var o=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"download-cover-config download-video-config-section"},[t("div",{staticClass:"download-video-config-item"},[t("div",{staticClass:"download-video-config-title"},[e._v("封面:")]),e._v(" "),t("VDropdown",{attrs:{items:e.items},scopedSlots:e._u([{key:"item",fn:function({item:t}){return[e._v("\n        "+e._s(t)+"\n      ")]}}]),model:{value:e.type,callback:function(t){e.type=t},expression:"type"}})],1)])};o._withStripped=!0;const r=coreApis.settings;var i=n(648);const{options:s}=(0,r.getComponentSettings)("downloadVideo"),a=Vue.extend({components:{VDropdown:i.VDropdown},data:()=>({type:s.CoverType??"无",items:["无","jpg"]}),computed:{enabled(){return"无"!==this.type}},watch:{type(e){s.CoverType=e}}});var c=n(332),d=n.n(c),l=n(926),u=n.n(l),p={insert:"head",singleton:!1};d()(u(),p);u().locals;const f=(0,n(499).Z)(a,o,[],!1,null,null,null).exports},647:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var o=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("DefaultWidget",{staticClass:"view-cover",attrs:{disabled:!e.imageUrl,name:"查看封面",icon:"mdi-image-outline"},on:{click:function(t){return e.viewCover()}}})};o._withStripped=!0;var r=n(284);const i=coreApis.ajax,s=coreApis.observer,a=coreApis.spinQuery;var c=n(648);const d=Vue.extend({components:{DefaultWidget:c.DefaultWidget},data:()=>({imageUrl:""}),async mounted(){if(document.URL.includes("live.bilibili.com")){const e=".header-info-ctnr .room-cover, .header-info-ctnr .avatar",t=await(0,a.select)(e);if(!t)return;const n=t.getAttribute("href").match(/space\.bilibili\.com\/([\d]+)/);if(n&&n[1]){const e=`https://api.live.bilibili.com/room/v1/Room/getRoomInfoOld?mid=${n[1]}`,t=await(0,i.getJson)(e);this.imageUrl=t.data.cover.replace("http:","https:")}}else(0,s.videoChange)((async()=>{const{aid:e}=unsafeWindow;this.imageUrl=await(0,r.getVideoCoverUrlByAid)(e)}))},methods:{async viewCover(){(0,c.showImage)(this.imageUrl)}}});const l=(0,n(499).Z)(d,o,[],!1,null,null,null).exports},499:(e,t,n)=>{"use strict";function o(e,t,n,o,r,i,s,a){var c,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),o&&(d.functional=!0),i&&(d._scopeId="data-v-"+i),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},d._ssrRegister=c):r&&(c=a?function(){r.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:r),c)if(d.functional){d._injectStyles=c;var l=d.render;d.render=function(e,t){return c.call(t),l(e,t)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,c):[c]}return{exports:e,options:d}}n.d(t,{Z:()=>o})},332:(e,t,n)=>{"use strict";var o,r=function(){return void 0===o&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function a(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],c=t.base?i[0]+t.base:i[0],d=n[c]||0,l="".concat(c," ").concat(d);n[c]=d+1;var u=a(l),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(s[u].references++,s[u].updater(p)):s.push({identifier:l,updater:h(p,t),references:1}),o.push(l)}return o}function d(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var s=i(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function p(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var i=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function f(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var v=null,m=0;function h(e,t){var n,o,r;if(t.singleton){var i=m++;n=v||(v=d(t)),o=p.bind(null,n,i,!1),r=p.bind(null,n,i,!0)}else n=d(t),o=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=a(n[o]);s[r].references--}for(var i=c(e,t),d=0;d<n.length;d++){var l=a(n[d]);0===s[l].references&&(s[l].updater(),s.splice(l,1))}n=i}}}},284:e=>{"use strict";e.exports=coreApis.componentApis.video.videoCover},648:e=>{"use strict";e.exports=coreApis.ui}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{"use strict";n.d(o,{component:()=>s});const e=coreApis.componentApis.define;var t=n(284);const r=coreApis.utils.urls,i=coreApis.toast,s=(0,e.defineComponentMetadata)({name:"viewCover",displayName:"查看封面",tags:[componentsTags.utils,componentsTags.video],entry:none,reload:none,unload:none,plugin:{displayName:"下载视频 - 下载封面支持",setup:e=>{let{addData:o}=e;o("downloadVideo.assets",(async e=>{e.push({name:"downloadCover",displayName:"下载封面",getAssets:async(e,n)=>{const{type:o,enabled:r}=n;if(!r)return[];const s=i.Toast.info("获取封面中...","下载封面");let a=0;const c=await Promise.allSettled(e.map((async n=>{const r=await(0,t.getBlobByAid)(n.input.aid);return a++,s.message=`获取封面中... (${a}/${e.length})`,{name:`${n.input.title}.${o}`,data:r}}))),d=c.filter((e=>"fulfilled"===e.status)),l=c.filter((e=>"rejected"===e.status));return s.message=`获取完成. 成功 ${d.length} 个, 失败 ${l.length} 个.`,d.map((e=>e.value))},component:()=>Promise.resolve().then(n.bind(n,518)).then((e=>e.default))})}))}},widget:{component:()=>Promise.resolve().then(n.bind(n,647)).then((e=>e.default))},description:{"zh-CN":"在视频页面中, 可从功能面板中查看封面."},urlInclude:[...r.videoAndBangumiUrls],commitHash:"5ef40baef159b6d05491ccf8476379f03ed5d555",coreVersion:"2.8.9"})})(),o=o.component})()));