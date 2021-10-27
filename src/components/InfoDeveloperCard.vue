<template>
  <ion-card :button="true" v-on:click="openWebsite()">
    <ion-card-header>
      <ion-card-subtitle>Designed and Developed By</ion-card-subtitle>
      <ion-card-title>Evan Langlais</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <ion-label>evanlanglais.com</ion-label>
    </ion-card-content>
  </ion-card>
</template>

<script>
import {IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonLabel} from "@ionic/vue";
import {Browser} from "@capacitor/browser";

export default {
  name: "InfoDeveloperCard",
  components: {IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonLabel},
  methods: {
    openWebsite: async function() {
      await Browser.open({url: 'https://evanlanglais.com', windowName: '_system'})
    }
  }
}
</script>

<style scoped>

</style>
