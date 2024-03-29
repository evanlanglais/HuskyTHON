<template>
  <ion-searchbar animated showCancelButton="focus" debounce="300" @ionChange="search"></ion-searchbar>
  <loading-indicator v-if="isLoading"></loading-indicator>
  <ion-list>
    <ion-label v-if="(!this.participantResults || this.participantResults.length === 0) && (!this.teamResults || this.teamResults.length === 0)" class="ion-text-center">
      <h3>No Results Found</h3>
    </ion-label>
    <ion-item-group v-if="!!this.participantResults && this.participantResults.length > 0">
      <ion-item-divider>
        <ion-label>Participants</ion-label>
      </ion-item-divider>
      <ion-item v-for="participant in this.participantResults" :key="participant.participantID" @click="selectParticipant(participant)" :detail="true">
        <ion-avatar slot="start">
          <img :src="participant.avatarImageURL">
        </ion-avatar>
        <ion-label class="ion-text-wrap">
          <h2>{{participant.displayName}}</h2>
          <h3>{{participant.teamName}}</h3>
        </ion-label>
      </ion-item>
    </ion-item-group>
    <ion-item-group v-if="!!this.teamResults && this.teamResults.length > 0">
      <ion-item-divider>
        <ion-label>Teams</ion-label>
      </ion-item-divider>
      <ion-item v-for="team in this.teamResults" :key="team.teamID" @click="selectTeam(team)" :detail="true">
        <ion-avatar slot="start">
          <img :src="team.avatarImageURL">
        </ion-avatar>
        <ion-label class="ion-text-wrap">
          <h2>{{team.name}}</h2>
          <h3>{{team.numParticipants}} members</h3>
        </ion-label>
      </ion-item>
    </ion-item-group>
  </ion-list>
</template>

<script lang="ts">
import {IonSearchbar, IonLabel, IonItemGroup, IonItemDivider, IonItem, IonList, modalController, IonAvatar} from "@ionic/vue";
import {SearchForParticipant, SearchForTeam} from "@/scripts/Api";
import {defineComponent} from "vue";
import {Participant} from "@/types/Participant";
import {Team} from "@/types/Team";
import LoadingIndicator from "@/components/LoadingIndicator.vue";

export default defineComponent({
  name: "DonorDriveSearch",
  components: {LoadingIndicator, IonSearchbar, IonLabel, IonItemGroup, IonItemDivider, IonItem, IonList, IonAvatar},
  props: {
    searchParticipants: {
      type: Boolean,
      default: true
    },
    searchTeams: {
      type: Boolean,
      default: true
    }
  },
  emits: ['participantSelected', 'teamSelected'],
  data() {
    return {
      participantResults: undefined as Array<Participant> | undefined,
      teamResults: undefined as Array<Team> | undefined,
      isLoading: false
    }
  },
  methods: {
    async search(e: { detail: { value: any } }) {
      const searchTerm = e.detail.value;
      if (!searchTerm) {
        this.participantResults = [];
        this.teamResults = [];
        return;
      }

      this.isLoading = true;

      const searchPromises = [] as Array<Promise<any>>;
      if (this.searchParticipants) {
        searchPromises.push(SearchForParticipant(searchTerm));
      }
      if (this.searchTeams) {
        searchPromises.push(SearchForTeam(searchTerm));
      }

      const searchResults = await Promise.all(searchPromises);
      this.participantResults = searchResults[0];
      this.teamResults = searchResults[1];
      this.isLoading = false;
    },
    selectParticipant(participant: Participant) {
      this.$emit('participantSelected', participant);
    },
    selectTeam(team: Team) {
      this.$emit('teamSelected', team);
    },
    close() {
      modalController.dismiss();
    }
  }
})
</script>

<style scoped>

</style>
