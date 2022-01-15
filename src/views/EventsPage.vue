<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary" class="but">
        <ion-title>Events</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Events</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-refresher ref="refresher" slot="fixed" @ionRefresh="this.fetchEvents(); $event.target.complete()">
        <ion-refresher-content :pulling-icon="chevronDownCircleOutline"
                               pulling-text="Pull to refresh"
                               refreshing-spinner="circles"
                               refreshing-text="Refreshing..."
        >
        </ion-refresher-content>
      </ion-refresher>
      <loading-indicator v-if="this.loadStateLoading"/>
      <offline-indicator v-if="this.loadStateError"/>
      <div v-if="this.loadStateLoaded">
        <div class="ion-text-center">
          <events-calendar :events="this.allEvents" :focus-date="focusDate" @focus-date-change="focusDate = $event"></events-calendar>
        </div>
        <events-list :events="this.allEvents" :focus-date="focusDate"></events-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonRefresher, IonRefresherContent} from '@ionic/vue';
import {chevronDownCircleOutline} from 'ionicons/icons';
import EventsList from "@/components/EventsList.vue";
import EventsCalendar from "@/components/EventsCalendar.vue";
import { DateTime } from "luxon";
import {computed, defineComponent} from "vue";

import OfflineIndicator from "@/components/OfflineIndicator.vue";
import LoadingIndicator from "@/components/LoadingIndicator.vue";

import LoadState from "@/types/LoadState";
import {useStore} from "vuex";
export default defineComponent({
  name: 'EventsPage',
  components: {
    LoadingIndicator,
    OfflineIndicator,
    EventsCalendar, EventsList, IonContent, IonPage, IonHeader, IonTitle, IonToolbar, IonRefresher, IonRefresherContent},
  setup() {
    const store = useStore();

    return {
      chevronDownCircleOutline,
      fetchEvents: () => store.dispatch("fetchEvents"),
      loadStateInit: computed(() => store.state.eventState.loadState === LoadState.INIT),
      loadStateLoaded: computed(() => store.state.eventState.loadState === LoadState.LOADED),
      loadStateLoading: computed(() => store.state.eventState.loadState === LoadState.LOADING || store.state.eventState.loadState === LoadState.INIT),
      loadStateError: computed(() => store.state.eventState.loadState === LoadState.ERROR),
      allEvents: computed(() => store.state.eventState.allEvents),
    }
  },
  data() {
    return {
      focusDate: DateTime.now()
    }
  },
  mounted() {
    if (this.loadStateInit)
    {
      this.fetchEvents();
    }
  }
});
</script>

<style scoped>
.but {
  background-color: var(--ion-color-primary);
}
</style>
