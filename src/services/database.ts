import { CapacitorSQLite, SQLiteDBConnection } from "@capacitor-community/sqlite";

const dbName = "appData";
let db: SQLiteDBConnection;

export async function initDatabase() {
  try {
    db = await CapacitorSQLite.createConnection({
      database: dbName,
      version: 1,
    });

    await db.open();

    await db.execute({
      statements: `
        CREATE TABLE IF NOT EXISTS contatos (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nome TEXT NOT NULL,
          email TEXT NOT NULL,
          telefone TEXT
        );

        CREATE TABLE IF NOT EXISTS usuarios (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nome TEXT NOT NULL,
          email TEXT UNIQUE NOT NULL,
          senha TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS figurinhas (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          numero INTEGER NOT NULL,
          nome TEXT NOT NULL,
          selecao TEXT NOT NULL,
          raridade TEXT NOT NULL,
          foto TEXT,
          coletada INTEGER DEFAULT 0
        );
      `,
    });
  } catch (error) {
    console.error("Erro ao iniciar DB", error);
  }
}

/* ===========================
   CONTATOS
=========================== */

export async function addContato(
  nome: string,
  email: string,
  telefone: string
) {
  await db.run(
    `INSERT INTO contatos(nome,email,telefone)
     VALUES(?,?,?)`,
    [nome, email, telefone]
  );
}

export async function listContatos() {
  const result = await db.query(`SELECT * FROM contatos`);
  return result.values || [];
}

export async function deleteContatoById(id: number) {
  await db.run(
    `DELETE FROM contatos WHERE id=?`,
    [id]
  );
}

export async function updateContato(
  id: number,
  nome: string,
  email: string,
  telefone: string
) {
  await db.run(
    `UPDATE contatos
     SET nome=?, email=?, telefone=?
     WHERE id=?`,
    [nome, email, telefone, id]
  );
}

export async function findContatoById(id: number) {
  const result = await db.query(
    `SELECT * FROM contatos WHERE id=?`,
    [id]
  );

  return result.values || [];
}

/* ===========================
   USUÁRIOS
=========================== */

export async function cadastrarUsuario(
  nome: string,
  email: string,
  senha: string
) {
  await db.run(
    `INSERT INTO usuarios(nome,email,senha)
     VALUES(?,?,?)`,
    [nome, email, senha]
  );
}

export async function loginUsuario(
  email: string,
  senha: string
) {
  const result = await db.query(
    `SELECT * FROM usuarios
     WHERE email=? AND senha=?`,
    [email, senha]
  );

  return result.values || [];
}

export async function buscarUsuarioEmail(email: string) {
  const result = await db.query(
    `SELECT * FROM usuarios
     WHERE email=?`,
    [email]
  );

  return result.values || [];
}

/* ===========================
   FIGURINHAS
=========================== */

export async function cadastrarFigurinha(
  numero: number,
  nome: string,
  selecao: string,
  raridade: string,
  foto: string
) {
  await db.run(
    `INSERT INTO figurinhas
    (numero,nome,selecao,raridade,foto,coletada)
    VALUES(?,?,?,?,?,0)`,
    [numero, nome, selecao, raridade, foto]
  );
}

export async function listarFigurinhas() {
  const result = await db.query(
    `SELECT * FROM figurinhas ORDER BY numero`
  );

  return result.values || [];
}

export async function atualizarStatusFigurinha(
  id: number,
  coletada: number
) {
  await db.run(
    `UPDATE figurinhas
     SET coletada=?
     WHERE id=?`,
    [coletada, id]
  );
}

export async function buscarFigurinhasColetadas() {
  const result = await db.query(
    `SELECT * FROM figurinhas
     WHERE coletada=1`
  );

  return result.values || [];
}

export async function buscarFigurinhasPendentes() {
  const result = await db.query(
    `SELECT * FROM figurinhas
     WHERE coletada=0`
  );

  return result.values || [];
}

export async function pesquisarFigurinhas(texto: string) {
  const result = await db.query(
    `SELECT * FROM figurinhas
     WHERE nome LIKE ?
     OR selecao LIKE ?
     ORDER BY numero`,
    [`%${texto}%`, `%${texto}%`]
  );

  return result.values || [];
}