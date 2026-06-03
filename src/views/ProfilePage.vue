<template>

<ion-page>

<AppHeader/>

<ion-content class="ion-padding">

<h2>
Perfil
</h2>

<p>
Usuário logado
</p>

<ion-button
expand="block"
color="danger"
>

Sair

</ion-button>

</ion-content>

</ion-page>

</template>

<script setup lang="ts">

import {
IonPage,
IonContent,
IonButton
} from '@ionic/vue'

import AppHeader from '@/components/AppHeader.vue'

</script>