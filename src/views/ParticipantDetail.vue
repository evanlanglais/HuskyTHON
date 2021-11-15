<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button color="secondary"></ion-back-button>
        </ion-buttons>
        <ion-title v-if="participant === undefined">Loading...</ion-title>
        <ion-title v-if="participant !== undefined">{{ participant.displayName }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div v-if="participant !== undefined">
        {{ participant.displayName }}
        {{ participant.teamID }}
        {{ participant.sumDonations }}
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, modalController, IonPage, IonBackButton} from "@ionic/vue";
import {defineComponent} from "vue";
import {Participant} from "@/types/Participant";
import {useRoute} from "vue-router";
import {GetParticipantById} from "@/scripts/Api";

export default defineComponent({
  name: "ParticipantDetail",
  components: {IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonPage, IonBackButton},
  data() {
    return {
      participant: undefined as Participant | undefined
    }
  },
  setup() {
    const route = useRoute();
    const { id } = route.params;
    return { id };
  },
  mounted() {
    this.loadParticipant();
  },
  methods: {
    async loadParticipant() {
      if (typeof this.id === "string") {
        this.participant = await GetParticipantById(this.id);
      }
    },
    close() {
      modalController.dismiss();
    }
  }
});
</script>

<style scoped>

</style>
