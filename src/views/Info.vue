<template>
  <ion-page>
    <ion-header collapse="condense">
      <ion-toolbar color="primary">
        <ion-title size="large">Info & Links</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <info-checklist-card></info-checklist-card>
      <info-contact-card></info-contact-card>
      <info-developer-card></info-developer-card>
      <info-version-card appVersion="3.0.0"></info-version-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonPage, IonContent, IonHeader, IonToolbar, IonTitle} from '@ionic/vue';
import InfoChecklistCard from "@/components/InfoChecklistCard.vue";
import InfoContactCard from "@/components/InfoContactCard.vue";
import InfoDeveloperCard from "@/components/InfoDeveloperCard.vue";
import InfoVersionCard from "@/components/InfoVersionCard.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: 'Info',
  components: {InfoVersionCard, InfoDeveloperCard, InfoContactCard, InfoChecklistCard, IonHeader, IonToolbar, IonTitle, IonContent, IonPage}
});
</script>
