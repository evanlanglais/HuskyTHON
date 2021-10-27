<template>
  <ion-card @click="setOpen(true)">
    <ion-card-header>
      <ion-card-title>Event Item Checklist</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      <ion-grid>
        <ion-row>
          <ion-col size="4">
            <ion-icon :icon="bagCheckOutline" class="card-icon ion-no-margin ion-no-padding"></ion-icon>
          </ion-col>
          <ion-col size="8">
            <ion-label>Tap to view the list of all the essential items you should <strong>and shouldn't</strong> bring for the big event!</ion-label>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-card-content>

    <ion-modal
        :is-open="isOpenRef"
        css-class="my-custom-class"
        :swipe-to-close="true"
        :presenting-element="$parent.$refs.ionRouterOutlet"
        @didDismiss="setOpen(false)"
    >
      <info-checklist-modal></info-checklist-modal>
    </ion-modal>
  </ion-card>
</template>

<script lang="ts">
import {IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonModal, IonIcon, IonGrid, IonCol, IonRow, IonLabel} from "@ionic/vue";
import { ref, defineComponent } from 'vue';
import InfoChecklistModal from "@/components/InfoChecklistModal.vue";
import {bagCheckOutline} from "ionicons/icons";

export default defineComponent({
  name: "InfoChecklistCard",
  components: {InfoChecklistModal, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonModal, IonIcon, IonGrid, IonCol, IonRow, IonLabel},
  setup() {
    const isOpenRef = ref(false);
    const setOpen = (state: boolean) => isOpenRef.value = state;
    return {
      isOpenRef,
      setOpen,
      bagCheckOutline
    }
  }
});
</script>

<style scoped>
.card-icon {
  width: 100%;
  font-size: 64px;
  color: #1B1464;
}
</style>
