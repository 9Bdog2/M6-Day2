import { Router } from "express";
import pool from "../../utils/connect.js";
import moment from "moment";

const reviewsRouter = Router();

reviewsRouter.get("/", async (req, res, next) => {
  try {
  } catch (err) {
    res.status(500).send({ message: error.message });
  }
});

reviewsRouter.post("/", async (req, res, next) => {
  try {
  } catch (err) {
    res.status(500).send({ message: error.message });
  }
});

reviewsRouter.get("/:reviewId", async (req, res, next) => {
  try {
  } catch (err) {
    res.status(500).send({ message: error.message });
  }
});

reviewsRouter.put("/:reviewId", async (req, res, next) => {
  try {
  } catch (err) {
    res.status(500).send({ message: error.message });
  }
});

reviewsRouter.delete("/:reviewId", async (req, res, next) => {
  try {
  } catch (err) {
    res.status(500).send({ message: error.message });
  }
});
export default reviewsRouter;
