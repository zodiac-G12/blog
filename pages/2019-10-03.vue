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
            title: "Safariでフォントの表示がおかしい件",
            url: "https:zodiac-G12.github.io/blog/2019-10-03",
            kiji: null,
            prekiji:
`
## Safariで表示がおかしい
　__text-shadow__ なのか __bold__ なのか、よくわからなかったが、
｢フォントが二重にずれて表示されて非常にダサくなる｣バグが以前から散見されていた。
だが、今回こんな記事を見つけて、

<center>
<img src="/blog/_nuxt/assets/EGBBv3KU8AAy2YC.jpeg">
</center>

なるほどと思った。道理で。
__Ubuntu Mono__ (https://fonts.google.com/specimen/Ubuntu+Mono)というフォントで先ず確認して、
他にもあると思う(このサイト内の文字でも起こっている)。

UserAgent取得して、対応すべきブラウザに対しては、Bold回避するなりして、対応していきたい。

## おなかいたい
　おなかいたい。

## 追記(お天気時計Webページ作った)

　このページもSafariでフォントが死ぬ。

https://zodiac-g12.github.io/clock/

## 解説
　何年かぶりか __Ajax__ でスクレイピングした。
\`\`\`JS
$(function(){
        $.ajax({
            url: "https://weathernews.jp/onebox/35.68/139.77/temp=c",
            type: "GET",
            success: function(res) {
                //weather-now__cont
                data = $($(res));
                wet = data[77].getElementsByClassName("weather-now__cont")[0].innerText.split("\\n").map(s=>{
                    return s.split("").filter(c=>{
                        if(c!=" "&&c!="　") return c;
                    }).join("");
                });
                wet.pop();
                wet.pop();
                wet.reverse().pop();
                wet.pop();
                wet.pop();
                wet.reverse();
                localStorage.setItem("wet", wet);
                console.log(wet)
            }
        });
    });
\`\`\`

localStorageの __wet__ を key として "__天気晴れ,気温27.1℃,湿度52%,気圧1000hPa,風南南西6m/s,日の出05:38 | 日の入17:22__" と行ったような値が入る。
また、自動更新する仕様と(CIみたいな感じになる(違う))、
時間で朝だったら黄色、夜だったら青といったように背景が変わるようにした。
あまり表に出ないインドア派の方や、監禁されている方にはもってこいですね。
外の景色が分かるので。
余ったディスプレイがあったので、時計もなかったし、QOLあがりました。
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
