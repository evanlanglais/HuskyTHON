<template>
  <div class="ion-text-center" v-if="isLoading">
    <ion-spinner />
  </div>
</template>

<script>
import {IonSpinner} from "@ionic/vue";

export default {
  name: "LoadingIndicator",
  components: {IonSpinner},
  props: {
    isLoading: Boolean
  }
}
</script>

<style scoped>

</style>
