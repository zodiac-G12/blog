(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{344:function(n,e,t){var content=t(475);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(40).default)("31ebe3ef",content,!0,{sourceMap:!1})},345:function(n,e,t){var content=t(477);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(40).default)("2932acaf",content,!0,{sourceMap:!1})},474:function(n,e,t){"use strict";var o=t(344);t.n(o).a},475:function(n,e,t){(n.exports=t(39)(!1)).push([n.i,"@media screen and (orientation:portrait){.black-head{height:20vh}.title{line-height:12vh}}@media screen and (orientation:landscape){.black-head{height:30vh}.title{line-height:19vh}}.black-head{width:100vw;background:linear-gradient(90deg,#7e0f4b,#1a5865);margin:0;color:snow}.title{text-align:center;font-family:Bungee Inline;font-weight:400;margin-top:0;color:#fff}.title span{margin-right:-.5vw;-webkit-animation:bakemono 10s ease-in-out infinite;animation:bakemono 10s ease-in-out infinite}@-webkit-keyframes bakemono{0%{font-family:Bungee Inline}to{font-family:Bungee Shade}}@keyframes bakemono{0%{font-family:Bungee Inline}to{font-family:Bungee Shade}}.title span:first-of-type{-webkit-animation-delay:0s;animation-delay:0s}.title span:nth-of-type(2){-webkit-animation-delay:.1s;animation-delay:.1s}.title span:nth-of-type(3){-webkit-animation-delay:.25s;animation-delay:.25s}.title span:nth-of-type(4){-webkit-animation-delay:.45s;animation-delay:.45s}.title span:nth-of-type(5){-webkit-animation-delay:.7s;animation-delay:.7s}.title span:nth-of-type(6){-webkit-animation-delay:1s;animation-delay:1s}.title span:nth-of-type(7){-webkit-animation-delay:1.35s;animation-delay:1.35s}.title span:nth-of-type(8){-webkit-animation-delay:1.75s;animation-delay:1.75s}.title span:nth-of-type(9){-webkit-animation-delay:2.2s;animation-delay:2.2s}.title span:nth-of-type(10){-webkit-animation-delay:2.7s;animation-delay:2.7s}.star{color:gold;position:fixed;top:7vh}",""])},476:function(n,e,t){"use strict";var o=t(345);t.n(o).a},477:function(n,e,t){(n.exports=t(39)(!1)).push([n.i,".foot{width:100vw;height:15vh;background:#000;text-align:center;padding-top:3vh;bottom:0}",""])},478:function(n,e,t){"use strict";var o=t(346),r=t.n(o),l={data:function(){return{now:r()().tz("Asia/Tokyo").format("Y")}}},c=(t(476),t(21)),component=Object(c.a)(l,(function(){var n=this.$createElement,e=this._self._c||n;return e("footer",{staticClass:"foot"},[e("font-awesome-icon",{staticClass:"icon",staticStyle:{color:"gold",margin:"0 1vw 0 1vw"},attrs:{onmouseover:"this.style.color='darkorange'",onmouseout:"this.style.color='gold'",onclick:"location.href='https://twitter.com/zodiac_G12'",icon:["fab","twitter-square"]}}),this._v(" "),e("font-awesome-icon",{staticClass:"icon",staticStyle:{color:"gold",margin:"0 1vw 0 1vw"},attrs:{onmouseover:"this.style.color='darkorange'",onmouseout:"this.style.color='gold'",onclick:"location.href='https://github.com/zodiac-G12'",icon:["fab","github-square"]}}),this._v(" "),e("font-awesome-icon",{staticClass:"icon",staticStyle:{color:"gold",margin:"0 1vw 0 1vw"},attrs:{onmouseover:"this.style.color='darkorange'",onmouseout:"this.style.color='gold'",onclick:"location.href='https://zodiac-G12.github.io/homepage'",icon:["fas","h-square"]}}),this._v(" "),e("p",{staticStyle:{color:"snow","font-weight":"bold"}},[this._v("© ZODIAC-G12 "+this._s(this.now))])],1)}),[],!1,null,null,null);e.a=component.exports},479:function(n,e,t){"use strict";var o={data:function(){return{}}},r=(t(474),t(21)),component=Object(r.a)(o,(function(){var n=this.$createElement;this._self._c;return this._m(0)}),[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"black-head"},[t("h1",{staticClass:"title"},[t("span",[n._v("Z")]),n._v(" "),t("span",[n._v("O")]),n._v(" "),t("span",[n._v("D")]),n._v(" "),t("span",[n._v("I")]),n._v(" "),t("span",[n._v("A")]),n._v(" "),t("span",[n._v("C")]),n._v(" "),t("span",{staticStyle:{"margin-left":"var(--font-size)"}},[n._v("B")]),n._v(" "),t("span",[n._v("L")]),n._v(" "),t("span",[n._v("O")]),n._v(" "),t("span",[n._v("G")])]),n._v(" "),t("h4",{staticStyle:{"line-height":"1vh",color:"snow","text-align":"center","font-weight":"bold"}},[n._v("~ 技術的な防備録 ~")])])}],!1,null,null,null);e.a=component.exports},480:function(n,e,t){"use strict";t(73),t(103);var o={data:function(){return{pre:null,dir:null}},mounted:function(){this.pre=location.href.split("blog")[0]+"blog/",this.dir=location.href.replace(this.pre,"")+"の記事"}},r=t(21),component=Object(r.a)(o,(function(){var n=this.$createElement,e=this._self._c||n;return e("div",{staticStyle:{padding:"1vw 1vw 1vw 2vw",color:"black",background:"lavender","box-shadow":"5px 5px 0px 0px lightgray",margin:"0 5vw 0 5vw"}},[e("a",{staticStyle:{color:"black","font-weight":"bold"},attrs:{onmouseover:"this.style.color='red'",onmouseout:"this.style.color='black'",href:this.pre}},[e("font-awesome-icon",{staticClass:"small-icon",attrs:{icon:["fas","igloo"]}}),this._v(" BlogのHome\n    ")],1),this._v(" "),e("b",{staticStyle:{"margin-left":"1vw","margin-right":"1vw"}},[this._v(">")]),this._v(" "),e("b",[this._v(this._s(this.dir))])])}),[],!1,null,null,null);e.a=component.exports},482:function(n,e){n.exports=function(n){return n.webpackPolyfill||(n.deprecate=function(){},n.paths=[],n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),n.webpackPolyfill=1),n}},483:function(n,e,t){var map={"./af":347,"./af.js":347,"./ar":348,"./ar-dz":349,"./ar-dz.js":349,"./ar-kw":350,"./ar-kw.js":350,"./ar-ly":351,"./ar-ly.js":351,"./ar-ma":352,"./ar-ma.js":352,"./ar-sa":353,"./ar-sa.js":353,"./ar-tn":354,"./ar-tn.js":354,"./ar.js":348,"./az":355,"./az.js":355,"./be":356,"./be.js":356,"./bg":357,"./bg.js":357,"./bm":358,"./bm.js":358,"./bn":359,"./bn.js":359,"./bo":360,"./bo.js":360,"./br":361,"./br.js":361,"./bs":362,"./bs.js":362,"./ca":363,"./ca.js":363,"./cs":364,"./cs.js":364,"./cv":365,"./cv.js":365,"./cy":366,"./cy.js":366,"./da":367,"./da.js":367,"./de":368,"./de-at":369,"./de-at.js":369,"./de-ch":370,"./de-ch.js":370,"./de.js":368,"./dv":371,"./dv.js":371,"./el":372,"./el.js":372,"./en-SG":373,"./en-SG.js":373,"./en-au":374,"./en-au.js":374,"./en-ca":375,"./en-ca.js":375,"./en-gb":376,"./en-gb.js":376,"./en-ie":377,"./en-ie.js":377,"./en-il":378,"./en-il.js":378,"./en-nz":379,"./en-nz.js":379,"./eo":380,"./eo.js":380,"./es":381,"./es-do":382,"./es-do.js":382,"./es-us":383,"./es-us.js":383,"./es.js":381,"./et":384,"./et.js":384,"./eu":385,"./eu.js":385,"./fa":386,"./fa.js":386,"./fi":387,"./fi.js":387,"./fo":388,"./fo.js":388,"./fr":389,"./fr-ca":390,"./fr-ca.js":390,"./fr-ch":391,"./fr-ch.js":391,"./fr.js":389,"./fy":392,"./fy.js":392,"./ga":393,"./ga.js":393,"./gd":394,"./gd.js":394,"./gl":395,"./gl.js":395,"./gom-latn":396,"./gom-latn.js":396,"./gu":397,"./gu.js":397,"./he":398,"./he.js":398,"./hi":399,"./hi.js":399,"./hr":400,"./hr.js":400,"./hu":401,"./hu.js":401,"./hy-am":402,"./hy-am.js":402,"./id":403,"./id.js":403,"./is":404,"./is.js":404,"./it":405,"./it-ch":406,"./it-ch.js":406,"./it.js":405,"./ja":407,"./ja.js":407,"./jv":408,"./jv.js":408,"./ka":409,"./ka.js":409,"./kk":410,"./kk.js":410,"./km":411,"./km.js":411,"./kn":412,"./kn.js":412,"./ko":413,"./ko.js":413,"./ku":414,"./ku.js":414,"./ky":415,"./ky.js":415,"./lb":416,"./lb.js":416,"./lo":417,"./lo.js":417,"./lt":418,"./lt.js":418,"./lv":419,"./lv.js":419,"./me":420,"./me.js":420,"./mi":421,"./mi.js":421,"./mk":422,"./mk.js":422,"./ml":423,"./ml.js":423,"./mn":424,"./mn.js":424,"./mr":425,"./mr.js":425,"./ms":426,"./ms-my":427,"./ms-my.js":427,"./ms.js":426,"./mt":428,"./mt.js":428,"./my":429,"./my.js":429,"./nb":430,"./nb.js":430,"./ne":431,"./ne.js":431,"./nl":432,"./nl-be":433,"./nl-be.js":433,"./nl.js":432,"./nn":434,"./nn.js":434,"./pa-in":435,"./pa-in.js":435,"./pl":436,"./pl.js":436,"./pt":437,"./pt-br":438,"./pt-br.js":438,"./pt.js":437,"./ro":439,"./ro.js":439,"./ru":440,"./ru.js":440,"./sd":441,"./sd.js":441,"./se":442,"./se.js":442,"./si":443,"./si.js":443,"./sk":444,"./sk.js":444,"./sl":445,"./sl.js":445,"./sq":446,"./sq.js":446,"./sr":447,"./sr-cyrl":448,"./sr-cyrl.js":448,"./sr.js":447,"./ss":449,"./ss.js":449,"./sv":450,"./sv.js":450,"./sw":451,"./sw.js":451,"./ta":452,"./ta.js":452,"./te":453,"./te.js":453,"./tet":454,"./tet.js":454,"./tg":455,"./tg.js":455,"./th":456,"./th.js":456,"./tl-ph":457,"./tl-ph.js":457,"./tlh":458,"./tlh.js":458,"./tr":459,"./tr.js":459,"./tzl":460,"./tzl.js":460,"./tzm":461,"./tzm-latn":462,"./tzm-latn.js":462,"./tzm.js":461,"./ug-cn":463,"./ug-cn.js":463,"./uk":464,"./uk.js":464,"./ur":465,"./ur.js":465,"./uz":466,"./uz-latn":467,"./uz-latn.js":467,"./uz.js":466,"./vi":468,"./vi.js":468,"./x-pseudo":469,"./x-pseudo.js":469,"./yo":470,"./yo.js":470,"./zh-cn":471,"./zh-cn.js":471,"./zh-hk":472,"./zh-hk.js":472,"./zh-tw":473,"./zh-tw.js":473};function o(n){var e=r(n);return t(e)}function r(n){if(!t.o(map,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return map[n]}o.keys=function(){return Object.keys(map)},o.resolve=r,n.exports=o,o.id=483},520:function(n,e,t){"use strict";t.r(e);t(346);var o=t(479),r=t(478),l=t(480),c=t(74),j=t.n(c),d={data:function(){return{title:"AWS ALB のメンテナンス閉塞をShellスクリプト化した",url:"https:zodiac-G12.github.io/blog/2019-09-20",prekiji:'\n## 動機\n\n- 効率化\n\n## 初期設定\n\n- [AWS CLI](https://docs.aws.amazon.com/ja_jp/streams/latest/dev/kinesis-tutorial-cli-installation.html) および [jq](https://stedolan.github.io/jq/) がマシンにインストールされていることを確認。インストールされていなければインストール。\n\n```sh\n$ aws --version\naws-cli/1.16.215 Python/2.7.14 Linux/4.13.0-46-generic botocore/1.12.205\n```\n\n\n```sh\n$ jq --version\njq-1.5-1-a5b5cbe\n```\n\n- AWS CLI にアクセスキーを設定する\n> ⚠️ Default output format は **json** と絶対に全て小文字で入力すること。 Json や JSON では不可\n\n```sh\n$ aws configure\nAWS Access Key ID [None]: {accessKeyId}\nAWS Secret Access Key [None]: {secretAccessKey}\nDefault region name [None]: ap-northeast-1\nDefault output format [None]: json\n```\n\n- IAMユーザーが"maintenance"であること確認する\n\n```sh\n$ aws iam list-users\n{\n    "Users": [\n        {\n             ⋮\n        },\n        {\n             "UserName": "maintenance",\n             ⋮\n        },\n             ⋮\n        }\n    ]\n}\n```\n\n## 実践\n\n### ALBの閉塞(メンテナンス画面にする)\n\n- aws_alb_listener_dev_arn.json にAWS ALBのリスナーのARNを載っけときます。\n\n今回はALBが2つあって、それぞれに閉塞設定するというもので、api/v*直下アクセスのときはjson。\n其れ以外のときはHTMLを返すというものです。\n\n```sh\n####################################################################\n#\n#    メンテナンス開始のshellスクリプト(4つルールができる)\n#\n####################################################################\n\n\n# AWS ALBのリスナーのARNのjsonファイル名\njson="aws_alb_listener_dev_arn.json"\nmaintenance_statusCode=503\n\n# リスナーのARN\nlistener_one=$( cat $json | jq \'.[]\' | jq \'.[0]\' | jq -r \'.[]\' )\nlistener_two=$( cat $json | jq \'.[]\' | jq \'.[1]\' | jq -r \'.[]\' )\n\n\n############################# API v* 直下にアクセスされたときのJSON レスポンス(×2) #############################\n\n# 出力されたjsonをtmp.jsonとして一時保存\naws elbv2 create-rule \\\n    --listener-arn $listener_one \\\n    --conditions Field=path-pattern,Values="/api/v*" \\\n    --priority 1 \\\n    --actions Type=fixed-response,FixedResponseConfig={"MessageBody=\'{\\"id\\":-5000, \\"description\\":\\"ただいまメンテナンス中です。しばらくお待ちください\\"}\',StatusCode=$maintenance_statusCode,ContentType=application/json"} | tee tmp.json\n\n# ルールのARNを抽出(1個目)\nrule_three=$( cat tmp.json | jq \'.Rules[0].RuleArn\' )\n\naws elbv2 create-rule \\\n    --listener-arn $listener_two \\\n    --conditions Field=path-pattern,Values="api/v*" \\\n    --priority 1 \\\n    --actions Type=fixed-response,FixedResponseConfig={"MessageBody=\'{\\"id\\":-5000, \\"description\\":\\"ただいまメンテナンス中です。しばらくお待ちください\\"}\',StatusCode=$maintenance_statusCode,ContentType=application/json"} | tee tmp.json\n\n# ルールのARNを抽出(2個目)\nrule_four=$( cat tmp.json | jq \'.Rules[0].RuleArn\' )\n\n\n############################# API v* 直下以外の任意のパスにアクセスされたときのHTML レスポンス(×2) #############################\n\naws elbv2 create-rule \\\n    --listener-arn $listener_one \\\n    --conditions Field=path-pattern,Values="*" \\\n    --priority 2 \\\n    --actions Type=fixed-response,FixedResponseConfig={"MessageBody=<body><p>ただいまメンテナンス中です。しばらくお待ちください</p></body>,StatusCode=$maintenance_statusCode,ContentType=text/html"} | tee tmp.json\n\n# ルールのARNを抽出(3個目)\nrule_one=$( cat tmp.json | jq \'.Rules[0].RuleArn\' )\n\naws elbv2 create-rule \\\n    --listener-arn $listener_two \\\n    --conditions Field=path-pattern,Values="*" \\\n    --priority 2 \\\n    --actions Type=fixed-response,FixedResponseConfig={"MessageBody=<body><p>ただいまメンテナンス中です。しばらくお待ちください</p></body>,StatusCode=$maintenance_statusCode,ContentType=text/html"} | tee tmp.json\n\n# ルールのARNを抽出(4個目)\nrule_two=$( cat tmp.json | jq \'.Rules[0].RuleArn\' )\n\n\n# ルールのARNを変数に代入したらいらないので消す\nrm tmp.json\n\n# ルールのARNの保存形式\nrule_arn_json="{\n    \\"development_alb_rule_arns\\": [\n        {\\"rule_one\\": $rule_one},\n        {\\"rule_two\\": $rule_two},\n        {\\"rule_three\\": $rule_three},\n        {\\"rule_four\\": $rule_four}\n    ]\n}"\n\n# ルールのARNのjsonを新規作成する\necho $rule_arn_json | tee aws_alb_rule_dev_arn.json\n\necho maintenance start.\n```\n\n### ALBの閉塞解除(メンテナンス画面解除)\n\n```sh\n# AWS ALBのリスナーのルールのARNのjsonファイル名\njson="aws_alb_rule_dev_arn.json"\n\n# ルールのARN\nrule_one=$( cat $json | jq \'.[]\' | jq \'.[0]\' | jq -r \'.[]\')\nrule_two=$( cat $json | jq \'.[]\' | jq \'.[1]\' | jq -r \'.[]\')\nrule_three=$( cat $json | jq \'.[]\' | jq \'.[2]\' | jq -r \'.[]\')\nrule_four=$( cat $json | jq \'.[]\' | jq \'.[3]\' | jq -r \'.[]\')\n\n# ルールの削除によってメンテナンス表示の解除\naws elbv2 delete-rule --rule-arn $rule_one\naws elbv2 delete-rule --rule-arn $rule_two\naws elbv2 delete-rule --rule-arn $rule_three\naws elbv2 delete-rule --rule-arn $rule_four\n\n# ルールを削除したらファイルは不要なので削除する\nrm $json\n\necho maintenance stopped.\n```\n\n### 感想\n\n人間そんな簡単に死なない。\n\n'}},head:function(){return{title:this.title,meta:[{hid:"og:url",property:"og:url",content:this.url},{hid:"og:description",property:"og:description",content:"programming"},{hid:"og:title",property:"og:title",content:"ZODIAC BLOG - ".concat(this.title)}]}},computed:{kiji:function(){return j()(this.prekiji)}},components:{defaultFooter:r.a,defaultHeader:o.a,pankuz:l.a}},h=t(21),component=Object(h.a)(d,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("default-header"),n._v(" "),t("pankuz"),n._v(" "),t("main",{staticStyle:{padding:"5vw"}},[t("h3",{staticStyle:{"box-shadow":"5px 5px 0px 0px darkslategray",background:"linear-gradient(-45deg, darkslategray, black, darkslategray)",color:"white",padding:"2vw","text-align":"center"}},[t("b",{staticClass:"midashi",staticStyle:{"border-bottom":"dotted 3px crimson"}},[n._v("\n                "+n._s(n.title)+"\n                "),t("font-awesome-icon",{staticClass:"icon",staticStyle:{color:"darkorange"},attrs:{icon:["fab","aws"]}})],1)]),n._v(" "),t("div",{staticStyle:{"box-shadow":"5px 5px 0px 0px wheat",background:"white",padding:"5vw"},domProps:{innerHTML:n._s(n.kiji)}})]),n._v(" "),t("default-footer")],1)}),[],!1,null,null,null);e.default=component.exports}}]);