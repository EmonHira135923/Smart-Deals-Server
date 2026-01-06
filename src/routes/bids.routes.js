import express from "express";
import {
  bidsCreatedController,
  bidsDeleteControllerbyId,
  bidsGetController,
  bidsGetControllerbyId,
  bidsUpdateControllerbyId,
  GetbidsusingProductID,
} from "../controllers/bids.controller.js";
import { verifyFirebaseAdmin } from "../middlewares/bids.middlware.js";

const router = express.Router();

router.post("/create-bids", bidsCreatedController);
router.get("/get-bids", verifyFirebaseAdmin, bidsGetController);
router.get("/get-bids/:id", verifyFirebaseAdmin, bidsGetControllerbyId);
router.patch("/update-bids/:id", bidsUpdateControllerbyId);
router.delete(
  "/delete-bids/:id",
  verifyFirebaseAdmin,
  bidsDeleteControllerbyId
);

// get products by bid using id
router.get(
  "/products/by/bids/:productid",
  verifyFirebaseAdmin,
  GetbidsusingProductID
);

export default router;
