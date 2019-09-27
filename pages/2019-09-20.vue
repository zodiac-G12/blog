<template>
    <div>
        <default-header></default-header>
        <pankuz></pankuz>
        <main style="padding:5vw;">
            <h3 style="box-shadow:5px 5px 0px 0px darkslategray;background:darkgreen;color:white;padding:2vw;text-align:center;">
                <b class="midashi" style="border-bottom: dotted 3px crimson;">
                    {{title}}
                    <font-awesome-icon class="icon" style="color:darkorange;" :icon="['fab', 'aws']" />
                </b>
            </h3>
            <div style="box-shadow:5px 5px 0px 0px wheat;background:white;padding:5vw;" v-html="kiji"></div>
        </main>
        <default-footer></default-footer>
    </div>
</template>


<script>

import moment from 'moment-timezone';
import defaultHeader from '~/components/default-header';
import defaultFooter from '~/components/default-footer';
import pankuz from '~/components/pankuz';
import hljs from 'highlight.js';
import marked from 'marked';

export default{
    data: function() {
        return {
            title: "AWS ALB のメンテナンス閉塞をShellスクリプト化した",
            url: "https:zodiac-G12.github.io/blog/2019-09-20",
            kiji: null,
            prekiji:
`
## 動機

- 効率化

---

## 初期設定

- [AWS CLI](https://docs.aws.amazon.com/ja_jp/streams/latest/dev/kinesis-tutorial-cli-installation.html) および [jq](https://stedolan.github.io/jq/) がマシンにインストールされていることを確認。インストールされていなければインストール。

\`\`\`sh
$ aws --version
aws-cli/1.16.215 Python/2.7.14 Linux/4.13.0-46-generic botocore/1.12.205
\`\`\`


\`\`\`sh
$ jq --version
jq-1.5-1-a5b5cbe
\`\`\`

- AWS CLI にアクセスキーを設定する
> ⚠️ Default output format は **json** と絶対に全て小文字で入力すること。 Json や JSON では不可

\`\`\`sh
$ aws configure
AWS Access Key ID [None]: {accessKeyId}
AWS Secret Access Key [None]: {secretAccessKey}
Default region name [None]: ap-northeast-1
Default output format [None]: json
\`\`\`

- IAMユーザーが"maintenance"であること確認する

\`\`\`sh
$ aws iam list-users
{
    "Users": [
        {
             ⋮
        },
        {
             "UserName": "maintenance",
             ⋮
        },
             ⋮
        }
    ]
}
\`\`\`

## 実践

### ALBの閉塞(メンテナンス画面にする)

- aws_alb_listener_dev_arn.json にAWS ALBのリスナーのARNを載っけときます。

今回はALBが2つあって、それぞれに閉塞設定するというもので、api/v*直下アクセスのときはjson。
其れ以外のときはHTMLを返すというものです。

\`\`\`sh
####################################################################
#
#    メンテナンス開始のshellスクリプト(4つルールができる)
#
####################################################################


# AWS ALBのリスナーのARNのjsonファイル名
json="aws_alb_listener_dev_arn.json"
maintenance_statusCode=503

# リスナーのARN
listener_one=$( cat $json | jq '.[]' | jq '.[0]' | jq -r '.[]' )
listener_two=$( cat $json | jq '.[]' | jq '.[1]' | jq -r '.[]' )


############################# API v* 直下にアクセスされたときのJSON レスポンス(×2) #############################

# 出力されたjsonをtmp.jsonとして一時保存
aws elbv2 create-rule \\
    --listener-arn $listener_one \\
    --conditions Field=path-pattern,Values="/api/v*" \\
    --priority 1 \\
    --actions Type=fixed-response,FixedResponseConfig={"MessageBody='{\\"id\\":-5000, \\"description\\":\\"ただいまメンテナンス中です。しばらくお待ちください\\"}',StatusCode=$maintenance_statusCode,ContentType=application/json"} | tee tmp.json

# ルールのARNを抽出(1個目)
rule_three=$( cat tmp.json | jq '.Rules[0].RuleArn' )

aws elbv2 create-rule \\
    --listener-arn $listener_two \\
    --conditions Field=path-pattern,Values="api/v*" \\
    --priority 1 \\
    --actions Type=fixed-response,FixedResponseConfig={"MessageBody='{\\"id\\":-5000, \\"description\\":\\"ただいまメンテナンス中です。しばらくお待ちください\\"}',StatusCode=$maintenance_statusCode,ContentType=application/json"} | tee tmp.json

# ルールのARNを抽出(2個目)
rule_four=$( cat tmp.json | jq '.Rules[0].RuleArn' )


############################# API v* 直下以外の任意のパスにアクセスされたときのHTML レスポンス(×2) #############################

aws elbv2 create-rule \\
    --listener-arn $listener_one \\
    --conditions Field=path-pattern,Values="*" \\
    --priority 2 \\
    --actions Type=fixed-response,FixedResponseConfig={"MessageBody=<body><p>ただいまメンテナンス中です。しばらくお待ちください</p></body>,StatusCode=$maintenance_statusCode,ContentType=text/html"} | tee tmp.json

# ルールのARNを抽出(3個目)
rule_one=$( cat tmp.json | jq '.Rules[0].RuleArn' )

aws elbv2 create-rule \\
    --listener-arn $listener_two \\
    --conditions Field=path-pattern,Values="*" \\
    --priority 2 \\
    --actions Type=fixed-response,FixedResponseConfig={"MessageBody=<body><p>ただいまメンテナンス中です。しばらくお待ちください</p></body>,StatusCode=$maintenance_statusCode,ContentType=text/html"} | tee tmp.json

# ルールのARNを抽出(4個目)
rule_two=$( cat tmp.json | jq '.Rules[0].RuleArn' )


# ルールのARNを変数に代入したらいらないので消す
rm tmp.json

# ルールのARNの保存形式
rule_arn_json="{
    \\"development_alb_rule_arns\\": [
        {\\"rule_one\\": $rule_one},
        {\\"rule_two\\": $rule_two},
        {\\"rule_three\\": $rule_three},
        {\\"rule_four\\": $rule_four}
    ]
}"

# ルールのARNのjsonを新規作成する
echo $rule_arn_json | tee aws_alb_rule_dev_arn.json

echo maintenance start.
\`\`\`

### ALBの閉塞解除(メンテナンス画面解除)

\`\`\`sh
# AWS ALBのリスナーのルールのARNのjsonファイル名
json="aws_alb_rule_dev_arn.json"

# ルールのARN
rule_one=$( cat $json | jq '.[]' | jq '.[0]' | jq -r '.[]')
rule_two=$( cat $json | jq '.[]' | jq '.[1]' | jq -r '.[]')
rule_three=$( cat $json | jq '.[]' | jq '.[2]' | jq -r '.[]')
rule_four=$( cat $json | jq '.[]' | jq '.[3]' | jq -r '.[]')

# ルールの削除によってメンテナンス表示の解除
aws elbv2 delete-rule --rule-arn $rule_one
aws elbv2 delete-rule --rule-arn $rule_two
aws elbv2 delete-rule --rule-arn $rule_three
aws elbv2 delete-rule --rule-arn $rule_four

# ルールを削除したらファイルは不要なので削除する
rm $json

echo maintenance stopped.
\`\`\`

### 感想

人間そんな簡単に死なない。

`
        }
    },
    head () {
        return {
            title: this.title,
            meta: [
                { hid: 'og:url', property: 'og:url', content: this.url },
                { hid: 'og:title', property: 'og:title', content: `ZODIAC BLOG - ${this.title}` },
            ],
        }
    },
    created: function () {
        marked.setOptions({
            langPrefix: '',
            highlight: function(code, lang) {
                return hljs.highlightAuto(code, [lang]).value;
            }
        });
    },
    mounted(){
        hljs.initHighlightingOnLoad();
        this.kiji = marked(this.escape(this.prekiji));
    },
    methods: {
        escape(str) {
            return str;
            // return str.split("").map((c)=>{
            //     if (["\\"].includes(c)) return `\${c}`;
            //     else return c;
            // }).join("")
        }
    },
    components: {
        defaultFooter, defaultHeader, pankuz
    }
}

</script>


<style src='highlight.js/styles/gruvbox-dark.css'></style>

