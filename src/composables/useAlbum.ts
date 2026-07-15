import { ref } from "vue";
import { getDB } from "../services/database";
import { useAchievements } from "@/composables/useAchievements";
import type { Sticker } from "../types/Sticker";

const figurinhas = ref<Sticker[]>([]);

export function useAlbum() {

  const { verificarConquistas } = useAchievements();
  async function carregar() {

    const db = getDB();

    const resultado = await db.query(`
    SELECT *
    FROM figurinhas
    ORDER BY selecao,nome
  `);

    console.log("FIGURINHAS:", resultado.values);

    figurinhas.value = (resultado.values || []) as Sticker[];

  }


  async function pesquisar(texto: string) {
    const db = getDB();

    const sql = `
      SELECT *
      FROM figurinhas
      WHERE nome LIKE ? OR selecao LIKE ?
      ORDER BY selecao,nome
    `;

    const resultado = await db.query(sql, [
      `%${texto}%`,
      `%${texto}%`
    ]);

    figurinhas.value = (resultado.values || []) as Sticker[];
  }

  async function filtro(tipo: string) {
    const db = getDB();

    let sql = `
      SELECT *
      FROM figurinhas
    `;

    if (tipo === "coletadas") {
      sql += `
        WHERE coletada=1
      `;
    }

    if (tipo === "pendentes") {
      sql += `
        WHERE coletada=0
      `;
    }

    sql += `
      ORDER BY selecao,nome
    `;

    const resultado = await db.query(sql);
    figurinhas.value = (resultado.values || []) as Sticker[];
  }
  async function marcarColetada(
    id: number,
    status: boolean
  ) {

    const db = getDB();

    await db.run(
      `
      UPDATE figurinhas

      SET coletada=?

      WHERE id=?
      `,
      [
        status ? 1 : 0,
        id
      ]
    );

    // usuário temporário
    const userId = 1;

    await verificarConquistas(userId);

    await carregar();

  }

  async function totalColetadas() {

    const db = getDB();

    const resultado = await db.query(`
      SELECT COUNT(*) as total
      FROM figurinhas
      WHERE coletada=1
    `);

    return resultado.values?.[0]?.total || 0;

  }

  async function totalAlbum() {

    const db = getDB();

    const resultado = await db.query(`
      SELECT COUNT(*) as total
      FROM figurinhas
    `);

    return resultado.values?.[0]?.total || 0;

  }

  async function percentualAlbum() {

    const coletadas = await totalColetadas();

    const total = await totalAlbum();

    if (total == 0) {

      return 0;

    }

    return Math.round((coletadas / total) * 100);

  }
  async function totalRarasColetadas() {

  const db = getDB();

  const resultado = await db.query(`
    SELECT COUNT(*) AS total
    FROM figurinhas
    WHERE coletada = 1
    AND raridade = 'rara'
  `);

  return resultado.values?.[0]?.total || 0;

}

async function totalBrilhantesColetadas() {

  const db = getDB();

  const resultado = await db.query(`
    SELECT COUNT(*) AS total
    FROM figurinhas
    WHERE coletada = 1
    AND raridade = 'brilhante'
  `);

  return resultado.values?.[0]?.total || 0;

}

async function totalPendentes() {

  const total = await totalAlbum();

  const coletadas = await totalColetadas();

  return total - coletadas;

}

  return {

  figurinhas,

  carregar,

  pesquisar,

  filtro,

  marcarColetada,

  totalColetadas,

  totalAlbum,

  percentualAlbum,

  totalRarasColetadas,

  totalBrilhantesColetadas,

  totalPendentes

};

}