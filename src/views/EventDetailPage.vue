<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button color="secondary"></ion-back-button>
        </ion-buttons>
        <ion-title v-if="this.loadStateLoading">Loading...</ion-title>
        <ion-title v-if="this.loadStateLoaded && this.selectedEvent !== undefined">{{ this.selectedEvent.summary }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div v-if="this.loadStateLoaded && this.selectedEvent !== undefined">
        <ion-grid class="ion-no-margin">
          <ion-row>
            <ion-col class="ion-margin-start">
              <div class="ion-align-items-center ion-justify-content-center" style="height: 100%; display: flex">
                <div style="display: flex">
                  <ion-text>
                    <h2 class="ion-text-lg-wrap">{{ this.selectedEvent.summary }}</h2>
                  </ion-text>
                </div>
              </div>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-card>
                <ion-card-header>
                  <ion-card-subtitle>
                    When?
                  </ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                  {{ getTimeInformation(selectedEvent) }}
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-card>
                <ion-card-header>
                  <ion-card-subtitle>
                    Where?
                  </ion-card-subtitle>
                </ion-card-header>
                <ion-card-content style="max-height: 20vh; overflow-y: scroll">
                  <p v-if="selectedEvent.location">{{selectedEvent.location}}</p>
                  <p v-else>Location information not available</p>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonPage, IonBackButton, IonGrid, IonCol, IonRow, IonText, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle} from "@ionic/vue";
import {computed, defineComponent} from "vue";
import {useRoute, useRouter} from "vue-router";
import {ribbonOutline} from "ionicons/icons";
import {useStore} from "vuex";
import LoadState from "@/types/LoadState";
import {HuskythonEvent} from "@/types/HuskythonEvent";
import {DateTime} from "luxon";

export default defineComponent({
  name: "EventDetailPage",
  components: {IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonPage, IonBackButton, IonGrid, IonCol, IonRow, IonText, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle},
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();

    const { id } = route.params;

    return {
      id,
      router,
      ribbonOutline,
      fetchEvents: () => store.dispatch("fetchEvents"),
      loadStateInit: computed(() => store.state.eventState.loadState === LoadState.INIT),
      loadStateLoaded: computed(() => store.state.eventState.loadState === LoadState.LOADED),
      loadStateLoading: computed(() => store.state.eventState.loadState === LoadState.LOADING || store.state.eventState.loadState === LoadState.INIT),
      loadStateError: computed(() => store.state.eventState.loadState === LoadState.ERROR),
      selectedEvent: computed((): HuskythonEvent | undefined => {
        const events = store.state.eventState.allEvents.filter((event: HuskythonEvent) => event.id === id);
        if (events.length === 0) return undefined;

        return events[0];
      })
    };
  },
  mounted() {
    if (this.loadStateInit) {
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
  },
});
</script>

<style scoped>
ion-card {
  margin-bottom: 0;
}
</style>
