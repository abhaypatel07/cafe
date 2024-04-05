import { createPool, Pool } from "mysql2/promise";

const pool: Pool = createPool({
  host: process.env.WORDPRESS_DB_HOST,
  port: Number(process.env.WORDPRESS_DB_PORT),
  user: process.env.WORDPRESS_DB_USER,
  password: process.env.WORDPRESS_DB_PASS,
  database: process.env.WORDPRESS_DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export const query = async (sql: string, values?: any[]) => {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.query(sql, values);
    return results;
  } catch (error) {
    console.error(error);
  } finally {
    connection.release();
  }
};
