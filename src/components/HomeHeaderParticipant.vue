<template>
  <loading-indicator v-if="isLoading"></loading-indicator>
  <div v-if="!isLoading">
    <home-header-participant-unset v-if="!isProfileSet"/>
    <home-header-participant-populated v-if="isProfileSet && !!quickAccessProfile" :participant="quickAccessProfile"/>
    <div class="ion-text-center" v-if="isProfileSet && !quickAccessProfile">
      <ion-label>Unable to load quick access profile</ion-label>
    </div>
  </div>
</template>

<script lang="ts">
import HomeHeaderParticipantPopulated from "@/components/HomeHeaderParticipantPopulated.vue";
import HomeHeaderParticipantUnset from "@/components/HomeHeaderParticipantUnset.vue";
import {Participant} from "@/types/Participant";
import {defineComponent} from "vue";
import {GetParticipantById} from "@/scripts/Api";
import LoadingIndicator from "@/components/LoadingIndicator.vue";
import {GetQuickAccessProfileId} from "@/scripts/Settings";
import {IonLabel} from "@ionic/vue";

export default defineComponent({
  name: "HomeHeaderParticipant",
  components: {LoadingIndicator, HomeHeaderParticipantUnset, HomeHeaderParticipantPopulated, IonLabel},
  activated() {
    this.loadQuickAccessProfile();
  },
  data() {
    return {
      isLoading: false,
      isProfileSet: false,
      quickAccessProfile: undefined as Participant | undefined
    }
  },
  methods: {
    async loadQuickAccessProfile() {
      this.isLoading = true;

      const id = await GetQuickAccessProfileId();

      if (id) {
        this.isProfileSet = true;
        this.quickAccessProfile = await GetParticipantById(id);
      }

      this.isLoading = false;
    }
  }
});
</script>

<style scoped>

</style>
