<template>

<ion-page>

<AppHeader/>

<ion-content class="ion-padding">

<h2>
Minhas Figurinhas
</h2>

<div
v-for="sticker in coletadas"
:key="sticker.id"
>

{{ sticker.nome }}

</div>

</ion-content>

</ion-page>

</template>

<script setup lang="ts">

import { computed } from 'vue'

import {
IonPage,
IonContent
} from '@ionic/vue'

import AppHeader from '@/components/AppHeader.vue'

import { useAlbum } from '@/composables/useAlbum'

const { album } = useAlbum()

const coletadas = computed(() =>

album.value.filter(
s => s.coletada
)

)

</script>