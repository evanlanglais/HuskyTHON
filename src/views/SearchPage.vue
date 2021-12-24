<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary" class="but">
        <ion-title>Search</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="custom-color" slot="fixed"></div>
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Search</ion-title>
        </ion-toolbar>
      </ion-header>
      <donor-drive-search :search-participants="true" :search-teams="true" @participant-selected="onParticipantSelected" @team-selected="onTeamSelected"></donor-drive-search>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import DonorDriveSearch from "@/components/DonorDriveSearch.vue";
import {Participant} from "@/types/Participant";
import {Team} from "@/types/Team";
import {useRouter} from "vue-router";
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/vue";

export default defineComponent({
  name: "SearchPage",
  components: {DonorDriveSearch, IonPage, IonHeader, IonToolbar, IonTitle, IonContent},
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    onParticipantSelected(participant: Participant) {
      this.router.push(`/participant/${participant.participantID}`);
    },
    onTeamSelected(team: Team) {
      this.router.push(`/team/${team.teamID}`);
    }
  }
});
</script>

<style scoped>
.but {
  background-color: var(--ion-color-primary);
}
</style>
