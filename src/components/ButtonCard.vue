<template>
  <ion-card :button="true" :color="color" v-on:click="openLink()">
    <img :src="this.image" alt="image"/>
    <ion-card-header>
      <ion-card-subtitle class="ion-text-center">{{ this.text }}</ion-card-subtitle>
    </ion-card-header>
  </ion-card>
</template>

<script>
import {IonCard, IonCardHeader, IonCardSubtitle} from "@ionic/vue";
import {Browser} from "@capacitor/browser";

export default {
  name: "ButtonCard",
  props: ["text", "color", "link", "image"],
  components: {IonCard, IonCardSubtitle, IonCardHeader},
  methods: {
    openLink: async function() {
      await this.openBrowser(this.link);
    },
    openBrowser: async function(url) {
      await Browser.open({url, windowName: '_system'});
    }
  }
}
</script>

<style scoped>

</style>
