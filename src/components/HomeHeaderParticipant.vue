<template>
  <ion-spinner v-if="isLoading"/>
  <home-header-participant-populated v-if="isParticipantSet" :participant="setParticipant"/>
  <home-header-participant-unset v-if="!isParticipantSet && !isLoading"/>
</template>

<script lang="ts">
import HomeHeaderParticipantPopulated from "@/components/HomeHeaderParticipantPopulated.vue";
import HomeHeaderParticipantUnset from "@/components/HomeHeaderParticipantUnset.vue";
import {Participant} from "@/types/Participant";
import {defineComponent} from "vue";
import {Storage} from "@capacitor/storage";
import {GetParticipantById} from "@/scripts/Api";

export default defineComponent({
  name: "HomeHeaderParticipant",
  components: {HomeHeaderParticipantUnset, HomeHeaderParticipantPopulated},
  mounted() {
    this.loadSetParticipant();
  },
  data() {
    return {
      isLoading: false,
      isParticipantSet: false,
      setParticipant: undefined as Participant | undefined
    }
  },
  methods: {
    async loadSetParticipant() {
      this.isLoading = true;
      const id = await Storage.get({key: 'my_profile_id'});
      if (id.value) {

        const cachedParticipant = await Storage.get({key: 'my_profile_cache'});
        if (cachedParticipant.value)
        {
          this.setParticipant = JSON.parse(cachedParticipant.value);
          this.isParticipantSet = true;
        }

        const freshParticipant = await GetParticipantById(id.value);
        this.setParticipant = freshParticipant;
        await Storage.set({key: 'my_profile_cache', value: JSON.stringify(freshParticipant)});

        this.isParticipantSet = true;
      }

      this.isLoading = false;
    }
  }
});
</script>

<style scoped>

</style>
