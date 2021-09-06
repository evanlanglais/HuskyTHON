<template>
  <ion-page>
    <home-header></home-header>
    <ion-content>
      <div class="wrapper">
        <home-banner></home-banner>
        <home-countdown date="2022-02-26" id="countdown"></home-countdown>
      </div>
      <home-events-slider :events="this.events"></home-events-slider>
      <socials-panel></socials-panel>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonPage, IonContent} from '@ionic/vue';
import HomeEventsSlider from "@/components/HomeEventsSlider.vue";
import SocialsPanel from "@/components/SocialsPanel.vue";
import HomeHeader from "@/components/HomeHeader.vue";
import { defineComponent } from "vue";
import HomeBanner from "@/components/HomeBanner.vue";
import HomeCountdown from "@/components/HomeCountdown.vue";

export default defineComponent({
  name: 'Home',
  components: {
    HomeCountdown,
    HomeBanner,
    HomeHeader, SocialsPanel, HomeEventsSlider, IonContent, IonPage
  },
  data() {
    return {
      events: []
    }
  }
});
</script>

<style scoped>
.wrapper {
  position: relative;
  height: 38vh;
}

#countdown {
  position: absolute;
  top: 21vh;
  right: 0;
  left: 0;
  z-index: 10;
}
</style>
