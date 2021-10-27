<template>
  <div class="container">
    <ion-spinner></ion-spinner>
  </div>
</template>

<script>
import {IonSpinner} from "@ionic/vue";

export default {
  name: "LoadingIndicator",
  components: {IonSpinner}
}
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
