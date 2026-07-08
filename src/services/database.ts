import {
  CapacitorSQLite,
  SQLiteConnection,
  SQLiteDBConnection
} from '@capacitor-community/sqlite';

let db: SQLiteDBConnection;

const sqlite = new SQLiteConnection(CapacitorSQLite);

export async function initDB() {

  db = await sqlite.createConnection(
    "albumcopa",
    false,
    "no-encryption",
    1,
    false
  );

  await db.open();

  // ==========================
  // TABELA USUÁRIOS
  // ==========================

  await db.execute(`
    CREATE TABLE IF NOT EXISTS usuarios(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      senha TEXT NOT NULL
    )
  `);

  // ==========================
  // TABELA FIGURINHAS
  // ==========================

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

  // ==========================
  // TABELA CONQUISTAS
  // ==========================

  await db.execute(`
    CREATE TABLE IF NOT EXISTS achievements(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      descricao TEXT NOT NULL,
      icone TEXT NOT NULL
    )
  `);

  // ==========================
  // TABELA CONQUISTAS DO USUÁRIO
  // ==========================

  await db.execute(`
    CREATE TABLE IF NOT EXISTS user_achievements(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      achievement_id INTEGER NOT NULL,
      data_desbloqueio TEXT,
      FOREIGN KEY(user_id) REFERENCES usuarios(id),
      FOREIGN KEY(achievement_id) REFERENCES achievements(id)
    )
  `);

  await inserirFigurinhas();

  await inserirAchievements();

}

async function inserirFigurinhas() {

  const resultado = await db.query(
    "SELECT COUNT(*) as total FROM figurinhas"
  );

  if (resultado.values && resultado.values[0].total > 0) {
    return;
  }

  await db.execute(`
    INSERT INTO figurinhas
    (nome,selecao,foto,raridade)
    VALUES

    -- BRASIL
    ('Neymar','Brasil','neymar.png','brilhante'),
    ('Vinicius Jr','Brasil','vinicius.png','rara'),
    ('Rodrygo','Brasil','rodrygo.png','comum'),
    ('Alisson','Brasil','alisson.png','comum'),
    ('Casemiro','Brasil','casemiro.png','rara'),

    -- ARGENTINA
    ('Messi','Argentina','messi.png','brilhante'),
    ('Di Maria','Argentina','dimaria.png','rara'),
    ('Julián Álvarez','Argentina','julian.png','comum'),
    ('Enzo Fernández','Argentina','enzo.png','comum'),
    ('Otamendi','Argentina','otamendi.png','comum'),

    -- FRANÇA
    ('Mbappe','França','mbappe.png','brilhante'),
    ('Griezmann','França','griezmann.png','rara'),
    ('Camavinga','França','camavinga.png','comum'),
    ('Giroud','França','giroud.png','comum'),
    ('Theo Hernández','França','theo.png','rara'),

    -- PORTUGAL
    ('Cristiano Ronaldo','Portugal','cr7.png','brilhante'),
    ('Bruno Fernandes','Portugal','bruno.png','rara'),
    ('Bernardo Silva','Portugal','bernardo.png','comum'),
    ('João Félix','Portugal','felix.png','comum'),
    ('Pepe','Portugal','pepe.png','comum'),

    -- ESPANHA
    ('Pedri','Espanha','pedri.png','rara'),
    ('Gavi','Espanha','gavi.png','comum'),
    ('Morata','Espanha','morata.png','comum'),
    ('Rodri','Espanha','rodri.png','rara'),
    ('Unai Simón','Espanha','unai.png','comum'),

    -- ALEMANHA
    ('Musiala','Alemanha','musiala.png','brilhante'),
    ('Kimmich','Alemanha','kimmich.png','rara'),
    ('Havertz','Alemanha','havertz.png','comum'),
    ('Gündogan','Alemanha','gundogan.png','comum'),
    ('Neuer','Alemanha','neuer.png','rara'),

    -- INGLATERRA
    ('Harry Kane','Inglaterra','kane.png','brilhante'),
    ('Bellingham','Inglaterra','bellingham.png','rara'),
    ('Saka','Inglaterra','saka.png','rara'),
    ('Foden','Inglaterra','foden.png','comum'),
    ('Pickford','Inglaterra','pickford.png','comum'),

    -- CROÁCIA
    ('Modric','Croácia','modric.png','brilhante'),
    ('Perisic','Croácia','perisic.png','rara'),
    ('Kovacic','Croácia','kovacic.png','comum'),
    ('Brozovic','Croácia','brozovic.png','comum'),
    ('Livakovic','Croácia','livakovic.png','comum'),

    -- HOLANDA
    ('Van Dijk','Holanda','vandijk.png','brilhante'),
    ('Depay','Holanda','depay.png','rara'),
    ('Gakpo','Holanda','gakpo.png','comum'),
    ('Frenkie de Jong','Holanda','dejong.png','rara'),
    ('Dumfries','Holanda','dumfries.png','comum')
  `);

}

async function inserirAchievements() {

  const resultado = await db.query(
    "SELECT COUNT(*) as total FROM achievements"
  );

  if (resultado.values && resultado.values[0].total > 0) {
    return;
  }

  await db.execute(`
    INSERT INTO achievements
    (nome,descricao,icone)
    VALUES

    ('Primeira Figurinha','Colete sua primeira figurinha','primeira.png'),

    ('Iniciante','Colete 10 figurinhas','iniciante.png'),

    ('Colecionador','Colete 25 figurinhas','colecionador.png'),

    ('Álbum em Construção','Colete 50 figurinhas','album.png'),

    ('Caçador de Raras','Colete 5 figurinhas raras','raras.png'),

    ('Especialista em Raras','Colete 15 figurinhas raras','especialista.png'),

    ('Brilho Inicial','Colete 3 figurinhas brilhantes','brilho.png'),

    ('Mestre das Brilhantes','Colete 10 figurinhas brilhantes','mestre.png'),

    ('Álbum Quase Completo','Complete 80% do álbum','80.png'),

    ('Campeão da Copa','Complete 100% do álbum','campeao.png')
  `);

}

export function getDB() {
  return db;
}