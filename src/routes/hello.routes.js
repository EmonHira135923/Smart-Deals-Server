import express from "express";
import { hellocontroller } from "../controllers/hello.controller.js";

const router = express.Router();

router.get("/", hellocontroller);

export default router;
