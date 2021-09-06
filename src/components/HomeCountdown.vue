<template>
  <ion-grid>
    <ion-row>
      <ion-col>
        <ion-card color="secondary" id="dayCard" ref="dayCard">
          <ion-card-header>
            <ion-card-title class="ion-text-center">
              {{ this.days }}
            </ion-card-title>
          </ion-card-header>
          <ion-card-content class="ion-text-center">
            days
          </ion-card-content>
        </ion-card>
      </ion-col>
      <ion-col>
        <ion-card color="secondary" id="hourCard" ref="hourCard">
          <ion-card-header>
            <ion-card-title class="ion-text-center">
              {{ this.hours }}
            </ion-card-title>
          </ion-card-header>
          <ion-card-content class="ion-text-center">
            hours
          </ion-card-content>
        </ion-card>
      </ion-col>
      <ion-col>
        <ion-card color="secondary" id="minuteCard" ref="minuteCard">
          <ion-card-header>
            <ion-card-title class="ion-text-center">
              {{ this.minutes }}
            </ion-card-title>
          </ion-card-header>
          <ion-card-content class="ion-text-center">
            minutes
          </ion-card-content>
        </ion-card>
      </ion-col>
      <ion-col>
        <ion-card color="secondary" id="secondCard" ref="secondCard">
          <ion-card-header>
            <ion-card-title class="ion-text-center">
              {{ this.seconds }}
            </ion-card-title>
          </ion-card-header>
          <ion-card-content class="ion-text-center">
            seconds
          </ion-card-content>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
import { IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, createAnimation } from "@ionic/vue";

export default {
  name: "HomeCountdown",
  components: {IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent},
  props: ["date"],
  data() {
    return {
      countTo: this.date,
      dayChangeAnimation: null,
      hourChangeAnimation: null,
      minuteChangeAnimation: null,
      secondChangeAnimation: null,
      days: 100,
      hours: 24,
      minutes: 59,
      seconds: 59
    }
  },
  methods: {
    countdown() {
      this.countTo = new Date(this.countTo).getTime();
      const now = new Date(),
          countTo = new Date(this.countTo),
          timeDifference = (countTo - now);

      const secondsInADay = 60 * 60 * 1000 * 24
      const secondsInAHour = 60 * 60 * 1000;

      this.days = Math.floor(timeDifference / (secondsInADay));
      this.hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour));
      this.minutes = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000));
      this.seconds = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000);

      clearTimeout(this.countdown.interval);
      this.countdown.interval = setTimeout(() => { this.countdown(); },1000);
    }
  },
  watch: {
    days() {
      this.dayChangeAnimation.play();
    },
    hours() {
      this.hourChangeAnimation.play();
    },
    minutes() {
      this.minuteChangeAnimation.play();
    },
    seconds() {
      this.secondChangeAnimation.play();
    }
  },
  mounted() {
    this.secondChangeAnimation = createAnimation()
        .addElement(document.getElementById("secondCard"))
        .duration(100)
        .iterations(1)
        .keyframes([
          { offset: 0, transform: 'translateY(0)' },
          { offset: 0.5, transform: 'translateY(2px)' },
          { offset: 1, transform: 'translateY(0)' }
        ]);

    this.minuteChangeAnimation = createAnimation()
        .addElement(document.getElementById("minuteCard"))
        .duration(100)
        .iterations(1)
        .keyframes([
          { offset: 0, transform: 'translateY(0)' },
          { offset: 0.5, transform: 'translateY(2px)' },
          { offset: 1, transform: 'translateY(0)' }
        ]);

    this.hourChangeAnimation = createAnimation()
        .addElement(document.getElementById("hourCard"))
        .duration(100)
        .iterations(1)
        .keyframes([
          { offset: 0, transform: 'translateY(0)' },
          { offset: 0.5, transform: 'translateY(2px)' },
          { offset: 1, transform: 'translateY(0)' }
        ]);

    this.dayChangeAnimation = createAnimation()
        .addElement(document.getElementById("dayCard"))
        .duration(100)
        .iterations(1)
        .keyframes([
          { offset: 0, transform: 'translateY(0)' },
          { offset: 0.5, transform: 'translateY(2px)' },
          { offset: 1, transform: 'translateY(0)' }
        ]);

    this.countdown();
  }
}
</script>

<style scoped>
ion-col {
  padding-left: 0;
  padding-right: 0;
}

ion-card {
  margin-top: 5px;
  margin-inline: 5px;
}

ion-card-header {
  padding-inline: 0;
}

ion-card-content {
  padding-inline: 0;
}
</style>
