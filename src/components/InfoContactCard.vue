<template>
  <ion-card color="secondary">
    <ion-card-header>
      <ion-card-subtitle>Contact Information</ion-card-subtitle>
    </ion-card-header>
    <ion-card-content>
      <ion-item lines="none" color="secondary" class="ion-text-center">
        <ion-label>exec@huskython.org</ion-label>
      </ion-item>
      <ion-item lines="none" color="secondary" class="ion-text-center">
        <ion-label>dancer.relations@huskython.org</ion-label>
      </ion-item>
    </ion-card-content>
  </ion-card>
</template>

<script>
import {IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonItem, IonLabel} from "@ionic/vue";

export default {
  name: "InfoContactCard",
  components: {IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonItem, IonLabel}
}
</script>

<style scoped>
 ion-item {
   --padding-start: 0;
   --padding-end: 0;
 }
</style>
