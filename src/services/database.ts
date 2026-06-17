import { CapacitorSQLite, SQLiteDBConnection } from "@capacitor-community/sqlite";
 
const dbName = 'appData'
let db: SQLiteDBConnection
 
export async function initDatabase() {
    try {
        db = await CapacitorSQLite.createConnection({
            database:dbName,
            version: 1,
        })
        await db.open()
        await db.execute({
            statements: `CREATE TABLE IF NOT EXISTS contatos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL,
                email TEXT NOT NULL,
                telefone TEXT
            );`,
        })
    } catch (error) {
        console.error('Erro ao iniciar DB', error)
    }
}
 
export async function addContato(nome: string, email: string, telefone: string) {
    const query = `INSERT INTO contatos (nome, email, telefone) VALUES (?, ?, ?);`
    await db.run(query, [nome, email, telefone])
}
 
export async function listContatos() {
    const result = await db.query(`SELECT * FROM contatos;`)
    return result.values || []
}
 
 
import { CapacitorSQLite, SQLiteDBConnection } from "@capacitor-community/sqlite";
 
const dbName = 'appData'
let db: SQLiteDBConnection
 
export async function initDatabase() {
    try {
        db = await CapacitorSQLite.createConnection({
            database:dbName,
            version: 1,
        })
        await db.open()
        await db.execute({
            statements: `CREATE TABLE IF NOT EXISTS contatos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL,
                email TEXT NOT NULL,
                telefone TEXT
            );`,
        })
    } catch (error) {
        console.error('Erro ao iniciar DB', error)
    }
}
 
export async function addContato(nome: string, email: string, telefone: string) {
    const query = `INSERT INTO contatos (nome, email, telefone) VALUES (?, ?, ?);`
    await db.run(query, [nome, email, telefone])
}
 
export async function listContatos() {
    const result = await db.query(`SELECT * FROM contatos;`)
    return result.values || []
}
 
 export async function deleteContatoById(id: number){
    const query = `DELETE FROM contatos where id = ?`;
    return await db.run(query, [id]);
}

export async function updateContato(
    id: number,
    nome: string,
    email: string,
    telefone: string
){
    const query = `UPDATE contatos SET nome = ?, email = ?, telefone = ? WHERE id = ?`;
    await db.run(query, [nome, email, telefone, id]);
}

export async function findContatoById(id: number){
    const query = `SELECT * FROM contatos where id = ?`;
    const result = await db.query(query, [id]);
    return result.values || [];
}