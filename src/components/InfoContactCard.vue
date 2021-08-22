<template>
  <ion-card>
    <ion-card-header>
      <ion-card-subtitle>HuskyTHON Contact Information</ion-card-subtitle>
    </ion-card-header>
    <ion-item lines="none">
      <ion-label>exec@huskython.org</ion-label>
    </ion-item>
    <ion-item lines="none">
      <ion-label>dancer.relations@huskython.org</ion-label>
    </ion-item>
  </ion-card>
</template>

<script>
import {IonCard, IonCardHeader, IonCardSubtitle, IonItem, IonLabel} from "@ionic/vue";
import {Browser} from '@capacitor/browser';

export default {
  name: "InfoContactCard",
  components: {IonCard, IonCardHeader, IonCardSubtitle, IonItem, IonLabel}
}
</script>

<style scoped>

</style>
