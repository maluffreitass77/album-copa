<template>
  <form @submit.prevent="submit">
    <ion-item>
      <ion-input v-model="nome" label="Nome Completo" />
    </ion-item>

    <ion-item>
      <ion-input v-model="email" label="Email" />
    </ion-item>

    <ion-item>
      <ion-input v-model="senha" label="Senha" type="password" />
    </ion-item>

    <ion-button expand="block" type="submit"> Cadastrar </ion-button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { IonItem, IonInput, IonButton } from "@ionic/vue";

const emit = defineEmits(["register"]);

const nome = ref("");
const email = ref("");
const senha = ref("");

function submit() {
  emit("register", nome.value, email.value, senha.value);
    if(!nome.value || !email.value || !senha.value){
        alert("Preencha todos os campos");
    return;
    }
    if(senha.value.length < 6){

    alert("Senha muito fraca");
        return;

}
}
</script>
