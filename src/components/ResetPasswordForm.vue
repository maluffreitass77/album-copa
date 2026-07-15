<template>
  <form @submit.prevent="submit">
    <ion-item>
      <ion-input v-model="email" label="Email" type="email" required />
    </ion-item>

    <ion-item>
      <ion-input v-model="senha" label="Nova Senha" type="password" required />
    </ion-item>

    <ion-button expand="block" type="submit">
      Recuperar senha
    </ion-button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IonItem, IonInput, IonButton } from '@ionic/vue'

const emit = defineEmits([
  'reset'
])

const email = ref('')
const senha = ref('')

function submit() {
  if (!email.value || !senha.value) {
    alert('Informe email e nova senha.')
    return
  }

  emit('reset', email.value, senha.value)
}
</script>