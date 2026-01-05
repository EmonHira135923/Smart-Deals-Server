import express from "express";
import {
  createProductController,
  deleteProductControllerbyId,
  getProductController,
  getProductControllerbyID,
  LatestProductController,
  LatestProductControllerbyId,
  MyProductController,
  updateProductControllerbyId,
} from "../controllers/products.controller.js";

const router = express.Router();

router.post("/create-products", createProductController);
router.get("/get-products", getProductController);
router.get("/get-products/:id", getProductControllerbyID);
router.patch("/update-products/:id", updateProductControllerbyId);
router.delete("/delete-products/:id", deleteProductControllerbyId);

// latest-products routes
router.get("/latest-products", LatestProductController);
router.get("/latest-products/:id", LatestProductControllerbyId);

// Mybids products
router.get("/my-products", MyProductController);

export default router;
