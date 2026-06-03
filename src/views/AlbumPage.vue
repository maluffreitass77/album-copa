<template>
  <ion-page>

    <AppHeader />

    <ion-content class="ion-padding">

      <div class="stats">
        <ion-badge color="success">
          {{ coletadas }} / {{ total }} Coletadas
        </ion-badge>
      </div>

      <ion-searchbar
        v-model="pesquisa"
        placeholder="Pesquisar jogador ou seleção"
      />

      <ion-segment v-model="filtro">

        <ion-segment-button value="all">
          <ion-label>Todas</ion-label>
        </ion-segment-button>

        <ion-segment-button value="collected">
          <ion-label>Coletadas</ion-label>
        </ion-segment-button>

        <ion-segment-button value="pending">
          <ion-label>Pendentes</ion-label>
        </ion-segment-button>

      </ion-segment>

      <ion-grid>

        <ion-row>

          <ion-col
            size="12"
            size-md="6"
            size-lg="4"
            v-for="sticker in filtradas"
            :key="sticker.id"
          >

            <StickerCard
              :sticker="sticker"
              @toggle="toggleCollected(sticker.id)"
            />

          </ion-col>

        </ion-row>

      </ion-grid>

    </ion-content>

  </ion-page>
</template>

<script setup lang="ts">

import { ref, computed } from 'vue'

import {
  IonPage,
  IonContent,
  IonSearchbar,
  IonGrid,
  IonRow,
  IonCol,
  IonBadge,
  IonSegment,
  IonSegmentButton,
  IonLabel
} from '@ionic/vue'

import AppHeader from '@/components/AppHeader.vue'
import StickerCard from '@/components/StickerCard.vue'

import { useAlbum } from '@/composables/useAlbum'

const {
  album,
  toggleCollected
} = useAlbum()

const pesquisa = ref('')

const filtro = ref('all')

const filtradas = computed(() => {

  let resultado = album.value

  if (pesquisa.value) {

    resultado = resultado.filter(sticker =>

      sticker.nome
        .toLowerCase()
        .includes(
          pesquisa.value.toLowerCase()
        )

      ||

      sticker.selecao
        .toLowerCase()
        .includes(
          pesquisa.value.toLowerCase()
        )

    )

  }

  if (filtro.value === 'collected') {

    resultado = resultado.filter(
      sticker => sticker.coletada
    )

  }

  if (filtro.value === 'pending') {

    resultado = resultado.filter(
      sticker => !sticker.coletada
    )

  }

  return resultado

})

const total = computed(() =>
  album.value.length
)

const coletadas = computed(() =>
  album.value.filter(
    sticker => sticker.coletada
  ).length
)

</script>

<style scoped>

.stats {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

ion-content {
  --background: #f4f5f8;
}

ion-segment {
  margin-bottom: 20px;
}

</style>