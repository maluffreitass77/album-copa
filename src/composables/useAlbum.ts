import { ref } from "vue";

import { getDB } from "../services/database";

import type { Sticker } from "../types/Sticker";

export function useAlbum(){


const figurinhas = ref<Sticker[]>([]);



async function carregar(){


const db=getDB();


const resultado =
await db.query(

`
SELECT *
FROM figurinhas

`

);


figurinhas.value =
resultado.values;


}



async function marcarColetada(id,status){


const db=getDB();


await db.run(

`
UPDATE figurinhas

SET coletada=?

WHERE id=?

`,

[
status ? 1:0,
id
]

);



await carregar();


}




async function pesquisar(texto){


const db=getDB();



const resultado =
await db.query(

`

SELECT *

FROM figurinhas

WHERE nome LIKE ?

OR selecao LIKE ?

`,

[
`%${texto}%`,
`%${texto}%`
]

);



figurinhas.value =
resultado.values;



}



async function filtro(tipo){


const db=getDB();



let sql =
"SELECT * FROM figurinhas";



if(tipo==="coletadas"){

sql +=
" WHERE coletada=1";

}


if(tipo==="pendentes"){

sql +=
" WHERE coletada=0";

}



const resultado =
await db.query(sql);


figurinhas.value = resultado.values as Sticker[];



}



return{

figurinhas,

carregar,

marcarColetada,

pesquisar,

filtro


}



}