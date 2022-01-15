<template>
  <loading-indicator v-if="this.loadStateLoading"/>
  <offline-indicator v-if="this.loadStateError"/>
  <swiper v-if="this.loadStateLoaded && this.upcomingEvents.length > 0" :modules="modules" :autoplay="false" :pagination="true" :initialSlide="0" :speed="400" effect="flip" class="event-slider" :pager="true">
    <swiper-slide v-for="event in this.upcomingEvents" :key="event.id">
      <ion-card :button="true" @click="openEventDetail(event)">
        <ion-card-header>
          <ion-card-subtitle>
            {{ getTimeInformation(event) }}
          </ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <ion-text>
            <h3>{{event.summary}}</h3>
            <p>{{event.location}}</p>
          </ion-text>
        </ion-card-content>
      </ion-card>
    </swiper-slide>
  </swiper>
  <ion-item v-else lines="none" class="ion-text-center">
    <ion-label class="ion-text-wrap">
      <h1>No events to show!</h1>
      <p>Check back in the future for events as they are planned</p>
    </ion-label>
  </ion-item>
</template>

<script lang="ts">
import { IonLabel, IonItem, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonText } from "@ionic/vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';

import '@ionic/vue/css/ionic-swiper.css';
import {HuskythonEvent} from "@/types/HuskythonEvent";
import {computed, defineComponent} from "vue";
import OfflineIndicator from "@/components/OfflineIndicator.vue";
import LoadingIndicator from "@/components/LoadingIndicator.vue";
import "luxon"
import {DateTime} from "luxon";
import LoadState from "@/types/LoadState";
import {useStore} from "vuex";

export default defineComponent({
  name: "HomeEventsSlider",
  components: {Swiper, SwiperSlide, IonLabel, IonItem, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonText, OfflineIndicator, LoadingIndicator},
  setup() {
    const store = useStore();

    return {
      modules: [Autoplay, Keyboard, Pagination, Scrollbar, Zoom],
      fetchEvents: () => store.dispatch("fetchEvents"),
      loadStateInit: computed(() => store.state.eventState.loadState === LoadState.INIT),
      loadStateLoaded: computed(() => store.state.eventState.loadState === LoadState.LOADED),
      loadStateLoading: computed(() => store.state.eventState.loadState === LoadState.LOADING || store.state.eventState.loadState === LoadState.INIT),
      loadStateError: computed(() => store.state.eventState.loadState === LoadState.ERROR),
      upcomingEvents: computed(() => store.state.eventState.upcomingEvents),
    };
  },
  mounted() {
    if (this.loadStateInit)
    {
      this.fetchEvents();
    }
  },
  methods: {
    getTimeInformation(event: HuskythonEvent) {
      if (event.allDay) {
        if (event.start.hasSame(event.end, 'day')) {
          return event.start.toLocaleString(DateTime.DATE_SHORT);
        } else {
          return `${event.start.toLocaleString(DateTime.DATE_SHORT)} - ${event.end.toLocaleString(DateTime.DATE_SHORT)}`;
        }
      } else {
        if (event.start.hasSame(event.end, 'day')) {
          return `${event.start.toLocaleString(DateTime.TIME_SIMPLE)} - ${event.end.toLocaleString(DateTime.TIME_SIMPLE)} on ${event.start.toLocaleString(DateTime.DATE_SHORT)}`;
        } else {
          return `${event.start.toLocaleString(DateTime.DATETIME_SHORT)} - ${event.end.toLocaleString(DateTime.DATETIME_SHORT)}`;
        }
      }
    },
    openEventDetail(event: HuskythonEvent) {
      console.log('')
    }
  }
})
</script>

<style scoped>
.event-slider {
  height: 25vh;
  --bullet-background: #F2C413FF;
  --bullet-background-active: #1B1464FF;
}

.event-slider ion-card {
  width: 100%;
  height: 80%;
}
</style>
