<template>
    <div style="padding:1vw;width:100vw;color:white;background:darkslategray;padding-left:5vw;">
        <a  onmouseover="this.style.color='maroon'"
            onmouseout="this.style.color='white'"
            style="color:white;font-weight:bold;"
            :href="this.pre">
            <font-awesome-icon class="small-icon" :icon="['fas', 'igloo']" /> Home
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
        this.dir = location.href.replace(this.pre, "")
    }
}

</script>
