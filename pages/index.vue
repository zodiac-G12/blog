<template>
    <div class="container">
        <div id="top">
            <Logo />
            <h1 class="title">ZODIAC BLOG</h1>
            <h2 class="subtitle">Provided By {Nuxt.js + GitHub Pages}</h2>
            <InformationForm :displayStyle="'block'"/>
        </div>

        <div id="blogs">
            <a href="https://h.accesstrade.net/sp/cc?rk=0100jbqe00kele" rel="nofollow">
                <img src="https://h.accesstrade.net/sp/rr?rk=0100jbqe00kele" alt="アフィリエイトのアクセストレード" border="0" style="max-width:468px;"/>
            </a>
            <h2 class="subtitle" style="color: black; margin-top: 10vh;">
                LATEST ARTICLES
            </h2>
            <div class="nyoibo" style="margin-bottom: 5%;"></div>

            <!-- TODO きれいにしたい -->
            <div class="articleContainer">
                <nuxt-link v-for="item in blogs" :key="item.link" 
                   :to="'./'+item.link"
                   class="articleItem" prefetch>
                    <div class="innerArticleItem">
                        <picture>
                            <source type="image/webp" :srcset="'/blog/'+(item.samn).split('.')[0]+'.webp'">
                            <img alt="" :src="'/blog/'+item.samn" decoding="async" style="width: 100%; margin: auto;border: none; box-shadow: none;"></img>
                        </picture>
                        <div style="position: absolute; bottom: 0px; width: 100%; padding: 10px;">
                            <div style="margin-bottom: 5px;">{{item.title}}</div>
                            <div style="font-size: 80%;">{{item.time}}</div>
                        </div>
                    </div>
                </nuxt-link>
            </div>

            <OriginalPagination :info="this.blogQuery" v-on:onPaging="getBlogs"/>
        </div>

        <!-- TODO 鬱陶しい -->
        <!-- <ScrlArrow :look="look" :dom_ids="dom_ids" /> -->
        <footer style="position: absolute; bottom: 10%;width: 100vw;margin-bottom:5vh; text-align: center;">{{footer_info}}</footer> 
    </div>
</template>

<script>
import fileLists from '~/components/fileLists.json';
const OriginalPagination = () => import('~/components/original-pagination.vue');
const Logo = () => import('~/components/logo.vue');
const ScrlArrow = () => import('~/components/scrl-arrow.vue');
const InformationForm = () => import('~/components/information-form.vue');

const mobileViewPageNum = 5,
          pcViewPageNum = 6;

const fileListsValues = Object.values(fileLists),
      blogQueryLength = fileListsValues.length;

export default {
    data: function() {
        return {
            footer_info: process.env.FOOTER_COPYRIGHT,
            look: 0, //いる？
            dom_ids: [/*'#introduction',*/ '#blogs', '#top'],
            fileListsValues: fileListsValues,
            blogQuery: {
                start: 0,
                upto: 5,
                limit: 5,
                max: blogQueryLength
            },
            blogs: []
        }
    },
    methods: {
        getBlogs(query) {
            this.blogQuery.start = query.start;
            this.blogQuery.upto = query.upto;
            this.blogs = this.fileListsValues.slice(query.start,query.upto);
        },
    },
    mounted(){
        if (window.innerHeight < window.innerWidth) {
            this.blogQuery.limit = pcViewPageNum;
            this.blogQuery.upto = pcViewPageNum;
        } else {
            this.blogQuery.limit = mobileViewPageNum;
            this.blogQuery.upto = mobileViewPageNum;
        }
        this.getBlogs(this.blogQuery);
    },
    components: {
        OriginalPagination, Logo, ScrlArrow, InformationForm
    },
}
</script>
