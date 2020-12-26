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
            link: "contentX",
            prekiji:
`
## Template

## TLDR

## At Result

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
