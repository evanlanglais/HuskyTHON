<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button color="secondary"></ion-back-button>
        </ion-buttons>
        <ion-title>Settings</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-card-header>
          <ion-card-title>
            Quick-Access Profile
          </ion-card-title>
          <ion-card-subtitle>
            See fundraising progress at a glance
          </ion-card-subtitle>
        </ion-card-header>
        <ion-card-content class="ion-text-center">
          <div v-if="quickAccessProfile !== null">
            <home-header-participant-populated :participant="quickAccessProfile"></home-header-participant-populated>
          </div>
          <div v-if="quickAccessProfileId === null">
            <ion-button @click="selectQuickAccessProfile()">Search For Profile</ion-button>
          </div>
          <div v-if="quickAccessProfileId != null">
            <ion-button @click="removeQuickAccessProfile()">Remove Quick-Access Profile</ion-button>
          </div>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonPage,
  IonBackButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
  modalController
} from "@ionic/vue";
import {defineComponent} from "vue";
import {RemoveQuickAccessProfileId, GetQuickAccessProfileId, SetQuickAccessProfileId} from "@/scripts/Settings";
import HomeHeaderParticipantPopulated from "@/components/HomeHeaderParticipantPopulated.vue";
import {GetParticipantById} from "@/scripts/Api";
import {Participant} from "@/types/Participant";
import SettingsSelectQuickAccessProfileModal from "@/components/SettingsSelectQuickAccessProfileModal.vue";

export default defineComponent({
  name: "Settings",
  components: {
    HomeHeaderParticipantPopulated,
    IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonPage, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton},
  data() {
    return {
      quickAccessProfileId: null as string | null,
      quickAccessProfile: null as Participant | null | undefined
    }
  },
  async mounted() {
    await this.refreshQuickAccessProfile();
  },
  methods: {
    async selectQuickAccessProfile() {
      const modal = await modalController.create({
        component: SettingsSelectQuickAccessProfileModal, //Modal is name of the component to render inside ionic modal
      });

      modal.onDidDismiss().then(async (data) => {
        if (data.data === null) return;

        const participant: Participant = data.data;

        await SetQuickAccessProfileId(participant.participantID.toString());
        await this.refreshQuickAccessProfile();
      })

      await modal.present();
    },
    removeQuickAccessProfile() {
      RemoveQuickAccessProfileId();
      this.refreshQuickAccessProfile();
    },
    async refreshQuickAccessProfile() {
      this.quickAccessProfileId = await GetQuickAccessProfileId();
      this.quickAccessProfile = this.quickAccessProfileId != null ? await GetParticipantById(this.quickAccessProfileId) : null;
    }
  }
});
</script>

<style scoped>

</style>
