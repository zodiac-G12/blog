<template>
    <div>
        <default-header></default-header>
        <pankuz></pankuz>
        <main style="padding:5vw;">
            <h3 style="box-shadow:5px 5px 0px 0px darkslategray;background:darkgreen;color:white;padding:2vw;text-align:center;">
                <b class="midashi" style="border-bottom: dotted 3px crimson;">
                    {{title}}
                    <font-awesome-icon class="icon" style="color:darkorange;" :icon="['fab', 'vuejs']" />
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
            title: "gitでssh接続したときNuxt.jsのdeployがコケる",
            url: "https:zodiac-G12.github.io/blog/2019-09-28",
            kiji: null,
            prekiji:
`
## やっとのssh接続
　CLIでpushすんのaccount_nameとpassword入れないで楽チンになった！
と思っていたら、master pushは上手く行っても、

\`\`\`sh
$ sudo npm run deploy
\`\`\`

がうまくいかない。これは、公式に則って、**package.json**にて、

\`\`\`JS
{
  "scripts": {
    "deploy": "push-dir --dir=dist --branch=gh-pages --verbose --cleanup",
\`\`\`

としてある。｢**--verbose**｣は追加した。ログが出るので。

## 何処でコケるの？
　一連のdeployの処理を見ていて、どうやら｢**git push origin HEAD:gh-pages --force**｣
でしくっている。

\`\`\`sh
git push origin HEAD:gh-pages --force
ssh: Could not resolve hostname github: Name or service not known
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.　
\`\`\`

コマンドラインで｢**git push origin HEAD:gh-pages --force**｣を実行すると通る。。。

## 結果
　deployのときだけ、~/.gitconfigの以下の箇所をコメントアウトして行うようにしたら、上手くいった。何故だ。

\`\`\`
# [url "github:"]
# InsteadOf = https://github.com/
# InsteadOf = git@github.com:
\`\`\`

`
        }
    },
    head () {
        return {
            title: this.title,
            meta: [
                { hid: 'og:url', property: 'og:url', content: this.url },
                { hid: 'og:description', property: 'og:description', content: 'programming' },
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
