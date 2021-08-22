<template>
  <ion-card class="twitter-card">
    <ion-item lines="none">
      <ion-icon :icon="logoTwitter" slot="start"></ion-icon>
      <ion-label class="ion-text-wrap">Latest Tweet</ion-label>
      <ion-label slot="end" class="ion-text-wrap"></ion-label>
    </ion-item>

    <ion-card-content>
      Twitter Text
    </ion-card-content>

    <ion-item lines="none">
      <ion-icon :icon="heart" size="medium" slot="start"></ion-icon>
      <ion-label>15</ion-label>
      <ion-icon :icon="repeat" size="medium" slot="end"></ion-icon>
      <ion-label slot="end">15</ion-label>
    </ion-item>
  </ion-card>
</template>

<script>
import {IonIcon, IonItem, IonLabel, IonCard, IonCardContent} from "@ionic/vue";
import {logoTwitter, heart, repeat} from 'ionicons/icons';

export default {
  name: "SocialsPanelCardTwitter",
  components: {IonIcon, IonItem, IonLabel, IonCard, IonCardContent},
  setup() {
    return {
      logoTwitter,
      heart,
      repeat
    }
  }
}
</script>

<style scoped>
.twitter-card {
  --background: #1DA1F2;
  --color: #ffffff;
}
.twitter-card ion-item {
  --background: #1DA1F2;
  --color: #ffffff;
  --border-color: #ffffff;
}
</style>
