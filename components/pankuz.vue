<template>
    <div style="padding:1vw;width:100vw;color:black;background:seagreen;">
        <a onmouseover="this.style.color='maroon'" onmouseout="this.style.color='black'" style="color:black" :href="this.pre"><font-awesome-icon class="small-icon" :icon="['fas', 'igloo']" /> Home</a>{{dir}}
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
        this.dir = " > " + location.href.replace(this.pre, "")
    }
}

</script>
