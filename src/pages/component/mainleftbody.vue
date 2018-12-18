<template>
    <div class="mainleftbody">
        <div>this is mainleftbody1</div>
         <div>this is mainleftbody2</div>
          <div>this is mainleftbody3</div>
          <div>this is mainleftbody5</div>
         <div>this is mainleftbody6</div>
          <div>this is mainleftbody7</div>
                  
    </div>
</template>
<script>
export default {
    name:"MainLeftbody"
}
</script>
<style scoped>
.mainleftbody{
display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(84, 112, 20);
flex-direction: column;
   margin: 32px 32px 0 32px;
}
</style>


