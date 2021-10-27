<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>
        {{ this.title }}
      </ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <ion-grid v-if="!!items && items.length >= 6">
        <ion-row>
          <ion-col v-for="item in items.slice(0, 3)" :key="item.id">
            <fundraising-card :item="item"/>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col v-for="item in items.slice(3, 6)" :key="item.id">
            <fundraising-card :item="item"/>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import FundraisingCard from "@/components/FundraisingCard.vue";
import {IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol} from "@ionic/vue";
import {defineComponent, PropType} from "vue";
import {GenericFundraisingItem} from "@/types/GenericFundraisingItem";

export default defineComponent({
  name: "FundraisingList",
  components: {FundraisingCard, IonCard, IonGrid, IonRow, IonCol, IonCardHeader, IonCardTitle, IonCardContent},
  props: {
    title: {
      type: String as PropType<string>
    },
    items: {
      type: Array as PropType<Array<GenericFundraisingItem>>
    }
  },
  data() {
    return {
      isLoading: false
    }
  }
});
</script>

<style scoped>

</style>
