<template>
  <ion-list>
    <events-list-focus :focus-date="focusDate" :events="events"></events-list-focus>
  </ion-list>
</template>

<script lang="ts">
import {IonList} from '@ionic/vue';
import EventsListFocus from "@/components/EventsListFocus.vue";
import {defineComponent} from "vue";

export default defineComponent({
  name: "EventsList",
  components: {EventsListFocus, IonList},
  props: ["events", "focusDate"]
})
</script>

<style scoped>

</style>
