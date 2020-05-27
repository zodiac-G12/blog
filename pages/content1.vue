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
            link: "content1",
            prekiji:
`
## 従来のブログよりグレードアップ

　私は気がついた。シンプルイズベスト、一番格好いいことに。
いろいろプロジェクトやってて、ここに行き着いた。
Nuxtを私はあまりにも知らなすぎた。
LightHouseのスコアがあまりに低かったので、これで少し改善したはず。

<center>
<a href="https://h.accesstrade.net/sp/cc?rk=0100n6l400kele" rel="nofollow">
<img src="https://h.accesstrade.net/sp/rr?rk=0100n6l400kele" alt="アクセストレード パートナーサイト募集" border="0" style="max-width: 300px;"/>
</a>
</center>
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
