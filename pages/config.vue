<template>
    <div>
        <default-header></default-header>
        <pankuz></pankuz>
        <main style="margin:2vw;color:black;height:50vh">
        <h3>このブログは
            <a href="https://ja.nuxtjs.org/">Nuxt.js</a>
            を使っています。 - {{now}}</h3>
            <a-divider style="background:black;" type="horizontal"/>
            <b>
                <font-awesome-icon class="icon" style="color:midnightblue;" :icon="['fab', 'linux']" /> 
                    ＜なぜNuxtを選んだのか？
            </b>
            <p style="margin-top:5vh;"><font-awesome-icon class="icon" style="color:#fd7e14;" :icon="['fab', 'angular']" /> 
                ＜「私の中で30年後を考えた時に、30年後の自分は何歳かなとNuxt採用直後から考えていました。だからこそ私は健康でいられれば、30年後の約束を守れるかどうかという、そこの節目を見届けることが、私はできる可能性のあるエンジニアだと思います」

            </p>
            <b style="margin-top:5vh;">
                <font-awesome-icon class="icon" style="color:midnightblue;" :icon="['fab', 'linux']" /> 
                    ＜なぜNuxtを選んだのか？
            </b>
        </main>
        <default-footer></default-footer>
    </div>
</template>


<script>

import moment from 'moment-timezone';
import defaultHeader from '~/components/default-header';
import defaultFooter from '~/components/default-footer';
import pankuz from '~/components/pankuz';

export default{
    data: function() {
        return {
            now: moment().tz("Asia/Tokyo").format("ll"),
        }
    },
    components: {
        defaultFooter, defaultHeader, pankuz
    }
}

</script>


<style>
</style>
