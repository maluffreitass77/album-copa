<template>

<StickerCard

v-for="item in stickers"

:key="item.id"

:sticker="item"

@toggle="$emit('toggle',item.id)"

/>

</template>

<script setup lang="ts">

import StickerCard from './StickerCard.vue'

defineProps({
stickers:Array
})

</script>