<template>
    <div>
        <default-header></default-header>
        <pankuz></pankuz>
        <main style="padding:5vw;">
            <h3 style="box-shadow:5px 5px 0px 0px darkslategray;background:linear-gradient(-45deg, darkslategray, black, darkslategray);color:white;padding:2vw;text-align:center;">
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
            title: "Nuxt.jsでdirectory直下のファイルの一覧を取得する方法",
            url: "https:zodiac-G12.github.io/blog/2019-10-14",
            kiji: null,
            prekiji:
`
## モチベーション
　私の作ったブログに於いては、index.vueに各記事のリンクを貼っている。
だけど、index.vueに書く記事のリンクのリストデータを記載する必要があって、嫌だった。
なんで嫌だかというと、各記事のfilename、title、categoryが、実際にある記事のものと違ってはならないということで、
かなり気を張っていたのと、効率が悪いと思っていたからである。
したがって、どのタイミングかに於いて、記事のfilelistを取得してごにょごにょしたかった。
しかし悩んでいたのは、
__『ブラウザで動作するJavaScriptには、
「ユーザが自発的にファイルを選んだとき」でないとファイルにアクセスできない制限がかかっていて、
フォルダも同様にユーザの選択を経由しなければアクセスできない。
なので、「フォルダを指定するのではなくhtmlファイルがあるフォルダと同じ場所のファイル一覧を表示するには、
どの様にして、フォルダを指定すれば良いのでしょうか？」
という質問に対する回答としては「そもそも仕組み的に不可能」
ということになる。』__
https://teratail.com/questions/109962
とこの人は言っていてかなり難しい気持ちになっていた。
だが、今回私がやっているのはNuxtだし、
少し勝手が異なるでしょと思っていた。
結果、次のように解決した。

## その1:JSONを作る

　まず、このShellスクリプトを見てほしい。

\`\`\`sh
ls pages | sed -e 's/vue/vue=1/g' | jo | tee components/fileLists.json
\`\`\`

[jq](https://teratail.com/questions/109962)に関しては、以前説明したかもしれない(してない)。
端的に言うなれば、
jqはjsonfileを整形して、コマンドラインに出力するものであったのに対し、
[jo](https://github.com/jpmens/jo)は、
コマンドライン出力を整形して、jsonにするというものであるといえる。
だから、これを実行すると、

\`\`\`json
{"2019-09-20.vue":1,"2019-09-25.vue":1,"2019-09-26.vue":1,"2019-09-28.vue":1,"2019-10-03.vue":1,"2019-10-04.vue":1,"2019-10-14.vue":1,"config.vue":1,"index.vue":1}
\`\`\`

というjsonfileが生成される。ここで、valueが1であることに関しては意味がないので、気にしない。

先程のshellをmklists.shとすると、package.jsonに

\`\`\`json
{
    "name": "my-app",
    "scripts": {
        "dev": "bash mklists.sh && nuxt",
        "build": "nuxt build",
        "start": "nuxt start",
        "generate": "bash mklists.sh && nuxt generate",
\`\`\`

といったように、必要なタイミングで、shellをついでに叩くようにすれば良い。
なお、Nuxtはファイルの変更を監視していて、リアルタイム更新されるが、
これがある意味でされなくなって、悲しいことになるが、それはその都度、
shellを実行すれば良いだけである。

これによって、filelistの載ったjsonがcomponents直下にできて、参照ができるようになる。

## その2:jsonを手がかりに詳細情報を取得

　具体的には[axios](https://github.com/axios/axios)を用いる。
export defaultに以下を書く。metaTagsの設定がされている前提なので注意。
mountedにしなければ、location.hrefが馬鹿になるのでだめ。

\`\`\`js
mounted() {
        this.result = [];
        Object.keys(fileLists).filter(file=>file!='config.vue'&&file!='index.vue').forEach(file=>{
            axios.get(location.href+file.replace('.vue', '')).then(res=>{
                var a = document.createElement('a');
                a.innerHTML = res.data;
                a.querySelectorAll('meta').forEach(h=>{  
                    if(h.dataset.hid=='og:description') {
                        this.result.push({
                            date: file.replace('.vue', ''),
                            title: a.getElementsByTagName('title')[0].innerHTML.replace(' - ZODIAC BLOG', ''),
                            category: h.content
                        });
                        // 発行順にソート(filenameが日付の前提)
                        this.result = this.result.sort(function(a, b){ 
                            return new Date(a.date) - new Date(b.date);
                        }).reverse();
                    }
                });
            });
        });
    }
\`\`\`

終わり。

## 追記
- 生きるのにまじで疲れた。
- transitionの設定とか試したけど、コードハイライトが死ぬので、まだ適応してない。なぜ？
- golang少し触った。誰か詳しい人とお話したい。

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
        console.log('created')
        marked.setOptions({
            langPrefix: '',
            highlight: function(code, lang) {
                return hljs.highlightAuto(code, [lang]).value;
            }
        });
    },
    mounted(){
        console.log('mounted')
        this.kiji = marked(this.prekiji);
        console.log(hljs.initHighlightingOnLoad());
        // (async()=>{
        //     await this.sleep(3000);
        // })();
    },
    methods: {
        sleep(n) {
            return new Promise(resolve => setTimeout(resolve, n));
        }
    },
    components: {
        defaultFooter, defaultHeader, pankuz
    }
}

</script>

<style src='highlight.js/styles/gruvbox-dark.css'></style>

