import express from "express";
import cors from "cors";
import hello from "../routes/hello.routes.js";
import products from "../routes/products.routes.js";
import bids from "../routes/bids.routes.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// routes registration
app.use("/", hello);
app.use("/api", products);
app.use("/api", bids);

export default app;
