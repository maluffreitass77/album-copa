import { createConnection } from "@ionic-native/sqlite";

let db:any;


export async function initDB(){

  db = await createConnection({
    name:"albumcopa",
    location:"default"
  });

  await db.open();


  await db.execute(`
    CREATE TABLE IF NOT EXISTS usuarios(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      senha TEXT NOT NULL
    )
  `);



  await db.execute(`
    CREATE TABLE IF NOT EXISTS figurinhas(

      id INTEGER PRIMARY KEY AUTOINCREMENT,

      nome TEXT NOT NULL,

      selecao TEXT NOT NULL,

      foto TEXT,

      raridade TEXT NOT NULL,

      coletada INTEGER DEFAULT 0

    )
  `);



  await inserirFigurinhas();

}



async function inserirFigurinhas(){


const resultado =
await db.query(
"SELECT COUNT(*) as total FROM figurinhas"
);


if(resultado.values[0].total > 0)
return;



await db.execute(`

INSERT INTO figurinhas
(nome,selecao,foto,raridade)

VALUES

('Neymar','Brasil','neymar.png','brilhante'),

('Messi','Argentina','messi.png','rara'),

('Mbappe','França','mbappe.png','comum')

`);

}



export function getDB(){

 return db;

}