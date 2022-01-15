<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button color="secondary"></ion-back-button>
        </ion-buttons>
        <ion-title>Settings</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-card-header>
          <ion-card-title>
            Quick-Access Profile
          </ion-card-title>
          <ion-card-subtitle>
            See fundraising progress at a glance
          </ion-card-subtitle>
        </ion-card-header>
        <ion-card-content class="ion-text-center">
          <div v-if="quickAccessProfile !== undefined">
            <home-header-participant-populated :participant="quickAccessProfile"></home-header-participant-populated>
            <ion-button @click="removeQuickAccessProfile()">Remove Quick-Access Profile</ion-button>
          </div>
          <div v-if="quickAccessProfile === undefined">
            <ion-button @click="selectQuickAccessProfile()">Search For Profile</ion-button>
          </div>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonPage,
  IonBackButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton
} from "@ionic/vue";
import {computed, defineComponent} from "vue";
import HomeHeaderParticipantPopulated from "@/components/HomeHeaderParticipantPopulated.vue";
import {useRouter} from "vue-router";
import {useStore} from "vuex";
import LoadState from "@/types/LoadState";

export default defineComponent({
  name: "SettingsPage",
  components: {
    HomeHeaderParticipantPopulated,
    IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonPage, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton},
  setup() {
    const router = useRouter();
    const store = useStore();

    return {
      router,
      removeQuickAccessProfile: () => store.dispatch("removeQuickAccessProfile"),
      loadQuickAccessProfile: () => store.dispatch("loadQuickAccessProfile"),
      loadStateInit: computed(() => store.state.settingState.loadState === LoadState.INIT),
      loadStateLoaded: computed(() => store.state.settingState.loadState === LoadState.LOADED),
      loadStateLoading: computed(() => store.state.settingState.loadState === LoadState.LOADING || store.state.eventState.loadState === LoadState.INIT),
      loadStateError: computed(() => store.state.settingState.loadState === LoadState.ERROR),
      quickAccessProfile: computed(() => store.state.settingState.quickAccessProfile),
    };
  },
  async mounted() {
    if (this.loadStateInit) {
      await this.loadQuickAccessProfile();
    }
  },
  methods: {
    async selectQuickAccessProfile() {
      await this.router.push(`/settings/quick-access-profile`);
    }
  }
});
</script>

<style scoped>

</style>
