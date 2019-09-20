<template>
    <div>
        <nuxt />
    </div>
</template>



<script>

import Vue from 'vue';
import { Divider } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';  // or 'ant-design-vue/dist/antd.less'
Vue.use(Divider);
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { faAngular, faTwitterSquare, faGithubSquare, faLinux } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faUserSecret);
library.add(faAngular);
library.add(faTwitterSquare);
library.add(faGithubSquare);
library.add(faLinux);

Vue.component('font-awesome-icon', FontAwesomeIcon);

export default {}

</script>



<style>
@import url('https://fonts.googleapis.com/css?family=PT+Serif|Open+Sans|Bevan|Spectral+SC|Ubuntu+Mono|Black+Ops+One|Bungee+Inline|Bungee+Shade&display=swap');

/* 縦長 */
@media screen and (orientation: portrait) {
    :root{
        --font-size: 3.5vw;
        --landscape: none;
        --portrait: block;
    }
}
/* 横長 */
@media screen and (orientation: landscape) {
    :root{
        --font-size: 1.5vw;
        --landscape: block;
        --portrait: none;
    }
}


html, body{
    margin: 0;
    padding: 0;
    font-family: "PT Serif","Ubuntu Mono", monospace, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    font-size: var(--font-size);
}

h1,h2,h3,h4{
    margin: 0;
    text-align: center;
    color: black;
}

.title{
    font-family: 'Bungee Shade';
    color: white;
}

.black-head{
    width: 100vw;
    height: 20vh;
    background: black;
    margin: 0;
    color: snow;
}

.icon{
    font-size: calc(var(--font-size)*1.5);
    width: calc(var(--font-size)*1.5);
    height: calc(var(--font-size)*1.5);
    transform: translateY(10%);
}

.foot{
    width: 100vw;
    height: 15vh;
    background: black;
    text-align: center;
    padding-top: 3vh;
}

</style>
