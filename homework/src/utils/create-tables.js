import fs from "fs-extra";
import path from "path";
import pool from "./connect.js";

const createTable = async () => {
  try {
    const filePath = path.join(process.cwd(), "./src/utils/tables.sql");
    const fileContentAsBuffer = await fs.readFile(filePath);
    const fileContentAsString = fileContentAsBuffer.toString();
    await pool.query(fileContentAsString);
    console.log("Successfully created tables");
  } catch (error) {
    console.log("ERROR; TABLES NOT CREATED", error);
  }
};

(async () => {
  await createTable();
})();
