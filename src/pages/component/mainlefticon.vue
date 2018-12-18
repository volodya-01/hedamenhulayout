<template>
    <div class="mainlefticon">
        <div class="rowfont">
            <div>this is mainleftfont1</div>
            <div>this is mainleftfont2</div>
            <div>this is mainleftfont3</div>
            <div>this is mainleftfont4</div>
            <div>this is mainleftfont5</div>
            <div>this is mainleftfont6</div>
            <div>this is mainleftfont7</div>
        </div>
        <div class="rowicon">
            <div>this is mainlefticon1</div>
            <div>this is mainlefticon2</div>
            <div>this is mainlefticon3</div>
            <div>this is mainlefticon4</div>
            <div>this is mainlefticon5</div>
            <div>this is mainlefticon6</div>
            <div>this is mainlefticon7</div>
        </div>
    </div>
</template>
<script>
export default {
  name: "MainLefticon"
};
</script>
<style scoped>
.mainlefticon {
  height: 1.8rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  background: salmon;
flex-direction: column;
  margin: 0px 32px 0 32px;
}
.rowfont{
    display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
  align-items: center; 
  background-color: rgb(7, 77, 72);
  flex-direction: row;
  
}
.rowicon{
    display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
  align-items: center; 
  background-color: blue;
  flex-direction: row;
}
</style>


