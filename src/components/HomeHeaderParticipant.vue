<template>
  <loading-indicator v-if="this.loadStateLoading"></loading-indicator>
  <div v-if="this.loadStateLoaded">
    <home-header-participant-unset v-if="this.quickAccessProfile === undefined"/>
    <home-header-participant-populated v-else :participant="this.quickAccessProfile"/>
  </div>
  <div class="ion-text-center" v-if="this.loadStateError">
    <ion-label>Unable to load quick access profile</ion-label>
  </div>
</template>

<script lang="ts">
import HomeHeaderParticipantPopulated from "@/components/HomeHeaderParticipantPopulated.vue";
import HomeHeaderParticipantUnset from "@/components/HomeHeaderParticipantUnset.vue";
import {computed, defineComponent} from "vue";
import LoadingIndicator from "@/components/LoadingIndicator.vue";
import {IonLabel} from "@ionic/vue";
import {useStore} from "vuex";
import LoadState from "@/types/LoadState";

export default defineComponent({
  name: "HomeHeaderParticipant",
  components: {LoadingIndicator, HomeHeaderParticipantUnset, HomeHeaderParticipantPopulated, IonLabel},
  setup() {
    const store = useStore();

    return {
      loadQuickAccessProfile: () => store.dispatch("loadQuickAccessProfile"),
      loadStateInit: computed(() => store.state.settingState.loadState === LoadState.INIT),
      loadStateLoaded: computed(() => store.state.settingState.loadState === LoadState.LOADED),
      loadStateLoading: computed(() => store.state.settingState.loadState === LoadState.LOADING || store.state.eventState.loadState === LoadState.INIT),
      loadStateError: computed(() => store.state.settingState.loadState === LoadState.ERROR),
      quickAccessProfile: computed(() => store.state.settingState.quickAccessProfile),
    }
  },
  mounted() {
    if (this.loadStateInit) {
      this.loadQuickAccessProfile();
    }
  }
});
</script>

<style scoped>

</style>
