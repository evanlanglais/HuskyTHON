<template>
  <ion-page>
    <ion-header collapse="condense">
      <ion-toolbar color="primary">
        <ion-title size="large">Fundraising</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <fundraising-search></fundraising-search>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonPage, IonContent, IonHeader, IonToolbar, IonTitle} from '@ionic/vue';
import { defineComponent } from "vue";
import FundraisingSearch from "@/components/FundraisingSearch.vue";

export default defineComponent({
  name: 'Fundraising',
  components: {FundraisingSearch, IonHeader, IonToolbar, IonTitle, IonContent, IonPage}
});
</script>
