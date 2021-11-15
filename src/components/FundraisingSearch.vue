<template>
  <ion-searchbar animated showCancelButton="focus" debounce="300" @ionChange="search"></ion-searchbar>
  <loading-indicator v-if="isLoading"></loading-indicator>
  <ion-list v-if="isSearching">
    <ion-label v-if="(!this.participantResults || this.participantResults.length === 0) && (!this.teamResults || this.teamResults.length === 0)" class="ion-text-center">
      <h3>No Results Found</h3>
    </ion-label>
    <ion-item-group v-if="!!this.participantResults && this.participantResults.length > 0">
      <ion-item-divider>
        <ion-label>Participants</ion-label>
      </ion-item-divider>
      <ion-item v-for="participant in this.participantResults" :key="participant.participantID">
        <ion-label>{{participant.displayName}}</ion-label>
      </ion-item>
    </ion-item-group>
    <ion-item-group v-if="!!this.teamResults && this.teamResults.length > 0">
      <ion-item-divider>
        <ion-label>Teams</ion-label>
      </ion-item-divider>
      <ion-item v-for="team in this.teamResults" :key="team.teamID">
        <ion-label>{{team.name}}</ion-label>
      </ion-item>
    </ion-item-group>
  </ion-list>
</template>

<script lang="ts">
import {IonSearchbar, IonLabel, IonItemGroup, IonItemDivider, IonItem, IonList} from "@ionic/vue";
import {SearchForParticipant, SearchForTeam} from "@/scripts/Api";
import {defineComponent} from "vue";
import {Participant} from "@/types/Participant";
import {Team} from "@/types/Team";
import LoadingIndicator from "@/components/LoadingIndicator.vue";

export default defineComponent({
  name: "FundraisingSearch",
  components: {LoadingIndicator, IonSearchbar, IonLabel, IonItemGroup, IonItemDivider, IonItem, IonList},
  data() {
    return {
      participantResults: undefined as Array<Participant> | undefined,
      teamResults: undefined as Array<Team> | undefined,
      isSearching: false,
      isLoading: false
    }
  },
  methods: {
    async search(e: { detail: { value: any } }) {
      const searchTerm = e.detail.value;
      if (!searchTerm) {
        this.isSearching = false;
        return;
      }

      this.isSearching = true;
      this.isLoading = true;
      const searchResults = await Promise.all([SearchForParticipant(searchTerm), SearchForTeam(searchTerm)]);
      this.participantResults = searchResults[0];
      this.teamResults = searchResults[1];
      this.isLoading = false;
    }
  },
  watch: {
    isSearching() {
      this.$emit('isSearching', this.isSearching);
    }
  }
})
</script>

<style scoped>

</style>
