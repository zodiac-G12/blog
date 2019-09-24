<template>
    <div>
        <default-header></default-header>
        <pankuz></pankuz>
        <main style="padding:5vw;">
            <h3 style="box-shadow:5px 5px 0px 0px teal;background:steelblue;color:white;padding:2vw;text-align:center;">
                <b style="border-bottom: dotted 3px crimson;">
                    {{title}}
                    <font-awesome-icon class="icon" style="color:deeppink" :icon="['fas', 'user-secret']" />
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
            title: "午前四時です",
            kiji: null,
            prekiji:
`
## ブログのデザインををリファクタしました
　大分インテリジェンスになったはずです。以前よりは。

## 懸念点
　改善したいところ。変数は２つ持ちたくない。
pages直下のfile内とindexで記事タイトル名2回宣言したくない。
帳尻合わなかったらどうする？そこまで慎重に見たくない。其れに間違えたらダサすぎる。
ディレクトリ内ファイル一覧とかVueは出来ないのか調べたい。
やはり **fs** かしら。
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

