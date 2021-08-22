<template>
<ion-slides :options="{effect: 'flip', initialSlide: 0, autoplay: false, speed: 400}" class="event-slider" :pager="true">

</ion-slides>
</template>

<script>
import {IonSlides} from "@ionic/vue";
export default {
  name: "EventsSlider",
  components: {IonSlides}
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
