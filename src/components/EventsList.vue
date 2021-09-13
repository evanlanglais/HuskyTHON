<template>
  <ion-list>
    <events-list-focus :focus-date="focusDate" :events="events"></events-list-focus>
  </ion-list>
</template>

<script>
import {IonList} from '@ionic/vue';
import EventsListFocus from "@/components/EventsListFocus";

export default {
  name: "EventsList",
  components: {EventsListFocus, IonList},
  props: ["events", "focusDate"]
}
</script>

<style scoped>

</style>
