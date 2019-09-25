<template>
    <div>
        <default-header></default-header>
        <main style="padding:5vw;">
        <h3 style="box-shadow:5px 5px 0px 0px teal;background:steelblue;color:white;padding:2vw;text-align:center;">
            <b class="midashi">ブログ一覧</b>
        </h3>
        <div style="box-shadow:5px 5px 0px 0px wheat;background:white;padding:5vw;">
            <p v-if="list.length">
                <p v-for="item in list">
                ● <a style="color:crimson;" :href="item.date">[{{item.date}}] - {{item.title}} ({{item.category}})</a>
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

export default{
    data: function() {
        return {
            list: [
                {title:"AWS ALB のメンテナンス閉塞をShellスクリプト化した", date:"2019-09-20", category:"programming"},
                {title:"午前四時です", date:"2019-09-25", category:"diary"},
            ],
            now: moment().tz("Asia/Tokyo").format("ll"),
        }
    },
    components: {
        defaultFooter, defaultHeader
    }
}

</script>


<style>
</style>
