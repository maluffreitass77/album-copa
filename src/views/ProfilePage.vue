<template>

  <ion-page>

    <AppHeader />

    <ion-content class="ion-padding">

      <ion-card>

        <ion-card-header>

          <ion-card-title>
            👤 Perfil do Usuário
          </ion-card-title>

        </ion-card-header>

        <ion-card-content>

          <p>
            <strong>Nome:</strong>
            {{ usuario?.nome ?? 'Usuário' }}
          </p>

          <p>
            <strong>Email:</strong>
            {{ usuario?.email ?? 'Não informado' }}
          </p>

          <p>
            <strong>Total de Figurinhas:</strong>
            {{ total }}
          </p>

          <p>
            <strong>Coletadas:</strong>
            {{ coletadas }}
          </p>

          <p>
            <strong>Progresso:</strong>
            {{ porcentagem }}%
          </p>

        </ion-card-content>

      </ion-card>

      <ion-button
        expand="block"
        @click="router.replace('/tabs/about')"
      >
        ℹ️ Sobre o Aplicativo
      </ion-button>

      <ion-button
        expand="block"
        color="danger"
        @click="logout"
      >
        🚪 Sair
      </ion-button>

    </ion-content>

  </ion-page>

</template>

<script setup lang="ts">

import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

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

import { useAlbum } from '@/composables/useAlbum'
import { useAuth } from '@/composables/useAuth'

const router = useRouter()

const { figurinhas, carregar } = useAlbum()
const { logout: logoutAuth, getCurrentUser } = useAuth()

const usuario = computed(() => getCurrentUser())

const total = computed(() =>
  figurinhas.value.length
)

const coletadas = computed(() =>
  figurinhas.value.filter(
    (sticker: any) => sticker.coletada
  ).length
)

onMounted(async () => {
  await carregar()
})

const porcentagem = computed(() => {

  if (total.value === 0) {
    return 0
  }

  return Math.round(
    (coletadas.value / total.value) * 100
  )

})

function logout() {
  logoutAuth()
  router.replace('/login')
}

</script>

<style scoped>

ion-card {

  margin-bottom: 20px;

}

p {

  margin-bottom: 10px;
  font-size: 16px;

}

</style>