<template>
  <ion-card>
    <ion-card-content>
      <ion-label>Version: {{appVersion}}</ion-label>
    </ion-card-content>
  </ion-card>
</template>

<script>
import {IonCard, IonCardContent, IonLabel} from "@ionic/vue";
export default {
  name: "InfoVersionCard",
  components: {IonCard, IonCardContent, IonLabel},
  props: ["appVersion"]
}
</script>

<style scoped>

</style>
