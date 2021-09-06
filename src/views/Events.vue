<template>
  <ion-page>
    <ion-header collapse="condense">
      <ion-toolbar color="primary">
        <ion-title size="large">Events</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="ion-text-center">
        <events-calendar :events="events"></events-calendar>
      </div>
      <events-list></events-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonPage, IonContent, IonHeader, IonTitle, IonToolbar} from '@ionic/vue';
import EventsList from "@/components/EventsList.vue";
import EventsCalendar from "@/components/EventsCalendar.vue";
import { DateTime } from "luxon";
import { defineComponent } from "vue";

export default defineComponent({
  name: 'Events',
  components: {EventsCalendar, EventsList, IonContent, IonPage, IonHeader, IonTitle, IonToolbar},
  data() {
    return {
      events: [
        {
          dateStart: DateTime.fromISO("2021-09-15T20:00:00-05:00"),
          dateEnd: DateTime.fromISO("2021-09-15T21:00:00-05:00")
        },
        {
          dateStart: DateTime.fromISO("2021-09-20T20:00:00-05:00"),
          dateEnd: DateTime.fromISO("2021-09-20T21:00:00-05:00")
        },
        {
          dateStart: DateTime.fromISO("2021-09-24T20:00:00-05:00"),
          dateEnd: DateTime.fromISO("2021-09-26T21:00:00-05:00")
        }
      ]
    }
  }
});
</script>
