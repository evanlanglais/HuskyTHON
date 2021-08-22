<template>
  <ion-list>
    <events-list-active></events-list-active>
    <events-list-upcoming></events-list-upcoming>
  </ion-list>
</template>

<script>
import EventsListActive from "@/components/EventsListActive";
import EventsListUpcoming from "@/components/EventsListUpcoming";
import {IonList} from '@ionic/vue';

export default {
  name: "EventsList",
  components: {EventsListUpcoming, EventsListActive, IonList}
}
</script>

<style scoped>

</style>
