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
            title: "Nuxt.jsでSEOに関するmeta設定",
            url: "https:zodiac-G12.github.io/blog/2019-09-26",
            kiji: null,
            prekiji:
`
## SEO気にしてたのに全く忘れていたmeta設定
　Google先生のクローラーに｢ｺｺﾆｲﾙﾖ!｣と言いたい。
そのために以下のサイトを参照しながら、__nuxt.config.js__ を以下のようにやった。

\`\`\`JS
export default {
    head: {
        htmlAttrs: {
            prefix: 'og: http://ogp.me/ns#'
        },
        titleTemplate: '%s - ZODIAC BLOG',
        meta: [
            { hid: 'description', name: 'description', content: '技術ブログ' },
            { hid: 'og:site_name', property: 'og:site_name', content: 'ZODIAC BLOG' },
            { hid: 'og:type', property: 'og:type', content: 'website' },
            { hid: 'og:url', property: 'og:url', content: 'https://zodiac-G12.github.io/blog' },
            { hid: 'og:title', property: 'og:title', content: 'ZODIAC BLOG' },
            { hid: 'og:description', property: 'og:description', content: '技術ブログ' },
            { hid: 'og:image', property: 'og:image', content: 'https://avatars1.githubusercontent.com/u/12181838?s=460&av=4' },

\`\`\`

## 結果
　どうなったかというと、 __"nuxt"__ で実行してNuxtServerを立ててHTMLでmetaタグを確認出来た。
SPAモードと言うか、 __"nuxt generate"__ で実行して、静的HTMLでもmetaタグを確認出来た。
もういいかなと思って適当にやりました。

## 参考ドキュメント

- [API: head プロパティ - Nuxt.js](https://qiita.com/amishiro/items/b7260116b282d2cf2756)
- [nuxt.js(v2)でSEOに必要なmeta(OGP)を入れたい](https://ja.nuxtjs.org/api/configuration-head/)
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
