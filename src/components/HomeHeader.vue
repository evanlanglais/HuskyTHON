<template>
  <ion-header>
    <ion-toolbar color="primary">
      <ion-img :src="bannerUrl" alt="HuskyTHON Logo" class="banner-img" slot="start"/>
      <home-header-participant slot="end" avatar-url="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" first-name="Evan" progress="0.72" amount="100.00"></home-header-participant>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import {IonHeader, IonToolbar, IonImg} from "@ionic/vue";
import HomeHeaderParticipant from "@/components/HomeHeaderParticipant";

export default {
  name: "HomeHeader",
  components: {HomeHeaderParticipant, IonHeader, IonToolbar, IonImg},
  computed: {
    bannerUrl() {
      return require("@/assets/images/launch_logo.png");
    }
  }
}
</script>

<style scoped>
.banner-img {
  height: 10vh;
  margin-left: 0.5em;
}
</style>
