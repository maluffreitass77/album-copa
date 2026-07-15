<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Recuperação de senha</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ResetPasswordForm @reset="handleResetPassword" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/vue'
import ResetPasswordForm from '@/components/ResetPasswordForm.vue'
import { useAuth } from '@/composables/useAuth'

const { resetPassword } = useAuth()

async function handleResetPassword(email: string, senha: string) {
  try {
    const sucesso = await resetPassword(email, senha)

    if (sucesso) {
      alert('Senha alterada com sucesso. Use a nova senha para entrar.')
    } else {
      alert('Email não encontrado. Verifique e tente novamente.')
    }
  } catch (error) {
    alert('Erro ao recuperar senha. Tente novamente mais tarde.')
  }
}
</script>