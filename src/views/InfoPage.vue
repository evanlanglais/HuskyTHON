<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary" class="but">
        <ion-title>Info & Links</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="custom-color" slot="fixed"></div>
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Info & Links</ion-title>
          <ion-buttons slot="end">
            <ion-button @click="openSettings()">
              <ion-icon slot="icon-only" :icon="optionsOutline"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <info-checklist-card></info-checklist-card>
      <info-contact-card></info-contact-card>
      <info-developer-card></info-developer-card>
      <info-version-card appVersion="3.1.0"></info-version-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon} from '@ionic/vue';
import InfoChecklistCard from "@/components/InfoChecklistCard.vue";
import InfoContactCard from "@/components/InfoContactCard.vue";
import InfoDeveloperCard from "@/components/InfoDeveloperCard.vue";
import InfoVersionCard from "@/components/InfoVersionCard.vue";
import { defineComponent } from "vue";
import {optionsOutline} from "ionicons/icons";
import {useRouter} from "vue-router";

export default defineComponent({
  name: 'InfoPage',
  components: {InfoVersionCard, InfoDeveloperCard, InfoContactCard, InfoChecklistCard, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonButton, IonIcon},
  setup() {
    const router = useRouter();

    return {
      optionsOutline,
      router
    }
  },
  methods: {
    openSettings() {
        this.router.push("/settings");
    }
  }
});
</script>

<style scoped>
.but {
  background-color: var(--ion-color-primary);
}
.custom-color {
  background-color: #1B1464;
  z-index: -100;
  height: 500px;
  width: 100%;
}
</style>
