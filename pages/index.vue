<template>
    <div>
        <default-header></default-header>
        <main style="margin:2vw;color:black;height:55vh">
        <h3 style="margin-top:2vh;">HOME - {{now}}</h3>
            <b>
                <font-awesome-icon class="icon" style="color:midnightblue;" :icon="['fab', 'linux']" /> 
                    ＜ ここはホーム。
            </b>
            <b style="display:block;margin-top:5vh;">
                <font-awesome-icon class="icon" style="color:tomato;" :icon="['fab', 'linux']" /> 
                    ＜ Blogを見ますか？
            </b>
            <center><a onclick="location.href=location.href+(location.href[location.href.length-1]=='/'?'':'/')+'2019-09-20'">BLOGをみる</a></center>
            <center><a onclick="location.href=location.href+(location.href[location.href.length-1]=='/'?'':'/')+'config'">このページについて</a></center>
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
