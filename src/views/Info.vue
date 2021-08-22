<template>
  <ion-page>
    <the-header></the-header>
    <ion-content>
      <info-checklist-card></info-checklist-card>
      <info-contact-card></info-contact-card>
      <info-developer-card></info-developer-card>
      <info-version-card appVersion="3.0.0"></info-version-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonPage, IonContent} from '@ionic/vue';
import TheHeader from "@/components/TheHeader.vue";
import InfoChecklistCard from "@/components/InfoChecklistCard.vue";
import InfoContactCard from "@/components/InfoContactCard.vue";
import InfoDeveloperCard from "@/components/InfoDeveloperCard.vue";
import InfoVersionCard from "@/components/InfoVersionCard.vue";

export default {
  name: 'Info',
  components: {InfoVersionCard, InfoDeveloperCard, InfoContactCard, InfoChecklistCard, TheHeader, IonContent, IonPage}
}
</script>
