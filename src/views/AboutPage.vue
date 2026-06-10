<template>

  <ion-page>

    <AppHeader />

    <ion-content class="ion-padding">

      <ion-card>

        <ion-card-header>

          <ion-card-title>
            Sobre o Aplicativo
          </ion-card-title>

        </ion-card-header>

        <ion-card-content>

          <p>
            <strong>Aplicativo:</strong>
            Álbum Digital da Copa
          </p>

          <p>
            <strong>Versão:</strong>
            1.0.0
          </p>

          <ion-button
            expand="block"
            href="https://www.termsfeed.com/live/terms"
            target="_blank"
          >
            Termos de Uso
          </ion-button>

          <ion-button
            expand="block"
            color="secondary"
            href="https://www.termsfeed.com/live/privacy-policy"
            target="_blank"
          >
            Política de Privacidade
          </ion-button>

        </ion-card-content>

      </ion-card>

    </ion-content>

  </ion-page>

</template>

<script setup lang="ts">

import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton
} from '@ionic/vue'

import AppHeader from '@/components/AppHeader.vue'

</script>