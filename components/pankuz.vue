<template>
    <div style="padding: 1vw 1vw 1vw 2vw;color:black;background:lavender;box-shadow:5px 5px 0px 0px lightgray;margin: 0 5vw 0 5vw;">
        <a  onmouseover="this.style.color='red'"
            onmouseout="this.style.color='black'"
            style="color:black;font-weight:bold;"
            :href="this.pre">
            <font-awesome-icon class="small-icon" :icon="['fas', 'igloo']" /> BlogのHome
        </a>
        <b style="margin-left:1vw;margin-right:1vw;">&gt;</b>
        <b>{{dir}}</b>
    </div>
</template>



<script>

export default{
    data: function() {
        return {
            pre: null,
            dir: null,
        }
    },
    mounted() {
        this.pre = location.href.split("blog")[0] + "blog/";
        this.dir = location.href.replace(this.pre, "") + "の記事";
    }
}

</script>
