<template>
  <ion-card color="primary">
    <ion-card-content>
      <ion-grid>
        <ion-row class="ion-align-items-center">
          <ion-col size="auto">
            <div>
              <ion-avatar class="md-avatar">
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" alt="dummy avatar"/>
              </ion-avatar>
            </div>
          </ion-col>
          <ion-col>
            <div>
              <ion-label><h1>participant name</h1></ion-label>
              <ion-label>You've raised: money</ion-label>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-progress-bar color="secondary" value="0.5"></ion-progress-bar>
    </ion-card-content>
    <ion-card-content class="ion-padding">
      <ion-spinner ref="crescent" class="center"></ion-spinner>
    </ion-card-content>
  </ion-card>
  <ion-card color="primary">
    <ion-card-content class="ion-text-center">
      <ion-label class="ion-text-wrap"><h2>Your fundraising account isn't linked!</h2></ion-label>
      <ion-button class="ion-text-center ion-text-wrap" color="secondary">
        <ion-label class="ion-text-wrap">Link Your Account</ion-label>
        <ion-icon slot="end" :icon="person"></ion-icon>
      </ion-button>
      <ion-button class="ion-text-center ion-text-wrap" color="secondary">
        <ion-label class="ion-text-wrap">Register Now</ion-label>
        <ion-icon slot="end" :icon="clipboard"></ion-icon>
      </ion-button>
    </ion-card-content>
  </ion-card>
</template>

<script>
import {IonCard, IonCardContent, IonGrid, IonRow, IonCol, IonProgressBar, IonLabel, IonSpinner, IonButton, IonIcon, IonAvatar} from "@ionic/vue";
import {person, clipboard} from "ionicons/icons";

export default {
  name: "ParticipantPanel",
  components: { IonCard, IonCardContent, IonGrid, IonRow, IonCol, IonProgressBar, IonLabel, IonSpinner, IonButton, IonIcon, IonAvatar },
  setup() {
    return {
      person,
      clipboard
    }
  }
}
</script>

<style scoped>
.center {
  margin-left: auto;
  margin-right: auto;
  display: block;
}
</style>
