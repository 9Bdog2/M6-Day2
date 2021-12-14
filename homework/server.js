import express from "express";
import cors from "cors";
import listEndpoints from "express-list-endpoints";
import productsRouter from "./src/services/product/index.js";
import reviewsRouter from "./src/services/reviews/index.js";

import { testDbConnection}  from "./src/utils/connect.js";

const server = express();

server.use(express.json());
server.use(cors());

server.use("/products", productsRouter);
server.use("/reviews", reviewsRouter);

server.listen(process.env.PORT || 3001, () => {
  console.log("Server is running");
  console.log(listEndpoints(server));
  testDbConnection();
});

server.on("error", (err) => console.log("Server error", err));
