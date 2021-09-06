<template>
  <div class="banner-image"></div>
</template>

<script>
export default {
  name: "HomeBanner"
}
</script>

<style scoped>
.banner-image {
  height: 30vh;
  background: linear-gradient(to bottom, rgba(27,20,100,1), rgba(27,20,100,0)), url("../assets/images/home_banner_resized.jpg") center no-repeat;
  background-size: cover;
  /*background: -o-linear-gradient(to bottom, rgba(27,20,100,1), rgba(27,20,100,0));*/
  /*background: -moz-linear-gradient(to bottom, rgba(27,20,100,1), rgba(27,20,100,0));*/
}
/*.banner-image-src {*/
/*  width: 100vh;*/
/*}*/
/*.banner-overlay {*/
/*  background: linear-gradient(to bottom, rgba(27,20,100,1), rgba(27,20,100,0));*/
/*  height:20vh;*/
/*  bottom: 0;*/
/*  left: 0;*/
/*  opacity: 0.5;*/
/*  position: absolute;*/
/*  right:0;*/
/*  top:0;*/
/*  z-index: 1;*/
/*}*/

/*.banner-image {*/
/*  position: relative;*/
/*}*/
</style>
