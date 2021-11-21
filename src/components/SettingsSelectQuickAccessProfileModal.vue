<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Set Quick Access Profile</ion-title>
        <ion-button color="secondary" slot="primary" fill="outline" @click="close(null)">Cancel</ion-button>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <donor-drive-search :search-participants="true" :search-teams="false" @participant-selected="onParticipantSelected"></donor-drive-search>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import DonorDriveSearch from "@/components/DonorDriveSearch.vue";
import {Participant} from "@/types/Participant";
import {alertController, modalController, IonPage, IonHeader, IonToolbar, IonTitle, IonButton, IonContent} from "@ionic/vue";

export default defineComponent({
  name: "SettingsSelectQuickAccessProfileModal",
  components: {DonorDriveSearch, IonPage, IonHeader, IonToolbar, IonTitle, IonButton, IonContent},
  methods: {
    close(participant: Participant | null) {
      modalController.dismiss(participant);
    },
    async onParticipantSelected(participant: Participant) {
      const alert = await alertController
        .create({
          header: 'Confirm Selection',
          message: `Are you sure you would like to set your Quick Access profile to <strong>${participant.displayName}</strong>?`,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                // no-op
              },
            },
            {
              text: 'Yes',
              handler: () => {
                this.close(participant);
              },
            },
          ],
        });
      return alert.present();
    }
  }
})
</script>

<style scoped>

</style>
