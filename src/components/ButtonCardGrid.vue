<template>
 <ion-grid>
   <ion-row>
     <ion-col>
       <button-card text="Why We Dance"
                    :image="require('@/assets/images/why_we_dance_resized.jpg')"
                    color="secondary"
                    link="https://huskython.org/why-we-dance/"></button-card>
     </ion-col>
     <ion-col>
       <button-card text="Meet The Kids"
                    :image="require('@/assets/images/meet_the_kids_resized.jpg')"
                    color="success"
                    link="https://huskython.org/meet-the-kids/"></button-card>
     </ion-col>
   </ion-row>
   <ion-row>
     <ion-col>
       <button-card text="Fundraising"
                    :image="require('@/assets/images/fundraising_resources_resized.jpg')"
                    color="tertiary"
                    :link="require('@/assets/docs/Fundraising Initiatives.pdf').default"></button-card>
     </ion-col>
     <ion-col>
       <button-card text="Contact Us"
                    :image="require('@/assets/images/contact_us_resized.jpg')"
                    color="primary"
                    link="https://huskython.org/contact-us/"></button-card>
     </ion-col>
   </ion-row>
 </ion-grid>
</template>

<script>
import ButtonCard from "@/components/ButtonCard";
import { IonGrid, IonRow, IonCol } from "@ionic/vue";


export default {
  name: "ButtonCardGrid",
  components: {ButtonCard, IonGrid, IonCol, IonRow}
}
</script>

<style scoped>
  ion-card {
    margin: 6px;
  }
</style>
