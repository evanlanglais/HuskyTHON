<template>
  <ion-page>
    <the-header></the-header>
    <ion-content>
      <events-list></events-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonPage, IonContent} from '@ionic/vue';
import EventsList from "@/components/EventsList.vue";
import TheHeader from "@/components/TheHeader.vue";

export default {
  name: 'Events',
  components: {TheHeader, EventsList, IonContent, IonPage}
}
</script>
