<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="home" href="/tabs/home">
                    <ion-icon :icon="home"/>
                    <ion-label>Home</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="events" href="/tabs/events">
                    <ion-icon :icon="calendar"/>
                    <ion-label>Calendar</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="fundraising" href="/tabs/fundraising">
                    <ion-icon :icon="flame"/>
                    <ion-label>Fundraising</ion-label>
                </ion-tab-button>
                <ion-tab-button tab="info" href="/tabs/info">
                    <ion-icon :icon="informationCircle"/>
                    <ion-label>Info</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<script lang="ts">
import {IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet} from '@ionic/vue';
import {home, calendar, flame, informationCircle} from 'ionicons/icons';

export default {
    name: 'Tabs',
    components: {IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet},
    setup() {
        return {
            home,
            calendar,
            flame,
            informationCircle,
        }
    }
}
</script>
