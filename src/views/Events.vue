<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary" class="but">
        <ion-title>Events</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-header collapse="condense">
        <ion-toolbar color="primary">
          <ion-title size="large">Events</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-refresher ref="refresher" slot="fixed" @ionRefresh="doRefresh($event)">
        <ion-refresher-content :pulling-icon="chevronDownCircleOutline"
                               pulling-text="Pull to refresh"
                               refreshing-spinner="circles"
                               refreshing-text="Refreshing...">
        </ion-refresher-content>
      </ion-refresher>
      <loading-indicator v-if="loading"/>
      <offline-indicator v-if="!events"/>
      <div v-if="!loading && !!events">
        <div class="ion-text-center">
          <events-calendar :events="events" :focus-date="focusDate" @focus-date-change="focusDate = $event"></events-calendar>
        </div>
        <events-list :events="events" :focus-date="focusDate"></events-list>
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
import { defineComponent } from "vue";
import {HuskythonEvent} from "@/types/HuskythonEvent";
import OfflineIndicator from "@/components/OfflineIndicator.vue";
import LoadingIndicator from "@/components/LoadingIndicator.vue";
import {GetHuskythonEvents} from "@/scripts/Api";

export default defineComponent({
  name: 'Events',
  components: {
    LoadingIndicator,
    OfflineIndicator,
    EventsCalendar, EventsList, IonContent, IonPage, IonHeader, IonTitle, IonToolbar, IonRefresher, IonRefresherContent},
  setup() {
    return {
      chevronDownCircleOutline
    }
  },
  data() {
    return {
      loading: false,
      events: undefined as (Array<HuskythonEvent> | undefined),
      focusDate: DateTime.now()
    }
  },
  mounted() {
    this.refreshEvents();
  },
  methods: {
    async refreshEvents() {
      this.loading = true;
      this.events = await GetHuskythonEvents();
      this.loading = false;
    },
    doRefresh(event: any) {
      this.refreshEvents().finally(() => event.target.complete());
    }
  }
});
</script>

<style scoped>
.but {
  background-color: var(--ion-color-primary);
}
</style>
