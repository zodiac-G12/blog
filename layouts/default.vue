<template>
    <div class=loading>
        <nuxt />
    </div>
</template>



<script>

import Vue from 'vue';
// import { Divider } from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';  // or 'ant-design-vue/dist/antd.less'

// Vue.use(Divider);
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret, faIgloo, faBath, faHSquare, faClock, faEdit } from '@fortawesome/free-solid-svg-icons';
import { faAngular, faTwitterSquare, faGithubSquare, faLinux, faVuejs, faAws } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import hljs from 'highlight.js';
import marked from 'marked';

library.add(faUserSecret, faHSquare, faAngular, faTwitterSquare, faGithubSquare, faLinux, faIgloo, faVuejs, faAws, faBath, faClock, faEdit);

Vue.component('font-awesome-icon', FontAwesomeIcon);


export default {
    created: function(){
        console.log('default created');
        marked.setOptions({
            langPrefix: '',
            highlight: function(code, lang) {
                return hljs.highlightAuto(code, [lang]).value;
            }
        });
    },
    async mounted(){
        console.log('default mounted');
        hljs.initHighlightingOnLoad();
    }
}

</script>


<style>

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
    font-family: "PT Serif", "Ubuntu Mono", 'Bungee Shade', monospace, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    font-size: var(--font-size);
    word-break : break-all;
    color: black;
    /* background: linear-gradient(-45deg, black, darkslategray, black); */
    /* background: darkgray; */
    background-color: #555;     
    -webkit-background-size: 10px 10px;
    background-image: -webkit-gradient(linear, -5 0, 10 150%, color-stop(.5, rgba(255, 255, 255, .1)), color-stop(.5, transparent), to(transparent));
    -webkit-text-size-adjust: none;
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
    text-decoration: none;
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

.midashi{
    animation: slidein 1s ease-in-out forwards;
}

@keyframes slidein{
    0%{margin-left:-1vw;opacity:0;}
    100%{margin-left:0;opacity:1;}
}

main h2, main h1{
    margin-top: calc(var(--font-size)*2);
    border-bottom: solid 5px;
    text-align: center;
}

pre code span{
    font-family: "Ubuntu Mono", monospace;
}

.loading{
    animation: load 1s ease-in-out forwards;
}

@keyframes load{
    0%{
        background-color: tomato;
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

</style>
