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
            title: "自動読み聞かせWebページを作った件での知見",
            url: "https:zodiac-G12.github.io/blog/2019-10-04",
            kiji: null,
            prekiji:
`
## 天下り的に制作物をまずご覧いただく

　__yomikikase__(https://zodiac-g12.github.io/yomikikase/)

__西田幾多郎__という哲学者がいて、青空文庫でもありますが、｢__絶対矛盾的自己同一__｣という非常にありがたい玉言があります。
これは自分で読むとなると、やはり大変なので、まあ、他にもそういう文章ありますよね。
自分で文字を追って読む、スクロール(ページをめくる)のかったるい、みたいな。
読書に於いては、やはり紙媒体こそが至高で、最早議論の余地はないのですが、
まあそれでも、こういうダイバーシティーがあってもいいなと、私は思いますよ。
まあ結論を言うと、読むのが楽になりそうですね。
https://zodiac-g12.github.io/yomikikase/#n
ただし、__n__は1以上の非負整数とする。
n[ms]ごとに一文字更新していきます。あまり大きな値が入るとどうなるかはわからないですが。
画面サイズfixedの透明ボタンを配置していて、自動で、スクロールと文字描画やってるんですけど、
ボタンを押すと、割り込みで、ストップしてくれるので、コンテキストのロールバックは出来ます。

## 文字だけ透かして背景画像と文字をドッキングみたいな？
　何言ってるかわからないと思います。私もわかりません。

\`\`\`CSS
color: rgba(0,0,0,0); 
background-image: url('tezcatlipoca-fresco.jpg');
-webkit-background-clip: text;
background-clip: text;
\`\`\`

こういうcssで指定すると、文字部分だけ透過されて、背景画像が文字の形を彩ります。__body__では駄目です。
bodyより子供にしてください。bodyのbackgroundは色が残ります。つまり、最終的に、
｢bodyのbackgroundと、文字の形だけくり抜かれた画像｣だけのこるのです。
上のサイトでは__テスカトリポカ__(https://ja.wikipedia.org/wiki/%E3%83%86%E3%82%B9%E3%82%AB%E3%83%88%E3%83%AA%E3%83%9D%E3%82%AB)
の画像を使っています。神です。
あ、因みに、私のChromeでは｢__-webkit-background-clip__｣
とやらなくては反映されませんでした。
まだベンダープレフィックス付けないと駄目なんですね。覚えときます。

## スマホ(iOSのSafariだけ？)で勝手に文字調整しやがる
　マジで勝手なことすんな。ぶっｋ、、、
先のサイトで、dev toolでスマホ画面表示デバックしてたら、
ある一定の文字描画が終了したタイミングで、文字サイズ変わりやがる。
\`\`\`CSS
-webkit-text-size-adjust: none;
\`\`\`

これを指定すると治った。ふう。
このサイト(https://www.seojuku.com/blog/ios-css.html )いいですね。

## idで0からのIntegerでstyle.cssにstyleを書く時
　idを0~100までdiv作る時に、一々、HTMLに予め用意するとか、
アホみたいなことやりたくなくて、whileでぶん回して

\`\`\`JS
var div = document.createElement("div");
div.setAttribute("id", String(i));
div.setAttribute("class", "moji");
document.body.insertBefore(div,document.getElementById(String(i-1)).nextSibling);
\`\`\`

とやりたいですよね。
id,class付与、
後置で要素追加です。__nextSibling__ って知ってますか？
https://developer.mozilla.org/ja/docs/Web/API/Node/nextSibling
本来、__insertBefore__はあっても、__insertAfter__はないんです。
ですが、このようにやると、__insertAfter__の理想の動きをしてくれるんですよね。
天才。
なお、style.cssにおいては、クラス指定するときに、エスケープすることで指定できると知りました。
以下はidが1のスタイル。
\`\`\`CSS
#\\0031{
    font-size: 120%;
}
\`\`\`
## 最後に
　今回のこのサイトは、コーディングしてて勉強になりました。
もっと書きたい気持ちはありますが、時間がないのでここまでにします。では。
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
