<template>

  <ion-page>

    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/tabs/profile" text="Voltar"></ion-back-button>
        </ion-buttons>
        <ion-title>Sobre o Aplicativo</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <ion-card>

        <ion-card-header>
          <ion-card-title>
            Sobre o Aplicativo
          </ion-card-title>
        </ion-card-header>

        <ion-card-content>

          <p>
            <strong>Aplicativo:</strong><br>
            Álbum Digital da Copa do Mundo
          </p>

          <p>
            <strong>Versão:</strong><br>
            1.0.0
          </p>

          <p>
            <strong>Desenvolvedora:</strong><br>
            Maria Luiza
          </p>

          <p>
            <strong>Curso:</strong><br>
            Análise e Desenvolvimento de Sistemas
          </p>

          <p>
            <strong>Unidade Curricular:</strong><br>
            Desenvolvimento Mobile
          </p>

          <p>
            <strong>Objetivo:</strong><br>
            Este aplicativo permite que o usuário acompanhe sua coleção de figurinhas da Copa do Mundo, pesquise jogadores, marque figurinhas coletadas, visualize seu progresso e acompanhe suas conquistas.
          </p>

          <ion-item lines="none">
            <ion-label>
              <h2>Termos de Uso</h2>
              <p>
                Este aplicativo foi desenvolvido para fins acadêmicos.
                Nenhum dado é compartilhado com terceiros.
              </p>
            </ion-label>
          </ion-item>

          <ion-item lines="none">
            <ion-label>
              <h2>Política de Privacidade</h2>
              <p>
                Os dados cadastrados permanecem armazenados apenas no dispositivo do usuário utilizando banco SQLite.
              </p>
            </ion-label>
          </ion-item>

        </ion-card-content>

      </ion-card>

    </ion-content>

  </ion-page>

</template>

<script setup lang="ts">

import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonButtons,
  IonBackButton,
  IonHeader,
  IonToolbar,
  IonTitle
} from '@ionic/vue'

</script>