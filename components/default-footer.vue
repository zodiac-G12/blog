<template>
    <footer class="foot">
        <font-awesome-icon onmouseover="this.style.color='darkorange'" onmouseout="this.style.color='gold'" onclick="location.href='https://twitter.com/zodiac_G12'" class="icon" style="color:gold;" :icon="['fab', 'twitter-square']" />
        <font-awesome-icon onmouseover="this.style.color='darkorange'" onmouseout="this.style.color='gold'" onclick="location.href='https://github.com/zodiac-G12'" class="icon" style="color:gold;" :icon="['fab', 'github-square']" />
        <p style="color:snow;">&copy; ZODIAC-G12 {{now}}</p>
    </footer>
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

