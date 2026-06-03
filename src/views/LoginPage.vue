<template>

  <ion-page>

    <ion-header>
      <ion-toolbar>
        <ion-title>
          Login
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <LoginForm
        @login="fazerLogin"
      />

      <ion-button
        expand="block"
        fill="clear"
        router-link="/register"
      >
        Criar conta
      </ion-button>

      <ion-button
        expand="block"
        fill="clear"
        router-link="/reset-password"
      >
        Esqueci minha senha
      </ion-button>

    </ion-content>

  </ion-page>

</template>

<script setup lang="ts">

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton
} from '@ionic/vue'

import { useRouter } from 'vue-router'

import LoginForm from '@/components/LoginForm.vue'

import { useAuth } from '@/composables/useAuth'

const router = useRouter()

const {
  login
} = useAuth()

const fazerLogin = (
  email: string,
  senha: string
) => {

  const sucesso =
    login(email, senha)

  if (sucesso) {

    router.push(
      '/tabs/album'
    )

  } else {

    alert(
      'Usuário não encontrado'
    )

  }

}

</script>