<template>
    <div>
        <DefaultArticle :content="{link:this.link, kiji:kiji}"/>
    </div>
</template>


<script>

const DefaultArticle = () => import('~/components/default-article.vue');
import marked from 'marked';

export default{
    data: function() {
        return {
            link: "step0",
            prekiji:
`
## 従来のブログよりグレードアップ

　私は気がついた。シンプルイズベスト、一番格好いいことに。
いろいろプロジェクトやってて、ここに行き着いた。
Nuxtを私はあまりにも知らなすぎた。
LightHouseのスコアがあまりに低かったので、これで少し改善したはず。
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
        DefaultArticle
    },
}

</script>
