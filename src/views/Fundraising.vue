<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary" class="but">
        <ion-title>Fundraising</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar color="primary">
          <ion-title size="large">Fundraising</ion-title>
        </ion-toolbar>
      </ion-header>
      <fundraising-search></fundraising-search>
      <fundraising-leaderboards></fundraising-leaderboards>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonPage, IonContent, IonHeader, IonToolbar, IonTitle} from '@ionic/vue';
import { defineComponent } from "vue";
import FundraisingSearch from "@/components/FundraisingSearch.vue";
import FundraisingLeaderboards from "@/components/FundraisingLeaderboards.vue";

export default defineComponent({
  name: 'Fundraising',
  components: {FundraisingLeaderboards, FundraisingSearch, IonHeader, IonToolbar, IonTitle, IonContent, IonPage},
});
</script>

<style scoped>
.but {
  background-color: var(--ion-color-primary);
}
</style>
