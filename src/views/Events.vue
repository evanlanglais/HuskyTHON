<template>
  <ion-page>
    <ion-header collapse="condense">
      <ion-toolbar color="primary">
        <ion-title size="large">Events</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <events-list></events-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonPage, IonContent, IonHeader, IonTitle, IonToolbar} from '@ionic/vue';
import EventsList from "@/components/EventsList.vue";
import TheHeader from "@/components/TheHeader.vue";

export default {
  name: 'Events',
  components: {TheHeader, EventsList, IonContent, IonPage}
}
</script>
