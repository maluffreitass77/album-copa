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

import { computed, onMounted } from "vue"

import {
IonPage,
IonContent
} from "@ionic/vue"

import AppHeader from "@/components/AppHeader.vue"

import { useAlbum } from "@/composables/useAlbum"

const {

figurinhas,

carregar

} = useAlbum()

onMounted(async()=>{

await carregar()

})

const coletadas = computed(()=>

figurinhas.value.filter(

s=>s.coletada==1

)

)

</script>