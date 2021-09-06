<template>
  <ion-slides v-if="events != null && events.length > 0" :options="{effect: 'flip', initialSlide: 0, autoplay: false, speed: 400}" class="event-slider" :pager="true"/>
  <ion-item v-else lines="none" class="ion-text-center">
    <ion-label class="ion-text-wrap">
      <h1>No events to show!</h1>
      <p>Check back in the future for events as they are planned</p>
    </ion-label>
  </ion-item>
</template>

<script>
import {IonSlides, IonLabel, IonItem} from "@ionic/vue";
export default {
  name: "HomeEventsSlider",
  components: {IonSlides, IonLabel, IonItem},
  props: ["events"]
}
</script>

<style scoped>
.event-slider {

  height: 325px;
  --bullet-background: #F2C413FF;
  --bullet-background-active: #1B1464FF;

}

.event-slider ion-card {

  height: 90%;
  width: 100%;

}
</style>
