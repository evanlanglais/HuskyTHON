<template>
  <ion-item-group>
    <ion-item-divider>
      <ion-label>Events on {{ focusDateString }}</ion-label>
    </ion-item-divider>
    <ion-item v-if="this.filteredEvents.length === 0" lines="none" class="ion-text-center">
      <ion-label class="ion-text-wrap">
        <h1>No events today</h1>
        <p>Check back in the future for events as they are planned</p>
      </ion-label>
    </ion-item>
    <ion-item detail v-for="event in this.filteredEvents" :key="event.id">
      <ion-label class="ion-text-wrap">
        <h2>{{ event.summary }}</h2>
        <h3 v-if="this.now < event.start">Event beginning at {{ event.start.toLocaleString() }}</h3>
        <h3 v-else-if="event.start <= this.now && this.now < event.end">Event ending at {{ event.end.toLocaleString() }}</h3>
        <h3 v-else>Event has ended</h3>
        <p v-if="!!event.location"> {{ event.location }}</p>
      </ion-label>
    </ion-item>
  </ion-item-group>
</template>

<script lang="ts">
import {IonItem, IonItemGroup, IonItemDivider, IonLabel} from "@ionic/vue";
import {DateTime} from "luxon";
import {defineComponent} from "vue";
import {HuskythonEvent} from "@/types/HuskythonEvent";

export default defineComponent({
  name: "EventsListFocus",
  components: {IonItem, IonItemGroup, IonItemDivider, IonLabel},
  props: ["events", "focusDate"],
  computed: {
    now() {
      return DateTime.now();
    },
    focusDateString() {
      return this.focusDate.toLocaleString(DateTime.DATE_FULL);
    },
    filteredEvents() {
      return this.events.filter((event: HuskythonEvent) => (this.focusDate.startOf("day") >= event.start.startOf("day") && this.focusDate.startOf("day") <= event.end.startOf("day")))
    }
  }
});
</script>

<style scoped>

</style>
