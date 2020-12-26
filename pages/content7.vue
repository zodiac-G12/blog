<template>
    <div>
        <DefaultArticle :content="{link:this.link, kiji:kiji}"/>
    </div>
</template>


<script>

const DefaultArticle = () => import('~/components/default-article.vue');
// import marked from 'marked';
// import katex from 'katex';
import marked from 'marked-katex';

export default{
    data: function() {
        return {
            link: "content7",
            prekiji:
`
## 前書き
　この記事は私が __「React」__ を学ぶために「LightsOutゲーム」を制作し、その過程で獲得したエクスペリエンスを共有するものです。
前提知識としては、大学基礎教養の線形代数学の素養と、JavaScriptの基本的な知識を要求します。  
　この記事の重要なワードを列挙すると以下のようになります。

- LightsOut
- React
- Threejs

## TLDR
<!-- <iframe style="width:80vw; height:50vw" src="https://zodiac-g12.github.io/lightouts/"></iframe> -->

## LightOutsとは

`
        }
    },
    computed: {
        kiji() {
            if (!process.client) console.log(this.prekiji.length);
            return marked(this.prekiji);
        },
    },
    components: {
        DefaultArticle,
    },
}

</script>
