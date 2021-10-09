<template>
  <ion-page>
    <ion-header collapse="condense">
      <ion-toolbar color="primary">
        <ion-title size="large">Events</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-refresher ref="refresher" slot="fixed" @ionRefresh="doRefresh($event)">
        <ion-refresher-content :pulling-icon="chevronDownCircleOutline"
                               pulling-text="Pull to refresh"
                               refreshing-spinner="circles"
                               refreshing-text="Refreshing...">
        </ion-refresher-content>
      </ion-refresher>
      <loading-indicator :is-loading="loading"/>
      <offline-indicator v-if="errored"/>
      <div v-if="!loading && !errored">
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
import axios from "axios";
import {HuskythonEvent} from "@/types/HuskythonEvent";
import OfflineIndicator from "@/components/OfflineIndicator.vue";
import LoadingIndicator from "@/components/LoadingIndicator.vue";

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
      errored: false,
      events: [],
      focusDate: DateTime.now()
    }
  },
  mounted() {
    this.getEvents();
  },
  methods: {
    getEvents() {
      this.loading = true;
      this.errored = false;
      return axios
        .get('http://localhost:3000/api/events', {timeout: 5000})
        .then(response => {
          this.events = response.data.map((rawEvent: any): HuskythonEvent => ({
            id: rawEvent.id,
            summary: rawEvent.summary,
            start: DateTime.fromISO(rawEvent.start),
            end: DateTime.fromISO(rawEvent.end),
            allDay: rawEvent.allDay,
            timezone: rawEvent.timezone,
            location: rawEvent.location,
            link: rawEvent.link
          }));
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
    },
    doRefresh(event: any) {
      this.getEvents().finally(() => event.target.complete());
    }
  }
});
</script>
