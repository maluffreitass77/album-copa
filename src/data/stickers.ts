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
foto:'public/jogadores/neymar.png',
coletada:false
},
{
id:2,
nome:'Vinicius Jr',
selecao:'Brasil',
foto:'public/jogadores/vinijr.png',
coletada:false
},
{
id:3,
nome:'Messi',
selecao:'Argentina',
foto:'/jogadores/messi.png',
coletada:false
},
{
id:4,
nome:'Di Maria',
selecao:'Argentina',
foto:'/jogadores/dimaria.png',
coletada:false
},
{
id:5,
nome:'Mbappé',
selecao:'França',
foto:'/jogadores/mbape.png',
coletada:false
},
{
id:6,
nome:'Griezmann',
selecao:'França',
foto:'/jogadores/griezmann.png',
coletada:false
}
]