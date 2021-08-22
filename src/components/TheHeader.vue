<template>
  <ion-header>
    <ion-toolbar color="primary">
      <ion-img :src="bannerUrl" alt="HuskyTHON Logo" class="banner-img"/>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import {IonHeader, IonToolbar, IonImg} from "@ionic/vue";

export default {
  name: "TheHeader",
  components: {IonHeader, IonToolbar, IonImg},
  computed: {
    bannerUrl() {
      return require("@/assets/images/banner_logo.png");
    }
  }
}
</script>

<style scoped>
.banner-img {
  height: 10vh;
}
</style>
