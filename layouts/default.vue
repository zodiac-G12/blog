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
import { faUserSecret, faIgloo, faBath } from '@fortawesome/free-solid-svg-icons';
import { faAngular, faTwitterSquare, faGithubSquare, faLinux, faVuejs, faAws } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faUserSecret);
library.add(faAngular);
library.add(faTwitterSquare);
library.add(faGithubSquare);
library.add(faLinux);
library.add(faIgloo);
library.add(faVuejs);
library.add(faAws);
library.add(faBath);

Vue.component('font-awesome-icon', FontAwesomeIcon);

export default {}

</script>



<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.8/styles/gruvbox-dark.min.css');

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
    overflow-x: hidden;
    font-family: "PT Serif","Ubuntu Mono", 'Bungee Shade', monospace, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    font-size: var(--font-size);
    word-break : break-all;
    color: black;
}

h1,h2,h3,h4{
    /* margin: 0; */
    color: black;
}

a{
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.title{
    text-align: center;
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

.small-icon{
    font-size: calc(var(--font-size)*1);
    width: calc(var(--font-size)*1);
    height: calc(var(--font-size)*1);
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
    bottom: 0;
}

</style>
