<template>
  <ion-page>
    <home-header></home-header>
    <ion-content>
      <participant-panel></participant-panel>
      <events-slider></events-slider>
      <socials-panel></socials-panel>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonPage, IonContent} from '@ionic/vue';
import ParticipantPanel from "@/components/ParticipantPanel.vue";
import EventsSlider from "@/components/EventsSlider.vue";
import SocialsPanel from "@/components/SocialsPanel.vue";
import TheHeader from "@/components/TheHeader.vue";

export default {
  name: 'Home',
  components: {
    TheHeader, SocialsPanel, EventsSlider, ParticipantPanel, IonContent, IonPage
  }
}
</script>
