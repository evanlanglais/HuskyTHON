<template>
  <ion-item class="participant" color="primary" lines="none">
    <ion-avatar slot="end" class="participant-avatar">
      <img :src="this.avatarUrl" alt="Participant avatar image">
    </ion-avatar>
    <ion-label class="ion-text-right">
      <p class="ion-text-wrap">Welcome back {{ this.firstName }}!</p>

      <p class="ion-text-wrap">Raised ${{ this.amount }}</p>
      <ion-progress-bar color="secondary" class="participant-progress" :value="this.progress"></ion-progress-bar>

    </ion-label>
    </ion-item>
</template>

<script>
import {IonItem, IonLabel, IonAvatar, IonProgressBar} from "@ionic/vue";

export default {
  name: "HomeHeaderParticipant",
  components: {IonItem, IonLabel, IonAvatar, IonProgressBar},
  props: ["avatarUrl", "progress", "firstName", "amount"]
}
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
