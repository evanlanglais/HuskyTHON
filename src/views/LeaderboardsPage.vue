<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary" class="but">
        <ion-title>Leaderboards</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="custom-color" slot="fixed"></div>
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Leaderboards</ion-title>
        </ion-toolbar>
      </ion-header>
      <fundraising-leaderboards></fundraising-leaderboards>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonPage, IonContent, IonHeader, IonToolbar, IonTitle, modalController} from '@ionic/vue';
import { defineComponent } from "vue";
import FundraisingSearch from "@/components/DonorDriveSearch.vue";
import FundraisingLeaderboards from "@/components/FundraisingLeaderboards.vue";

export default defineComponent({
  name: 'LeaderboardsPage',
  components: {FundraisingLeaderboards, IonHeader, IonToolbar, IonTitle, IonContent, IonPage},
  methods: {
    async openSearchModal() {
      const modal = await modalController.create({
        component: FundraisingSearch,
      });

      return modal.present();
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
