<template>
  <loading-indicator v-if="isLoading" class="ion-margin"></loading-indicator>
  <fundraising-list title="Top Fundraisers" :items="genericParticipants" v-if="!isLoading && !!genericParticipants && genericParticipants.length >= 0"></fundraising-list>
  <fundraising-list title="Top Teams" :items="genericTeams" v-if="!isLoading && !!genericTeams && genericTeams.length >= 0"></fundraising-list>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {GetParticipantLeaderboard, GetTeamLeaderboard} from "@/scripts/Api";
import {FromParticipant, FromTeam, GenericFundraisingItem} from "@/types/GenericFundraisingItem";
import {Participant} from "@/types/Participant";
import FundraisingList from "@/components/FundraisingList.vue";
import {Team} from "@/types/Team";
import LoadingIndicator from "@/components/LoadingIndicator.vue";

export default defineComponent({
  name: "FundraisingLeaderboards",
  components: {LoadingIndicator, FundraisingList},
  data() {
    return {
      isLoading: false,
      leaderboardParticipants: undefined as Array<Participant> | undefined,
      leaderboardTeams: undefined as Array<Team> | undefined
    }
  },
  mounted() {
    this.loadLeaderboards();
  },
  methods: {
    loadLeaderboards: async function() {
      this.isLoading = true;
      this.leaderboardParticipants = await GetParticipantLeaderboard();
      this.leaderboardTeams = await GetTeamLeaderboard();
      this.isLoading = false;
    }
  },
  computed: {
    genericParticipants(): Array<GenericFundraisingItem> {
      if (this.leaderboardParticipants == undefined) return [];

      return this.leaderboardParticipants.map(participant => FromParticipant(participant));
    },
    genericTeams(): Array<GenericFundraisingItem> {
      if (this.leaderboardTeams == undefined) return [];

      return this.leaderboardTeams.map(team => FromTeam(team));
    }
  }
})
</script>

<style scoped>

</style>
