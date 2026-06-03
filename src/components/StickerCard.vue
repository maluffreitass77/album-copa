<template>

<ion-card>

<img
:src="sticker.foto"
class="foto"
/>

<ion-card-header>

<ion-card-title>

{{ sticker.nome }}

</ion-card-title>

</ion-card-header>

<ion-card-content>

🏳️ {{ sticker.selecao }}

<br><br>

<ion-badge
:color="
sticker.coletada
? 'success'
: 'danger'
"
>

{{ sticker.coletada
? 'Coletada'
: 'Pendente'
}}

</ion-badge>

<br><br>

<ion-button
expand="block"
@click="$emit('toggle')"
>

Trocar Status

</ion-button>

</ion-card-content>

</ion-card>

</template>

<script setup lang="ts">

import {
IonCard,
IonCardHeader,
IonCardTitle,
IonCardContent,
IonButton,
IonBadge
} from '@ionic/vue'

defineProps({
sticker:Object
})

</script>

<style scoped>

.foto{

width:100%;
height:220px;
object-fit:cover;

}

</style>