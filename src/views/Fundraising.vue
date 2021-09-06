<template>
  <ion-page>
    <ion-header collapse="condense">
      <ion-toolbar color="primary">
        <ion-title size="large">Fundraising</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonPage, IonContent} from '@ionic/vue';
import TheHeader from "@/components/TheHeader.vue";

export default {
  name: 'Fundraising',
  components: {TheHeader, IonContent, IonPage}
}
</script>
