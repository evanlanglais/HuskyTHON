<template>
  <calendar ref="calendar" :is-expanded="true" :attributes="attributes" @dayclick="dayClick"></calendar>
</template>

<script lang="ts">
import { Calendar } from 'v-calendar';
import { DateTime } from "luxon";
import {defineComponent, PropType} from "vue";
import {HuskythonEvent} from "@/types/HuskythonEvent";

export default defineComponent({
  name: "EventsCalendar",
  components: { Calendar },
  props: {
    events: {
      type: Array as PropType<Array<HuskythonEvent> | undefined>,
      default: () => []
    },
    focusDate: {
      type: DateTime,
      default: DateTime.now()
    }
  },
  computed: {
    attributes() {
      if (!this.events) return;

      return this.events.map(event => {
          return {
            highlight: true,
            dates: { start: event.start.toJSDate(), end: event.end.toJSDate() }
          }
      });
    }
  },
  mounted() {
    (this.$refs.calendar as { focusDate(arg0: Date): void }).focusDate(this.focusDate.toJSDate());
  },
  methods: {
    dayClick(day: { date: Date }) {
      const d = DateTime.fromJSDate(day.date);
      if (d.month === this.focusDate.month && d.year === this.focusDate.year && d.day === this.focusDate.day) return;

      this.$emit('focusDateChange', d);
    }
  }
})
</script>

<style scoped>

</style>
