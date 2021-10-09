<template>
  <div class="ion-text-center">
    <ion-button color="secondary" @click="setProfile()">Find Donor Profile</ion-button>
  </div>
</template>

<script>
import {IonButton} from "@ionic/vue";
import {Storage} from "@capacitor/storage";

export default {
  name: "HomeHeaderParticipantUnset",
  components: {IonButton},
  methods: {
    setProfile() {
      Storage.set({key: 'my_profile_id', value: JSON.stringify(843236)});
    }
  }
}
</script>

<style scoped>

</style>
