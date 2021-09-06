<template>
  <Calendar :is-expanded="true" :from-date="this.today" :attributes="attributes"/>
</template>

<script>
import { Calendar } from 'v-calendar';
import { DateTime } from "luxon";

export default {
  name: "EventsCalendar",
  components: { Calendar },
  data() {
    return {
      today: DateTime.now().toJSDate()
    }
  },
  props: ["events"],
  computed: {
    attributes() {
      return this.events.map(event => {
          return {
            highlight: true,
            dates: { start: event.dateStart.toJSDate(), end: event.dateEnd.toJSDate() }
          }
      });
    }
  }
}
</script>

<style scoped>

</style>
