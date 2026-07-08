<template>
  <ion-page>
    <ion-tabs>

      <ion-router-outlet />

      <ion-tab-bar slot="bottom">

        <ion-tab-button tab="album" href="/tabs/album">
          <ion-icon :icon="bookOutline" />
          <ion-label>Álbum</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="collection" href="/tabs/collection">
          <ion-icon :icon="imagesOutline" />
          <ion-label>Coleção</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="profile" href="/tabs/profile">
          <ion-icon :icon="personCircleOutline" />
          <ion-label>Perfil</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="about" href="/about">
          <ion-icon :icon="informationCircleOutline" />
          <ion-label>Sobre</ion-label>
        </ion-tab-button>

      </ion-tab-bar>

    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel
} from '@ionic/vue'

import {
  bookOutline,
  imagesOutline,
  personCircleOutline,
  informationCircleOutline
} from 'ionicons/icons'
</script>