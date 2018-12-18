<template>
        <div class="header">
            <div class="itemleft item">this is headerleft</div>
            <div class="itemmodle item">this is headermodle</div>
            <div class="itemright item">this is headerightt</div>
       </div>
</template>
<script>
export default {
  name: "HomeHeader"
};
</script>
<style  scoped>
.header {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content:space-between;
  align-items: center;
  height: 0.9rem;
  width: 100%;
  min-width: 10.24rem;
  background-color: red;
}
itemmodle{
    flex: auto;
}
</style>

