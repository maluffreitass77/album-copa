export interface Sticker {
  id: number
  nome: string
  selecao: string
  foto: string
  coletada: boolean
}

export const stickers: Sticker[] = [
{
id:1,
nome:'Neymar',
selecao:'Brasil',
foto:'https://images.unsplash.com/photo-1517466787929-bc90951d0974',
coletada:false
},
{
id:2,
nome:'Vinicius Jr',
selecao:'Brasil',
foto:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
coletada:false
},
{
id:3,
nome:'Messi',
selecao:'Argentina',
foto:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
coletada:false
},
{
id:4,
nome:'Di Maria',
selecao:'Argentina',
foto:'https://images.unsplash.com/photo-1546961329-78bef0414d7c',
coletada:false
},
{
id:5,
nome:'Mbappé',
selecao:'França',
foto:'https://images.unsplash.com/photo-1504593811423-6dd665756598',
coletada:false
},
{
id:6,
nome:'Griezmann',
selecao:'França',
foto:'https://images.unsplash.com/photo-1560250097-0b93528c311a',
coletada:false
}
]
