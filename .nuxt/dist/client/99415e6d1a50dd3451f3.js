(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{343:function(t,e,n){var content=n(474);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("31ebe3ef",content,!0,{sourceMap:!1})},344:function(t,e,n){var content=n(476);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("2932acaf",content,!0,{sourceMap:!1})},473:function(t,e,n){"use strict";var o=n(343);n.n(o).a},474:function(t,e,n){(t.exports=n(39)(!1)).push([t.i,"@media screen and (orientation:portrait){.black-head{height:20vh}.title{line-height:12vh}}@media screen and (orientation:landscape){.black-head{height:30vh}.title{line-height:19vh}}.black-head{width:100vw;background:linear-gradient(90deg,#7e0f4b,#1a5865);margin:0;color:snow}.title{text-align:center;font-family:Bungee Inline;font-weight:400;margin-top:0;color:#fff}.title span{margin-right:-.5vw;-webkit-animation:bakemono 10s ease-in-out infinite;animation:bakemono 10s ease-in-out infinite}@-webkit-keyframes bakemono{0%{font-family:Bungee Inline}to{font-family:Bungee Shade}}@keyframes bakemono{0%{font-family:Bungee Inline}to{font-family:Bungee Shade}}.title span:first-of-type{-webkit-animation-delay:0s;animation-delay:0s}.title span:nth-of-type(2){-webkit-animation-delay:.1s;animation-delay:.1s}.title span:nth-of-type(3){-webkit-animation-delay:.25s;animation-delay:.25s}.title span:nth-of-type(4){-webkit-animation-delay:.45s;animation-delay:.45s}.title span:nth-of-type(5){-webkit-animation-delay:.7s;animation-delay:.7s}.title span:nth-of-type(6){-webkit-animation-delay:1s;animation-delay:1s}.title span:nth-of-type(7){-webkit-animation-delay:1.35s;animation-delay:1.35s}.title span:nth-of-type(8){-webkit-animation-delay:1.75s;animation-delay:1.75s}.title span:nth-of-type(9){-webkit-animation-delay:2.2s;animation-delay:2.2s}.title span:nth-of-type(10){-webkit-animation-delay:2.7s;animation-delay:2.7s}.star{color:gold;position:fixed;top:7vh}",""])},475:function(t,e,n){"use strict";var o=n(344);n.n(o).a},476:function(t,e,n){(t.exports=n(39)(!1)).push([t.i,".foot{width:100vw;height:15vh;background:#000;text-align:center;padding-top:3vh;bottom:0}",""])},477:function(t,e,n){"use strict";var o={data:function(){return{}}},r=(n(473),n(21)),component=Object(r.a)(o,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"black-head"},[n("h1",{staticClass:"title"},[n("span",[t._v("Z")]),t._v(" "),n("span",[t._v("O")]),t._v(" "),n("span",[t._v("D")]),t._v(" "),n("span",[t._v("I")]),t._v(" "),n("span",[t._v("A")]),t._v(" "),n("span",[t._v("C")]),t._v(" "),n("span",{staticStyle:{"margin-left":"var(--font-size)"}},[t._v("B")]),t._v(" "),n("span",[t._v("L")]),t._v(" "),n("span",[t._v("O")]),t._v(" "),n("span",[t._v("G")])]),t._v(" "),n("h4",{staticStyle:{"line-height":"1vh",color:"snow","text-align":"center","font-weight":"bold"}},[t._v("~ 技術的な防備録 ~")])])}],!1,null,null,null);e.a=component.exports},478:function(t,e,n){"use strict";var o=n(345),r=n.n(o),l={data:function(){return{now:r()().tz("Asia/Tokyo").format("Y")}}},c=(n(475),n(21)),component=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"foot"},[e("font-awesome-icon",{staticClass:"icon",staticStyle:{color:"gold",margin:"0 1vw 0 1vw"},attrs:{onmouseover:"this.style.color='darkorange'",onmouseout:"this.style.color='gold'",onclick:"location.href='https://twitter.com/zodiac_G12'",icon:["fab","twitter-square"]}}),this._v(" "),e("font-awesome-icon",{staticClass:"icon",staticStyle:{color:"gold",margin:"0 1vw 0 1vw"},attrs:{onmouseover:"this.style.color='darkorange'",onmouseout:"this.style.color='gold'",onclick:"location.href='https://github.com/zodiac-G12'",icon:["fab","github-square"]}}),this._v(" "),e("font-awesome-icon",{staticClass:"icon",staticStyle:{color:"gold",margin:"0 1vw 0 1vw"},attrs:{onmouseover:"this.style.color='darkorange'",onmouseout:"this.style.color='gold'",onclick:"location.href='https://zodiac-G12.github.io/homepage'",icon:["fas","h-square"]}}),this._v(" "),e("p",{staticStyle:{color:"snow","font-weight":"bold"}},[this._v("© ZODIAC-G12 "+this._s(this.now))])],1)}),[],!1,null,null,null);e.a=component.exports},479:function(t,e,n){"use strict";n(73),n(102);var o={data:function(){return{pre:null,dir:null}},mounted:function(){this.pre=location.href.split("blog")[0]+"blog/",this.dir=location.href.replace(this.pre,"")+"の記事"}},r=n(21),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{padding:"1vw 1vw 1vw 2vw",color:"black",background:"lavender","box-shadow":"5px 5px 0px 0px lightgray",margin:"0 5vw 0 5vw"}},[e("a",{staticStyle:{color:"black","font-weight":"bold"},attrs:{onmouseover:"this.style.color='red'",onmouseout:"this.style.color='black'",href:this.pre}},[e("font-awesome-icon",{staticClass:"small-icon",attrs:{icon:["fas","igloo"]}}),this._v(" BlogのHome\n    ")],1),this._v(" "),e("b",{staticStyle:{"margin-left":"1vw","margin-right":"1vw"}},[this._v(">")]),this._v(" "),e("b",[this._v(this._s(this.dir))])])}),[],!1,null,null,null);e.a=component.exports},481:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},482:function(t,e,n){var map={"./af":346,"./af.js":346,"./ar":347,"./ar-dz":348,"./ar-dz.js":348,"./ar-kw":349,"./ar-kw.js":349,"./ar-ly":350,"./ar-ly.js":350,"./ar-ma":351,"./ar-ma.js":351,"./ar-sa":352,"./ar-sa.js":352,"./ar-tn":353,"./ar-tn.js":353,"./ar.js":347,"./az":354,"./az.js":354,"./be":355,"./be.js":355,"./bg":356,"./bg.js":356,"./bm":357,"./bm.js":357,"./bn":358,"./bn.js":358,"./bo":359,"./bo.js":359,"./br":360,"./br.js":360,"./bs":361,"./bs.js":361,"./ca":362,"./ca.js":362,"./cs":363,"./cs.js":363,"./cv":364,"./cv.js":364,"./cy":365,"./cy.js":365,"./da":366,"./da.js":366,"./de":367,"./de-at":368,"./de-at.js":368,"./de-ch":369,"./de-ch.js":369,"./de.js":367,"./dv":370,"./dv.js":370,"./el":371,"./el.js":371,"./en-SG":372,"./en-SG.js":372,"./en-au":373,"./en-au.js":373,"./en-ca":374,"./en-ca.js":374,"./en-gb":375,"./en-gb.js":375,"./en-ie":376,"./en-ie.js":376,"./en-il":377,"./en-il.js":377,"./en-nz":378,"./en-nz.js":378,"./eo":379,"./eo.js":379,"./es":380,"./es-do":381,"./es-do.js":381,"./es-us":382,"./es-us.js":382,"./es.js":380,"./et":383,"./et.js":383,"./eu":384,"./eu.js":384,"./fa":385,"./fa.js":385,"./fi":386,"./fi.js":386,"./fo":387,"./fo.js":387,"./fr":388,"./fr-ca":389,"./fr-ca.js":389,"./fr-ch":390,"./fr-ch.js":390,"./fr.js":388,"./fy":391,"./fy.js":391,"./ga":392,"./ga.js":392,"./gd":393,"./gd.js":393,"./gl":394,"./gl.js":394,"./gom-latn":395,"./gom-latn.js":395,"./gu":396,"./gu.js":396,"./he":397,"./he.js":397,"./hi":398,"./hi.js":398,"./hr":399,"./hr.js":399,"./hu":400,"./hu.js":400,"./hy-am":401,"./hy-am.js":401,"./id":402,"./id.js":402,"./is":403,"./is.js":403,"./it":404,"./it-ch":405,"./it-ch.js":405,"./it.js":404,"./ja":406,"./ja.js":406,"./jv":407,"./jv.js":407,"./ka":408,"./ka.js":408,"./kk":409,"./kk.js":409,"./km":410,"./km.js":410,"./kn":411,"./kn.js":411,"./ko":412,"./ko.js":412,"./ku":413,"./ku.js":413,"./ky":414,"./ky.js":414,"./lb":415,"./lb.js":415,"./lo":416,"./lo.js":416,"./lt":417,"./lt.js":417,"./lv":418,"./lv.js":418,"./me":419,"./me.js":419,"./mi":420,"./mi.js":420,"./mk":421,"./mk.js":421,"./ml":422,"./ml.js":422,"./mn":423,"./mn.js":423,"./mr":424,"./mr.js":424,"./ms":425,"./ms-my":426,"./ms-my.js":426,"./ms.js":425,"./mt":427,"./mt.js":427,"./my":428,"./my.js":428,"./nb":429,"./nb.js":429,"./ne":430,"./ne.js":430,"./nl":431,"./nl-be":432,"./nl-be.js":432,"./nl.js":431,"./nn":433,"./nn.js":433,"./pa-in":434,"./pa-in.js":434,"./pl":435,"./pl.js":435,"./pt":436,"./pt-br":437,"./pt-br.js":437,"./pt.js":436,"./ro":438,"./ro.js":438,"./ru":439,"./ru.js":439,"./sd":440,"./sd.js":440,"./se":441,"./se.js":441,"./si":442,"./si.js":442,"./sk":443,"./sk.js":443,"./sl":444,"./sl.js":444,"./sq":445,"./sq.js":445,"./sr":446,"./sr-cyrl":447,"./sr-cyrl.js":447,"./sr.js":446,"./ss":448,"./ss.js":448,"./sv":449,"./sv.js":449,"./sw":450,"./sw.js":450,"./ta":451,"./ta.js":451,"./te":452,"./te.js":452,"./tet":453,"./tet.js":453,"./tg":454,"./tg.js":454,"./th":455,"./th.js":455,"./tl-ph":456,"./tl-ph.js":456,"./tlh":457,"./tlh.js":457,"./tr":458,"./tr.js":458,"./tzl":459,"./tzl.js":459,"./tzm":460,"./tzm-latn":461,"./tzm-latn.js":461,"./tzm.js":460,"./ug-cn":462,"./ug-cn.js":462,"./uk":463,"./uk.js":463,"./ur":464,"./ur.js":464,"./uz":465,"./uz-latn":466,"./uz-latn.js":466,"./uz.js":465,"./vi":467,"./vi.js":467,"./x-pseudo":468,"./x-pseudo.js":468,"./yo":469,"./yo.js":469,"./zh-cn":470,"./zh-cn.js":470,"./zh-hk":471,"./zh-hk.js":471,"./zh-tw":472,"./zh-tw.js":472};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=482},523:function(t,e,n){"use strict";n.r(e);n(345);var o=n(477),r=n(478),l=n(479),c=n(74),h=n.n(c),d={data:function(){return{title:"Nuxt.jsでSEOに関するmeta設定",url:"https:zodiac-G12.github.io/blog/2019-09-26",prekiji:"\n## SEO気にしてたのに全く忘れていたmeta設定\n　Google先生のクローラーに｢ｺｺﾆｲﾙﾖ!｣と言いたい。\nそのために以下のサイトを参照しながら、__nuxt.config.js__ を以下のようにやった。\n\n```JS\nexport default {\n    head: {\n        htmlAttrs: {\n            prefix: 'og: http://ogp.me/ns#'\n        },\n        titleTemplate: '%s - ZODIAC BLOG',\n        meta: [\n            { hid: 'description', name: 'description', content: '技術ブログ' },\n            { hid: 'og:site_name', property: 'og:site_name', content: 'ZODIAC BLOG' },\n            { hid: 'og:type', property: 'og:type', content: 'website' },\n            { hid: 'og:url', property: 'og:url', content: 'https://zodiac-G12.github.io/blog' },\n            { hid: 'og:title', property: 'og:title', content: 'ZODIAC BLOG' },\n            { hid: 'og:description', property: 'og:description', content: '技術ブログ' },\n            { hid: 'og:image', property: 'og:image', content: 'https://avatars1.githubusercontent.com/u/12181838?s=460&av=4' },\n\n```\n\n## 結果\n　どうなったかというと、 __\"nuxt\"__ で実行してNuxtServerを立ててHTMLでmetaタグを確認出来た。\nSPAモードと言うか、 __\"nuxt generate\"__ で実行して、静的HTMLでもmetaタグを確認出来た。\nもういいかなと思って適当にやりました。\n\n## 参考ドキュメント\n\n- [API: head プロパティ - Nuxt.js](https://qiita.com/amishiro/items/b7260116b282d2cf2756)\n- [nuxt.js(v2)でSEOに必要なmeta(OGP)を入れたい](https://ja.nuxtjs.org/api/configuration-head/)\n"}},head:function(){return{title:this.title,meta:[{hid:"og:url",property:"og:url",content:this.url},{hid:"og:description",property:"og:description",content:"programming"},{hid:"og:title",property:"og:title",content:"ZODIAC BLOG - ".concat(this.title)}]}},computed:{kiji:function(){return h()(this.prekiji)}},components:{defaultFooter:r.a,defaultHeader:o.a,pankuz:l.a}},j=n(21),component=Object(j.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("default-header"),t._v(" "),n("pankuz"),t._v(" "),n("main",{staticStyle:{padding:"5vw"}},[n("h3",{staticStyle:{"box-shadow":"5px 5px 0px 0px darkslategray",background:"linear-gradient(-45deg, darkslategray, black, darkslategray)",color:"white",padding:"2vw","text-align":"center"}},[n("b",{staticClass:"midashi",staticStyle:{"border-bottom":"dotted 3px crimson"}},[t._v("\n                "+t._s(t.title)+"\n                "),n("font-awesome-icon",{staticClass:"icon",staticStyle:{color:"darkorange"},attrs:{icon:["fab","vuejs"]}})],1)]),t._v(" "),n("div",{staticStyle:{"box-shadow":"5px 5px 0px 0px wheat",background:"white",padding:"5vw"},domProps:{innerHTML:t._s(t.kiji)}})]),t._v(" "),n("default-footer")],1)}),[],!1,null,null,null);e.default=component.exports}}]);