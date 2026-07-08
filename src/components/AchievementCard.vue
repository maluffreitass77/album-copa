<template>
  <ion-card>

    <ion-card-header>

      <ion-card-title>

        {{ achievement.nome }}

      </ion-card-title>

    </ion-card-header>

    <ion-card-content>

      <div class="centro">

        <img
          :src="'/assets/achievements/' + achievement.icone"
          class="icone"
        />

      </div>

      <p>

        {{ achievement.descricao }}

      </p>

      <ion-badge
        color="success"
        v-if="achievement.desbloqueada"
      >

        Desbloqueada

      </ion-badge>

      <ion-badge
        color="medium"
        v-else
      >

        Bloqueada

      </ion-badge>

      <p
        v-if="achievement.desbloqueada"
      >

        {{ achievement.data_desbloqueio }}

      </p>

    </ion-card-content>

  </ion-card>
</template>

<script setup lang="ts">

defineProps({

  achievement:Object

})

</script>

<style scoped>

.centro{

display:flex;

justify-content:center;

}

.icone{

width:70px;

height:70px;

margin:10px;

}

</style>