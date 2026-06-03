import { ref } from 'vue'
import { stickers, Sticker } from '../data/stickers'

const album = ref<Sticker[]>(stickers)

export function useAlbum() {

  const toggleCollected = (
    id: number
  ): void => {

    const sticker = album.value.find(
      s => s.id === id
    )

    if (sticker) {
      sticker.coletada =
        !sticker.coletada
    }
  }

  return {
    album,
    toggleCollected
  }
}