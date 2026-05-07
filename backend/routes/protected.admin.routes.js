import express from "express";
import tokenVerification from "../middlewares/tokenverifier.js";
import { adminRenderer } from "../controller/protected.routes.controller.js";

const router = express.Router();

router.get("/admin", adminRenderer);

export default router;
