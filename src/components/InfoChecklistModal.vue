<template>
  <ion-page>
  <ion-header>
    <ion-toolbar color="primary">
      <ion-title>Checklist</ion-title>
      <ion-button color="secondary" slot="primary" @click="saveAndClose()">Close</ion-button>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">

    <ion-card color="primary">
      <ion-card-header>
        <ion-card-title class="ion-text-center">WHAT TO BRING</ion-card-title>
      </ion-card-header>
      <ion-list>
        <ion-item-divider>
          <ion-label>CLOTHING</ion-label>
        </ion-item-divider>
        <ion-item class="ion-text-wrap">
          <ion-label class="ion-text-wrap">
            Clothes for Theme Hours
          </ion-label>
          <ion-checkbox slot="end" :checked="false" v-model="checklistModel[0]"></ion-checkbox>
        </ion-item>
        <ion-item class="ion-text-wrap">
          <ion-label class="ion-text-wrap">
            Extra T-Shirts and different pants (shorts, sweats, yogas, jeans,
            etc)
          </ion-label>
          <ion-checkbox slot="end" :checked="false" v-model="checklistModel[1]"></ion-checkbox>
        </ion-item>
        <ion-item class="ion-text-wrap">
          <ion-label class="ion-text-wrap">
            Multiple pairs of socks / underwear and Bras/Sports
            Bras
          </ion-label>
          <ion-checkbox slot="end" :checked="false" v-model="checklistModel[2]"></ion-checkbox>
        </ion-item>
        <ion-item class="ion-text-wrap">
          <ion-label class="ion-text-wrap">
            Sweatshirt and a Jacket
          </ion-label>
          <ion-checkbox slot="end" :checked="false" v-model="checklistModel[3]"></ion-checkbox>
        </ion-item>
        <ion-item-divider>
          <ion-label>TOILETRIES</ion-label>
        </ion-item-divider>
        <ion-item class="ion-text-wrap">
          <ion-label class="ion-text-wrap">
            Deodorant and Perfume / Cologne
          </ion-label>
          <ion-checkbox slot="end" :checked="false" v-model="checklistModel[4]"></ion-checkbox>
        </ion-item>
        <ion-item class="ion-text-wrap">
          <ion-label class="ion-text-wrap">
            Face wash, Makeup / Makeup remover
          </ion-label>
          <ion-checkbox slot="end" :checked="false" v-model="checklistModel[5]"></ion-checkbox>
        </ion-item>
        <ion-item class="ion-text-wrap">
          <ion-label class="ion-text-wrap">
            Toothbrush / Toothpaste, Mouthwash
          </ion-label>
          <ion-checkbox slot="end" :checked="false" v-model="checklistModel[6]"></ion-checkbox>
        </ion-item>
        <ion-item class="ion-text-wrap">
          <ion-label class="ion-text-wrap">
            Contact solution and lenses / glasses, Eye drops
          </ion-label>
          <ion-checkbox slot="end" :checked="false" v-model="checklistModel[7]"></ion-checkbox>
        </ion-item>
        <ion-item class="ion-text-wrap">
          <ion-label class="ion-text-wrap">
            Dry shampoo, Brush / comb, Hair ties, Headbands
          </ion-label>
          <ion-checkbox slot="end" :checked="false" v-model="checklistModel[8]"></ion-checkbox>
        </ion-item>
        <ion-item class="ion-text-wrap">
          <ion-label class="ion-text-wrap">
            Feminine products, Baby Powder
          </ion-label>
          <ion-checkbox slot="end" :checked="false" v-model="checklistModel[9]"></ion-checkbox>
        </ion-item>
        <ion-item-divider>
          <ion-label>ITEMS</ion-label>
        </ion-item-divider>
        <ion-item class="ion-text-wrap">
          <ion-label class="ion-text-wrap">
            Reusable water bottle, Snacks, Drinks
          </ion-label>
          <ion-checkbox slot="end" :checked="false" v-model="checklistModel[10]"></ion-checkbox>
        </ion-item>
        <ion-item class="ion-text-wrap">
          <ion-label class="ion-text-wrap">
            Medication, Inhaler, Epi-pen, Advil or Tylenol, Band-aids
          </ion-label>
          <ion-checkbox slot="end" :checked="false" v-model="checklistModel[11]"></ion-checkbox>
        </ion-item>
        <ion-item class="ion-text-wrap">
          <ion-label class="ion-text-wrap">
            Money / Credit card, Cell phone charger
          </ion-label>
          <ion-checkbox slot="end" :checked="false" v-model="checklistModel[12]"></ion-checkbox>
        </ion-item>
      </ion-list>
    </ion-card>

    <ion-card color="danger">
      <ion-card-header>
        <ion-card-title class="ion-text-center">WHAT NOT TO BRING</ion-card-title>
      </ion-card-header>
      <ion-list>
        <ion-item class="ion-text-wrap">
          <ion-label class="ion-text-wrap">
            Power Strip
          </ion-label>
        </ion-item>
        <ion-item class="ion-text-wrap">
          <ion-label class="ion-text-wrap">
            Large amounts of food
          </ion-label>
        </ion-item>
        <ion-item class="ion-text-wrap">
          <ion-label class="ion-text-wrap">
            Multiple bags, and bags larger than a backpack
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-card>

  </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonItem, IonItemDivider, IonList, IonLabel, IonCard, IonContent, IonCardHeader, IonCardTitle, IonCheckbox, IonHeader, IonToolbar, IonTitle, IonButton, IonPage, modalController} from "@ionic/vue";
import {Preferences} from '@capacitor/preferences';
import { defineComponent } from "vue";

export default defineComponent({
  name: "InfoChecklistModal",
  components: {IonItem, IonItemDivider, IonList, IonLabel, IonCard, IonContent, IonCardHeader, IonCardTitle, IonCheckbox, IonHeader, IonToolbar, IonTitle, IonButton, IonPage},
  data() {
    return {
      checklistModel: [false, false, false, false, false, false, false, false, false, false, false, false, false]
    }
  },
  mounted: async function() {
    const {value} = await Preferences.get({key: 'checklist_json'});

    if (value) {
      this.checklistModel = JSON.parse(value);
    }
  },
  methods: {
    saveAndClose: async function() {
      await Preferences.set({key: 'checklist_json', value: JSON.stringify(this.checklistModel)});
      await modalController.dismiss();
    }
  }
});
</script>

<style scoped>

</style>
