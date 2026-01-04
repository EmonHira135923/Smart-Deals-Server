import express from "express";
import {
  bidsCreatedController,
  bidsDeleteControllerbyId,
  bidsGetController,
  bidsGetControllerbyId,
  bidsUpdateControllerbyId,
  GetbidsusingProductID,
} from "../controllers/bids.controller.js";

const router = express.Router();

router.post("/create-bids", bidsCreatedController);
router.get("/get-bids", bidsGetController);
router.get("/get-bids/:id", bidsGetControllerbyId);
router.patch("/update-bids/:id", bidsUpdateControllerbyId);
router.delete("/delete-bids/:id", bidsDeleteControllerbyId);

// get products by bid using id
router.get("/products/by/bids/:productid", GetbidsusingProductID);

export default router;
