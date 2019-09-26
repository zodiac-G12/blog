<template>
    <div>
        <default-header></default-header>
        <main style="padding:5vw;">
        <h3 style="box-shadow:5px 5px 0px 0px darkslategray;background:darkgreen;color:white;padding:2vw;text-align:center;">
            <b class="midashi">
                ブログ一覧
                <font-awesome-icon class="icon" style="color:darkorange;transform: translateY(5%);" :icon="['fas', 'edit']" />
            </b>
        </h3>
        <div style="box-shadow:5px 5px 0px 0px wheat;background:white;padding:5vw;">
            <p v-if="list.length">
                <p style="display:flex;" v-for="(item, index) in list">
                    ● <a style="color:navy;font-weight:bold;" :href="item.date">[{{item.date}}] - {{item.title}} ({{item.category}})</a>
                    <new-wave v-if="index==0"></new-wave>
                </p>
            </p>
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


export default{
    data: function() {
        return {
            // TODO pages直下から自動で色々やりたい、Do you understand???
            // TODO 新しい記事は｢new!｣とやりたい
            list: [
                {title:"AWS ALB のメンテナンス閉塞をShellスクリプト化した", date:"2019-09-20", category:"programming"},
                {title:"午前四時です", date:"2019-09-25", category:"diary"},
                {title:"Nuxt.jsでSEOに関するmeta設定", date:"2019-09-26", category:"programming"},
            ].reverse(), //古い記事上に来てどうすん
            now: moment().tz("Asia/Tokyo").format("ll"),
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
    }
}

</script>


<style>
</style>
