<template>
    <div class="black-head">
        <h1 class="title">
            <span>Z</span>
            <span>O</span>
            <span>D</span>
            <span>I</span>
            <span>A</span>
            <span>C</span>
            <span style="margin-left:var(--font-size);">B</span>
            <span>L</span>
            <span>O</span>
            <span>G</span>
        </h1>
        <h4 style="line-height:1vh;color:snow;text-align:center;font-weight:bold;">~ 技術的な防備録 ~</h4>
    </div>
</template>



<script>

export default{
    data: function() {
        return {
            
        }
    },

    // TODO デザイン
    // mounted(){
    //     const startimes = Math.floor(Math.random()*5+5);
    //     var i = 0;
    //     while(i<startimes) {
    //         var b = document.createElement("b");
    //         b.setAttribute("class","star");
    //         document.body.getElementsByClassName("black-head")[0].appendChild(b);
    //         document.getElementsByClassName("star")[i].textContent = `✯`;
    //         document.getElementsByClassName("star")[i].style.fontSize = `calc(var(--font-size)*${Math.random()+1})`;
    //         document.getElementsByClassName("star")[i].style.marginLeft = `${Math.random()*100}vw`;
    //         i=(i+1)|0;
    //     }
    // }
}

</script>



<style>

/* 縦長 */
@media screen and (orientation: portrait) {
    .black-head{
        height: 20vh;
    }
    .title{
        line-height: 12vh; 
    }
}
/* 横長 */
@media screen and (orientation: landscape) {
    .black-head{
        height: 30vh;
    }
    .title{
        line-height: 19vh; 
    }
}

.black-head{
    width: 100vw;
    /* background: linear-gradient(-45deg, black, darkslategray, black); */
    background: linear-gradient(to right,#7E0F4B, #1A5865);
    margin: 0;
    color: snow;
}

.title{
    text-align: center;
    font-family: 'Bungee Inline';
    font-weight: normal;
    margin-top: 0;
    color: white;
}

.title span{
    margin-right: -0.5vw;
    animation: bakemono 10s ease-in-out infinite;
}

@keyframes bakemono{
    0%{font-family: 'Bungee Inline';}
    100%{font-family: 'Bungee Shade';}
}

.title span:nth-of-type(1){ animation-delay: 0.0s; }
.title span:nth-of-type(2){ animation-delay: 0.1s; }
.title span:nth-of-type(3){ animation-delay: 0.25s; }
.title span:nth-of-type(4){ animation-delay: 0.45s; }
.title span:nth-of-type(5){ animation-delay: 0.7s; }
.title span:nth-of-type(6){ animation-delay: 1.0s; }
.title span:nth-of-type(7){ animation-delay: 1.35s; }
.title span:nth-of-type(8){ animation-delay: 1.75s; }
.title span:nth-of-type(9){ animation-delay: 2.2s; }
.title span:nth-of-type(10){ animation-delay: 2.7s; }

.star{
    color: gold;
    position: fixed;
    top: 7vh;
}
</style>
