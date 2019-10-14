<template>
    <footer class="foot">
        <font-awesome-icon onmouseover="this.style.color='darkorange'" onmouseout="this.style.color='gold'" onclick="location.href='https://twitter.com/zodiac_G12'" class="icon" style="color:gold;margin: 0 1vw 0 1vw;" :icon="['fab', 'twitter-square']" />
        <font-awesome-icon onmouseover="this.style.color='darkorange'" onmouseout="this.style.color='gold'" onclick="location.href='https://github.com/zodiac-G12'" class="icon" style="color:gold;margin: 0 1vw 0 1vw;" :icon="['fab', 'github-square']" />
        <font-awesome-icon onmouseover="this.style.color='darkorange'" onmouseout="this.style.color='gold'" onclick="location.href='https://zodiac-G12.github.io/homepage'" class="icon" style="color:gold;margin: 0 1vw 0 1vw;" :icon="['fas', 'h-square']" />
        <p style="color:snow;font-weight:bold;">&copy; ZODIAC-G12 {{now}}</p>
    </footer>
</template>



<script>

import moment from 'moment-timezone';

export default{
    data: function() {
        return {
            now: moment().tz("Asia/Tokyo").format("Y"),
        }
    }
}

</script>



<style>
.foot{
    width: 100vw;
    height: 15vh;
    background: black;
    text-align: center;
    padding-top: 3vh;
    bottom: 0;
}
</style>
