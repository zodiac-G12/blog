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
                <div v-if="!result">
                    <b>Loading</b>
                    <b class="colon0">.</b>
                    <b class="colon1">.</b>
                    <b class="colon2">.</b>
                </div>
                <div v-else class="for-list" v-for="(item, index) in result">
                    <b>●</b>
                    <a style="color:navy;font-weight:bold;" :href="item.date">
                        [{{item.date}}] - {{item.title}} ({{item.category}})
                    </a>
                    <new-wave v-if="index==0"></new-wave>
                </div>
            </div>
            <h3 class="list-info" style="margin-top:5vh;">
                <b class="midashi">
                    ZODIAC-G12 の情報
                    <font-awesome-icon class="icon" style="color:darkorange;transform: translateY(5%);" :icon="['fas', 'edit']" />
                </b>
            </h3>
            <div class="list-info-detail">
                <b>● HOME PAGE (<a href="https://zodiac-G12.github.io/homepage">https://zodiac-G12.github.io/homepage</a>)</b>
            </div>
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
@keyframes hid{
    0%{opacity: 0;}
    100%{opacity: 1;}
}
.colon0, .colon1, .colon2{
    opacity: 0;
    animation: hid 1s ease-in-out infinite;
}
.colon0{
    animation-delay: 0.3s;
}
.colon1{
    animation-delay: 0.6s;
}
.colon2{
    animation-delay: 0.9s;
}

</style>
