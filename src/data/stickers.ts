export interface Sticker {
  id: number
  nome: string
  selecao: string
  foto: string
  coletada: boolean
}

export const stickers: Sticker[] = [
  {
    id: 1,
    nome: 'Neymar',
    selecao: 'Brasil',
    foto: 'https://picsum.photos/200',
    coletada: false
  },
  {
    id: 2,
    nome: 'Messi',
    selecao: 'Argentina',
    foto: 'https://picsum.photos/201',
    coletada: false
  },
  {
    id: 3,
    nome: 'Mbappé',
    selecao: 'França',
    foto: 'https://picsum.photos/202',
    coletada: false
  }
]