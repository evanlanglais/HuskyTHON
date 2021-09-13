<template>
  <Calendar ref="calendar" :is-expanded="true" :attributes="attributes" @dayclick="dayClick"/>
</template>

<script>
import { Calendar } from 'v-calendar';
import { DateTime } from "luxon";

export default {
  name: "EventsCalendar",
  components: { Calendar },
  props: ["events", "focusDate"],
  computed: {
    attributes() {
      return this.events.map(event => {
          return {
            highlight: true,
            dates: { start: event.start.toJSDate(), end: event.end.toJSDate() }
          }
      });
    }
  },
  mounted() {
    this.$refs.calendar.focusDate(this.focusDate.toJSDate());
  },
  methods: {
    dayClick(day) {
      const d = DateTime.fromJSDate(day.date);
      if (d.month === this.focusDate.month && d.year === this.focusDate.year && d.day === this.focusDate.day) return;

      this.$emit('focusDateChange', d);
    }
  }
}
</script>

<style scoped>

</style>
