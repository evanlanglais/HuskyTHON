<template>
  <ion-item-group>
    <ion-item-divider>
      <ion-label>Events Happening Today</ion-label>
    </ion-item-divider>
    <ion-item detail class="active-event">
      <ion-label class="ion-text-wrap">
        <h2>event title</h2>
        <h3>Ending event time until end</h3>
        <p>event location</p>
      </ion-label>
    </ion-item>
    <ion-item detail>
      <ion-label class="ion-text-wrap">
        <h2>event title</h2>
        <h3>Starting event time until start</h3>
        <p>event location</p>
      </ion-label>
    </ion-item>
  </ion-item-group>
</template>

<script>
import {IonItem, IonItemGroup, IonItemDivider, IonLabel} from "@ionic/vue";

export default {
  name: "EventsListActive",
  components: {IonItem, IonItemGroup, IonItemDivider, IonLabel},
  data() {
    return {
      events: []
    }
  }
}
</script>

<style scoped>
.active-event, .active-event * {
  --background: #ADD8E655 !important;
}
</style>
