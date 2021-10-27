<template>
  <ion-card>
    <ion-card-header>
      <ion-card-subtitle>Contact Information</ion-card-subtitle>
    </ion-card-header>
    <ion-card-content>
      <ion-grid>
        <ion-row>
          <ion-col size="8">
            <ion-label>exec@huskython.org</ion-label><br/>
            <ion-label>dancer.relations@huskython.org</ion-label>
          </ion-col>
          <ion-col size="4">
            <ion-icon :icon="mailOutline" class="card-icon ion-no-margin ion-no-padding"></ion-icon>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-card-content>
  </ion-card>
</template>

<script>
import {IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonLabel, IonGrid, IonRow, IonCol, IonIcon} from "@ionic/vue";
import {mailOutline} from "ionicons/icons";

export default {
  name: "InfoContactCard",
  components: {IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonLabel, IonGrid, IonRow, IonCol, IonIcon},
  setup() {
    return {
      mailOutline
    }
  }
}
</script>

<style scoped>
 ion-item {
   --padding-start: 0;
   --padding-end: 0;
 }
 .card-icon {
   width: 100%;
   font-size: 64px;
   color: #1B1464;
 }
</style>
