<template>
<div class="ion-text-center">
  <div class="ion-align-items-center">
    <ion-avatar class="avatar">
      <img :src="this.item.avatarImageURL" alt="Avatar image">
    </ion-avatar>
  </div>
  <ion-label class="ion-text-wrap">
    <h2>{{ this.item.name }}</h2>
    <p>{{ this.raisedString }}</p>
  </ion-label>
</div>
</template>

<script lang="ts">
import {IonAvatar, IonLabel} from "@ionic/vue";
import {defineComponent, PropType} from "vue";
import {GenericFundraisingItem} from "@/types/GenericFundraisingItem";

const formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'})

export default defineComponent({
  name: "FundraisingCard",
  props: {
    item: {
      type: Object as PropType<GenericFundraisingItem>
    }
  },
  components: {IonAvatar, IonLabel},
  computed: {
    raisedString() {
      return formatter.format(this.item.raised);
    }
  }
})
</script>

<style scoped>
.avatar {
  width: auto;
  height: auto;
}
</style>
