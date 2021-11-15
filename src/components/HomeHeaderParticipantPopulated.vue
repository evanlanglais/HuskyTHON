<template>
  <ion-item class="participant" color="primary" lines="none" @click="openParticipantDetail()">
    <ion-avatar slot="end" class="participant-avatar">
      <img :src="participant.avatarImageURL" alt="Participant avatar image">
    </ion-avatar>
    <ion-label class="ion-text-right">
      <p class="ion-text-wrap">Welcome back {{ this.firstName }}!</p>

      <p class="ion-text-wrap">Raised ${{ this.participant.sumDonations }}</p>
      <ion-progress-bar color="secondary" class="participant-progress" :value="this.progress"></ion-progress-bar>

    </ion-label>
  </ion-item>
</template>

<script lang="ts">
import {IonAvatar, IonItem, IonLabel, IonProgressBar} from "@ionic/vue";
import {defineComponent, PropType} from "vue";
import {Participant} from "@/types/Participant";
import {useRouter} from "vue-router";

export default defineComponent({
  name: "HomeHeaderParticipantPopulated",
  components: {IonItem, IonLabel, IonAvatar, IonProgressBar},
  props: {
    participant: {
      type: Object as PropType<Participant>
    }
  },
  computed: {
    firstName() {
      if (this.participant === undefined) return "";

      return this.participant.displayName.split(' ')[0];
    },
    progress() {
      if (this.participant === undefined) return 0;

      return this.participant.sumDonations / this.participant.fundraisingGoal;
    }
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    async openParticipantDetail() {
      if (this.participant === undefined) return;

      await this.router.push(`/participant/${this.participant.participantID}`);
    }
  }
});
</script>

<style scoped>
.participant {
  --padding-end: 0;
}

.participant-avatar {
  margin-inline: 0;
}

.participant-progress {
  margin-top: 4px;
}
</style>
