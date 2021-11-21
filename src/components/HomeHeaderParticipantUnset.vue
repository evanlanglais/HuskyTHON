<template>
  <div class="ion-text-center">
    <ion-button color="secondary" fill="outline" @click="findQuickAccessProfile()">Set Quick Access Profile</ion-button>
  </div>
</template>

<script>
import {IonButton} from "@ionic/vue";
import {useRouter} from "vue-router";

export default {
  name: "HomeHeaderParticipantUnset",
  components: {IonButton},
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    findQuickAccessProfile() {
      this.router.push('/settings');
    }
  }
}
</script>

<style scoped>

</style>
