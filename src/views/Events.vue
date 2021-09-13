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
      <ion-loading
        :is-open="this.loading"
        message="Loading Events..."
      ></ion-loading>
      <div v-if="errored">
        <ion-icon :icon="cloudOfflineOutline"></ion-icon>
        <ion-label class="ion-text-center">
          <h1>Error while loading events</h1>
          <p>Please try again in a little bit</p>
        </ion-label>
      </div>
      <div v-else>
        <div class="ion-text-center">
          <events-calendar :events="events" :focus-date="focusDate" @focus-date-change="focusDate = $event"></events-calendar>
        </div>
        <events-list :events="events" :focus-date="focusDate"></events-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonLoading, IonIcon, IonLabel, IonRefresher, IonRefresherContent} from '@ionic/vue';
import {cloudOfflineOutline, chevronDownCircleOutline} from 'ionicons/icons';
import EventsList from "@/components/EventsList.vue";
import EventsCalendar from "@/components/EventsCalendar.vue";
import { DateTime } from "luxon";
import { defineComponent } from "vue";
import axios from "axios";
import {HuskythonEvent} from "@/types/HuskythonEvent";

export default defineComponent({
  name: 'Events',
  components: {EventsCalendar, EventsList, IonContent, IonPage, IonHeader, IonTitle, IonToolbar, IonLoading, IonIcon, IonLabel, IonRefresher, IonRefresherContent},
  setup() {
    return {
      cloudOfflineOutline,
      chevronDownCircleOutline
    }
  },
  data() {
    return {
      loading: true,
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
      return axios
        .get('http://localhost:3000/api/events')
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
          console.error(error)
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
