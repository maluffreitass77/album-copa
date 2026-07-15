<template>

<ion-page>

<AppHeader/>

<ion-content class="ion-padding">

<RegisterForm
@register="cadastrar"
/>

</ion-content>

</ion-page>

</template>

<script setup lang="ts">

import {
IonPage,
IonContent
} from '@ionic/vue'

import { useRouter } from 'vue-router'

import AppHeader from '@/components/AppHeader.vue'
import RegisterForm from '@/components/RegisterForm.vue'

import { useAuth } from '@/composables/useAuth'

const router = useRouter()

const { register } = useAuth()

async function cadastrar(
  nome: string,
  email: string,
  senha: string
) {
  await register(nome, email, senha)
  alert('Cadastro realizado!')
  router.push('/login')
}

</script>