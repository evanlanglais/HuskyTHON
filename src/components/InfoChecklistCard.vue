<template>
  <ion-card @click="setOpen(true)">
    <ion-card-header>
      <ion-card-title>HuskyTHON Item Checklist</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      Tap to view the list of all the essential items you should <strong>and shouldn't</strong> bring for the big event!
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
import {IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonModal} from "@ionic/vue";
import { ref, defineComponent } from 'vue';
import InfoChecklistModal from "@/components/InfoChecklistModal.vue";

export default defineComponent({
  name: "InfoChecklistCard",
  components: {InfoChecklistModal, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonModal},
  setup() {
    const isOpenRef = ref(false);
    const setOpen = (state: boolean) => isOpenRef.value = state;
    return { isOpenRef, setOpen }
  }
});
</script>

<style scoped>

</style>
