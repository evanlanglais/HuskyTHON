<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>
        {{ this.title }}
      </ion-card-title>
    </ion-card-header>
    <ion-card-content >
      <div class="scrolling-wrapper">


      <div class="scroll-card" v-for="item in items" :key="item.participantID" >
        <fundraising-card :id="item.participantID" :name="item.displayName" :avatar-url="item.avatarImageURL" :raised="item.sumDonations"/>
      </div>
      </div>
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import FundraisingCard from "@/components/FundraisingCard.vue";
import {IonCard, IonCardHeader, IonCardTitle, IonCardContent} from "@ionic/vue";
import {defineComponent, PropType} from "vue";
import {Participant} from "@/types/Participant";

export default defineComponent({
  name: "FundraisingList",
  components: {FundraisingCard, IonCard, IonCardHeader, IonCardTitle, IonCardContent},
  props: {
    title: {
      type: String as PropType<string>
    },
    items: {
      type: Array as PropType<Array<Participant>>
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
.scrolling-wrapper {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}

.scroll-card {
  display: inline-block;
}
</style>
