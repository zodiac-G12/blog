exports.ids=[1],exports.modules={32:function(e,n,t){var content=t(37);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var o=t(6).default;e.exports.__inject__=function(e){o("48331b64",content,!0,e)}},33:function(e,n,t){"use strict";var o=t(29),l=t.n(o),r={data:function(){return{now:l()().tz("Asia/Tokyo").format("Y")}}},c=t(3),component=Object(c.a)(r,(function(){var e=this.$createElement,n=this._self._c||e;return n("footer",{staticClass:"foot"},[n("font-awesome-icon",{staticClass:"icon",staticStyle:{color:"gold",margin:"0 0.1vw 0 0.1vw"},attrs:{onmouseover:"this.style.color='darkorange'",onmouseout:"this.style.color='gold'",onclick:"location.href='https://twitter.com/zodiac_G12'",icon:["fab","twitter-square"]}}),this._ssrNode(" "),n("font-awesome-icon",{staticClass:"icon",staticStyle:{color:"gold",margin:"0 0.1vw 0 0.1vw"},attrs:{onmouseover:"this.style.color='darkorange'",onmouseout:"this.style.color='gold'",onclick:"location.href='https://github.com/zodiac-G12'",icon:["fab","github-square"]}}),this._ssrNode(" "),n("font-awesome-icon",{staticClass:"icon",staticStyle:{color:"gold",margin:"0 0.1vw 0 0.1vw"},attrs:{onmouseover:"this.style.color='darkorange'",onmouseout:"this.style.color='gold'",onclick:"location.href='https://zodiac-G12.github.io/homepage'",icon:["fas","h-square"]}}),this._ssrNode(' <p style="color:snow;">'+this._ssrEscape("© ZODIAC-G12 "+this._s(this.now))+"</p>")],2)}),[],!1,null,null,"39ff05ed");n.a=component.exports},34:function(e,n,t){"use strict";var o=t(3),component=Object(o.a)({},(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"black-head"},[this._ssrNode('<h1 class="title" style="line-height:12vh;">ZODIAC BLOG</h1> <h4 style="line-height:1vh;color:snow;text-align:center;">~ 技術的な防備録 ~</h4>')])}),[],!1,null,null,"5b3169df");n.a=component.exports},35:function(e,n,t){"use strict";var o={data:function(){return{pre:null,dir:null}},mounted(){this.pre=location.href.split("blog")[0]+"blog/",this.dir=location.href.replace(this.pre,"")}},l=t(3),component=Object(l.a)(o,(function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticStyle:{padding:"1vw",width:"100vw",color:"white",background:"darkslategray","padding-left":"5vw"}},[this._ssrNode("<a onmouseover=\"this.style.color='maroon'\" onmouseout=\"this.style.color='white'\""+this._ssrAttr("href",this.pre)+' style="color:white;font-weight:bold;">',"</a>",[n("font-awesome-icon",{staticClass:"small-icon",attrs:{icon:["fas","igloo"]}}),this._ssrNode(" Home\n    ")],2),this._ssrNode(' <b style="margin-left:1vw;margin-right:1vw;">&gt;</b> <b>'+this._ssrEscape(this._s(this.dir))+"</b>")],2)}),[],!1,null,null,"cc04c44e");n.a=component.exports},36:function(e,n,t){"use strict";t.r(n);var o=t(32),l=t.n(o);for(var r in o)"default"!==r&&function(e){t.d(n,e,(function(){return o[e]}))}(r);n.default=l.a},37:function(e,n,t){(e.exports=t(5)(!1)).push([e.i,".hljs{display:block;overflow-x:auto;padding:.5em;background:#282828}.hljs,.hljs-subst{color:#ebdbb2}.hljs-deletion,.hljs-formula,.hljs-keyword,.hljs-link,.hljs-selector-tag{color:#fb4934}.hljs-built_in,.hljs-emphasis,.hljs-name,.hljs-quote,.hljs-strong,.hljs-title,.hljs-variable{color:#83a598}.hljs-attr,.hljs-params,.hljs-template-tag,.hljs-type{color:#fabd2f}.hljs-builtin-name,.hljs-doctag,.hljs-literal,.hljs-number{color:#8f3f71}.hljs-code,.hljs-meta,.hljs-regexp,.hljs-selector-id,.hljs-template-variable{color:#fe8019}.hljs-addition,.hljs-meta-string,.hljs-section,.hljs-selector-attr,.hljs-selector-class,.hljs-string,.hljs-symbol{color:#b8bb26}.hljs-attribute,.hljs-bullet,.hljs-class,.hljs-function,.hljs-function .hljs-keyword,.hljs-meta-keyword,.hljs-selector-pseudo,.hljs-tag{color:#8ec07c}.hljs-comment{color:#928374}.hljs-link_label,.hljs-literal,.hljs-number{color:#d3869b}.hljs-comment,.hljs-emphasis{font-style:italic}.hljs-section,.hljs-strong,.hljs-tag{font-weight:700}",""])},38:function(e,n,t){"use strict";t.r(n);t(29);var o=t(34),l=t(33),r=t(35),c=t(30),h=t.n(c),d=t(31),j=t.n(d),_={data:function(){return{title:"AWS ALB のメンテナンス閉塞をShellスクリプト化した",kiji:null,prekiji:'\n## 動機\n\n- 効率化\n\n---\n\n## 初期設定\n\n- [AWS CLI](https://docs.aws.amazon.com/ja_jp/streams/latest/dev/kinesis-tutorial-cli-installation.html) および [jq](https://stedolan.github.io/jq/) がマシンにインストールされていることを確認。インストールされていなければインストール。\n\n```sh\n$ aws --version\naws-cli/1.16.215 Python/2.7.14 Linux/4.13.0-46-generic botocore/1.12.205\n```\n\n\n```sh\n$ jq --version\njq-1.5-1-a5b5cbe\n```\n\n- AWS CLI にアクセスキーを設定する\n> ⚠️ Default output format は **json** と絶対に全て小文字で入力すること。 Json や JSON では不可\n\n```sh\n$ aws configure\nAWS Access Key ID [None]: {accessKeyId}\nAWS Secret Access Key [None]: {secretAccessKey}\nDefault region name [None]: ap-northeast-1\nDefault output format [None]: json\n```\n\n- IAMユーザーが"maintenance"であること確認する\n\n```sh\n$ aws iam list-users\n{\n    "Users": [\n        {\n             ⋮\n        },\n        {\n             "UserName": "maintenance",\n             ⋮\n        },\n             ⋮\n        }\n    ]\n}\n```\n\n## 実践\n\n### ALBの閉塞(メンテナンス画面にする)\n\n- aws_alb_listener_dev_arn.json にAWS ALBのリスナーのARNを載っけときます。\n\n今回はALBが2つあって、それぞれに閉塞設定するというもので、api/v*直下アクセスのときはjson。\n其れ以外のときはHTMLを返すというものです。\n\n```sh\n####################################################################\n#\n#    メンテナンス開始のshellスクリプト(4つルールができる)\n#\n####################################################################\n\n\n# AWS ALBのリスナーのARNのjsonファイル名\njson="aws_alb_listener_dev_arn.json"\nmaintenance_statusCode=503\n\n# リスナーのARN\nlistener_one=$( cat $json | jq \'.[]\' | jq \'.[0]\' | jq -r \'.[]\' )\nlistener_two=$( cat $json | jq \'.[]\' | jq \'.[1]\' | jq -r \'.[]\' )\n\n\n############################# API v* 直下にアクセスされたときのJSON レスポンス(×2) #############################\n\n# 出力されたjsonをtmp.jsonとして一時保存\naws elbv2 create-rule \\\n    --listener-arn $listener_one \\\n    --conditions Field=path-pattern,Values="/api/v*" \\\n    --priority 1 \\\n    --actions Type=fixed-response,FixedResponseConfig={"MessageBody=\'{\\"id\\":-5000, \\"description\\":\\"ただいまメンテナンス中です。しばらくお待ちください\\"}\',StatusCode=$maintenance_statusCode,ContentType=application/json"} | tee tmp.json\n\n# ルールのARNを抽出(1個目)\nrule_three=$( cat tmp.json | jq \'.Rules[0].RuleArn\' )\n\naws elbv2 create-rule \\\n    --listener-arn $listener_two \\\n    --conditions Field=path-pattern,Values="api/v*" \\\n    --priority 1 \\\n    --actions Type=fixed-response,FixedResponseConfig={"MessageBody=\'{\\"id\\":-5000, \\"description\\":\\"ただいまメンテナンス中です。しばらくお待ちください\\"}\',StatusCode=$maintenance_statusCode,ContentType=application/json"} | tee tmp.json\n\n# ルールのARNを抽出(2個目)\nrule_four=$( cat tmp.json | jq \'.Rules[0].RuleArn\' )\n\n\n############################# API v* 直下以外の任意のパスにアクセスされたときのHTML レスポンス(×2) #############################\n\naws elbv2 create-rule \\\n    --listener-arn $listener_one \\\n    --conditions Field=path-pattern,Values="*" \\\n    --priority 2 \\\n    --actions Type=fixed-response,FixedResponseConfig={"MessageBody=<body><p>ただいまメンテナンス中です。しばらくお待ちください</p></body>,StatusCode=$maintenance_statusCode,ContentType=text/html"} | tee tmp.json\n\n# ルールのARNを抽出(3個目)\nrule_one=$( cat tmp.json | jq \'.Rules[0].RuleArn\' )\n\naws elbv2 create-rule \\\n    --listener-arn $listener_two \\\n    --conditions Field=path-pattern,Values="*" \\\n    --priority 2 \\\n    --actions Type=fixed-response,FixedResponseConfig={"MessageBody=<body><p>ただいまメンテナンス中です。しばらくお待ちください</p></body>,StatusCode=$maintenance_statusCode,ContentType=text/html"} | tee tmp.json\n\n# ルールのARNを抽出(4個目)\nrule_two=$( cat tmp.json | jq \'.Rules[0].RuleArn\' )\n\n\n# ルールのARNを変数に代入したらいらないので消す\nrm tmp.json\n\n# ルールのARNの保存形式\nrule_arn_json="{\n    \\"development_alb_rule_arns\\": [\n        {\\"rule_one\\": $rule_one},\n        {\\"rule_two\\": $rule_two},\n        {\\"rule_three\\": $rule_three},\n        {\\"rule_four\\": $rule_four}\n    ]\n}"\n\n# ルールのARNのjsonを新規作成する\necho $rule_arn_json | tee aws_alb_rule_dev_arn.json\n\necho maintenance start.\n```\n\n### ALBの閉塞解除(メンテナンス画面解除)\n\n```sh\n# AWS ALBのリスナーのルールのARNのjsonファイル名\njson="aws_alb_rule_dev_arn.json"\n\n# ルールのARN\nrule_one=$( cat $json | jq \'.[]\' | jq \'.[0]\' | jq -r \'.[]\')\nrule_two=$( cat $json | jq \'.[]\' | jq \'.[1]\' | jq -r \'.[]\')\nrule_three=$( cat $json | jq \'.[]\' | jq \'.[2]\' | jq -r \'.[]\')\nrule_four=$( cat $json | jq \'.[]\' | jq \'.[3]\' | jq -r \'.[]\')\n\n# ルールの削除によってメンテナンス表示の解除\naws elbv2 delete-rule --rule-arn $rule_one\naws elbv2 delete-rule --rule-arn $rule_two\naws elbv2 delete-rule --rule-arn $rule_three\naws elbv2 delete-rule --rule-arn $rule_four\n\n# ルールを削除したらファイルは不要なので削除する\nrm $json\n\necho maintenance stopped.\n```\n\n### 感想\n\n人間そんな簡単に死なない。\n\n'}},created:function(){j.a.setOptions({langPrefix:"",highlight:function(code,e){return h.a.highlightAuto(code,[e]).value}})},mounted(){h.a.initHighlightingOnLoad(),this.kiji=j()(this.escape(this.prekiji))},methods:{escape:e=>e},components:{defaultFooter:l.a,defaultHeader:o.a,pankuz:r.a}},f=t(3);var component=Object(f.a)(_,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("default-header"),e._ssrNode(" "),t("pankuz"),e._ssrNode(" "),e._ssrNode('<main style="padding:5vw;">',"</main>",[e._ssrNode('<h3 style="box-shadow:5px 5px 0px 0px teal;background:steelblue;color:white;padding:2vw;text-align:center;">',"</h3>",[e._ssrNode('<b style="border-bottom: dotted 3px crimson;">',"</b>",[e._ssrNode(e._ssrEscape("\n                "+e._s(e.title)+"\n                ")),t("font-awesome-icon",{staticClass:"icon",staticStyle:{color:"#fd7e14"},attrs:{icon:["fab","aws"]}})],2)]),e._ssrNode(' <div style="box-shadow:5px 5px 0px 0px wheat;background:white;padding:5vw;">'+e._s(e.kiji)+"</div>")],2),e._ssrNode(" "),t("default-footer")],2)}),[],!1,(function(e){var n=t(36);n.__inject__&&n.__inject__(e)}),null,"1cd0b92e");n.default=component.exports}};
//# sourceMappingURL=58d183c95ef40f23fc5c.js.map