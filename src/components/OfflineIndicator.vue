<template>
  <div class="ion-text-center">
    <ion-icon :icon="cloudOfflineOutline" class="offline-icon"></ion-icon>
    <ion-label class="ion-text-center">
      <h1>Error while connecting to online services</h1>
      <p>Please try again in a little bit</p>
    </ion-label>
  </div>
</template>

<script>
import {cloudOfflineOutline} from "ionicons/icons";
import {IonIcon, IonLabel} from "@ionic/vue";

export default {
  name: "OfflineIndicator",
  components: {IonIcon, IonLabel},
  setup() {
    return {
      cloudOfflineOutline
    }
  }
}
</script>

<style scoped>
.offline-icon {
  font-size: 64px;
}
</style>
