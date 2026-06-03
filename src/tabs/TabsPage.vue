<template>

  <ion-page>

    <ion-tabs>

      <ion-router-outlet />

      <ion-tab-bar slot="bottom">

        <ion-tab-button
          tab="album"
          href="/tabs/album"
        >
          <ion-icon :icon="football" />
          <ion-label>Álbum</ion-label>
        </ion-tab-button>

        <ion-tab-button
          tab="collection"
          href="/tabs/collection"
        >
          <ion-icon :icon="star" />
          <ion-label>Coleção</ion-label>
        </ion-tab-button>

        <ion-tab-button
          tab="profile"
          href="/tabs/profile"
        >
          <ion-icon :icon="person" />
          <ion-label>Perfil</ion-label>
        </ion-tab-button>

      </ion-tab-bar>

    </ion-tabs>

  </ion-page>

</template>

<script setup lang="ts">

import {
  IonPage,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet
} from '@ionic/vue'

import {
  football,
  star,
  person
} from 'ionicons/icons'

</script>