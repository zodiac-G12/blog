<template>
    <div class="new-wave">
        <span>n</span>
        <span>e</span>
        <span>w</span>
        <span>!</span>
    </div>
</template>



<script>

export default{}

</script>



<style>

.new-wave{
    margin-left: 1vw;
    display: flex;
    font-weight: bold;
    color: crimson;
}

.new-wave span{
    animation: wave-text 3s ease-in-out infinite;
}

.new-wave span:nth-of-type(1){ animation-delay: 0.0s; }
.new-wave span:nth-of-type(2){ animation-delay: 0.1s; }
.new-wave span:nth-of-type(3){ animation-delay: 0.25s; }
.new-wave span:nth-of-type(4){ animation-delay: 0.45s; }

@keyframes wave-text{
  00%{
    transform: translateY(0);
  }
  10%{
    transform: translateY(-20%);
  }
  20%{
    transform: translateY(0);
  }
}



</style>
