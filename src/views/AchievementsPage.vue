<template>

<ion-page>

<ion-header>

<ion-toolbar>

<ion-title>

Conquistas

</ion-title>

</ion-toolbar>

</ion-header>

<ion-content class="ion-padding">

<ion-progress-bar

:value="progresso"

/>

<br>

<AchievementCard

v-for="item in achievements"

:key="item.id"

:achievement="item"

/>

</ion-content>

</ion-page>

</template>

<script setup lang="ts">

import {

ref,

computed,

onMounted

} from "vue";

import AchievementCard from "../components/AchievementCard.vue";

import {

useAchievements

} from "../composables/useAchievements";

const{

achievements,

carregar

}=useAchievements();

const userId=1;

onMounted(async()=>{

await carregar(userId);

});

const progresso=computed(()=>{

if(achievements.value.length==0)

return 0;

const total=

achievements.value.length;

const desbloqueadas=

achievements.value.filter(

(a:any)=>a.desbloqueada

).length;

return desbloqueadas/total;

});

</script>