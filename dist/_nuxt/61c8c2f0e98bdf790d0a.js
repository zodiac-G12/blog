(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{159:function(t,e,n){var content=n(290);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("31ebe3ef",content,!0,{sourceMap:!1})},160:function(t,e,n){var content=n(292);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("2932acaf",content,!0,{sourceMap:!1})},289:function(t,e,n){"use strict";var o=n(159);n.n(o).a},290:function(t,e,n){(t.exports=n(29)(!1)).push([t.i,"@media screen and (orientation:portrait){.black-head{height:20vh}.title{line-height:12vh}}@media screen and (orientation:landscape){.black-head{height:30vh}.title{line-height:19vh}}.black-head{width:100vw;background:linear-gradient(90deg,#7e0f4b,#1a5865);margin:0;color:snow}.title{text-align:center;font-family:Bungee Inline;font-weight:400;margin-top:0;color:#fff}.title span{margin-right:-.5vw;-webkit-animation:bakemono 10s ease-in-out infinite;animation:bakemono 10s ease-in-out infinite}@-webkit-keyframes bakemono{0%{font-family:Bungee Inline}to{font-family:Bungee Shade}}@keyframes bakemono{0%{font-family:Bungee Inline}to{font-family:Bungee Shade}}.title span:first-of-type{-webkit-animation-delay:0s;animation-delay:0s}.title span:nth-of-type(2){-webkit-animation-delay:.1s;animation-delay:.1s}.title span:nth-of-type(3){-webkit-animation-delay:.25s;animation-delay:.25s}.title span:nth-of-type(4){-webkit-animation-delay:.45s;animation-delay:.45s}.title span:nth-of-type(5){-webkit-animation-delay:.7s;animation-delay:.7s}.title span:nth-of-type(6){-webkit-animation-delay:1s;animation-delay:1s}.title span:nth-of-type(7){-webkit-animation-delay:1.35s;animation-delay:1.35s}.title span:nth-of-type(8){-webkit-animation-delay:1.75s;animation-delay:1.75s}.title span:nth-of-type(9){-webkit-animation-delay:2.2s;animation-delay:2.2s}.title span:nth-of-type(10){-webkit-animation-delay:2.7s;animation-delay:2.7s}.star{color:gold;position:fixed;top:7vh}",""])},291:function(t,e,n){"use strict";var o=n(160);n.n(o).a},292:function(t,e,n){(t.exports=n(29)(!1)).push([t.i,".foot{width:100vw;height:15vh;background:#000;text-align:center;padding-top:3vh;bottom:0}",""])},293:function(t,e,n){"use strict";var o=n(161),r=n.n(o),l={data:function(){return{now:r()().tz("Asia/Tokyo").format("Y")}}},c=(n(291),n(21)),component=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"foot"},[e("font-awesome-icon",{staticClass:"icon",staticStyle:{color:"gold",margin:"0 1vw 0 1vw"},attrs:{onmouseover:"this.style.color='darkorange'",onmouseout:"this.style.color='gold'",onclick:"location.href='https://twitter.com/zodiac_G12'",icon:["fab","twitter-square"]}}),this._v(" "),e("font-awesome-icon",{staticClass:"icon",staticStyle:{color:"gold",margin:"0 1vw 0 1vw"},attrs:{onmouseover:"this.style.color='darkorange'",onmouseout:"this.style.color='gold'",onclick:"location.href='https://github.com/zodiac-G12'",icon:["fab","github-square"]}}),this._v(" "),e("font-awesome-icon",{staticClass:"icon",staticStyle:{color:"gold",margin:"0 1vw 0 1vw"},attrs:{onmouseover:"this.style.color='darkorange'",onmouseout:"this.style.color='gold'",onclick:"location.href='https://zodiac-G12.github.io/homepage'",icon:["fas","h-square"]}}),this._v(" "),e("p",{staticStyle:{color:"snow","font-weight":"bold"}},[this._v("© ZODIAC-G12 "+this._s(this.now))])],1)}),[],!1,null,null,null);e.a=component.exports},294:function(t,e,n){"use strict";var o={data:function(){return{}}},r=(n(289),n(21)),component=Object(r.a)(o,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"black-head"},[n("h1",{staticClass:"title"},[n("span",[t._v("Z")]),t._v(" "),n("span",[t._v("O")]),t._v(" "),n("span",[t._v("D")]),t._v(" "),n("span",[t._v("I")]),t._v(" "),n("span",[t._v("A")]),t._v(" "),n("span",[t._v("C")]),t._v(" "),n("span",{staticStyle:{"margin-left":"var(--font-size)"}},[t._v("B")]),t._v(" "),n("span",[t._v("L")]),t._v(" "),n("span",[t._v("O")]),t._v(" "),n("span",[t._v("G")])]),t._v(" "),n("h4",{staticStyle:{"line-height":"1vh",color:"snow","text-align":"center","font-weight":"bold"}},[t._v("~ 技術的な防備録 ~")])])}],!1,null,null,null);e.a=component.exports},295:function(t,e,n){"use strict";n(73),n(102);var o={data:function(){return{pre:null,dir:null}},mounted:function(){this.pre=location.href.split("blog")[0]+"blog/",this.dir=location.href.replace(this.pre,"")+"の記事"}},r=n(21),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{padding:"1vw 1vw 1vw 2vw",color:"black",background:"lavender","box-shadow":"5px 5px 0px 0px lightgray",margin:"0 5vw 0 5vw"}},[e("a",{staticStyle:{color:"black","font-weight":"bold"},attrs:{onmouseover:"this.style.color='red'",onmouseout:"this.style.color='black'",href:this.pre}},[e("font-awesome-icon",{staticClass:"small-icon",attrs:{icon:["fas","igloo"]}}),this._v(" BlogのHome\n    ")],1),this._v(" "),e("b",{staticStyle:{"margin-left":"1vw","margin-right":"1vw"}},[this._v(">")]),this._v(" "),e("b",[this._v(this._s(this.dir))])])}),[],!1,null,null,null);e.a=component.exports},297:function(t,e,n){var map={"./af":162,"./af.js":162,"./ar":163,"./ar-dz":164,"./ar-dz.js":164,"./ar-kw":165,"./ar-kw.js":165,"./ar-ly":166,"./ar-ly.js":166,"./ar-ma":167,"./ar-ma.js":167,"./ar-sa":168,"./ar-sa.js":168,"./ar-tn":169,"./ar-tn.js":169,"./ar.js":163,"./az":170,"./az.js":170,"./be":171,"./be.js":171,"./bg":172,"./bg.js":172,"./bm":173,"./bm.js":173,"./bn":174,"./bn.js":174,"./bo":175,"./bo.js":175,"./br":176,"./br.js":176,"./bs":177,"./bs.js":177,"./ca":178,"./ca.js":178,"./cs":179,"./cs.js":179,"./cv":180,"./cv.js":180,"./cy":181,"./cy.js":181,"./da":182,"./da.js":182,"./de":183,"./de-at":184,"./de-at.js":184,"./de-ch":185,"./de-ch.js":185,"./de.js":183,"./dv":186,"./dv.js":186,"./el":187,"./el.js":187,"./en-SG":188,"./en-SG.js":188,"./en-au":189,"./en-au.js":189,"./en-ca":190,"./en-ca.js":190,"./en-gb":191,"./en-gb.js":191,"./en-ie":192,"./en-ie.js":192,"./en-il":193,"./en-il.js":193,"./en-nz":194,"./en-nz.js":194,"./eo":195,"./eo.js":195,"./es":196,"./es-do":197,"./es-do.js":197,"./es-us":198,"./es-us.js":198,"./es.js":196,"./et":199,"./et.js":199,"./eu":200,"./eu.js":200,"./fa":201,"./fa.js":201,"./fi":202,"./fi.js":202,"./fo":203,"./fo.js":203,"./fr":204,"./fr-ca":205,"./fr-ca.js":205,"./fr-ch":206,"./fr-ch.js":206,"./fr.js":204,"./fy":207,"./fy.js":207,"./ga":208,"./ga.js":208,"./gd":209,"./gd.js":209,"./gl":210,"./gl.js":210,"./gom-latn":211,"./gom-latn.js":211,"./gu":212,"./gu.js":212,"./he":213,"./he.js":213,"./hi":214,"./hi.js":214,"./hr":215,"./hr.js":215,"./hu":216,"./hu.js":216,"./hy-am":217,"./hy-am.js":217,"./id":218,"./id.js":218,"./is":219,"./is.js":219,"./it":220,"./it-ch":221,"./it-ch.js":221,"./it.js":220,"./ja":222,"./ja.js":222,"./jv":223,"./jv.js":223,"./ka":224,"./ka.js":224,"./kk":225,"./kk.js":225,"./km":226,"./km.js":226,"./kn":227,"./kn.js":227,"./ko":228,"./ko.js":228,"./ku":229,"./ku.js":229,"./ky":230,"./ky.js":230,"./lb":231,"./lb.js":231,"./lo":232,"./lo.js":232,"./lt":233,"./lt.js":233,"./lv":234,"./lv.js":234,"./me":235,"./me.js":235,"./mi":236,"./mi.js":236,"./mk":237,"./mk.js":237,"./ml":238,"./ml.js":238,"./mn":239,"./mn.js":239,"./mr":240,"./mr.js":240,"./ms":241,"./ms-my":242,"./ms-my.js":242,"./ms.js":241,"./mt":243,"./mt.js":243,"./my":244,"./my.js":244,"./nb":245,"./nb.js":245,"./ne":246,"./ne.js":246,"./nl":247,"./nl-be":248,"./nl-be.js":248,"./nl.js":247,"./nn":249,"./nn.js":249,"./pa-in":250,"./pa-in.js":250,"./pl":251,"./pl.js":251,"./pt":252,"./pt-br":253,"./pt-br.js":253,"./pt.js":252,"./ro":254,"./ro.js":254,"./ru":255,"./ru.js":255,"./sd":256,"./sd.js":256,"./se":257,"./se.js":257,"./si":258,"./si.js":258,"./sk":259,"./sk.js":259,"./sl":260,"./sl.js":260,"./sq":261,"./sq.js":261,"./sr":262,"./sr-cyrl":263,"./sr-cyrl.js":263,"./sr.js":262,"./ss":264,"./ss.js":264,"./sv":265,"./sv.js":265,"./sw":266,"./sw.js":266,"./ta":267,"./ta.js":267,"./te":268,"./te.js":268,"./tet":269,"./tet.js":269,"./tg":270,"./tg.js":270,"./th":271,"./th.js":271,"./tl-ph":272,"./tl-ph.js":272,"./tlh":273,"./tlh.js":273,"./tr":274,"./tr.js":274,"./tzl":275,"./tzl.js":275,"./tzm":276,"./tzm-latn":277,"./tzm-latn.js":277,"./tzm.js":276,"./ug-cn":278,"./ug-cn.js":278,"./uk":279,"./uk.js":279,"./ur":280,"./ur.js":280,"./uz":281,"./uz-latn":282,"./uz-latn.js":282,"./uz.js":281,"./vi":283,"./vi.js":283,"./x-pseudo":284,"./x-pseudo.js":284,"./yo":285,"./yo.js":285,"./zh-cn":286,"./zh-cn.js":286,"./zh-hk":287,"./zh-hk.js":287,"./zh-tw":288,"./zh-tw.js":288};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=297},526:function(t,e,n){"use strict";n.r(e);n(161);var o=n(294),r=n(293),l=n(295),c=n(298),h=n.n(c),d=n(299),j=n.n(d),m={data:function(){return{title:"Nuxt.jsでSEOに関するmeta設定",url:"https:zodiac-G12.github.io/blog/2019-09-26",kiji:null,prekiji:"\n## SEO気にしてたのに全く忘れていたmeta設定\n　Google先生のクローラーに｢ｺｺﾆｲﾙﾖ!｣と言いたい。\nそのために以下のサイトを参照しながら、__nuxt.config.js__ を以下のようにやった。\n\n```JS\nexport default {\n    head: {\n        htmlAttrs: {\n            prefix: 'og: http://ogp.me/ns#'\n        },\n        titleTemplate: '%s - ZODIAC BLOG',\n        meta: [\n            { hid: 'description', name: 'description', content: '技術ブログ' },\n            { hid: 'og:site_name', property: 'og:site_name', content: 'ZODIAC BLOG' },\n            { hid: 'og:type', property: 'og:type', content: 'website' },\n            { hid: 'og:url', property: 'og:url', content: 'https://zodiac-G12.github.io/blog' },\n            { hid: 'og:title', property: 'og:title', content: 'ZODIAC BLOG' },\n            { hid: 'og:description', property: 'og:description', content: '技術ブログ' },\n            { hid: 'og:image', property: 'og:image', content: 'https://avatars1.githubusercontent.com/u/12181838?s=460&av=4' },\n\n```\n\n## 結果\n　どうなったかというと、 __\"nuxt\"__ で実行してNuxtServerを立ててHTMLでmetaタグを確認出来た。\nSPAモードと言うか、 __\"nuxt generate\"__ で実行して、静的HTMLでもmetaタグを確認出来た。\nもういいかなと思って適当にやりました。\n\n## 参考ドキュメント\n\n- [API: head プロパティ - Nuxt.js](https://qiita.com/amishiro/items/b7260116b282d2cf2756)\n- [nuxt.js(v2)でSEOに必要なmeta(OGP)を入れたい](https://ja.nuxtjs.org/api/configuration-head/)\n"}},head:function(){return{title:this.title,meta:[{hid:"og:url",property:"og:url",content:this.url},{hid:"og:description",property:"og:description",content:"programming"},{hid:"og:title",property:"og:title",content:"ZODIAC BLOG - ".concat(this.title)}]}},created:function(){j.a.setOptions({langPrefix:"",highlight:function(code,t){return h.a.highlightAuto(code,[t]).value}})},mounted:function(){h.a.initHighlightingOnLoad(),this.kiji=j()(this.escape(this.prekiji))},methods:{escape:function(t){return t}},components:{defaultFooter:r.a,defaultHeader:o.a,pankuz:l.a}},f=n(21),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("default-header"),t._v(" "),n("pankuz"),t._v(" "),n("main",{staticStyle:{padding:"5vw"}},[n("h3",{staticStyle:{"box-shadow":"5px 5px 0px 0px darkslategray",background:"linear-gradient(-45deg, darkslategray, black, darkslategray)",color:"white",padding:"2vw","text-align":"center"}},[n("b",{staticClass:"midashi",staticStyle:{"border-bottom":"dotted 3px crimson"}},[t._v("\n                "+t._s(t.title)+"\n                "),n("font-awesome-icon",{staticClass:"icon",staticStyle:{color:"darkorange"},attrs:{icon:["fab","vuejs"]}})],1)]),t._v(" "),n("div",{staticStyle:{"box-shadow":"5px 5px 0px 0px wheat",background:"white",padding:"5vw"},domProps:{innerHTML:t._s(t.kiji)}})]),t._v(" "),n("default-footer")],1)}),[],!1,null,null,null);e.default=component.exports}}]);