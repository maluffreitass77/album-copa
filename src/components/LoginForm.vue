<template>
  <form @submit.prevent="handleLogin">

    <ion-item>
      <ion-input
        v-model="email"
        label="Email"
        type="email"
        required
      />
    </ion-item>

    <ion-item>
      <ion-input
        v-model="senha"
        label="Senha"
        type="password"
        required
      />
    </ion-item>

    <ion-button
      expand="block"
      type="submit"
    >
      Entrar
    </ion-button>

  </form>
</template>

<script setup lang="ts">

import { ref } from 'vue'

import {
  IonItem,
  IonInput,
  IonButton
} from '@ionic/vue'

const emit = defineEmits([
  'login'
])

const email = ref('')
const senha = ref('')

const handleLogin = () => {

  emit(
    'login',
    email.value,
    senha.value
  )

}

</script>