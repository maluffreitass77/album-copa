<template>
  <ion-card>

    <ion-badge :color="corRaridade">
      {{ sticker.raridade }}
    </ion-badge>

    <img
      :src="'/jogadores/' + sticker.foto"
      :alt="sticker.nome"
      class="foto"
      @error="erroImagem"
    />

    <ion-card-header>
      <ion-card-title>
        {{ sticker.nome }}
      </ion-card-title>
    </ion-card-header>

    <ion-card-content>

      🏳️ {{ sticker.selecao }}

      <br /><br />

      <ion-badge
        :color="sticker.coletada ? 'success' : 'danger'"
      >
        {{ sticker.coletada ? 'Coletada' : 'Pendente' }}
      </ion-badge>

      <br /><br />

      <ion-button
        expand="block"
        @click="$emit('toggle')"
      >
        Trocar Status
      </ion-button>

    </ion-card-content>

  </ion-card>
</template>

<script setup lang="ts">
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonBadge
} from '@ionic/vue'

import { computed } from 'vue'

const props = defineProps({
  sticker: {
    type: Object,
    required: true
  }
})

const corRaridade = computed(() => {
  switch (props.sticker.raridade) {
    case 'Comum':
      return 'medium'
    case 'Rara':
      return 'warning'
    case 'Brilhante':
      return 'success'
    default:
      return 'primary'
  }
})

function erroImagem(event: Event) {
  console.log(
    'Imagem não encontrada:',
    (event.target as HTMLImageElement).src
  )
}
</script>

<style scoped>

.foto {
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 8px;
}

</style>