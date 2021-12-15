import { Router } from "express";
import pool from "../../utils/connect.js";
import moment from "moment";

const productsRouter = Router();

productsRouter.get("/", async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    res.status(200).send(result.rows);
  } catch (err) {
    res.status(500).send("Error getting products");
  }
});

productsRouter.post("/", async (req, res, next) => {
  try {
    const {
      product_name,
      product_description,
      brand,
      image_url,
      price,
      category,
    } = req.body;
    const results = await pool.query(
      "INSERT INTO products (product_name , product_description, brand, image_url, price, category) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [product_name, product_description, brand, image_url, price, category]
    );
    res.status(201).send(results.rows[0]);
  } catch (err) {
    res.status(500).send({ message: err });
  }
});

productsRouter.get("/:productId", async (req, res, next) => {
  try {
  } catch (err) {
    res.status(500).send({ message: error.message });
  }
});

productsRouter.put("/:productId", async (req, res, next) => {
  try {
  } catch (err) {
    res.status(500).send({ message: error.message });
  }
});

productsRouter.delete("/:productId", async (req, res, next) => {
  try {
  } catch (err) {
    res.status(500).send({ message: error.message });
  }
});
export default productsRouter;
