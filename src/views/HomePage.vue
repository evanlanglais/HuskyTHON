<template>
  <ion-page>
    <home-header></home-header>
    <ion-content>
      <div class="wrapper">
        <home-banner></home-banner>
        <loading-indicator v-if="this.loadStateLoading"/>
        <offline-indicator v-if="this.loadStateError"/>
        <div v-if="this.loadStateLoaded">
          <home-countdown :date="this.mainEventInformation.dateAsString" id="countdown"></home-countdown>
        </div>
      </div>
      <home-events-slider></home-events-slider>
      <button-card-grid></button-card-grid>
      <socials-panel></socials-panel>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonPage, IonContent} from '@ionic/vue';
import HomeEventsSlider from "@/components/HomeEventsSlider.vue";
import SocialsPanel from "@/components/SocialsPanel.vue";
import HomeHeader from "@/components/HomeHeader.vue";
import {computed, defineComponent} from "vue";
import HomeBanner from "@/components/HomeBanner.vue";
import HomeCountdown from "@/components/HomeCountdown.vue";
import ButtonCardGrid from "@/components/HomeInformationCards.vue";
import {useStore} from "vuex";
import {chevronDownCircleOutline} from "ionicons/icons";
import LoadState from "@/types/LoadState";
import LoadingIndicator from "@/components/LoadingIndicator.vue";
import OfflineIndicator from "@/components/OfflineIndicator.vue";

export default defineComponent({
  name: 'HomePage',
  components: {
    ButtonCardGrid,
    HomeCountdown,
    HomeBanner,
    LoadingIndicator,
    OfflineIndicator,
    HomeHeader, SocialsPanel, HomeEventsSlider, IonContent, IonPage
  },
  setup() {
    const store = useStore();

    return {
      chevronDownCircleOutline,
      fetchMainEvent: () => store.dispatch("fetchMainEvent"),
      loadStateInit: computed(() => store.state.mainEventState.loadState === LoadState.INIT),
      loadStateLoaded: computed(() => store.state.mainEventState.loadState === LoadState.LOADED),
      loadStateLoading: computed(() => store.state.mainEventState.loadState === LoadState.LOADING || store.state.mainEventState.loadState === LoadState.INIT),
      loadStateError: computed(() => store.state.mainEventState.loadState === LoadState.ERROR),
      mainEventInformation: computed(() => store.state.mainEventState.eventInformation),
    }
  },
  mounted() {
    if (this.loadStateInit)
    {
      this.fetchMainEvent();
    }
  }
});
</script>

<style scoped>
.wrapper {
  position: relative;
  height: 38vh;
}

#countdown {
  position: absolute;
  top: 21vh;
  right: 0;
  left: 0;
  z-index: 10;
}
</style>
