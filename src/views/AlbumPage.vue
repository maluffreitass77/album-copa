<template>

<ion-page>

<ion-header>

<ion-toolbar>

<ion-title>

Álbum da Copa

</ion-title>

</ion-toolbar>

</ion-header>

<ion-content class="ion-padding">

<ion-card>

<ion-card-header>

<ion-card-title>

Meu Álbum

</ion-card-title>

</ion-card-header>

<ion-card-content>

<p>

Total de Figurinhas:

<strong>{{ total }}</strong>

</p>

<p>

Coletadas:

<strong>{{ coletadas }}</strong>

</p>

<p>

Conclusão:

<strong>{{ percentual }}%</strong>

</p>

<ion-progress-bar

:value="percentual/100"

>

</ion-progress-bar>

</ion-card-content>

</ion-card>

<ion-searchbar

v-model="texto"

placeholder="Pesquisar jogador ou seleção"

@ionInput="buscar"

/>

<ion-segment

v-model="tipo"

@ionChange="filtrar"

>

<ion-segment-button value="todas">

Todas

</ion-segment-button>

<ion-segment-button value="coletadas">

Coletadas

</ion-segment-button>

<ion-segment-button value="pendentes">

Pendentes

</ion-segment-button>

</ion-segment>

<br>

<StickerList

:figurinhas="figurinhas"

@alterar="alterarStatus"

/>

</ion-content>

</ion-page>

</template>

<script setup lang="ts">

import {

ref,

onMounted

} from "vue";

import StickerList from "../components/StickerList.vue";

import {

useAlbum

} from "../composables/useAlbum";

const{

figurinhas,

carregar,

pesquisar,

filtro,

marcarColetada,

totalColetadas,

totalAlbum,

percentualAlbum

}=useAlbum();

const texto=ref("");

const tipo=ref("todas");

const coletadas=ref(0);

const total=ref(0);

const percentual=ref(0);

async function atualizarResumo(){

coletadas.value=

await totalColetadas();

total.value=

await totalAlbum();

percentual.value=

await percentualAlbum();

}

onMounted(async()=>{

await carregar();

await atualizarResumo();

});

async function buscar(){

if(texto.value==""){

await carregar();

}else{

await pesquisar(texto.value);

}

}

async function filtrar(){

if(tipo.value=="todas"){

await carregar();

}else{

await filtro(tipo.value);

}

}

async function alterarStatus(

figurinha:any

){

await marcarColetada(

figurinha.id,

figurinha.coletada==0

);

await atualizarResumo();

}

</script>