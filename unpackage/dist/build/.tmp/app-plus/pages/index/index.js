(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"527c":function(t,n,e){},9689:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(e("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t,n,e,i,r,a,u){try{var o=t[a](u),c=o.value}catch(s){return void e(s)}o.done?n(c):Promise.resolve(c).then(i,r)}function u(t){return function(){var n=this,e=arguments;return new Promise(function(i,r){var u=t.apply(n,e);function o(t){a(u,i,r,o,c,"next",t)}function c(t){a(u,i,r,o,c,"throw",t)}o(void 0)})}}var o={data:function(){return{titleNViewBackground:"",swiperCurrent:0,swiperLength:0,carouselList:[],goodsList:[]}},onLoad:function(){this.loadData()},methods:{loadData:function(){var t=u(i.default.mark(function t(){var n,e;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.json("carouselList");case 2:return n=t.sent,this.titleNViewBackground=n[0].background,this.swiperLength=n.length,this.carouselList=n,t.next=8,this.$api.json("goodsList");case 8:e=t.sent,this.goodsList=e||[];case 10:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),swiperChange:function(t){var n=t.detail.current;this.swiperCurrent=n,this.titleNViewBackground=this.carouselList[n].background},navToDetailPage:function(n){var e=n.title;t.navigateTo({url:"/pages/product/product?id=".concat(e)})}},onNavigationBarSearchInputClicked:function(){var t=u(i.default.mark(function t(n){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.$api.msg("点击了搜索框");case 1:case"end":return t.stop()}},t,this)}));function n(n){return t.apply(this,arguments)}return n}(),onNavigationBarButtonTap:function(n){var e=n.index;if(0===e)this.$api.msg("点击了扫描");else if(1===e){var i=getCurrentPages(),r=i[i.length-1],a=r.$getAppWebview();a.hideTitleNViewButtonRedDot({index:e}),t.navigateTo({url:"/pages/notice/notice"})}}};n.default=o}).call(this,e("6e42")["default"])},ac65:function(t,n,e){"use strict";var i=e("527c"),r=e.n(i);r.a},b55c:function(t,n,e){"use strict";(function(t){e("e449"),e("921b");i(e("66fd"));var n=i(e("d65b"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},bf56:function(t,n,e){"use strict";var i,r=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",function(){return r}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return i})},d65b:function(t,n,e){"use strict";e.r(n);var i=e("bf56"),r=e("ecd0");for(var a in r)"default"!==a&&function(t){e.d(n,t,function(){return r[t]})}(a);e("ac65");var u,o=e("f0c5"),c=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);n["default"]=c.exports},ecd0:function(t,n,e){"use strict";e.r(n);var i=e("9689"),r=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=r.a}},[["b55c","common/runtime","common/vendor"]]]);