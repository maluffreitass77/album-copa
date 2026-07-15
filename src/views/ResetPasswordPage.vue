<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Recuperação de senha</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ResetPasswordForm @reset="handleResetPassword" />

      <ion-button expand="block" fill="clear" class="ion-margin-top" @click="router.replace('/login')">
        Voltar para login
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButton } from '@ionic/vue'
import { useRouter } from 'vue-router'
import ResetPasswordForm from '@/components/ResetPasswordForm.vue'
import { useAuth } from '@/composables/useAuth'

const router = useRouter()
const { resetPassword } = useAuth()

async function handleResetPassword(email: string, senha: string) {
  try {
    const sucesso = await resetPassword(email, senha)

    if (sucesso) {
      alert('Senha alterada com sucesso. Use a nova senha para entrar.')
      router.replace('/login')
    } else {
      alert('Email não encontrado. Verifique e tente novamente.')
    }
  } catch (error) {
    alert('Erro ao recuperar senha. Tente novamente mais tarde.')
  }
}
</script>