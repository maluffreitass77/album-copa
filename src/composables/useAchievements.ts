import { ref } from "vue";
import { getDB } from "../services/database";

export interface Achievement {
  id: number;
  nome: string;
  descricao: string;
  icone: string;
  desbloqueada?: boolean;
  data_desbloqueio?: string;
}

const achievements = ref<Achievement[]>([]);

export function useAchievements() {

  async function carregar(userId: number) {

    const db = getDB();

    const resultado = await db.query(`
      SELECT
        a.id,
        a.nome,
        a.descricao,
        a.icone,
        ua.data_desbloqueio,
        CASE
          WHEN ua.id IS NULL THEN 0
          ELSE 1
        END AS desbloqueada
      FROM achievements a
      LEFT JOIN user_achievements ua
        ON ua.achievement_id = a.id
        AND ua.user_id = ?
      ORDER BY a.id
    `, [userId]);

    achievements.value = resultado.values || [];
  }

  async function desbloquear(
    userId: number,
    achievementId: number
  ) {

    const db = getDB();

    const existe = await db.query(
      `
      SELECT id
      FROM user_achievements
      WHERE user_id = ?
      AND achievement_id = ?
      `,
      [userId, achievementId]
    );

    if (existe.values && existe.values.length > 0) {
      return;
    }

    const data = new Date().toLocaleDateString();

    await db.run(
      `
      INSERT INTO user_achievements
      (user_id, achievement_id, data_desbloqueio)
      VALUES (?, ?, ?)
      `,
      [userId, achievementId, data]
    );
  }

  async function verificarConquistas(userId: number) {

    const db = getDB();

    const totalColetadas = await db.query(`
      SELECT COUNT(*) AS total
      FROM figurinhas
      WHERE coletada = 1
    `);

    const coletadas = totalColetadas.values?.[0]?.total || 0;

    const raras = await db.query(`
      SELECT COUNT(*) AS total
      FROM figurinhas
      WHERE coletada = 1
      AND raridade = 'Rara'
    `);

    const brilhantes = await db.query(`
      SELECT COUNT(*) AS total
      FROM figurinhas
      WHERE coletada = 1
      AND raridade = 'Brilhante'
    `);

    const totalAlbum = await db.query(`
      SELECT COUNT(*) AS total
      FROM figurinhas
    `);

    const totalFigurinhas = totalAlbum.values?.[0]?.total || 0;

    const percentual =
      totalFigurinhas > 0
        ? (coletadas / totalFigurinhas) * 100
        : 0;

    if (coletadas >= 1)
      await desbloquear(userId, 1);

    if (coletadas >= 10)
      await desbloquear(userId, 2);

    if (coletadas >= 25)
      await desbloquear(userId, 3);

    if (coletadas >= 50)
      await desbloquear(userId, 4);

    if ((raras.values?.[0]?.total || 0) >= 5)
      await desbloquear(userId, 5);

    if ((raras.values?.[0]?.total || 0) >= 15)
      await desbloquear(userId, 6);

    if ((brilhantes.values?.[0]?.total || 0) >= 3)
      await desbloquear(userId, 7);

    if ((brilhantes.values?.[0]?.total || 0) >= 10)
      await desbloquear(userId, 8);

    if (percentual >= 80)
      await desbloquear(userId, 9);

    if (percentual === 100)
      await desbloquear(userId, 10);

    await carregar(userId);
  }

  return {
    achievements,
    carregar,
    verificarConquistas
  };
}