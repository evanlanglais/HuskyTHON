<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button color="secondary"></ion-back-button>
        </ion-buttons>
        <ion-title v-if="team === undefined">Loading...</ion-title>
        <ion-title v-if="team !== undefined">{{ team.name }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div v-if="team !== undefined">
        <ion-grid class="ion-no-margin">
          <ion-row>
            <ion-col>
              <div class="ion-align-items-center ion-justify-content-center" style="height: 100%; display: flex">
                <ion-avatar class="avatar">
                  <img :src="team.avatarImageURL" alt="Avatar image">
                </ion-avatar>
              </div>
            </ion-col>
            <ion-col class="ion-margin-start">
              <div class="ion-align-items-center ion-justify-content-center" style="height: 100%; display: flex">
                <div style="display: flex">
                  <ion-text>
                    <h2 class="ion-no-margin">{{ team.name }}</h2>
                    <h3>{{ team.numParticipants }} members</h3>
                    <h5>{{ team.captainDisplayName }} <ion-icon :icon="ribbonOutline" class="ion-no-margin ion-no-padding"></ion-icon></h5>
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
                    Fundraising Progress
                  </ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                  <h2 class="ion-text-wrap">Raised {{ formatAsUSD(team.sumDonations) }}</h2>
                  <ion-progress-bar color="secondary" class="participant-progress" :value="this.team.sumDonations / this.team.fundraisingGoal"></ion-progress-bar>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-card>
                <ion-card-header>
                  <ion-card-subtitle>
                    Team Members
                  </ion-card-subtitle>
                </ion-card-header>
                <ion-card-content style="max-height: 60vh; overflow-y: scroll">
                  <ion-list v-if="participants !== undefined">
                    <ion-item v-for="participant in participants" :key="participant.participantID" class="ion-no-padding" :button="true" :detail="true" @click="openParticipant(participant.participantID)">
                      <ion-avatar slot="start">
                        <img :src="participant.avatarImageURL">
                      </ion-avatar>
                      <ion-label slot="end">
                        <p>{{formatAsUSD(participant.sumDonations)}}</p>
                      </ion-label>
                      <ion-label>
                        <h3>{{participant.displayName}}</h3>
                      </ion-label>
                    </ion-item>
                  </ion-list>
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
import {IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonPage, IonBackButton, IonGrid, IonCol, IonRow, IonText, IonAvatar, IonCard, IonCardContent, IonProgressBar, IonCardHeader, IonCardSubtitle, IonList, IonLabel, IonItem, IonIcon} from "@ionic/vue";
import {defineComponent} from "vue";
import {useRoute, useRouter} from "vue-router";
import {GetTeamById, GetTeamParticipants} from "@/scripts/Api";
import {Team} from "@/types/Team";
import {Participant} from "@/types/Participant";
import {ribbonOutline} from "ionicons/icons";

const formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'})

export default defineComponent({
  name: "TeamDetailPage",
  components: {IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonPage, IonBackButton, IonGrid, IonCol, IonRow, IonText, IonAvatar, IonCard, IonCardContent, IonProgressBar, IonCardHeader, IonCardSubtitle, IonList, IonLabel, IonItem, IonIcon},
  data() {
    return {
      team: undefined as Team | undefined,
      participants: undefined as Array<Participant> | undefined
    }
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const { id } = route.params;
    return { id, router, ribbonOutline };
  },
  mounted() {
    this.loadTeam();
  },
  methods: {
    async loadTeam() {
      if (typeof this.id === "string") {
        this.team = await GetTeamById(this.id);
        if (this.team === undefined) return;

        this.participants = await GetTeamParticipants(this.id);
      }
    },
    formatAsUSD(value: number) {
      return formatter.format(value);
    },
    openParticipant(participantId: number) {
      this.router.push(`/participant/${participantId}`);
    }
  }
});
</script>

<style scoped>
.avatar {
  width: 100%;
  height: auto;
}
ion-card {
  margin-bottom: 0;
}
</style>
