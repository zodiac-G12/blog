<template>
    <div>
        <default-header></default-header>
        <main style="padding:5vw;">
            <h3 class="list-info">
                <b class="midashi">
                    ZODIAC-G12 のブログ一覧
                    <font-awesome-icon class="icon" style="color:darkorange;transform: translateY(5%);" :icon="['fas', 'edit']" />
                </b>
            </h3>
            <div class="list-info-detail">
                <div v-if="result.length!=0" class="for-list" v-for="(item, index) in result">
                    <b>●</b>
                    <a style="color:navy;font-weight:bold;" :href="item.date">
                        [{{item.date}}] - {{item.title}} ({{item.category}})
                    </a>
                    <new-wave v-if="index==0"></new-wave>
                </div>
            </div>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <script>
              (adsbygoogle = window.adsbygoogle || []).push({
                google_ad_client: "ca-pub-4943358250220700",
                enable_page_level_ads: true
              });
            </script>
            <h3 class="list-info" style="margin-top:5vh;">
                <b class="midashi">
                    ZODIAC-G12 の情報
                    <font-awesome-icon class="icon" style="color:darkorange;transform: translateY(5%);" :icon="['fas', 'edit']" />
                </b>
            </h3>
            <div class="list-info-detail">
                <b>● HOME PAGE (<a href="https://zodiac-G12.github.io/homepage">https://zodiac-G12.github.io/homepage</a>)</b>
            </div>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <script>
              (adsbygoogle = window.adsbygoogle || []).push({
                google_ad_client: "ca-pub-4943358250220700",
                enable_page_level_ads: true
              });
            </script>
        </main>
        <default-footer></default-footer>
    </div>
</template>



<script>

import moment from 'moment-timezone';
import defaultHeader from '~/components/default-header';
import defaultFooter from '~/components/default-footer';
import newWave from '~/components/new-wave';

import axios from 'axios';

import fileLists from '~/components/fileLists.json';

export default{
    loading: false,
    data: function() {
        return {
            now: moment().tz("Asia/Tokyo").format("ll"),
            fileLists: fileLists,
            result: null,
        }
    },
    head () {
        return {
            titleTemplate: null,
            title: "ZODIAC BLOG",
        }
    },
    components: {
        defaultFooter, defaultHeader, newWave
    },
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
                        this.result = this.result.sort(function(a, b){
                            return new Date(a.date) - new Date(b.date);
                        }).reverse();
                    }
                });
            });
        });
    }
}

</script>



<style>
.list-info{
    box-shadow: 5px 5px 0px 0px black;
    /* background: darkgreen; */
    /* background: MediumVioletRed; */
    /* background: olivedrab; */
    /* background: seagreen; */
    /* background: teal; */
    /* background: steelblue; */
    background: linear-gradient(-45deg, darkslategray, black, darkslategray);
    color: white;
    padding: 2vw;
    text-align: center;
}
.list-info-detail{
    box-shadow: 5px 5px 0px 0px wheat;
    background: white;
    padding: 5vw;
}
.for-list{
    display: flex;
    margin: var(--font-size) 0 var(--font-size) 0;
}
</style>
