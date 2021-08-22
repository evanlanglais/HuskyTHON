<template>
  <ion-item-group>
    <ion-item-divider>
      <ion-label>Upcoming Events</ion-label>
    </ion-item-divider>
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
  name: "EventsListUpcoming",
  components: {IonItem, IonItemGroup, IonItemDivider, IonLabel}
}
</script>

<style scoped>

</style>
