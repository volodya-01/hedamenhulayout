<template>
    <div class="levelbar">
        <div class="leverbarleft">this is leverbarleft</div>
        <div class="leverbarright">this is leverbarright</div>
    </div>
</template>
<script>
export default {
    name:"HomeLevelbar"
}
</script>
<style scoped>
.levelbar{
     display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content:space-between;
    align-items: center;
    height: 0.6rem;
    width: 87.5%;
    min-width: 10.24rem;
    margin: 0 auto;
    margin-top: 0.2rem;
    background-color:orange;
}
</style>

