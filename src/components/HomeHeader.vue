<template>
  <ion-header>
    <ion-toolbar color="primary">
      <ion-grid>
        <ion-row>
          <ion-col size="4">
            <ion-img :src="bannerUrl" alt="HuskyTHON Logo" class="banner-img"/>
          </ion-col>
          <ion-col size="8">
            <home-header-participant></home-header-participant>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import {IonHeader, IonGrid, IonRow, IonCol, IonImg, IonToolbar} from "@ionic/vue";
import HomeHeaderParticipant from "@/components/HomeHeaderParticipant";

export default {
  name: "HomeHeader",
  components: {HomeHeaderParticipant, IonHeader, IonImg, IonGrid, IonRow, IonCol, IonToolbar},
  computed: {
    bannerUrl() {
      return require("@/assets/images/launch_logo.png");
    }
  }
}
</script>

<style scoped>
.banner-img {
  width: 100%;
  object-fit: contain;
}
ion-grid {
  height: 100%;
  --ion-grid-padding: 0.5em
}
ion-row{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
