<template>
  <StickerCard
    v-for="item in figurinhas"
    :key="item.id"
    :sticker="item"
    @toggle="$emit('alterar', item)"
  />
</template>

<script setup lang="ts">
import StickerCard from "./StickerCard.vue"

defineProps<{
  figurinhas: any[]
}>()

defineEmits(["alterar"])
</script>