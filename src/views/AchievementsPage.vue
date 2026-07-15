<template>

  <ion-page>

    <ion-header>
      <ion-toolbar>
        <ion-title>Conquistas</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <h2>Progresso Geral</h2>

      <ion-progress-bar
        :value="progresso"
        color="success"
      />

      <p class="texto-progresso">
        {{ desbloqueadas }} de {{ achievements.length }} conquistas desbloqueadas
      </p>

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
  computed,
  onMounted
} from "vue";

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonProgressBar
} from "@ionic/vue";

import AchievementCard from "../components/AchievementCard.vue";

import {
  useAchievements
} from "../composables/useAchievements";
import { useAuth } from "../composables/useAuth";

const {
  achievements,
  carregar
} = useAchievements();
const { getCurrentUserId } = useAuth();

onMounted(async () => {
  const userId = getCurrentUserId();
  if (userId !== null) {
    await carregar(userId);
  }
});

const desbloqueadas = computed(() =>
  achievements.value.filter((a:any) => a.desbloqueada).length
);

const progresso = computed(() => {

  if (achievements.value.length === 0)
    return 0;

  return desbloqueadas.value / achievements.value.length;

});

</script>

<style scoped>

.texto-progresso{
  text-align:center;
  margin:12px 0 20px;
  font-weight:bold;
}

</style>