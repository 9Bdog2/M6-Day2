import pg from "pg";
import dotenv from "dotenv";

const { Pool } = pg;

const pool = new Pool();

    dotenv.config();

export const testDbConnection = async () => {
  try {
    await pool.query("SELECT NOW()");
    console.log("Successful database connection");
  } catch (err) {
    console.log("Database connection error", err);
  }
};

export default pool;
