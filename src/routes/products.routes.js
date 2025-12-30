import express from "express";
import {
  createProductController,
  deleteProductControllerbyId,
  getProductController,
  getProductControllerbyID,
  updateProductControllerbyId,
} from "../controllers/products.controller.js";

const router = express.Router();

router.post("/create-products", createProductController);
router.get("/get-products", getProductController);
router.get("/get-products/:id", getProductControllerbyID);
router.patch("/update-products/:id", updateProductControllerbyId);
router.delete("/delete-products/:id", deleteProductControllerbyId);

export default router;
