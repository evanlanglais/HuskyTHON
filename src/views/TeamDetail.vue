<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button color="secondary"></ion-back-button>
        </ion-buttons>
        <ion-title v-if="team === undefined">Loading...</ion-title>
        <ion-title v-if="team !== undefined">{{ team.name }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div v-if="team !== undefined">
        {{ team.name }}
        {{ team.capitanDisplayName }}
        {{ team.sumDonations }}
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonPage, IonBackButton} from "@ionic/vue";
import {defineComponent} from "vue";
import {useRoute} from "vue-router";
import {GetTeamById} from "@/scripts/Api";
import {Team} from "@/types/Team";

export default defineComponent({
  name: "TeamDetail",
  components: {IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonPage, IonBackButton},
  data() {
    return {
      team: undefined as Team | undefined
    }
  },
  setup() {
    const route = useRoute();
    const { id } = route.params;
    return { id };
  },
  mounted() {
    this.loadTeam();
  },
  methods: {
    async loadTeam() {
      if (typeof this.id === "string") {
        this.team = await GetTeamById(this.id);
      }
    }
  }
});
</script>

<style scoped>

</style>
