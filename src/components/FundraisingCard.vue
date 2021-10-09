<template>
<div class="ion-text-center">
  <div class="align-center">
    <ion-avatar>
      <img :src="this.avatarUrl" alt="Avatar image">
    </ion-avatar>
  </div>
  <ion-label class="ion-text-wrap">
    <h2>{{ this.name }}</h2>
    <h3>${{ this.raised }}</h3>
  </ion-label>
</div>
</template>

<script>
import {IonAvatar, IonLabel} from "@ionic/vue";

export default {
  name: "FundraisingCard",
  props: ["name", "avatarUrl", "id", "type", "raised"],
  components: {IonAvatar, IonLabel}
}
</script>

<style scoped>

</style>
