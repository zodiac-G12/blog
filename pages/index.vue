<template>
    <div>
        <div class="black-head">
            <h1 class="title" style="line-height:15vh;">ZODIAC BLOG</h1>
            <h4 style="line-height:1vh;color:snow;">~ 技術的な防備録 ~</h4>
        </div>
        <main style="margin:2vw;color:black;height:55vh">
        <h3 style="margin-top:2vh;">このブログはNuxt.jsを使っています。 - {{now}}</h3>
            <b>
                <font-awesome-icon class="icon" style="color:midnightblue;" :icon="['fab', 'linux']" /> 
                    ＜なぜNuxtを選んだのか？
            </b>
            <a-divider style="background:black;" type="horizontal"/>
                <p><font-awesome-icon class="icon" style="color:#fd7e14;" :icon="['fab', 'angular']" /> 
                    ＜なんとなくですね。SEO的にどうなのかしらと。</p>
        </main>
        <footer class="foot">
            <font-awesome-icon class="icon" style="color:gold;" :icon="['fab', 'twitter-square']" /> 
            <font-awesome-icon class="icon" style="color:gold;" :icon="['fab', 'github-square']" /> 
            <p style="color:snow;">&copy; ZODIAC-G12 {{now}}</p>
        </footer>
    </div>
</template>


<script>

import moment from 'moment-timezone';

export default{
    data: function() {
        return {
            now: moment().tz("Asia/Tokyo").format("ll"),
        }
    }
}

</script>


<style>
</style>
