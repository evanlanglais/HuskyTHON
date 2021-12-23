<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button color="secondary"></ion-back-button>
        </ion-buttons>
        <ion-title v-if="participant === undefined">Loading...</ion-title>
        <ion-title v-if="participant !== undefined">{{ participant.displayName }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div v-if="participant !== undefined">
        <ion-grid class="ion-no-margin">
          <ion-row>
            <ion-col>
              <div class="ion-align-items-center ion-justify-content-center" style="height: 100%; display: flex">
                <ion-avatar class="avatar">
                  <img :src="participant.avatarImageURL" alt="Avatar image">
                </ion-avatar>
              </div>
            </ion-col>
            <ion-col class="ion-margin-start">
              <div class="ion-align-items-center ion-justify-content-center" style="height: 100%; display: flex">
                <div style="display: flex">
                  <ion-text>
                    <h2 class="ion-no-margin">{{ participant.displayName }}</h2>
                    <h3>{{ participant.teamName }}</h3>
                    <h5 v-if="participant.isTeamCaptain">Team Captain <ion-icon :icon="ribbonOutline" class="ion-no-margin ion-no-padding"></ion-icon></h5>
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
                  <h2 class="ion-text-wrap">Raised {{ formatAsUSD(participant.sumDonations) }}</h2>
                  <ion-progress-bar color="secondary" class="participant-progress" :value="this.participant.sumDonations / this.participant.fundraisingGoal"></ion-progress-bar>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-card>
                <ion-card-header>
                  <ion-card-subtitle>
                    Recent Donations
                  </ion-card-subtitle>
                </ion-card-header>
                <ion-card-content style="max-height: 20vh; overflow-y: scroll">
                  <ion-list v-if="donations !== undefined">
                    <ion-item v-for="donation in donations" :key="donation.donationID" class="ion-no-padding">
                      <ion-avatar slot="start">
                        <img :src="donation.avatarImageURL">
                      </ion-avatar>
                      <ion-label slot="end">
                        <p>{{formatAsUSD(donation.amount)}}</p>
                      </ion-label>
                      <ion-label>
                        <h3>{{donation.displayName}}</h3>
                        <p>{{donation.message}}</p>
                      </ion-label>
                    </ion-item>
                  </ion-list>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-card :button="true" @click="openTeam(team.teamID)">
                <ion-card-header>
                  <ion-card-subtitle>
                    Team Details
                  </ion-card-subtitle>
                </ion-card-header>
                <ion-card-content v-if="team !== undefined">
                  <h2><strong>{{ team.name }}</strong></h2>
                  <h2 class="ion-text-wrap">Raised {{ formatAsUSD(team.sumDonations) }}</h2>
                  <ion-progress-bar color="secondary" :value="this.team.sumDonations / this.team.fundraisingGoal"></ion-progress-bar>
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
import {Participant} from "@/types/Participant";
import {useRoute, useRouter} from "vue-router";
import {GetParticipantById, GetParticipantDonations, GetTeamById} from "@/scripts/Api";
import {Team} from "@/types/Team";
import {Donation} from "@/types/Donation";
import {ribbonOutline} from "ionicons/icons";

const formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'})

export default defineComponent({
  name: "ParticipantDetailPage",
  components: {IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonPage, IonBackButton, IonGrid, IonCol, IonRow, IonText, IonAvatar, IonCard, IonCardContent, IonProgressBar, IonCardHeader, IonCardSubtitle, IonList, IonLabel, IonItem, IonIcon},
  data() {
    return {
      participant: undefined as Participant | undefined,
      team: undefined as Team | undefined,
      donations: undefined as Array<Donation> | undefined
    }
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const { id } = route.params;
    return { id, router, ribbonOutline };
  },
  mounted() {
    this.loadParticipant();
  },
  methods: {
    async loadParticipant() {
      if (typeof this.id === "string") {
        this.participant = await GetParticipantById(this.id);
        if (!this.participant) return;

        this.team = await GetTeamById(this.participant.teamID.toString());

        this.donations = await GetParticipantDonations(this.id);
      }
    },
    formatAsUSD(value: number) {
      return formatter.format(value);
    },
    openTeam(teamId: number) {
      this.router.push(`/team/${teamId}`);
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
