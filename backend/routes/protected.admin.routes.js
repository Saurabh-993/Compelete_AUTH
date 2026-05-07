import express from "express";
import tokenVerification from "../middlewares/tokenverifier.js";
import { adminRenderer } from "../controller/protected.routes.controller.js";
import protectedJWTverifier from "../middlewares/authorizedroutes.js";

const router = express.Router();

router.get("/admin", protectedJWTverifier, adminRenderer);

export default router;
