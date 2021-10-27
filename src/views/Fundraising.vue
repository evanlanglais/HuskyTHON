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
      <fundraising-list title="Top Fundraisers" :items="leaderboardParticipants"/>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonPage, IonContent, IonHeader, IonToolbar, IonTitle} from '@ionic/vue';
import { defineComponent } from "vue";
import FundraisingSearch from "@/components/FundraisingSearch.vue";
import FundraisingList from "@/components/FundraisingList.vue";
import {GetParticipantLeaderboard} from "@/scripts/Api";
import {Participant} from "@/types/Participant";

export default defineComponent({
  name: 'Fundraising',
  components: {FundraisingList, FundraisingSearch, IonHeader, IonToolbar, IonTitle, IonContent, IonPage},
  data() {
    return {
      leaderboardParticipants: undefined as Array<Participant> | undefined
    }
  },
  mounted() {
    this.loadLeaderboards();
  },
  methods: {
    loadLeaderboards: async function() {
      this.leaderboardParticipants = await GetParticipantLeaderboard();
    }
  }
});
</script>

<style scoped>
.but {
  background-color: var(--ion-color-primary);
}
</style>
