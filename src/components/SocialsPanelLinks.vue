<template>
  <ion-grid>
    <ion-row>
      <ion-col>
        <ion-button expand="block" class="facebook-button" @click="openFacebook()">
          <ion-icon slot="icon-only" :icon="logoFacebook"></ion-icon>
        </ion-button>
      </ion-col>
      <ion-col>
        <ion-button expand="block" class="twitter-button" @click="openTwitter()">
          <ion-icon slot="icon-only" :icon="logoTwitter"></ion-icon>
        </ion-button>
      </ion-col>
      <ion-col>
        <ion-button expand="block" class="youtube-button" @click="openYoutube()">
          <ion-icon slot="icon-only" :icon="logoYoutube"></ion-icon>
        </ion-button>
      </ion-col>
      <ion-col>
        <ion-button expand="block" class="insta-button" @click="openInstagram()">
          <ion-icon slot="icon-only" :icon="logoInstagram"></ion-icon>
        </ion-button>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script lang="ts">
import {IonGrid, IonRow, IonCol, IonButton, IonIcon} from "@ionic/vue";
import {logoYoutube, logoTwitter, logoInstagram, logoFacebook} from 'ionicons/icons';
import {Browser} from "@capacitor/browser";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SocialsPanelLinks",
  components: {IonGrid, IonRow, IonCol, IonButton, IonIcon},
  setup() {
    return {
      logoYoutube,
      logoTwitter,
      logoInstagram,
      logoFacebook
    }
  },
  props: {
    twitterUrl: {
      type: String,
      required: true
    },
    facebookUrl: {
      type: String,
      required: true
    },
    instagramUrl: {
      type: String,
      required: true
    },
    youtubeUrl: {
      type: String,
      required: true
    }
  },
  methods: {
    openTwitter: async function() {
      await this.openBrowser(this.twitterUrl);
    },
    openFacebook: async function() {
      await this.openBrowser(this.facebookUrl);
    },
    openInstagram: async function() {
      await this.openBrowser(this.instagramUrl);
    },
    openYoutube: async function() {
      await this.openBrowser(this.youtubeUrl);
    },
    openBrowser: async function(url: string) {
      await Browser.open({url, windowName: '_system'});
    }
  }
});
</script>

<style scoped>
.twitter-button {
  --background: #1DA1F2;
  --color: #ffffff;
}

.facebook-button {
  --background: #3B5998;
  --color: #ffffff;
}

.youtube-button {
  --background: #ff0000;
  --color: #ffffff;
}

.insta-button {
  --background: #c13584;
  --color: #ffffff;
}
</style>
