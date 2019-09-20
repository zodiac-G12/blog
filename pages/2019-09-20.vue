<template>
    <div>
        <default-header></default-header>
        <pankuz></pankuz>
        <main style="margin:2vw;color:black;">
        <h3>
                AWS ALB のメンテナンス閉塞をShellスクリプト化した
            <font-awesome-icon class="icon" style="color:#fd7e14;" :icon="['fab', 'aws']" />
        </h3>
            <a-divider style="background:black;" type="horizontal"/>
            <b>
                <font-awesome-icon class="icon" style="color:midnightblue;" :icon="['fab', 'linux']" /> 
                    ＜ AWS ALB ってなんですか？
            </b>
            <p style="margin-top:5vh;"><font-awesome-icon class="icon" style="color:#fd7e14;" :icon="['fab', 'angular']" /> 
                ＜<a href="https://docs.aws.amazon.com/ja_jp/elasticloadbalancing/latest/application/introduction.html">
                    https://docs.aws.amazon.com/ja_jp/elasticloadbalancing/latest/application/introduction.html
                </a>
            </p>
            <b style="margin-top:5vh;">
                <font-awesome-icon class="icon" style="color:midnightblue;" :icon="['fab', 'linux']" /> 
                    ＜ なぜシェルスクリプト化したんですか？
            </b>
            <p style="margin-top:5vh;"><font-awesome-icon class="icon" style="color:#fd7e14;" :icon="['fab', 'angular']" /> 
                ＜ 教える筋合いないです。仮にそんな方には説明してもわからないと思います。
            </p>
            <h3>
                いきなりコード
                <font-awesome-icon class="icon" style="color:#fd7e14;" :icon="['fas', 'bath']" />
            </h3>
            <a-divider style="background:black;" type="horizontal"/>
            <pre v-html="heisokuview"></pre>
            <b>本当にごめんなさい。今度詳細記事書きます。</b>
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
            now: moment().tz("Asia/Tokyo").format("ll"),
            heisokuview: null,
            heisoku: `
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
    --actions Type=fixed-response,FixedResponseConfig=
    \\{"MessageBody=
    '\\{\\"id\\":-5000,
    \\"description\\":\\"ただいまメンテナンス中です。しばらくお待ちください\\"\\}',
    StatusCode=$maintenance_statusCode,ContentType=application/json"\\} | tee tmp.json

# ルールのARNを抽出(1個目)
rule_three=$( cat tmp.json | jq '.Rules[0].RuleArn' )

aws elbv2 create-rule \\
    --listener-arn $listener_two \\
    --conditions Field=path-pattern,Values="api/v*" \\
    --priority 1 \\
    --actions Type=fixed-response,FixedResponseConfig=
    \\{"MessageBody=
    '\\{\\"id\\":-5000,
    \\"description\\":\\"ただいまメンテナンス中です。しばらくお待ちください\\"\\}'
    ,StatusCode=$maintenance_statusCode,ContentType=application/json"\\} | tee tmp.json

# ルールのARNを抽出(2個目)
rule_four=$( cat tmp.json | jq '.Rules[0].RuleArn' )


############################# API v* 直下以外の任意のパスにアクセスされたときのHTML レスポンス(×2) #############################

aws elbv2 create-rule \\
    --listener-arn $listener_one \\
    --conditions Field=path-pattern,Values="*" \\
    --priority 2 \\
    --actions Type=fixed-response,FixedResponseConfig=
    \\{"MessageBody=
    <body><p>ただいまメンテナンス中です。しばらくお待ちください</p></body>
    ,StatusCode=$maintenance_statusCode,ContentType=text/html"\\} | tee tmp.json

# ルールのARNを抽出(3個目)
rule_one=$( cat tmp.json | jq '.Rules[0].RuleArn' )

aws elbv2 create-rule \\
    --listener-arn $listener_two \\
    --conditions Field=path-pattern,Values="*" \\
    --priority 2 \\
    --actions Type=fixed-response,FixedResponseConfig=
    \\{"MessageBody=
    <body><p>ただいまメンテナンス中です。しばらくお待ちください</p></body>,
    StatusCode=$maintenance_statusCode,ContentType=text/html"\\} | tee tmp.json

# ルールのARNを抽出(4個目)
rule_two=$( cat tmp.json | jq '.Rules[0].RuleArn' )


# ルールのARNを変数に代入したらいらないので消す
rm tmp.json

# ルールのARNの保存形式
rule_arn_json="\\{
    \\"development_alb_rule_arns\\": [
        \\{\\"rule_one\\": $rule_one\\},
        \\{\\"rule_two\\": $rule_two\\},
        \\{\\"rule_three\\": $rule_three\\},
        \\{\\"rule_four\\": $rule_four\\}
    ]
\\}"

# ルールのARNのjsonを新規作成する
echo $rule_arn_json | tee aws_alb_rule_dev_arn.json

echo maintenance start.

\`\`\`
            `
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
        this.heisokuview = marked(this.heisoku);
    },
    components: {
        defaultFooter, defaultHeader, pankuz
    }
}

</script>


<style src='highlight.js/styles/gruvbox-dark.css'></style>

