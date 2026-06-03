<template>

<ion-page>

<AppHeader/>

<ion-content class="ion-padding">

<div class="stats">

<ion-badge color="success">

{{ coletadas }}

/

{{ total }}

Coletadas

</ion-badge>

</div>

<ion-searchbar
v-model="pesquisa"
placeholder="Pesquisar jogador"
/>

<ion-grid>

<ion-row>

<ion-col
size="12"
size-md="6"
size-lg="4"
v-for="sticker in filtradas"
:key="sticker.id"
>

<StickerCard
:sticker="sticker"
@toggle="toggleCollected(sticker.id)"
/>

</ion-col>

</ion-row>

</ion-grid>

</ion-content>

</ion-page>

</template>

<script setup lang="ts">

import { computed, ref } from 'vue'

import {
IonPage,
IonContent,
IonSearchbar,
IonGrid,
IonRow,
IonCol,
IonBadge
} from '@ionic/vue'

import AppHeader from '@/components/AppHeader.vue'

import StickerCard from '@/components/StickerCard.vue'

import { useAlbum } from '@/composables/useAlbum'

const { album, toggleCollected } =
useAlbum()

const pesquisa = ref('')

const filtradas = computed(() => {

return album.value.filter(sticker =>

sticker.nome
.toLowerCase()
.includes(
pesquisa.value.toLowerCase()
)

)

})

const total = computed(() =>
album.value.length
)

const coletadas = computed(() =>
album.value.filter(
s => s.coletada
).length
)

</script>

<style scoped>

.stats{

display:flex;
justify-content:center;
margin-bottom:20px;

}

</style>