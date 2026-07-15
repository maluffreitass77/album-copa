<template>

  <ion-page>

    <ion-header>
      <ion-toolbar>
        <ion-title>Estatísticas</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <ion-card>

        <ion-card-header>
          <ion-card-title>
            Estatísticas do Álbum
          </ion-card-title>
        </ion-card-header>

        <ion-card-content>

          <p>
            Total de Figurinhas
            <ion-badge color="primary">
              {{ total }}
            </ion-badge>
          </p>

          <p>
            Coletadas
            <ion-badge color="success">
              {{ coletadas }}
            </ion-badge>
          </p>

          <p>
            Pendentes
            <ion-badge color="danger">
              {{ pendentes }}
            </ion-badge>
          </p>

          <p>
            Raras Coletadas
            <ion-badge color="warning">
              {{ raras }}
            </ion-badge>
          </p>

          <p>
            Brilhantes Coletadas
            <ion-badge color="tertiary">
              {{ brilhantes }}
            </ion-badge>
          </p>

          <br>

          <h3>
            {{ percentual }}% do álbum completo
          </h3>

          <ion-progress-bar
            :value="percentual/100"
            color="success"
          />

        </ion-card-content>

      </ion-card>

    </ion-content>

  </ion-page>

</template>

<script setup lang="ts">

import {
  ref,
  onMounted
} from "vue";

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonBadge,
  IonProgressBar
} from "@ionic/vue";

import { useAlbum } from "@/composables/useAlbum";

const {
  totalAlbum,
  totalColetadas,
  totalPendentes,
  totalRarasColetadas,
  totalBrilhantesColetadas,
  percentualAlbum
} = useAlbum();

const total = ref(0);
const coletadas = ref(0);
const pendentes = ref(0);
const raras = ref(0);
const brilhantes = ref(0);
const percentual = ref(0);

onMounted(async () => {

  total.value = await totalAlbum();

  coletadas.value = await totalColetadas();

  pendentes.value = await totalPendentes();

  raras.value = await totalRarasColetadas();

  brilhantes.value =
    await totalBrilhantesColetadas();

  percentual.value =
    await percentualAlbum();

});

</script>