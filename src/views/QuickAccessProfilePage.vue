<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button color="secondary"></ion-back-button>
        </ion-buttons>
        <ion-title>Set Quick Access Profile</ion-title>
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
import {alertController, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons} from "@ionic/vue";
import {useStore} from "vuex";

export default defineComponent({
  name: "QuickAccessProfilePage",
  components: {DonorDriveSearch, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons},
  setup() {
    const store = useStore();

    return {
      setQuickAccessProfile: (participant: Participant) => store.dispatch("setQuickAccessProfile", participant),
    }
  },
  methods: {
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
                this.setQuickAccessProfile(participant);
                this.$router.back();
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
